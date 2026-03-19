import { useState, useEffect } from 'react';
import { Menu, X, Bell, Sparkles, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { scrollToCalculator, scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';
import wsLogo from '@/assets/ghs-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    if (isHomePage) {
      scrollToCalculator();
    } else {
      scrollToCalculatorFromOtherPage();
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className={cn(
            "border-b border-gray-100/50 py-2 transition-all duration-300",
            isScrolled ? "opacity-0 h-0 py-0 overflow-hidden" : "opacity-100"
          )}>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center space-x-6">
                <a href="tel:+4961318888965" className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                  <Phone size={14} className="text-accent-orange-500" />
                  <span>06131-8888965</span>
                </a>
                <div className="flex items-center space-x-2">
                  <Bell size={14} className="text-accent-orange-500" />
                  <span>info@ws-heizoel.de</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-accent-orange-600 font-medium">
                <Sparkles size={14} />
                <span>Kostenlose Lieferung in Deutschland</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center group">
                <img 
                  src={wsLogo} 
                  alt="WS Energie"
                  className="h-16 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            <nav className="flex items-center space-x-2">
              {[
                { to: '/', label: 'Startseite' },
                { to: '/produkte', label: 'Produkte' },
                { to: '/services', label: 'Services' },
                { to: '/ueber-uns', label: 'Über uns' }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={cn(
                    "relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg group",
                    location.pathname === item.to ? "text-primary-600" : "hover:text-primary-600"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={cn(
                    "absolute inset-0 bg-primary-50/80 rounded-lg transition-all duration-300",
                    location.pathname === item.to 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  )} />
                  <div className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 rounded-full",
                    location.pathname === item.to ? "w-8" : "w-0 group-hover:w-8"
                  )} />
                </Link>
              ))}
              
              <Button 
                onClick={handleOrderClick}
                className="relative overflow-hidden ml-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-6 py-2.5 font-semibold rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10">Jetzt bestellen</span>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center py-4">
            {/* Hamburger Icon - Links */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - Mittig zentriert */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <img 
                src={wsLogo} 
                alt="WS Energie" 
                className="h-18"
              />
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          )}>
            <nav className="space-y-2 pt-2">
              {[
                { to: '/', label: 'Startseite' },
                { to: '/produkte', label: 'Produkte' },
                { to: '/services', label: 'Services' },
                { to: '/ueber-uns', label: 'Über uns' }
              ].map((item, index) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={cn(
                    "block py-4 px-5 rounded-xl font-medium min-h-[56px] flex items-center transition-all duration-300",
                    location.pathname === item.to 
                      ? "bg-primary-50 text-primary-600 border border-primary-200" 
                      : "text-gray-700 hover:bg-gray-50 border border-transparent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
