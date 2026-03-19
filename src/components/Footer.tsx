import { Mail, MapPin, Clock, ArrowUpRight, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import wsLogoFooter from '@/assets/ghs-logo-footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/produkte', label: 'Produkte' },
    { to: '/services', label: 'Services' },
    { to: '/ueber-uns', label: 'Über uns' }
  ];

  const legalLinks = [
    { to: '/impressum', label: 'Impressum' },
    { to: '/datenschutz', label: 'Datenschutz' },
    { to: '/agb', label: 'AGB' },
    { to: '/widerrufsrecht', label: 'Widerrufsrecht' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-orange-700/25 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <img 
              src={wsLogoFooter} 
              alt="WS Energie" 
              className="h-12 lg:h-14"
            />
            <p className="text-gray-400 leading-relaxed">
              Ihr zuverlässiger Partner für Heizöl in Deutschland mit über 12 Jahren Erfahrung. 
              Qualität, Service und faire Preise.
            </p>
            <div className="pt-2">
              <div className="font-semibold text-white">WS-Energie Verwaltungs-GmbH</div>
              <div className="text-sm text-gray-500">Deutschlands Heizöl-Experte</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="h-px w-0 bg-accent-orange-500 group-hover:w-4 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-primary-900/50 flex items-center justify-center">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <a href="tel:+4961318888965" className="hover:text-white transition-colors">06131-8888965</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-primary-900/50 flex items-center justify-center">
                  <Mail size={18} className="text-primary-400" />
                </div>
                <span>info@ws-heizoel.de</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-accent-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent-orange-400" />
                </div>
                <div>
                  <div>Mittlere Bleiche 26</div>
                  <div>55116 Mainz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Öffnungszeiten</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-primary-900/50 flex items-center justify-center">
                  <Clock size={18} className="text-primary-400" />
                </div>
                <span>Service-Hotline</span>
              </div>
              <div className="space-y-1.5 text-sm text-gray-500">
                <div>Mo - Fr: 08:00 - 18:00</div>
                <div>Sa: 09:00 - 14:00</div>
                <div>So: Notfall-Hotline</div>
              </div>
              
              {/* Emergency Badge */}
              <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-accent-orange-900/40 to-accent-orange-950/60 border border-accent-orange-800/30">
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent-orange-500/10 rounded-full blur-xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-accent-orange-400 font-semibold mb-1">
                    <Sparkles size={14} />
                    <span>24/7 Notfall-Service</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Bei Heizungsausfällen erreichen Sie uns rund um die Uhr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              © {currentYear} WS-Energie Verwaltungs-GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((link, index) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="group flex items-center gap-1 text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
