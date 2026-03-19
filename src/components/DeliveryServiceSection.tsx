
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Map, Clock, Bell, Sparkles, CheckCircle } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const DeliveryServiceSection = () => {
  const deliveryFeatures = [
    {
      icon: Truck,
      title: 'Kostenlose Lieferung',
      description: 'In ganz Deutschland ab 1500 Liter Mindestbestellmenge',
      details: 'Keine versteckten Kosten - der angezeigte Preis ist der Endpreis'
    },
    {
      icon: Clock,
      title: 'Flexible Lieferzeiten',
      description: 'Lieferung Mo-Fr 7:00-17:00 Uhr, Sa 8:00-12:00 Uhr',
      details: 'Wunschtermin nach telefonischer Absprache möglich'
    },
    {
      icon: Map,
      title: 'Liefergebiet Deutschland',
      description: 'Flächendeckende Belieferung in ganz Deutschland',
      details: 'Optimierte Routen für schnelle und umweltschonende Lieferung'
    },
    {
      icon: Bell,
      title: 'Lieferankündigung',
      description: 'SMS oder Anruf 30-60 Minuten vor Lieferung',
      details: 'Sie sind immer über den Lieferstatus informiert'
    }
  ];

  const tankwagenFeatures = [
    'Moderne, TÜV-geprüfte Tankwagen',
    'Geeichte Zählwerke für exakte Mengenerfassung',
    'Lange Schläuche bis zu 50 Meter',
    'Umweltschutz durch Tropfschutz und Auffangwannen',
    'Geschulte und zertifizierte Fahrer'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-accent-orange-50/30 to-primary-50/20 relative overflow-hidden">
      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Zuverlässige Lieferung</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unser <span className="gradient-text-premium">Lieferservice</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Zuverlässige und termingerechte Heizöllieferung direkt zu Ihnen nach Hause. 
            Kostenlos in ganz Deutschland ab 1500 Liter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="premium-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{feature.description}</p>
                <p className="text-xs text-gray-500">{feature.details}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="premium-card rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tankwagen-Ausstattung</h3>
            </div>
            <ul className="space-y-4">
              {tankwagenFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-orange-400 to-accent-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Map className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Liefergebiet & Zeiten</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-100">
                <h4 className="font-semibold mb-2 text-gray-900">Liefergebiet</h4>
                <p className="text-sm text-gray-600">
                  Ganz Deutschland - von München bis Nürnberg, von Augsburg bis Regensburg
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-100">
                <h4 className="font-semibold mb-2 text-gray-900">Lieferzeiten</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Montag - Freitag: 7:00 - 17:00 Uhr</p>
                  <p>Samstag: 8:00 - 12:00 Uhr</p>
                  <p>Sonntag: Nach Vereinbarung</p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-accent-orange-50 to-accent-orange-100/50 rounded-xl border border-accent-orange-200">
                <h4 className="font-semibold mb-2 text-accent-orange-800">Mindestbestellmenge</h4>
                <p className="text-sm text-accent-orange-700">
                  <strong>1500 Liter</strong> für kostenlose Lieferung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button 
            onClick={scrollToCalculatorFromOtherPage}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
          >
            Lieferung beauftragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServiceSection;
