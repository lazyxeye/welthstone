import React from 'react';
import { Shield, TrendingUp, Users, Award, Globe, BarChart3, Zap, Target, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ValueProposition = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t.valueProposition.features.proven.title,
      description: t.valueProposition.features.proven.description,
      highlight: t.valueProposition.features.proven.highlight,
      gradient: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      icon: TrendingUp,
      title: t.valueProposition.features.diversification.title,
      description: t.valueProposition.features.diversification.description,
      highlight: t.valueProposition.features.diversification.highlight,
      gradient: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Users,
      title: t.valueProposition.features.excellence.title,
      description: t.valueProposition.features.excellence.description,
      highlight: t.valueProposition.features.excellence.highlight,
      gradient: "from-green-500/20 to-green-500/5"
    }
  ];

  const additionalFeatures = [
    { icon: Award, text: t.valueProposition.additional.team, colorClass: "text-yellow-500", bgClass: "bg-yellow-500/20" },
    { icon: Globe, text: t.valueProposition.additional.access, colorClass: "text-blue-500", bgClass: "bg-blue-500/20" },
    { icon: BarChart3, text: t.valueProposition.additional.risk, colorClass: "text-green-500", bgClass: "bg-green-500/20" },
    { icon: Zap, text: t.valueProposition.additional.analytics, colorClass: "text-amber-500", bgClass: "bg-amber-500/20" },
    { icon: Target, text: t.valueProposition.additional.esg, colorClass: "text-yellow-500", bgClass: "bg-yellow-500/20" },
    { icon: Building, text: t.valueProposition.additional.infrastructure, colorClass: "text-blue-500", bgClass: "bg-blue-500/20" }
  ];

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
          <h3 className="text-display-m lg:text-display-l font-black mb-8 tracking-tight">
            {t.valueProposition.title.before}
            <span className="text-accent-gold"> {t.common.wealthstone}</span>
          </h3>
          <p className="text-body-xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light text-enhanced">
            {t.valueProposition.subtitle}
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {features.map((feature, index) => (
            <div key={index} className="group relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-gradient border border-steel rounded-2xl p-10 hover:border-accent-gold/30 transition-all duration-500 shadow-elevation-2 hover:shadow-elevation-4 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-elevation-1 group-hover:shadow-elevation-3`}>
                      <feature.icon className="w-12 h-12 text-accent-gold group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <div className={`absolute -top-2 bg-accent-gold text-obsidian text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-glow-gold ${
                      isRTL ? '-left-2' : '-right-2'
                    }`}>
                      {feature.highlight}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold mb-6 group-hover:text-accent-gold transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed group-hover:text-text-secondary transition-colors duration-300 text-enhanced">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-gold/0 via-accent-gold/20 to-accent-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="border-t border-steel pt-16">
          <h4 className="text-2xl font-bold text-center mb-12 text-text-secondary">
            {t.valueProposition.additionalTitle}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center p-6 rounded-xl bg-slate/30 hover:bg-slate/50 transition-all duration-300 group cursor-pointer transform hover:scale-105 border border-steel/50 hover:border-accent-gold/30 ${
                  isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'
                }`}
              >
                <div className={`p-3 ${item.bgClass} hover:bg-opacity-30 rounded-lg transition-all duration-300 shadow-elevation-1`}>
                  <item.icon className={`w-6 h-6 ${item.colorClass} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;