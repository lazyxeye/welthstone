import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import WealthstoneLogo from './logos/WealthstoneLogo';

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
            <WealthstoneLogo 
              variant="square" 
              width={32} 
              height={32}
              className="hover:brightness-110 transition-all duration-300"
            />
            <h2 className="text-lg font-bold text-accent-gold">
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