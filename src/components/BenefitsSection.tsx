
import { Truck, Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Kostenlose Lieferung',
      description: 'Kostenlose Lieferung in Deutschland ab 1500 Liter Bestellmenge',
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Premium Qualität',
      description: 'Geprüftes Heizöl nach DIN-Norm für optimale Heizleistung',
      gradient: 'from-primary-500 to-primary-600',
      bgLight: 'bg-primary-50',
    },
    {
      icon: Clock,
      title: 'Schnelle Lieferung',
      description: 'Lieferung innerhalb von 4-7 Werktagen direkt zu Ihnen',
      gradient: 'from-accent-orange-500 to-accent-orange-600',
      bgLight: 'bg-accent-orange-50',
    },
    {
      icon: Award,
      title: 'Über 20 Jahre Erfahrung',
      description: 'Zuverlässiger Partner für Heizöl in Deutschland seit 2016',
      gradient: 'from-rose-500 to-rose-600',
      bgLight: 'bg-rose-50',
    },
    {
      icon: Users,
      title: '100.000+ Kunden',
      description: 'Tausende zufriedene Kunden vertrauen auf unsere Qualität',
      gradient: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
    }
  ];

  const stats = [
    { value: '1500L', label: 'Mindestbestellmenge' },
    { value: '4-7', label: 'Werktage Lieferzeit' },
    { value: '24/7', label: 'Kundenservice' },
    { value: '100%', label: 'Kundenzufriedenheit' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent-orange-50/25 via-white to-primary-50/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/35 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-orange-200/30 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Unsere Vorteile
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Warum <span className="gradient-text-premium">WS Energie</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Als führender Heizöl-Anbieter in Deutschland stehen wir für Qualität, Zuverlässigkeit 
            und erstklassigen Service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="group premium-card rounded-2xl p-8 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:shadow-medium transition-all duration-500`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                
                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-primary-600 font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="relative">
          {/* Gradient glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-3xl blur-lg opacity-20" />
          
          <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-2xl p-10 lg:p-14 shadow-premium overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>
            
            <div className="relative grid md:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-primary-100 font-medium">{stat.label}</div>
                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
