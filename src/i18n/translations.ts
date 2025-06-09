export interface Translations {
  common: {
    wealthstone: string;
    loading: string;
    error: string;
  };
  navigation: {
    about: string;
    strategies: string;
    portfolio: string;
    insights: string;
    contact: string;
  };
  hero: {
    trustIndicator: string;
    title: string;
    subtitle: string;
    description: string;
    cta: {
      investors: string;
      discovery: string;
    };
  };
  valueProposition: {
    title: {
      before: string;
    };
    subtitle: string;
    features: {
      proven: {
        title: string;
        description: string;
        highlight: string;
      };
      diversification: {
        title: string;
        description: string;
        highlight: string;
      };
      excellence: {
        title: string;
        description: string;
        highlight: string;
      };
    };
    additionalTitle: string;
    additional: {
      team: string;
      access: string;
      risk: string;
      analytics: string;
      esg: string;
      infrastructure: string;
    };
  };
  footer: {
    copyright: string;
  };
  languages: {
    en: string;
    he: string;
    fr: string;
    ru: string;
  };
}

export const translations: Record<'en' | 'he' | 'fr' | 'ru', Translations> = {
  en: {
    common: {
      wealthstone: 'Wealthstone',
      loading: 'Loading...',
      error: 'An error occurred',
    },
    navigation: {
      about: 'About',
      strategies: 'Strategies',
      portfolio: 'Portfolio',
      insights: 'Insights',
      contact: 'Contact',
    },
    hero: {
      trustIndicator: '$2.5B+ Assets Under Management',
      title: 'Alternative Investment Excellence',
      subtitle: 'Pioneering opportunities in real estate, technology, and infrastructure',
      description: 'Discover exclusive investment opportunities with our expert team dedicated to delivering exceptional returns through sophisticated strategies and institutional-grade risk management.',
      cta: {
        investors: 'Investors Portal',
        discovery: 'Discovery Portal',
      },
    },
    valueProposition: {
      title: {
        before: 'Why Choose',
      },
      subtitle: 'Our unwavering commitment to excellence and deep institutional expertise positions us as the premier choice for sophisticated alternative investment strategies that deliver consistent alpha generation.',
      features: {
        proven: {
          title: 'Proven Track Record',
          description: 'Consistent outperformance across market cycles with risk-adjusted returns that exceed industry benchmarks through sophisticated quantitative analysis and systematic alpha generation strategies.',
          highlight: '15+ Years',
        },
        diversification: {
          title: 'Strategic Diversification',
          description: 'Exclusive access to premium opportunities across real estate, private equity, infrastructure, and emerging technology sectors with global market exposure and currency hedging strategies.',
          highlight: 'Multi-Asset',
        },
        excellence: {
          title: 'Institutional Excellence',
          description: 'White-glove relationship management with dedicated portfolio specialists and bespoke investment strategies precisely aligned with your unique risk profile and return objectives.',
          highlight: '1:1 Support',
        },
      },
      additionalTitle: 'Comprehensive Investment Infrastructure',
      additional: {
        team: 'Award-winning Investment Team',
        access: 'Global Market Access',
        risk: 'Advanced Risk Management',
        analytics: 'Real-time Portfolio Analytics',
        esg: 'ESG-Focused Strategies',
        infrastructure: 'Institutional-Grade Infrastructure',
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. All rights reserved.',
    },
    languages: {
      en: 'English',
      he: 'עברית',
      fr: 'Français',
      ru: 'Русский',
    },
  },
  he: {
    common: {
      wealthstone: 'וולת׳סטון',
      loading: 'טוען...',
      error: 'אירעה שגיאה',
    },
    navigation: {
      about: 'אודות',
      strategies: 'אסטרטגיות',
      portfolio: 'תיק השקעות',
      insights: 'תובנות',
      contact: 'צור קשר',
    },
    hero: {
      trustIndicator: '2.5+ מיליארד דולר בניהול',
      title: 'מצוינות בהשקעות אלטרנטיביות',
      subtitle: 'פיתוח הזדמנויות בנדל״ן, טכנולוגיה ותשתיות',
      description: 'גלה הזדמנויות השקעה בלעדיות עם צוות המומחים שלנו המתמחה במתן תשואות יוצאות דופן באמצעות אסטרטגיות מתוחכמות וניהול סיכונים ברמה מוסדית.',
      cta: {
        investors: 'פורטל משקיעים',
        discovery: 'פורטל גילוי',
      },
    },
    valueProposition: {
      title: {
        before: 'למה לבחור ב',
      },
      subtitle: 'המחויבות הבלתי מתפשרת שלנו למצוינות והמומחיות המוסדית העמוקה שלנו מציבה אותנו כבחירה המובילה לאסטרטגיות השקעה אלטרנטיביות מתוחכמות היוצרות אלפא עקבית.',
      features: {
        proven: {
          title: 'רקורד מוכח',
          description: 'ביצועים עקביים שעולים על השוק לאורך מחזורי שוק שונים עם תשואות מותאמות סיכון העולות על ייחוסי התעשייה באמצעות ניתוח כמותי מתוחכם ואסטרטגיות יצירת אלפא שיטתיות.',
          highlight: '15+ שנים',
        },
        diversification: {
          title: 'גיוון אסטרטגי',
          description: 'גישה בלעדית להזדמנויות פרמיום בנדל״ן, הון פרטי, תשתיות ומגזרי טכנולוגיה מתפתחים עם חשיפה לשווקים גלובליים ואסטרטגיות גידור מטבע.',
          highlight: 'רב-נכסי',
        },
        excellence: {
          title: 'מצוינות מוסדית',
          description: 'ניהול קשרי לקוחות ברמה הגבוהה ביותר עם מומחי תיקי השקעות ייעודיים ואסטרטגיות השקעה מותאמות אישית המיושרות במדויק עם פרופיל הסיכון והמטרות התשואה הייחודיים שלך.',
          highlight: 'תמיכה 1:1',
        },
      },
      additionalTitle: 'תשתית השקעות מקיפה',
      additional: {
        team: 'צוות השקעות זוכה פרסים',
        access: 'גישה לשווקים גלובליים',
        risk: 'ניהול סיכונים מתקדם',
        analytics: 'אנליטיקה של תיק השקעות בזמן אמת',
        esg: 'אסטרטגיות ממוקדות ESG',
        infrastructure: 'תשתית ברמה מוסדית',
      },
    },
    footer: {
      copyright: '© 2025 וולת׳סטון. כל הזכויות שמורות.',
    },
    languages: {
      en: 'English',
      he: 'עברית',
      fr: 'Français',
      ru: 'Русский',
    },
  },
  fr: {
    common: {
      wealthstone: 'Wealthstone',
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
    },
    navigation: {
      about: 'À propos',
      strategies: 'Stratégies',
      portfolio: 'Portefeuille',
      insights: 'Perspectives',
      contact: 'Contact',
    },
    hero: {
      trustIndicator: '2,5 Md$+ d\'Actifs Sous Gestion',
      title: 'Excellence en Investissement Alternatif',
      subtitle: 'Opportunités pionnières en immobilier, technologie et infrastructure',
      description: 'Découvrez des opportunités d\'investissement exclusives avec notre équipe d\'experts dédiée à offrir des rendements exceptionnels grâce à des stratégies sophistiquées et une gestion des risques de niveau institutionnel.',
      cta: {
        investors: 'Portail Investisseurs',
        discovery: 'Portail Découverte',
      },
    },
    valueProposition: {
      title: {
        before: 'Pourquoi Choisir',
      },
      subtitle: 'Notre engagement inébranlable envers l\'excellence et notre expertise institutionnelle approfondie nous positionnent comme le choix de premier plan pour des stratégies d\'investissement alternatives sophistiquées qui génèrent un alpha constant.',
      features: {
        proven: {
          title: 'Historique Prouvé',
          description: 'Performance constante supérieure au marché à travers les cycles avec des rendements ajustés au risque qui dépassent les références de l\'industrie grâce à une analyse quantitative sophistiquée et des stratégies systématiques de génération d\'alpha.',
          highlight: '15+ Années',
        },
        diversification: {
          title: 'Diversification Stratégique',
          description: 'Accès exclusif aux opportunités premium dans l\'immobilier, le capital-investissement, les infrastructures et les secteurs technologiques émergents avec exposition aux marchés mondiaux et stratégies de couverture de change.',
          highlight: 'Multi-Actifs',
        },
        excellence: {
          title: 'Excellence Institutionnelle',
          description: 'Gestion de relation client haut de gamme avec des spécialistes de portefeuille dédiés et des stratégies d\'investissement sur mesure précisément alignées avec votre profil de risque unique et vos objectifs de rendement.',
          highlight: 'Support 1:1',
        },
      },
      additionalTitle: 'Infrastructure d\'Investissement Complète',
      additional: {
        team: 'Équipe d\'Investissement Primée',
        access: 'Accès aux Marchés Mondiaux',
        risk: 'Gestion Avancée des Risques',
        analytics: 'Analytique de Portefeuille en Temps Réel',
        esg: 'Stratégies Axées sur l\'ESG',
        infrastructure: 'Infrastructure de Niveau Institutionnel',
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. Tous droits réservés.',
    },
    languages: {
      en: 'English',
      he: 'עברית',
      fr: 'Français',
      ru: 'Русский',
    },
  },
  ru: {
    common: {
      wealthstone: 'Wealthstone',
      loading: 'Загрузка...',
      error: 'Произошла ошибка',
    },
    navigation: {
      about: 'О нас',
      strategies: 'Стратегии',
      portfolio: 'Портфолио',
      insights: 'Аналитика',
      contact: 'Контакты',
    },
    hero: {
      trustIndicator: '2,5+ млрд долларов под управлением',
      title: 'Превосходство в Альтернативных Инвестициях',
      subtitle: 'Пионерские возможности в недвижимости, технологиях и инфраструктуре',
      description: 'Откройте эксклюзивные инвестиционные возможности с нашей командой экспертов, посвященной достижению исключительной доходности через сложные стратегии и управление рисками институционального уровня.',
      cta: {
        investors: 'Портал Инвесторов',
        discovery: 'Портал Открытий',
      },
    },
    valueProposition: {
      title: {
        before: 'Почему Выбрать',
      },
      subtitle: 'Наша непоколебимая приверженность к совершенству и глубокая институциональная экспертиза позиционируют нас как ведущий выбор для сложных альтернативных инвестиционных стратегий, которые генерируют стабильную альфу.',
      features: {
        proven: {
          title: 'Проверенный Трек-рекорд',
          description: 'Последовательная превосходная эффективность в различных рыночных циклах с доходностью, скорректированной на риск, превышающей отраслевые бенчмарки через сложный количественный анализ и систематические стратегии генерации альфы.',
          highlight: '15+ Лет',
        },
        diversification: {
          title: 'Стратегическая Диверсификация',
          description: 'Эксклюзивный доступ к премиальным возможностям в недвижимости, частном капитале, инфраструктуре и развивающихся технологических секторах с глобальной рыночной экспозицией и стратегиями валютного хеджирования.',
          highlight: 'Мульти-Активы',
        },
        excellence: {
          title: 'Институциональное Превосходство',
          description: 'Управление отношениями белых перчаток с выделенными специалистами по портфелю и индивидуальными инвестиционными стратегиями, точно выровненными с вашим уникальным профилем риска и целями доходности.',
          highlight: 'Поддержка 1:1',
        },
      },
      additionalTitle: 'Комплексная Инвестиционная Инфраструктура',
      additional: {
        team: 'Награжденная Инвестиционная Команда',
        access: 'Глобальный Доступ к Рынкам',
        risk: 'Продвинутое Управление Рисками',
        analytics: 'Аналитика Портфолио в Реальном Времени',
        esg: 'ESG-Ориентированные Стратегии',
        infrastructure: 'Инфраструктура Институционального Уровня',
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. Все права защищены.',
    },
    languages: {
      en: 'English',
      he: 'עברית',
      fr: 'Français',
      ru: 'Русский',
    },
  },
};