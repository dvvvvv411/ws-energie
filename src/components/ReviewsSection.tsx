
import { Star, Quote, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Maria H.',
      location: 'Berlin',
      rating: 5,
      text: 'Bereits zum dritten Mal bestellt und immer top zufrieden! Pünktliche Lieferung, faire Preise und sehr freundlicher Service. Kann WS Energie nur weiterempfehlen!',
      date: '2026-01-15'
    },
    {
      name: 'Thomas W.',
      location: 'Hamburg',
      rating: 5,
      text: 'Schnelle und unkomplizierte Bestellung. Der Fahrer war sehr höflich und die Qualität des Heizöls ist ausgezeichnet. Heize seit Jahren günstiger als mit Gas!',
      date: '2026-01-10'
    },
    {
      name: 'Familie S.',
      location: 'Köln',
      rating: 5,
      text: 'Hervorragender Kundenservice! Hatten eine Frage zur Lieferung und wurden sofort freundlich beraten. Die Lieferung kam pünktlich und alles lief perfekt.',
      date: '2026-01-08'
    },
    {
      name: 'Johann M.',
      location: 'Frankfurt am Main',
      rating: 5,
      text: 'Seit 5 Jahren treuer Kunde. Zuverlässig, günstig und immer gute Qualität. Besonders schätze ich die kostenlose Lieferung und die schnelle Abwicklung.',
      date: '2025-12-20'
    },
    {
      name: 'Sarah B.',
      location: 'Stuttgart',
      rating: 5,
      text: 'Online-Bestellung war super einfach, der Preisrechner sehr hilfreich. Lieferung kam wie versprochen und das Personal war sehr professionell.',
      date: '2025-12-15'
    },
    {
      name: 'Klaus F.',
      location: 'Leipzig',
      rating: 5,
      text: 'Beste Heizölpreise in der Region! Habe verschiedene Anbieter verglichen und WS Energie war nicht nur günstiger, sondern auch noch serviceorientierter.',
      date: '2025-12-05'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={`${index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'} transition-all duration-300`}
      />
    ));
  };

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('price-calculator');
    calculatorElement?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-white via-accent-orange-50/30 to-primary-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Kundenstimmen
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Das sagen unsere <span className="gradient-text-premium">Kunden</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Über 100.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service.
          </p>
          
          {/* Overall Rating Badge */}
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-glass border border-white/50">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <span className="text-2xl font-bold text-primary-600">4.9</span>
              <span className="text-gray-500">/5</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <span className="text-gray-600 font-medium">1.200+ Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative premium-card rounded-2xl p-6 lg:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-t-2xl" />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-300 transition-colors duration-300" />
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* Review Text */}
              <div className="relative mb-6">
                <p className="text-gray-700 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  "{review.text}"
                </p>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verifiziert</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
