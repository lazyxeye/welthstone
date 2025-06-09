import React from 'react';
import { 
  Award, 
  Users, 
  Star, 
  Target, 
  Shield, 
  Heart 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Philosophy = () => {
  const { t, isRTL } = useLanguage();

  const principles = [
    {
      key: 'experience',
      icon: Award,
      gradient: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-500"
    },
    {
      key: 'professionalism',
      icon: Users,
      gradient: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500"
    },
    {
      key: 'uniqueness',
      icon: Star,
      gradient: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500"
    },
    {
      key: 'diversification',
      icon: Target,
      gradient: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500"
    },
    {
      key: 'supervision',
      icon: Shield,
      gradient: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-500"
    },
    {
      key: 'priority',
      icon: Heart,
      gradient: "from-pink-500/20 to-pink-500/5",
      iconColor: "text-pink-500"
    }
  ] as const;

  return (
    <section className="bg-charcoal-deep py-32 lg:py-40 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F7D794' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-obsidian to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-obsidian to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h3 className="text-display-m lg:text-display-l font-black mb-8 tracking-tight text-text-primary">
            {t.philosophy.title}
          </h3>
          <p className="text-body-xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* Principles Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {principles.map((principle, index) => {
            const principleData = t.philosophy.principles[principle.key];
            
            return (
              <div key={principle.key} className="group relative animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="card-gradient border border-steel rounded-2xl p-8 hover:border-accent-gold/30 transition-all duration-500 shadow-elevation-2 hover:shadow-elevation-4 transform hover:-translate-y-3 relative overflow-hidden min-h-[300px]">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-elevation-1 group-hover:shadow-elevation-3`}>
                        <principle.icon className={`w-10 h-10 ${principle.iconColor} group-hover:rotate-6 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Hebrew text at top */}
                    <div className="text-center mb-4">
                      <span className="text-lg font-bold text-accent-gold">
                        {principleData.hebrew}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-4 group-hover:text-accent-gold transition-colors duration-300 text-center">
                      {principleData.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-text-muted leading-relaxed group-hover:text-text-secondary transition-colors duration-300 text-center flex-grow">
                      {principleData.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-gold/0 via-accent-gold/20 to-accent-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;