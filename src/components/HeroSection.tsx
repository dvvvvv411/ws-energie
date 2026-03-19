import { useState, useEffect } from 'react';
import { Truck, Clock, ShieldCheck, Users, Award, Headphones, Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import HorizontalPriceCalculator from './HorizontalPriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const uspData = [
    { 
      icon: Truck, 
      title: 'Kostenlose Lieferung', 
      subtitle: 'ab 1500 Liter',
      description: 'Ab 1500 Liter Bestellmenge liefern wir deutschlandweit kostenlos zu Ihnen.',
      color: 'primary' 
    },
    { 
      icon: Clock, 
      title: 'Schnelle Lieferung', 
      subtitle: '4-7 Werktage',
      description: 'Zuverlässige Lieferung innerhalb von 4-7 Werktagen nach Bestelleingang.',
      color: 'orange' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Premium-Qualität', 
      subtitle: 'TÜV-geprüft',
      description: 'Unser Heizöl entspricht höchsten Qualitätsstandards und ist TÜV-zertifiziert.',
      color: 'emerald' 
    },
    { 
      icon: Users, 
      title: 'Zufriedene Kunden', 
      subtitle: 'Über 100.000',
      description: 'Mehr als 100.000 Kunden vertrauen uns seit über 12 Jahren.',
      color: 'primary' 
    }
  ];

  const uspCount = uspData.length;

  // Auto-rotation for USP content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % uspCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [uspCount]);

  const trustStats = [
    { icon: Users, value: '100.000+', label: 'Kunden', color: 'primary' },
    { icon: Award, value: '12+', label: 'Jahre', color: 'orange' },
    { icon: Headphones, value: '24h', label: 'Service', color: 'primary' }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-primary-300/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-accent-orange-200/30 to-accent-orange-100/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary-100/40 to-primary-200/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content Wrapper - centers all content vertically */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-28 lg:pt-40 pb-8 lg:pb-12">
        
        {/* ============ UPPER SECTION ============ */}
        <div className="container mx-auto px-4 pb-6 lg:pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Badge, Headline, Subheadline */}
            <div className="space-y-6 animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-orange-50 to-accent-orange-100/80 text-accent-orange-700 rounded-full text-sm font-semibold border border-accent-orange-200/50 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Heizöl-Experte seit über 12 Jahren</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Heizöl günstig
                <br />
                <span className="gradient-text-premium">bestellen</span>
                <br />
                <span className="text-gray-700">Deutschlandweit</span>
              </h1>
              
              <div className="space-y-3 max-w-2xl">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                  Vertrauen Sie auf über 12 Jahre Erfahrung
                </p>
                <div className="flex flex-col gap-2 text-base lg:text-lg text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Heizöl <span className="text-primary-600 font-bold">ab nur 90 Cent pro Liter</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Kostenlose Lieferung ab 1.500 Liter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Deutschlandweit in 4-7 Werktagen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: USP Carousel + Trust Stats */}
            <div className="space-y-6">
              {/* USP Card - Static with Content Animation */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  {/* Decorative Header - STATIC */}
                  <p className="text-xs text-gray-500 mb-5 font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                    <span className="w-8 h-px bg-gradient-to-r from-primary-400 to-accent-orange-400" />
                    Unser Versprechen
                    <span className="w-8 h-px bg-gradient-to-r from-accent-orange-400 to-primary-400" />
                  </p>
                  
                  {/* Animated Content Container */}
                  <div className="relative min-h-[180px]">
                    {uspData.map((usp, index) => {
                      const colorClasses = {
                        primary: {
                          gradient: 'from-primary-500 to-primary-600',
                          text: 'from-primary-600 to-primary-500',
                          iconShadow: 'shadow-primary-100/60'
                        },
                        orange: {
                          gradient: 'from-accent-orange-500 to-accent-orange-600',
                          text: 'from-accent-orange-600 to-accent-orange-500',
                          iconShadow: 'shadow-accent-orange-100/60'
                        },
                        emerald: {
                          gradient: 'from-emerald-500 to-emerald-600',
                          text: 'from-emerald-600 to-emerald-500',
                          iconShadow: 'shadow-emerald-100/60'
                        }
                      };
                      const colors = colorClasses[usp.color as keyof typeof colorClasses];
                      const isActive = current === index;
                      
                      return (
                        <div 
                          key={index}
                          className={cn(
                            "absolute inset-0 transition-all duration-500 ease-in-out",
                            isActive 
                              ? "opacity-100 translate-y-0" 
                              : "opacity-0 translate-y-4 pointer-events-none"
                          )}
                        >
                          {/* Icon */}
                          <div className="flex justify-center mb-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-md ${colors.iconShadow}`}>
                              <usp.icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          
                          {/* Title + Subtitle */}
                          <div className="text-center mb-2">
                            <div className="text-lg font-bold text-gray-800">{usp.title}</div>
                            <div className={`text-base font-semibold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                              {usp.subtitle}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm text-gray-500 text-center leading-relaxed">
                            {usp.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
          {/* Pagination Dots - Modern & Subtle */}
          <div className="flex justify-center gap-1 mt-3">
            {uspData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "carousel-dot rounded-full transition-all duration-300",
                  current === index 
                    ? "w-5 h-1.5 bg-primary-500/80" 
                    : "w-1.5 h-1.5 bg-gray-300/50 hover:bg-gray-400/60"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
              </div>

              {/* Trust Statistics - Clean Design */}
              <div 
                className="animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <p className="text-xs text-gray-500 mb-5 font-semibold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-px bg-gradient-to-r from-primary-400 to-accent-orange-400" />
                    Vertrauen Sie auf Erfahrung
                    <span className="w-8 h-px bg-gradient-to-r from-accent-orange-400 to-primary-400" />
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {trustStats.map((stat, index) => {
                      const isOrange = stat.color === 'orange';
                      
                      return (
                        <div 
                          key={index} 
                          className="group/stat text-center"
                        >
                          {/* Icon with Glow */}
                          <div className={`relative w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover/stat:scale-110 ${
                            isOrange 
                              ? 'bg-gradient-to-br from-accent-orange-500 to-accent-orange-600 shadow-lg shadow-accent-orange-200/50' 
                              : 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-200/50'
                          }`}>
                            {/* Animated Ring */}
                            <div className={`absolute inset-0 rounded-2xl animate-pulse opacity-30 ${
                              isOrange ? 'bg-accent-orange-400' : 'bg-primary-400'
                            }`} />
                            <stat.icon className="w-6 h-6 text-white relative z-10" />
                          </div>
                          
                          {/* Value with Gradient */}
                          <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${
                            isOrange 
                              ? 'from-accent-orange-600 to-accent-orange-500' 
                              : 'from-primary-600 to-primary-500'
                          } bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          
                          {/* Label */}
                          <div className="text-sm text-gray-500 font-medium mt-1">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ LOWER SECTION - Price Calculator ============ */}
        <div id="price-calculator" className="container mx-auto px-4 pt-6 lg:pt-8">
          {/* Desktop: Horizontal Calculator */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HorizontalPriceCalculator />
          </div>

          {/* Mobile: Vertical Calculator */}
          <div className="lg:hidden">
            <MobilePriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
