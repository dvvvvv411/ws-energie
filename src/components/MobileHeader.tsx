import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import HandelsblattBanner from './HandelsblattBanner';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 lg:hidden">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="relative flex items-center py-4">
          {/* Hamburger Icon - Links */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Mittig zentriert */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img 
              src="/lovable-uploads/bioheat-logo.png" 
              alt="BIO HEAT Nord" 
              className="h-8"
            />
          </Link>
        </div>

        {/* Handelsblatt Banner */}
        <div className="pb-4">
          <HandelsblattBanner className="w-full" />
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="space-y-1">
            <Link 
              to="/" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/produkte" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Produkte
            </Link>
            <Link 
              to="/services" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/ueber-uns" 
              className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg font-medium"
              onClick={toggleMenu}
            >
              Über uns
            </Link>
            
            {/* Contact Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href="mailto:info@bioheatnord.de"
                className="flex items-center py-3 px-4 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Mail size={20} className="mr-3" />
                <span className="font-medium">info@bioheatnord.de</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
