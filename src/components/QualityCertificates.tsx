
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Leaf, BadgeCheck } from 'lucide-react';

const QualityCertificates = () => {
  const certificates = [
    {
      title: 'DIN EN 590',
      description: 'Europäische Norm für Dieselkraftstoff und Heizöl',
      icon: Shield,
      status: 'Zertifiziert'
    },
    {
      title: 'ISO 9001:2015',
      description: 'Qualitätsmanagementsystem',
      icon: Award,
      status: 'Zertifiziert'
    },
    {
      title: 'ISO 14001',
      description: 'Umweltmanagementsystem',
      icon: Leaf,
      status: 'Zertifiziert'
    },
    {
      title: 'RAL Gütezeichen',
      description: 'Gütegemeinschaft Energiehandel',
      icon: CheckCircle,
      status: 'Zertifiziert'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent-orange-50/25 via-white to-primary-50/20 relative overflow-hidden">
      {/* Blur orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100/50">
            <BadgeCheck className="w-4 h-4" />
            <span>Geprüfte Qualität</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qualitäts<span className="gradient-text-premium">zertifikate</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Unsere Produkte erfüllen höchste Qualitätsstandards und sind nach 
            anerkannten nationalen und internationalen Normen zertifiziert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={index} 
                className="premium-card text-center rounded-2xl border-0 group"
              >
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-50 to-accent-orange-50 text-primary-700 border border-primary-100/50">
                    <CheckCircle className="w-4 h-4" />
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityCertificates;
