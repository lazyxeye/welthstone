import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl ${
          isRTL ? '-right-20' : '-left-20'
        }`} />
        <div className={`absolute bottom-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl ${
          isRTL ? '-left-20' : '-right-20'
        }`} />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Trust Indicator */}
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-steel/30 backdrop-blur-sm border border-steel/50 mb-8 ${
          isRTL ? 'flex-row-reverse space-x-reverse' : ''
        }`}>
          <TrendingUp className="w-4 h-4 text-accent-gold" />
          <span className="text-sm text-text-tertiary font-medium">
            {t.hero.trustIndicator}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-text-primary">{t.hero.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary mb-4 font-light leading-relaxed max-w-4xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg text-text-tertiary mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
          isRTL ? 'sm:flex-row-reverse' : ''
        }`}>
          <button className={`group px-8 py-4 bg-accent-gold text-obsidian font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-elevation-2 hover:shadow-elevation-4 flex items-center space-x-2 ${
            isRTL ? 'flex-row-reverse space-x-reverse' : ''
          }`}>
            <span>{t.hero.cta.investors}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
              isRTL ? 'group-hover:-translate-x-1 rtl-flip' : ''
            }`} />
          </button>
          
          <button className={`group px-8 py-4 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold hover:text-obsidian transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
            isRTL ? 'flex-row-reverse space-x-reverse' : ''
          }`}>
            <span>{t.hero.cta.discovery}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${
              isRTL ? 'group-hover:-translate-x-1 rtl-flip' : ''
            }`} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;