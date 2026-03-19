
import { Button } from "@/components/ui/button";
import { Truck, Clock, Shield, Sparkles } from 'lucide-react';
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ServiceHero = () => {
  const features = [
    {
      icon: Truck,
      title: 'Kostenlose Lieferung',
      description: 'In ganz Deutschland ab 1500 Liter'
    },
    {
      icon: Clock,
      title: 'Flexible Lieferzeiten',
      description: 'Termingerechte Zustellung nach Wunsch'
    },
    {
      icon: Shield,
      title: 'TÜV-Geprüft',
      description: 'Höchste Qualitäts- und Sicherheitsstandards'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
      {/* Animated Blur Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-orange-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Deutschlandweiter Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unser <span className="gradient-text-premium">Service</span> für Sie
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Zuverlässige Lieferung, kompetente Beratung und erstklassiger Service 
            rund um Ihre Heizölversorgung in ganz Deutschland.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="premium-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-shadow">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-14">
            <Button 
              onClick={scrollToCalculatorFromOtherPage}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
            >
              Jetzt Service anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
