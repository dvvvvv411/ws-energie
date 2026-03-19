import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay before showing for smoother UX
      const timer = setTimeout(() => {
        setShowBanner(true);
        // Trigger animation after mount
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Wait for animation to complete before hiding
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-4 md:p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Cookie className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern.{' '}
              <Link 
                to="/datenschutz" 
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Mehr erfahren
              </Link>
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-sm"
              >
                Akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
