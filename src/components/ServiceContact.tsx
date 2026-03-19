
import { Button } from "@/components/ui/button";
import { Bell, Map, Sparkles, Mail, MapPin } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ServiceContact = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: 'Online-Service',
      info: 'info@ws-heizoel.de',
      description: 'E-Mail-Anfragen und Online-Bestellung',
      availability: 'Antwort innerhalb 2 Stunden',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: MapPin,
      title: 'Vor-Ort-Beratung',
      info: 'Kostenloser Hausbesuch',
      description: 'Persönliche Beratung bei Ihnen zu Hause',
      availability: 'Nach Terminvereinbarung',
      gradient: 'from-accent-orange-400 to-accent-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-50/20 to-accent-orange-50/25 relative overflow-hidden">
      {/* Animated Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Wir sind für Sie da</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service & <span className="gradient-text-premium">Kontakt</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Wir sind für Sie da! Kontaktieren Sie uns für Beratung, Bestellung oder bei Fragen 
            rund um unsere Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={index} 
                className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="font-semibold text-primary-600 mb-3 text-lg">{option.info}</p>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-orange-50 rounded-full text-xs font-medium text-primary-700 border border-primary-100">
                  {option.availability}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToCalculatorFromOtherPage}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
          >
            Jetzt bestellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;
