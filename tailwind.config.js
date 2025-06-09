/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Foundation Colors
        obsidian: '#0A0B0F',
        'charcoal-deep': '#151820',
        slate: '#1E2329',
        steel: '#2A2F3A',
        graphite: '#363B47',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#E8E9EA',
        'text-tertiary': '#B8BCC8',
        'text-muted': '#868B94',
        'text-subtle': '#4A5568',
        
        // Brand Colors
        'accent-gold': '#F7D794',
        'primary-blue': '#3B82F6',
        'primary-blue-dark': '#2563EB',
        'success-green': '#10B981',
        'warning-amber': '#F59E0B',
        'error-red': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'hebrew': ['Noto Sans Hebrew', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '76px', letterSpacing: '-0.02em' }],
        'display-l': ['48px', { lineHeight: '58px', letterSpacing: '-0.01em' }],
        'display-m': ['36px', { lineHeight: '46px', letterSpacing: '-0.005em' }],
        'display-s': ['28px', { lineHeight: '38px', letterSpacing: '0em' }],
        'body-xl': ['20px', { lineHeight: '34px' }],
        'body-l': ['18px', { lineHeight: '30px' }],
        'body-m': ['16px', { lineHeight: '26px' }],
        'body-s': ['14px', { lineHeight: '22px' }],
        'body-xs': ['12px', { lineHeight: '18px' }],
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.4)',
        'elevation-2': '0 4px 12px rgba(0,0,0,0.3)',
        'elevation-3': '0 8px 24px rgba(0,0,0,0.25)',
        'elevation-4': '0 16px 48px rgba(0,0,0,0.2)',
        'elevation-5': '0 24px 64px rgba(0,0,0,0.15)',
        'glow-gold': '0 0 20px rgba(247,215,148,0.15)',
        'glow-blue': '0 0 16px rgba(59,130,246,0.12)',
        'glow-success': '0 0 12px rgba(16,185,129,0.1)',
        'glow-warning': '0 0 14px rgba(245,158,11,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const rtlUtilities = {
        '.rtl-flip': {
          transform: 'scaleX(-1)',
        },
        '[dir="rtl"] .rtl-flip': {
          transform: 'scaleX(1)',
        },
      };
      addUtilities(rtlUtilities);
    }
  ],
};