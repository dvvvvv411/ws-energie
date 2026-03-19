
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, Truck, Map, Sparkles, CheckCircle } from 'lucide-react';

const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      icon: Map,
      title: 'Tankinhaltsmessung',
      description: 'Professionelle Messung Ihres aktuellen Heizölbestands',
      features: [
        'Genaue Füllstandsmessung vor Ort',
        'Berechnung der benötigten Heizölmenge',
        'Kostenlose Beratung zur optimalen Bestellmenge',
        'Dokumentation für Ihre Unterlagen'
      ],
      price: 'Kostenlos bei Bestellung',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Clock,
      title: 'Notfalllieferung',
      description: '24/7 Service für dringende Heizöllieferungen',
      features: [
        'Express-Lieferung innerhalb von 4 Stunden',
        'Auch an Wochenenden und Feiertagen',
        'Mindestmenge bereits ab 300 Liter',
        'Telefonische Hotline rund um die Uhr'
      ],
      price: 'Aufpreis 15€/100L',
      gradient: 'from-accent-orange-400 to-accent-orange-500'
    },
    {
      icon: Bell,
      title: 'Preisalarm-Service',
      description: 'Automatische Benachrichtigung bei günstigen Preisen',
      features: [
        'Individuelle Preisschwelle festlegen',
        'SMS oder E-Mail Benachrichtigung',
        'Marktanalyse und Preistrends',
        'Optimaler Kaufzeitpunkt-Empfehlung'
      ],
      price: 'Kostenloser Service',
      gradient: 'from-primary-600 to-accent-orange-500'
    },
    {
      icon: Truck,
      title: 'Sammelbestellungen',
      description: 'Gemeinsame Bestellungen für bessere Preise',
      features: [
        'Organisation von Nachbarschaftsbestellungen',
        'Bis zu 10% Rabatt bei Sammelbestellungen',
        'Koordination der Liefertermine',
        'Abrechnung nach individuellen Mengen'
      ],
      price: 'Rabatt bis 10%',
      gradient: 'from-primary-500 to-primary-700'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50/20 via-white to-accent-orange-50/30 relative overflow-hidden">
      {/* Animated Blur Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange-50 border border-accent-orange-100 rounded-full text-accent-orange-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Mehr als nur Lieferung</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zusätzliche <span className="gradient-text-premium">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mehr als nur Heizöllieferung - wir bieten Ihnen umfassende Serviceleistungen 
            für Ihre optimale Heizölversorgung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="premium-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-orange-50 rounded-full text-sm font-semibold text-primary-700 border border-primary-100">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
