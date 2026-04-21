
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const prices = {
    standard_heizoel: 1.30,
    premium_heizoel: 1.33
  };

  const brandingId = "9290eb97-73be-4c7b-9669-4ba2aad1a986";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

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
      const apiUrl = 'https://jpielhyfzzznicvcanci.supabase.co/functions/v1/create-checkout-session';

      const productName = `${litersNum.toLocaleString('de-DE')} Liter ${
        oilType === 'standard_heizoel' ? 'Standard' : 'Premium'
      } Heizöl`;

      const requestBody = {
        brandingId,
        products: [
          { name: productName, gross_price: parseFloat(totalAmount.toFixed(2)), quantity: 1 }
        ],
        shipping_cost: 0
      };

      console.log('Sending order request to:', apiUrl);
      console.log('Request body:', requestBody);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('API Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response data:', data);

        if (data.checkout_token) {
          const checkoutUrl = `https://checkout.antpiregmbh.de/?token=${data.checkout_token}`;
          console.log('Redirecting to:', checkoutUrl);
          window.location.assign(checkoutUrl);

          toast({
            title: "Bestellung weitergeleitet",
            description: "Sie werden zum Checkout weitergeleitet.",
          });
        } else {
          throw new Error('Kein Token erhalten');
        }
      } else {
        const errorData = await response.text();
        console.error('API Error response:', errorData);
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Order error:', error);
      toast({
        title: "Fehler bei der Bestellung",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per E-Mail an info@antpiregmbh.de.",
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
    <Card className="w-full max-w-md mx-auto glass-card border-0 rounded-2xl overflow-hidden">
      <CardHeader className="text-center pb-4 bg-gradient-to-br from-white/80 to-white/40">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-soft">
            <Calculator className="w-5 h-5 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Preisrechner
        </CardTitle>
        <p className="text-gray-600 text-sm">Berechnen Sie Ihren Heizölpreis</p>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Oil Type Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-gray-700">Heizöltyp wählen</Label>
          <Select value={oilType} onValueChange={(value: 'standard_heizoel' | 'premium_heizoel') => setOilType(value)}>
            <SelectTrigger className="h-14 text-base rounded-xl border-gray-200 bg-white/80 backdrop-blur-sm hover:border-primary-300 focus:border-primary-500 transition-all duration-300">
              <SelectValue placeholder="Heizöltyp auswählen" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-xl border-white/50 rounded-xl shadow-premium">
              <SelectItem value="standard_heizoel" className="rounded-lg">
                <div className="flex justify-between items-center w-full py-1">
                  <span className="font-medium">Standard Heizöl</span>
                  <span className="font-bold text-accent-orange-600 ml-4">{prices.standard_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
              <SelectItem value="premium_heizoel" className="rounded-lg">
                <div className="flex justify-between items-center w-full py-1">
                  <span className="font-medium">Premium Heizöl</span>
                  <span className="font-bold text-accent-orange-600 ml-4">{prices.premium_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liter Input */}
        <div className="space-y-3">
          <Label htmlFor="liters" className="text-sm font-semibold text-gray-700">
            Liter-Anzahl ({minLiters.toLocaleString()} - {maxLiters.toLocaleString()}L)
          </Label>
          <Input
            id="liters"
            type="number"
            min={minLiters}
            max={maxLiters}
            step={50}
            value={liters}
            onChange={handleLitersChange}
            className="text-lg h-14 rounded-xl border-gray-200 bg-white/80 backdrop-blur-sm hover:border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
            placeholder={`z.B. ${minLiters}`}
          />
          {liters !== '' && litersNum < minLiters && (
            <p className="text-sm text-red-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              Mindestbestellmenge: {minLiters.toLocaleString()} Liter
            </p>
          )}
          {liters !== '' && litersNum > maxLiters && (
            <p className="text-sm text-red-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              Maximalmenge: {maxLiters.toLocaleString()} Liter
            </p>
          )}
        </div>

        {/* Live Price Display */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-orange-50 opacity-80" />
          <div className="relative p-5 space-y-3 border border-primary-100/50 rounded-2xl">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Produkt:</span>
              <span className="font-semibold text-gray-800">{getDisplayName(oilType)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Menge:</span>
              <span className="font-semibold text-gray-800">{liters ? Number(liters).toLocaleString() : '—'} Liter</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Preis pro Liter:</span>
              <span className="font-bold text-accent-orange-600">{currentPrice.toFixed(2)}€</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent my-2" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Gesamtpreis:</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-orange-600 to-accent-orange-500 bg-clip-text text-transparent">
                {canCalculate ? totalAmount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}€
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-2">
          {[
            { icon: Truck, text: 'Kostenlose Lieferung', color: 'text-accent-orange-500', bg: 'bg-accent-orange-50' },
            { icon: Clock, text: 'Lieferung innerhalb 4-7 Werktagen', color: 'text-primary-600', bg: 'bg-primary-50' },
            { icon: Shield, text: 'Geprüfte Qualität nach DIN-Norm', color: 'text-accent-orange-500', bg: 'bg-accent-orange-50' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/60 transition-all duration-300 hover:bg-white/80">
              <div className={`w-8 h-8 rounded-lg ${feature.bg} flex items-center justify-center`}>
                <feature.icon size={16} className={feature.color} />
              </div>
              <span className="text-sm text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <Button 
          onClick={handleOrder}
          disabled={isLoading || !canCalculate}
          className="relative overflow-hidden w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white h-14 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-premium hover:shadow-glow-primary disabled:opacity-50 disabled:hover:scale-100 group"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Wird verarbeitet...</span>
            </div>
          ) : (
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Jetzt bestellen
            </span>
          )}
          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Alle Preise inkl. MwSt. • Mindestbestellung: {minLiters.toLocaleString()}L • Maximum: {maxLiters.toLocaleString()}L
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
