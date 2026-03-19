import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Sparkles, Flame, Droplets } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const HorizontalPriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const prices = {
    standard_heizoel: 0.90,
    premium_heizoel: 0.93
  };

  const shopId = "1cafe1ae-a1b5-4265-b146-1bf902702645";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

  const quickSelectOptions = [1500, 2000, 5000, 10000];

  const handleLitersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(e.target.value);
  };

  const handleOrder = async () => {
    if (!canCalculate) {
      toast({
        title: "Ungültige Literzahl",
        description: `Bitte wählen Sie zwischen ${minLiters} und ${maxLiters} Litern.`,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const apiUrl = 'https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/create-order-token';
      
      const requestBody = {
        product: oilType,
        liters: litersNum,
        shop_id: shopId,
        total_amount: parseFloat(totalAmount.toFixed(2)),
        delivery_fee: 0,
        price_per_liter: parseFloat(currentPrice.toFixed(2))
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
      
      if (response.ok) {
        const data = await response.json();
        
        if (data.token) {
          const checkoutUrl = `https://checkout.ws-heizoel.de/checkout?token=${data.token}`;
          window.location.assign(checkoutUrl);
          
          toast({
            title: "Bestellung weitergeleitet",
            description: "Sie werden zum Checkout weitergeleitet.",
          });
        } else {
          throw new Error('Kein Token erhalten');
        }
      } else {
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Order error:', error);
      toast({
        title: "Fehler bei der Bestellung",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per E-Mail an info@ws-heizoel.de.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getDisplayName = (type: string) => {
    return type === 'standard_heizoel' ? 'Standard Heizöl' : 'Premium Heizöl';
  };

  return (
    <div className="w-full">
      <div className="glass-card rounded-2xl border-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
          
          {/* Column 1: Oil Type Selection */}
          <div className="p-6 space-y-4">
            <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Flame className="w-4 h-4 text-primary-500" />
              Heizöltyp wählen
            </Label>
            <div className="space-y-3">
              <button
                onClick={() => setOilType('standard_heizoel')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  oilType === 'standard_heizoel'
                    ? 'border-primary-500 bg-primary-50 shadow-soft'
                    : 'border-gray-200 bg-white/60 hover:border-primary-300 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      oilType === 'standard_heizoel' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Standard</div>
                      <div className="text-xs text-gray-500">Bewährte Qualität</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary-600">{prices.standard_heizoel.toFixed(2)}€</div>
                    <div className="text-xs text-gray-500">pro Liter</div>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => setOilType('premium_heizoel')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  oilType === 'premium_heizoel'
                    ? 'border-primary-500 bg-primary-50 shadow-soft'
                    : 'border-gray-200 bg-white/60 hover:border-primary-300 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      oilType === 'premium_heizoel' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Premium</div>
                      <div className="text-xs text-gray-500">Schwefelarm</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary-600">{prices.premium_heizoel.toFixed(2)}€</div>
                    <div className="text-xs text-gray-500">pro Liter</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Column 2: Liter Input */}
          <div className="p-6 space-y-4">
            <Label htmlFor="liters-horizontal" className="text-sm font-semibold text-gray-700">
              Liter-Anzahl
            </Label>
            <Input
              id="liters-horizontal"
              type="number"
              min={minLiters}
              max={maxLiters}
              step={50}
              value={liters}
              onChange={handleLitersChange}
              className="text-xl h-14 rounded-xl border-gray-200 bg-white/80 backdrop-blur-sm hover:border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 font-semibold text-center"
              placeholder={`z.B. ${minLiters}`}
            />
            <div className="grid grid-cols-2 gap-2">
              {quickSelectOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setLiters(option.toString())}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    litersNum === option
                      ? 'bg-primary-500 text-white shadow-soft'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {option.toLocaleString()}L
                </button>
              ))}
            </div>
            {liters !== '' && litersNum < minLiters && (
              <p className="text-xs text-red-500">Min: {minLiters.toLocaleString()}L</p>
            )}
            {liters !== '' && litersNum > maxLiters && (
              <p className="text-xs text-red-500">Max: {maxLiters.toLocaleString()}L</p>
            )}
          </div>

          {/* Column 3: Price Calculation */}
          <div className="p-6 space-y-4">
            <Label className="text-sm font-semibold text-gray-700">Preis-Kalkulation</Label>
            <div className="space-y-3 p-4 rounded-xl bg-gradient-to-br from-primary-50/50 via-white to-accent-orange-50/50 border border-primary-100/30">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Produkt:</span>
                <span className="font-semibold text-gray-800">{getDisplayName(oilType)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Menge:</span>
                <span className="font-semibold text-gray-800">{liters ? Number(liters).toLocaleString() : '—'} L</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Preis/Liter:</span>
                <span className="font-bold text-primary-600">{currentPrice.toFixed(2)}€</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
              <div className="flex justify-between items-center pt-1">
                <span className="font-semibold text-gray-700">Gesamt:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-orange-500 bg-clip-text text-transparent">
                  {canCalculate ? totalAmount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}€
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Benefits + CTA */}
          <div className="p-6 space-y-4">
            <Label className="text-sm font-semibold text-gray-700">Ihre Vorteile</Label>
            <div className="space-y-2">
              {[
                { icon: Truck, text: 'Kostenlose Lieferung', color: 'text-primary-500', bg: 'bg-primary-50' },
                { icon: Clock, text: '4-7 Werktage', color: 'text-accent-orange-500', bg: 'bg-accent-orange-50' },
                { icon: Shield, text: 'DIN-Qualität', color: 'text-primary-500', bg: 'bg-primary-50' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className={`w-6 h-6 rounded-md ${feature.bg} flex items-center justify-center`}>
                    <feature.icon size={14} className={feature.color} />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <Button 
              onClick={handleOrder}
              disabled={isLoading || !canCalculate}
              className="relative overflow-hidden w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white h-12 text-base font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-premium hover:shadow-glow-primary disabled:opacity-50 disabled:hover:scale-100 group"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Wird verarbeitet...</span>
                </div>
              ) : (
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Jetzt bestellen
                </span>
              )}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Alle Preise inkl. MwSt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPriceCalculator;
