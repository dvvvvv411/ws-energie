
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Droplets, Shield, TreePine } from 'lucide-react';

const EnvironmentalAspects = () => {
  const environmentalFeatures = [
    {
      icon: Leaf,
      title: 'Schwefelarm',
      description: 'Unter 50 mg/kg Schwefelgehalt für saubere Verbrennung',
      impact: 'Reduzierte SO₂-Emissionen'
    },
    {
      icon: Droplets,
      title: 'Optimierte Verbrennung',
      description: 'Gleichmäßige Verbrennung durch hochwertige Raffination',
      impact: 'Weniger Ruß und Partikel'
    },
    {
      icon: Recycle,
      title: 'Nachhaltige Produktion',
      description: 'Umweltschonende Herstellungsverfahren',
      impact: 'Geringer CO₂-Fußabdruck'
    },
    {
      icon: Shield,
      title: 'Gewässerschutz',
      description: 'Biologisch abbaubare Additive in Premium-Qualität',
      impact: 'Umweltverträglich'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50/20 via-white to-accent-orange-50/30 relative overflow-hidden">
      {/* Blur orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-orange-200/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100/50">
            <TreePine className="w-4 h-4" />
            <span>Nachhaltigkeit</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Umwelt & <span className="gradient-text-premium">Nachhaltigkeit</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Unser Beitrag zum Umweltschutz durch hochwertige, schwefelarme Heizöl-Qualitäten 
            und nachhaltige Produktionsverfahren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {environmentalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="premium-card text-center rounded-2xl border-0 group">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-50 to-accent-orange-50 text-primary-700 border border-primary-100/50">
                    {feature.impact}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="premium-card rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-orange-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-600" />
                </div>
                Emissionswerte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <span className="font-medium text-gray-800">CO₂-Emissionen</span>
                  <span className="text-primary-600 font-bold">-15% vs. Standard</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <span className="font-medium text-gray-800">Schwefel-Emissionen</span>
                  <span className="text-primary-600 font-bold">{"< 50 mg/kg"}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <span className="font-medium text-gray-800">Partikel-Emissionen</span>
                  <span className="text-primary-600 font-bold">Minimal</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange-100 to-primary-100 flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-primary-600" />
                </div>
                Nachhaltigkeitsmaßnahmen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-accent-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">Optimierte Transportrouten zur CO₂-Reduktion</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-accent-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">Verwendung erneuerbarer Energien in der Produktion</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-accent-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">Recycling und Wiederverwertung von Verpackungen</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-accent-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700">Kontinuierliche Verbesserung der Umweltbilanz</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalAspects;
