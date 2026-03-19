
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Award, Sparkles } from 'lucide-react';

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: 'Schwefelgehalt',
      standard: '< 50 mg/kg',
      premium: '< 50 mg/kg'
    },
    {
      feature: 'DIN-Norm',
      standard: 'DIN 51603-1',
      premium: 'DIN 51603-1'
    },
    {
      feature: 'Korrosionsschutz',
      standard: 'Standard',
      premium: 'Verstärkt'
    },
    {
      feature: 'Antioxidantien',
      standard: false,
      premium: true
    },
    {
      feature: 'Biozid-Schutz',
      standard: false,
      premium: true
    },
    {
      feature: 'Metalldeaktivator',
      standard: false,
      premium: true
    },
    {
      feature: 'Lagerfähigkeit',
      standard: '6 Monate',
      premium: '12+ Monate'
    },
    {
      feature: 'Brennwert (kWh/l)',
      standard: '9,8',
      premium: '9,8'
    },
    {
      feature: 'Preis pro Liter',
      standard: '0,70 €',
      premium: '0,73 €'
    }
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <Check className="w-4 h-4 text-primary-700" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <X className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      );
    }
    return value;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-accent-orange-50/30 to-primary-50/20 relative overflow-hidden">
      {/* Blur orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100/50">
            <Award className="w-4 h-4" />
            <span>Produktvergleich</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Standard vs. <span className="gradient-text-premium">Premium</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Detaillierte Gegenüberstellung unserer Heizöl-Qualitäten für Ihre optimale Entscheidung.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto premium-card rounded-2xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-xl flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-primary-600" />
              Eigenschaften im Vergleich
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-gray-100 hover:bg-transparent">
                    <TableHead className="w-1/3 text-gray-700 font-semibold py-4">Eigenschaft</TableHead>
                    <TableHead className="text-center text-gray-700 font-semibold py-4">Standard Heizöl</TableHead>
                    <TableHead className="text-center py-4">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary-100 to-accent-orange-100 rounded-full">
                        <span className="font-semibold text-primary-800">Premium Heizöl</span>
                        <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full">Empfohlen</span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-accent-orange-50/30 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-800 py-4">{row.feature}</TableCell>
                      <TableCell className="text-center text-gray-600 py-4">
                        {renderCell(row.standard)}
                      </TableCell>
                      <TableCell className="text-center text-gray-800 font-medium py-4">
                        {renderCell(row.premium)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductComparison;
