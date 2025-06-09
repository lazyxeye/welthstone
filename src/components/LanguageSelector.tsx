import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'he' as const, name: 'עברית', flag: '🇮🇱' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: 'en' | 'he' | 'fr' | 'ru' | 'zh') => {
    console.log('Changing language from', language, 'to', langCode);
    setLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-steel/50 hover:bg-steel transition-colors duration-300 ${
          isRTL ? 'flex-row-reverse space-x-reverse' : ''
        }`}
      >
        <Globe className="w-4 h-4 text-text-secondary" />
        <span className="text-sm text-text-secondary font-medium">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 w-40 bg-charcoal-deep border border-steel rounded-lg shadow-elevation-4 z-20 ${
          isRTL ? 'left-0' : 'right-0'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 hover:bg-steel/50 transition-colors duration-200 flex items-center space-x-3 ${
                language === lang.code 
                  ? 'bg-yellow-500/10 text-yellow-400' 
                  : 'text-text-secondary hover:text-text-primary'
              } ${
                isRTL ? 'flex-row-reverse space-x-reverse text-right' : 'text-left'
              } first:rounded-t-lg last:rounded-b-lg`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;