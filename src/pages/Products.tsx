
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import ProductHero from '../components/ProductHero';
import ProductComparison from '../components/ProductComparison';
import TechnicalSpecs from '../components/TechnicalSpecs';
import StorageRecommendations from '../components/StorageRecommendations';
import EnvironmentalAspects from '../components/EnvironmentalAspects';
import QualityCertificates from '../components/QualityCertificates';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heizöl-Sorten | Standard, Premium & Bio-Heizöl - WS Energie</title>
        <meta name="description" content="Unsere Heizöl-Qualitäten im Vergleich: Standard-Heizöl, Premium mit Additiven und Bio-Heizöl. ✓ DIN-zertifiziert ✓ Technische Daten ✓ Lagerungsempfehlungen." />
      </Helmet>
      <Header />
      <ProductHero />
      <ProductComparison />
      <TechnicalSpecs />
      <QualityCertificates />
      <StorageRecommendations />
      <EnvironmentalAspects />
      <Footer />
    </div>
  );
};

export default Products;
