
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Thermometer, Shield, Info, Package } from 'lucide-react';

const StorageRecommendations = () => {
  const generalTips = [
    {
      icon: Thermometer,
      title: 'Temperatur',
      description: 'Lagerung zwischen -10°C und +40°C für optimale Qualität',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Behälterschutz',
      description: 'Verwendung von korrosionsbeständigen Tanks aus Stahl oder Kunststoff',
      color: 'from-accent-orange-500 to-primary-500'
    },
    {
      icon: Info,
      title: 'Füllstand',
      description: 'Tank möglichst vollhalten um Kondensation zu vermeiden',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: AlertTriangle,
      title: 'Wartung',
      description: 'Regelmäßige Kontrolle auf Undichtigkeiten und Verschmutzungen',
      color: 'from-accent-orange-400 to-accent-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-50/20 to-accent-orange-50/25 relative overflow-hidden">
      {/* Blur orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100/50">
            <Package className="w-4 h-4" />
            <span>Lagerung & Pflege</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lagerungs<span className="gradient-text-premium">empfehlungen</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Optimale Lagerung für maximale Qualität und Langlebigkeit Ihres Heizöls.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* General Tips Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {generalTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="premium-card text-center rounded-2xl border-0 group">
                  <CardHeader className="pb-2">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tabs */}
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
                <CardHeader>
                  <CardTitle className="text-xl">Standard Heizöl – Lagerungshinweise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                      <h4 className="font-bold text-lg mb-4 text-gray-900">Lagerdauer</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Optimale Lagerdauer: bis zu 6 Monate</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Nach 6 Monaten: Qualitätsprüfung empfohlen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Längere Lagerung: Stabilisatoren hinzufügen</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                      <h4 className="font-bold text-lg mb-4 text-gray-900">Wartungsintervalle</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Monatliche Sichtkontrolle</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Halbjährliche Tankreinigung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Jährliche Qualitätsprüfung</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-800 mb-1">Wichtiger Hinweis</h5>
                        <p className="text-amber-700 text-sm leading-relaxed">
                          Bei längerer Lagerung können sich Sedimente bilden. 
                          Eine regelmäßige Kontrolle ist daher empfehlenswert.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card className="premium-card rounded-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Premium Heizöl – Lagerungshinweise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50/50 to-white border border-primary-100/50">
                      <h4 className="font-bold text-lg mb-4 text-gray-900">Lagerdauer</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Optimale Lagerdauer: bis zu 12+ Monate</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Antioxidantien schützen vor Alterung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                          <span>Biozid-Schutz verhindert Mikroorganismen</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-accent-orange-50/50 to-white border border-accent-orange-100/50">
                      <h4 className="font-bold text-lg mb-4 text-gray-900">Wartungsintervalle</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Vierteljährliche Sichtkontrolle</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Jährliche Tankreinigung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-orange-500 rounded-full mt-2" />
                          <span>Qualitätsprüfung nach Bedarf</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-accent-orange-50 p-5 rounded-xl border border-primary-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-accent-orange-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary-800 mb-1">Premium Vorteile</h5>
                        <p className="text-primary-700 text-sm leading-relaxed">
                          Dank der Additive ist Premium Heizöl deutlich länger lagerfähig 
                          und benötigt weniger Wartungsaufwand.
                        </p>
                      </div>
                    </div>
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

export default StorageRecommendations;
