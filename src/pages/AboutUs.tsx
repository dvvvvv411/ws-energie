import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building, Users, Award, Clock, MapPin, Shield, CheckCircle, Mail, Sparkles, Star, Truck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    customers: 0,
    rating: 0,
    deliveries: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = {
        years: 4,
        customers: 100000,
        rating: 4.9,
        deliveries: 200000
      };

      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
          rating: Math.floor((targets.rating * progress) * 10) / 10,
          deliveries: Math.floor(targets.deliveries * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      name: "ISO 9001",
      description: "Qualitätsmanagement-System"
    },
    {
      name: "DIN SPEC 51603-1",
      description: "Premium-Heizöl Standard"
    },
    {
      name: "WHG Zertifikat",
      description: "Wasserhaushaltsgesetz konform"
    },
    {
      name: "ADR Zertifikat",
      description: "Gefahrgut-Transport Lizenz"
    }
  ];

  const stats = [
    {
      icon: Clock,
      value: animatedStats.years,
      suffix: '+',
      label: 'Jahre Erfahrung',
      description: 'Branchenkompetenz'
    },
    {
      icon: Users,
      value: animatedStats.customers.toLocaleString(),
      suffix: '+',
      label: 'Zufriedene Kunden',
      description: 'Deutschlandweit'
    },
    {
      icon: Star,
      value: animatedStats.rating,
      suffix: '★',
      label: 'Kundenbewertung',
      description: 'Exzellenter Service'
    },
    {
      icon: Truck,
      value: animatedStats.deliveries.toLocaleString(),
      suffix: '+',
      label: 'Lieferungen',
      description: 'Erfolgreich zugestellt'
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Über uns | Antpire GmbH - Seit 2021 Ihr Partner für Heizöl</title>
        <meta name="description" content="Lernen Sie die Antpire GmbH kennen: Über 4 Jahre Erfahrung, 100.000+ zufriedene Kunden und deutschlandweite Lieferung. Qualität, Service und faire Preise aus Waghäusel." />
      </Helmet>
      <Header />

      {/* Hero Section - Premium Design */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/25 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <Building className="w-4 h-4" />
            Ihr zuverlässiger Partner
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Über <span className="gradient-text-premium">Antpire GmbH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Seit 2021 Ihr zuverlässiger Partner für Premium-Heizöl in Deutschland. 
            Qualität, Service und faire Preise sind unser Versprechen an Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8"
            >
              <Mail className="mr-2" size={20} />
              info@antpiregmbh.de
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Statistics - Premium Design */}
      <section className="py-20 bg-gradient-to-br from-white via-accent-orange-50/30 to-primary-50/20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-orange-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-primary-600 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-primary-50/30 via-white to-accent-orange-50/25 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-orange-200/25 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Unsere Geschichte
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Von <span className="gradient-text-premium">Waghäusel</span> nach ganz Deutschland
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Im Jahr <span className="font-semibold text-primary-600">2021</span> wurde die Antpire GmbH mit dem Ziel gegründet, 
                  Kunden in Deutschland mit hochwertigem Heizöl zu fairen Preisen zu versorgen. 
                  Was als Unternehmen in Waghäusel begann, hat sich zu einem der 
                  führenden Heizöl-Anbieter in der Region entwickelt.
                </p>
                <p>
                  Unser Erfolg basiert auf drei Säulen: <span className="font-semibold text-gray-900">erstklassige Produktqualität</span>, 
                  <span className="font-semibold text-gray-900"> zuverlässiger Service</span> und <span className="font-semibold text-gray-900">transparente Preisgestaltung</span>. 
                  Wir beliefern sowohl Privatkunden als auch Gewerbekunden und setzen dabei auf 
                  modernste Logistik und persönliche Betreuung.
                </p>
                <p>
                  Mit über <span className="font-semibold text-accent-orange-600">100.000 zufriedenen Kunden</span> und mehr als 
                  <span className="font-semibold text-accent-orange-600"> 200.000 erfolgreichen Lieferungen</span> haben wir uns das 
                  Vertrauen der Menschen in Deutschland verdient. Unser Team mit über 4 Jahren 
                  Branchenerfahrung steht Ihnen jederzeit mit Rat und Tat zur Seite.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="premium-card rounded-3xl p-12 text-center w-full max-w-md">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                  <Building size={48} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Antpire</h3>
                <p className="text-xl text-primary-600 font-semibold mb-6">Antpire GmbH</p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span>Seit 2021 in Waghäusel</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-accent-orange-500" />
                    <span>Deutschlands Heizöl-Experte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-white via-primary-50/20 to-accent-orange-50/25 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange-200/25 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Warum wir?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Warum <span className="gradient-text-premium">Antpire</span> wählen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir bieten Ihnen mehr als nur Heizöl - wir bieten Ihnen Sicherheit, 
              Qualität und einen Service, auf den Sie sich verlassen können.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group premium-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Premium Qualität</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser Heizöl entspricht höchsten Qualitätsstandards nach DIN SPEC 51603-1 
                für optimale Brennleistung und Effizienz.
              </p>
            </div>

            <div className="group premium-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-orange-500 to-accent-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent-orange-600 transition-colors duration-300">Zuverlässigkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Pünktliche Lieferung, transparente Preise und 24/7 Notfallservice - 
                darauf können Sie sich verlassen.
              </p>
            </div>

            <div className="group premium-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Persönlicher Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Individuelle Beratung, flexible Liefertermine und ein Team, 
                das sich um Ihre Bedürfnisse kümmert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Area - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-accent-orange-50/25 via-white to-primary-50/20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-orange-200/20 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Deutschlandweit
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unser <span className="gradient-text-premium">Liefergebiet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir liefern zuverlässig in ganz Deutschland – von Berlin bis München, 
              von Hamburg bis Stuttgart, vom Ruhrgebiet bis nach Sachsen.
            </p>
          </div>

          <div className="premium-card rounded-3xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg mr-4">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ganz Deutschland</h3>
                </div>
                <div className="space-y-4">
                  {[
                    'Berlin und Brandenburg',
                    'Hamburg und Norddeutschland',
                    'Köln/Düsseldorf und Ruhrgebiet',
                    'Frankfurt am Main und Rhein-Main-Gebiet',
                    'Stuttgart und Baden-Württemberg',
                    'München und Bayern'
                  ].map((region, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                        <CheckCircle className="text-primary-600 w-4 h-4" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white shadow-xl">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Kostenlose Lieferung</h4>
                <p className="text-primary-100 mb-6">ab 1500 Liter in ganz Deutschland</p>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-4xl font-bold">4-7</div>
                  <div className="text-primary-100">Werktage Lieferzeit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-primary-50/20 via-white to-accent-orange-50/30 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-orange-200/25 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Geprüfte Qualität
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Zertifizierungen & <span className="gradient-text-premium">Qualitätsstandards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unsere Zertifizierungen garantieren Ihnen höchste Qualität und Sicherheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group premium-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-white via-accent-orange-50/20 to-primary-50/25 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-orange-200/20 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <Building className="w-4 h-4" />
              Antpire GmbH
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  <span className="gradient-text-premium">Antpire GmbH</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Ihr Partner für Heizöl in Deutschland
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Anschrift</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 pl-13">
                    <p>Antpire GmbH</p>
                    <p>Franz-Sigel-Str. 20</p>
                    <p>68753 Waghäusel</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-orange-100 to-accent-orange-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-accent-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Kontakt</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p>info@antpiregmbh.de</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Handelsregister</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>HRB 740142</p>
                    <p>Amtsgericht Mannheim</p>
                    <p>USt-IdNr.: DE455291518</p>
                    <p className="pt-1"><span className="font-semibold">Geschäftsführer:</span> Michael Weyrauch</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-orange-100 to-accent-orange-50 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-accent-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Öffnungszeiten</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
                    <p>Sa: 9:00 - 14:00 Uhr</p>
                    <p className="font-semibold text-primary-600">Notfallservice: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12 pt-8 border-t border-gray-100">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8"
                >
                  Jetzt Heizöl bestellen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
