
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const MobilePriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  

  const prices = {
    standard_heizoel: 0.90,
    premium_heizoel: 0.93
  };

  const products = [
    {
      id: 'standard_heizoel' as const,
      name: 'Standard Heizöl',
      price: prices.standard_heizoel,
      description: 'Bewährte Qualität',
      features: ['DIN-konform', 'Kostengünstig']
    },
    {
      id: 'premium_heizoel' as const,
      name: 'Premium Heizöl',
      price: prices.premium_heizoel,
      description: 'Additivierte Qualität',
      features: ['Korrosionsschutz', 'Längere Lagerfähigkeit']
    }
  ];

  const shopId = "1cafe1ae-a1b5-4265-b146-1bf902702645";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

  const handleLitersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(e.target.value);
  };

  const adjustLiters = (amount: number) => {
    const newValue = litersNum + amount;
    if (newValue >= minLiters && newValue <= maxLiters) {
      setLiters(newValue.toString());
    }
  };

  const selectProduct = (productId: typeof oilType) => {
    setOilType(productId);
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
        
        if (data.token) {
          const checkoutUrl = `https://checkout.ws-heizoel.de/checkout?token=${data.token}`;
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
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentProduct = products.find(p => p.id === oilType)!;

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="glass-card border-0 rounded-2xl overflow-hidden">
        <CardHeader className="text-center pb-4 bg-gradient-to-br from-white/80 to-white/40">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-soft">
              <Calculator className="w-5 h-5 text-white" />
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-800">
            Preisrechner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-5">
          {/* Product Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-700">Heizöltyp wählen</Label>
            
            <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    "relative p-3 border-2 rounded-xl cursor-pointer transition-all duration-300",
                    oilType === product.id 
                      ? "border-primary-500 bg-gradient-to-br from-primary-50 to-white shadow-premium" 
                      : "border-gray-200 bg-white/80 hover:border-primary-300 hover:shadow-soft"
                  )}
                  onClick={() => selectProduct(product.id)}
                >
                  {oilType === product.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <h4 className="font-semibold text-sm mb-1 text-gray-800">{product.name}</h4>
                    <p className="text-lg font-bold text-accent-orange-600 mb-1">
                      {product.price.toFixed(2)}€/L
                    </p>
                    <p className="text-xs text-gray-500">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liter Input with Touch Controls */}
          <div className="space-y-3">
            <Label htmlFor="liters" className="text-sm font-semibold text-gray-700">
              Liter-Anzahl ({minLiters.toLocaleString()} - {maxLiters.toLocaleString()}L)
            </Label>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 rounded-xl border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                onClick={() => adjustLiters(-100)}
                disabled={litersNum <= minLiters}
              >
                <ChevronLeft size={20} />
              </Button>
              <Input
                id="liters"
                type="number"
                min={minLiters}
                max={maxLiters}
                step={50}
                value={liters}
                onChange={handleLitersChange}
                className="text-center text-lg h-12 flex-1 rounded-xl border-gray-200 bg-white/80 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                inputMode="numeric"
              />
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 rounded-xl border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                onClick={() => adjustLiters(100)}
                disabled={litersNum >= maxLiters}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
            {liters !== '' && litersNum < minLiters && (
              <p className="text-sm text-red-500 text-center flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                Mindestbestellmenge: {minLiters.toLocaleString()} Liter
              </p>
            )}
            {liters !== '' && litersNum > maxLiters && (
              <p className="text-sm text-red-500 text-center flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                Maximalmenge: {maxLiters.toLocaleString()} Liter
              </p>
            )}
            <div className="flex justify-center gap-2">
              {[1500, 2000, 5000, 10000].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  size="sm"
                  className={cn(
                    "text-xs px-3 py-1.5 h-8 rounded-lg transition-all duration-300",
                    litersNum === amount 
                      ? "border-primary-500 bg-primary-50 text-primary-700" 
                      : "border-gray-200 hover:border-primary-300 hover:bg-primary-50"
                  )}
                  onClick={() => setLiters(amount.toString())}
                >
                  {amount.toLocaleString()}L
                </Button>
              ))}
            </div>
          </div>

          {/* Price Display */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-orange-50 opacity-80" />
            <div className="relative p-4 space-y-2 border border-primary-100/50 rounded-xl">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Produkt:</span>
                <span className="font-semibold text-gray-800">{currentProduct.name}</span>
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
                <span className="font-semibold text-gray-700">Gesamtpreis:</span>
                <span className="text-xl font-bold bg-gradient-to-r from-accent-orange-600 to-accent-orange-500 bg-clip-text text-transparent">
                  {canCalculate ? totalAmount.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}€
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-2">
            {[
              { icon: Truck, text: 'Kostenlose Lieferung', color: 'text-accent-orange-500', bg: 'bg-accent-orange-50' },
              { icon: Clock, text: 'Lieferung in 4-7 Werktagen', color: 'text-primary-600', bg: 'bg-primary-50' },
              { icon: Shield, text: 'Geprüfte DIN-Qualität', color: 'text-accent-orange-500', bg: 'bg-accent-orange-50' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/60">
                <div className={`w-7 h-7 rounded-lg ${feature.bg} flex items-center justify-center`}>
                  <feature.icon size={14} className={feature.color} />
                </div>
                <span className="text-sm text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Order Button */}
          <Button 
            onClick={handleOrder}
            disabled={isLoading || !canCalculate}
            className="relative overflow-hidden w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white h-14 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl shadow-premium disabled:opacity-50 disabled:hover:scale-100 group"
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Wird verarbeitet...</span>
              </div>
            ) : (
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {canCalculate ? `Jetzt bestellen - ${totalAmount.toLocaleString('de-DE', { minimumFractionDigits: 2 })}€` : 'Jetzt bestellen'}
              </span>
            )}
            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobilePriceCalculator;
