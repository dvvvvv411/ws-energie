import { Building, Users, Award, Clock } from 'lucide-react';
import shopHeaderImage from '@/assets/shop-header.jpg';

const CompanySection = () => {
  const stats = [
    {
      icon: Building,
      number: '2021',
      label: 'Gegründet',
      description: 'Über 4 Jahre Erfahrung'
    },
    {
      icon: Users,
      number: '100.000+',
      label: 'Kunden',
      description: 'Zufriedene Heizöl-Kunden'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Bewertung',
      description: 'Ausgezeichneter Service'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Service',
      description: 'Immer für Sie da'
    }
  ];

  const values = [
    {
      number: '01',
      title: 'Qualität',
      description: 'Wir liefern ausschließlich geprüftes Premium-Heizöl nach DIN-Norm für optimale Heizleistung und Effizienz.'
    },
    {
      number: '02',
      title: 'Vertrauen',
      description: 'Zuverlässigkeit und Transparenz sind die Grundpfeiler unseres Geschäfts. Darauf können Sie sich verlassen.'
    },
    {
      number: '03',
      title: 'Service',
      description: 'Persönlicher Kundenservice und individuelle Beratung stehen bei uns an erster Stelle.'
    }
  ];

  return (
    <section id="ueber-uns" className="pt-12 pb-24 bg-gradient-to-br from-primary-50/30 via-white to-accent-orange-50/25 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-orange-200/25 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <Building className="w-4 h-4" />
            Über uns
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Über <span className="gradient-text-premium">Antpire</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ihr zuverlässiger Partner für Heizöl in Deutschland mit über 4 Jahren Erfahrung. 
            Wir stehen für Qualität, Service und faire Preise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Company Story */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Unsere <span className="text-accent-orange-600">Geschichte</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Seit der Gründung im Jahr <span className="font-semibold text-primary-600">2021</span> haben wir uns zu einem der führenden Heizöl-Anbieter in Deutschland entwickelt. Was als Unternehmen in Waghäusel begann, ist heute ein zuverlässiger Partner für über <span className="font-semibold text-accent-orange-600">100.000 Kunden</span> deutschlandweit. Unser Erfolgsrezept: <span className="font-semibold text-gray-900">Erstklassige Qualität</span> zu fairen Preisen, <span className="font-semibold text-gray-900">persönlicher Service</span> und ein erfahrenes Team mit über <span className="font-semibold text-primary-600">4 Jahren Erfahrung</span>. Als bundesweit agierendes Unternehmen kennen wir die Bedürfnisse unserer Kunden genau und leisten einen wichtigen Beitrag zur Energieversorgung in ganz Deutschland.
            </p>
          </div>

          {/* Company Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={shopHeaderImage} 
              alt="Antpire GmbH Unternehmen"
              className="max-w-[92%] h-auto object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group premium-card rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mt-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Unsere <span className="gradient-text-premium">Werte</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div key={index} className="group relative pt-4">
                <span className="absolute -top-6 -left-2 text-8xl lg:text-9xl font-bold text-gray-100 select-none pointer-events-none group-hover:text-primary-100 transition-colors duration-500">
                  {value.number}
                </span>
                
                <div className="relative pl-6 border-l-4 border-gray-200 group-hover:border-primary-500 transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight uppercase group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
