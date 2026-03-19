
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Beaker } from 'lucide-react';

const TechnicalSpecs = () => {
  const standardSpecs = [
    { property: 'Dichte bei 15°C', value: '0,82 - 0,86 kg/l', norm: 'DIN EN ISO 3675' },
    { property: 'Kinematische Viskosität bei 20°C', value: '< 6,0 mm²/s', norm: 'DIN EN ISO 3104' },
    { property: 'Flammpunkt', value: '> 55°C', norm: 'DIN EN ISO 2719' },
    { property: 'Schwefelgehalt', value: '< 50 mg/kg', norm: 'DIN EN ISO 20846' },
    { property: 'Wassergehalt', value: '< 200 mg/kg', norm: 'DIN EN ISO 12937' },
    { property: 'Sedimentgehalt', value: '< 24 mg/kg', norm: 'DIN EN 12662' },
    { property: 'Asche', value: '< 0,01 %', norm: 'DIN EN ISO 3987' },
    { property: 'Brennwert', value: '≥ 42,6 MJ/kg', norm: 'DIN 51900' }
  ];

  const premiumSpecs = [
    { property: 'Dichte bei 15°C', value: '0,82 - 0,86 kg/l', norm: 'DIN EN ISO 3675' },
    { property: 'Kinematische Viskosität bei 20°C', value: '< 6,0 mm²/s', norm: 'DIN EN ISO 3104' },
    { property: 'Flammpunkt', value: '> 55°C', norm: 'DIN EN ISO 2719' },
    { property: 'Schwefelgehalt', value: '< 50 mg/kg', norm: 'DIN EN ISO 20846' },
    { property: 'Wassergehalt', value: '< 200 mg/kg', norm: 'DIN EN ISO 12937' },
    { property: 'Sedimentgehalt', value: '< 24 mg/kg', norm: 'DIN EN 12662' },
    { property: 'Asche', value: '< 0,01 %', norm: 'DIN EN ISO 3987' },
    { property: 'Brennwert', value: '≥ 42,6 MJ/kg', norm: 'DIN 51900' },
    { property: 'Antioxidantien', value: 'BHT 17-24 mg/l', norm: 'Intern', isAdditive: true },
    { property: 'Metalldeaktivator', value: 'N,N-Disalicyliden-1,2-propandiamin', norm: 'Intern', isAdditive: true },
    { property: 'Biozid', value: 'Kathon BP 1.5', norm: 'Intern', isAdditive: true }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50/30 via-white to-accent-orange-50/25 relative overflow-hidden">
      {/* Blur orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange-200/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100/50">
            <FileText className="w-4 h-4" />
            <span>Technische Daten</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technische <span className="gradient-text-premium">Datenblätter</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Detaillierte technische Spezifikationen und Prüfwerte unserer Heizöl-Produkte.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm max-w-md mx-auto">
              <TabsTrigger 
                value="standard" 
                className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-800 data-[state=active]:to-gray-900 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              >
                Standard Heizöl
              </TabsTrigger>
              <TabsTrigger 
                value="premium"
                className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-600 data-[state=active]:to-primary-700 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              >
                Premium Heizöl
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <Card className="premium-card rounded-2xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Beaker className="w-5 h-5 text-gray-700" />
                    </div>
                    Standard Heizöl – Technische Daten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-100">
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Eigenschaft</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Wert</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Prüfnorm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {standardSpecs.map((spec, index) => (
                          <tr 
                            key={index} 
                            className="border-b border-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-colors"
                          >
                            <td className="py-4 px-4 font-medium text-gray-800">{spec.property}</td>
                            <td className="py-4 px-4 text-gray-600">{spec.value}</td>
                            <td className="py-4 px-4 text-gray-500 text-sm">{spec.norm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card className="premium-card rounded-2xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-orange-100 flex items-center justify-center">
                      <Beaker className="w-5 h-5 text-primary-700" />
                    </div>
                    Premium Heizöl – Technische Daten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-100">
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Eigenschaft</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Wert</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-700">Prüfnorm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {premiumSpecs.map((spec, index) => (
                          <tr 
                            key={index} 
                            className={`border-b border-gray-50 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-accent-orange-50/30 transition-colors ${spec.isAdditive ? 'bg-gradient-to-r from-primary-50/30 to-transparent' : ''}`}
                          >
                            <td className="py-4 px-4 font-medium text-gray-800">
                              {spec.property}
                              {spec.isAdditive && (
                                <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                                  Additiv
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-4 text-gray-600">{spec.value}</td>
                            <td className="py-4 px-4 text-gray-500 text-sm">{spec.norm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
