
import { Button } from "@/components/ui/button";
import { Shield, Truck, Bell, Clock, Sparkles, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const QualityAssuranceSection = () => {
  const qualityFeatures = [
    {
      icon: Truck,
      title: 'TÜV-geprüfte Tankwagen',
      description: 'Alle unsere Fahrzeuge werden regelmäßig vom TÜV geprüft',
      details: [
        'Jährliche TÜV-Hauptuntersuchung',
        'Monatliche Sicherheitschecks',
        'Zertifizierte Tankwagen-Ausrüstung',
        'Umweltschutz-Zertifizierung'
      ]
    },
    {
      icon: Shield,
      title: 'Qualitätskontrolle',
      description: 'Lückenlose Qualitätskontrolle vom Einkauf bis zur Lieferung',
      details: [
        'Laboranalyse jeder Heizölcharge',
        'DIN EN 590 Konformitätsprüfung',
        'Kontinuierliche Qualitätsüberwachung',
        'Rückverfolgbarkeit aller Lieferungen'
      ]
    },
    {
      icon: Bell,
      title: 'Lieferprotokoll',
      description: 'Detaillierte Dokumentation jeder Lieferung',
      details: [
        'Digitales Lieferprotokoll vor Ort',
        'Mengenangabe und Qualitätsnachweis',
        'Unterschrift per Tablet',
        'Sofortiger E-Mail-Versand'
      ]
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Zertifiziertes Qualitätsmanagementsystem für höchste Standards',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Truck,
      title: 'TÜV-Zertifiziert',
      description: 'Alle Fahrzeuge und Anlagen sind TÜV-geprüft und zertifiziert',
      gradient: 'from-accent-orange-400 to-accent-orange-500'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Rund um die Uhr erreichbarer Kundenservice und Notfall-Hotline',
      gradient: 'from-primary-600 to-accent-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent-orange-50/25 via-white to-primary-50/20 relative overflow-hidden">
      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Geprüfte Qualität</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text-premium">Qualitätssicherung</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Höchste Qualitäts- und Sicherheitsstandards bei jeder Lieferung. 
            Vertrauen Sie auf unsere geprüften Prozesse und zertifizierten Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="premium-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={index}
                className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="premium-card rounded-2xl p-10 max-w-4xl mx-auto bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Qualitätsgarantie</h3>
            </div>
            <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
              Wir garantieren Ihnen höchste Qualität bei jeder Lieferung. 
              Bei Problemen sorgen wir umgehend für eine Lösung.
            </p>
            <Link to="/produkte">
              <Button className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto font-semibold">
                Qualitätszertifikate ansehen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
