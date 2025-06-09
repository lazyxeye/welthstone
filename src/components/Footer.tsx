import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-charcoal-deep border-t border-steel py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 ${
          isRTL ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Logo */}
          <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <div className="p-2 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5">
              <Shield className="w-6 h-6 text-accent-gold" />
            </div>
            <h2 className="text-xl font-bold text-accent-gold">
              {t.common.wealthstone}
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-text-tertiary text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;