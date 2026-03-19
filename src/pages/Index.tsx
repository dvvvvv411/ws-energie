
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

import ReviewsSection from '../components/ReviewsSection';
import CompanySection from '../components/CompanySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>WS Energie | Günstig bestellen & schnell geliefert - Deutschlandweit</title>
        <meta name="description" content="Heizöl günstig online bestellen bei WS Energie. ✓ Deutschlandweite Lieferung ✓ Premium-Qualität ✓ Faire Preise ✓ Über 100.000 zufriedene Kunden. Jetzt Preis berechnen!" />
      </Helmet>
      <Header />
      <HeroSection />
      
      <ReviewsSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
