import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import WealthstoneLogo from './logos/WealthstoneLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    t.navigation.home,
    t.navigation.philosophy,
    t.navigation.investmentAreas,
    t.navigation.contact
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect border-b border-steel shadow-elevation-2' 
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center group cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="group-hover:scale-110 transition-transform duration-300">
              <WealthstoneLogo 
                variant="square" 
                width={40} 
                height={40}
                className="group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            <h1 className={`text-xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300 ${
              isRTL ? 'mr-3' : 'ml-3'
            }`}>
              {t.common.wealthstone}
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <span 
                key={item}
                className="text-text-tertiary hover:text-text-primary transition-all duration-300 cursor-pointer relative group px-4 py-2 font-medium"
              >
                {item}
                <span className={`absolute bottom-0 transform w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300 ${
                  isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                }`}></span>
              </span>
            ))}
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <LanguageSelector />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-steel/50 hover:bg-steel transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-text-secondary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-obsidian/98 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />
          <nav className={`absolute top-20 bg-charcoal-deep border-t border-steel shadow-elevation-4 animate-slide-up ${
            isRTL ? 'left-0 right-0' : 'right-0 left-0'
          }`}>
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <span 
                  key={item}
                  className="block text-lg text-text-secondary hover:text-accent-gold transition-colors duration-300 cursor-pointer py-3 border-b border-steel/30 last:border-b-0"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </span>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div style={{ height: '72px' }} />
    </>
  );
};

export default Header;