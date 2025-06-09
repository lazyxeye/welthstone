export interface Translations {
  common: {
    wealthstone: string;
    simplyInvestSmart: string;
  };
  navigation: {
    home: string;
    philosophy: string;
    investmentAreas: string;
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
  philosophy: {
    title: string;
    subtitle: string;
    principles: {
      experience: {
        title: string;
        description: string;
        hebrew: string;
      };
      professionalism: {
        title: string;
        description: string;
        hebrew: string;
      };
      uniqueness: {
        title: string;
        description: string;
        hebrew: string;
      };
      diversification: {
        title: string;
        description: string;
        hebrew: string;
      };
      supervision: {
        title: string;
        description: string;
        hebrew: string;
      };
      priority: {
        title: string;
        description: string;
        hebrew: string;
      };
    };
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<'en' | 'he' | 'fr' | 'ru' | 'zh', Translations> = {
  he: {
    common: {
      wealthstone: 'וולת\'סטון',
      simplyInvestSmart: 'פשוט להשקיע חכם',
    },
    navigation: {
      home: 'בית',
      philosophy: 'פילוסופיה',
      investmentAreas: 'תחומי השקעה',
      contact: 'צור קשר',
    },
    hero: {
      trustIndicator: 'השקעות אלטרנטיביות',
      title: 'פשוט להשקיע חכם',
      subtitle: 'השקעות אלטרנטיביות מתקדמות',
      description: 'חברת השקעות ישראלית המתמחה בהשקעות אלטרנטיביות עם מיקוד על שש עקרונות יסוד המנחים את פעילותנו.',
      cta: {
        investors: 'פורטל משקיעים',
        discovery: 'פורטל גילוי',
      },
    },
    philosophy: {
      title: 'שישה עקרונות מנחים',
      subtitle: 'הפילוסופיה שלנו מבוססת על שישה עקרונות יסוד המנחים כל החלטה השקעתית',
      principles: {
        experience: {
          title: 'ניסיון',
          description: 'ניסיון רב שנים בשווקים הפיננסיים ובהשקעות אלטרנטיביות',
          hebrew: 'ניסיון',
        },
        professionalism: {
          title: 'מקצועיות',
          description: 'גישה מקצועית ויסודית לכל השקעה וניתוח מעמיק של הזדמנויות',
          hebrew: 'מקצועיות',
        },
        uniqueness: {
          title: 'ייחודיות',
          description: 'זיהוי והשקעה בהזדמנויות ייחודיות שאינן זמינות למשקיעים רגילים',
          hebrew: 'ייחודיות',
        },
        diversification: {
          title: 'פיזור השקעות',
          description: 'פיזור חכם של השקעות על פני מגזרים ואזורים גיאוגרפיים שונים',
          hebrew: 'פיזור השקעות',
        },
        supervision: {
          title: 'פיקוח ובקרה',
          description: 'מעקב צמוד ובקרה מתמדת על כל ההשקעות והסיכונים',
          hebrew: 'פיקוח ובקרה',
        },
        priority: {
          title: 'עדיפות למשקיע',
          description: 'שמירה על אינטרסים של המשקיע כעדיפות עליונה בכל פעילות',
          hebrew: 'עדיפות למשקיע',
        },
      },
    },
    footer: {
      copyright: '© 2025 וולת\'סטון. כל הזכויות שמורות.',
    },
  },
  en: {
    common: {
      wealthstone: 'Wealthstone',
      simplyInvestSmart: 'Simply Invest Smart',
    },
    navigation: {
      home: 'Home',
      philosophy: 'Philosophy',
      investmentAreas: 'Investment Areas',
      contact: 'Contact',
    },
    hero: {
      trustIndicator: 'Alternative Investments',
      title: 'Simply Invest Smart',
      subtitle: 'Advanced Alternative Investments',
      description: 'Israeli investment company specializing in alternative investments with focus on six fundamental principles guiding our operations.',
      cta: {
        investors: 'Investors Portal',
        discovery: 'Discovery Portal',
      },
    },
    philosophy: {
      title: 'Six Guiding Principles',
      subtitle: 'Our philosophy is based on six fundamental principles that guide every investment decision',
      principles: {
        experience: {
          title: 'Experience',
          description: 'Years of experience in financial markets and alternative investments',
          hebrew: 'ניסיון',
        },
        professionalism: {
          title: 'Professionalism',
          description: 'Professional and thorough approach to every investment and deep analysis of opportunities',
          hebrew: 'מקצועיות',
        },
        uniqueness: {
          title: 'Uniqueness',
          description: 'Identifying and investing in unique opportunities not available to regular investors',
          hebrew: 'ייחודיות',
        },
        diversification: {
          title: 'Diversification',
          description: 'Smart diversification of investments across different sectors and geographical regions',
          hebrew: 'פיזור השקעות',
        },
        supervision: {
          title: 'Supervision',
          description: 'Close monitoring and continuous control of all investments and risks',
          hebrew: 'פיקוח ובקרה',
        },
        priority: {
          title: 'Investor Priority',
          description: 'Maintaining investor interests as top priority in all activities',
          hebrew: 'עדיפות למשקיע',
        },
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. All rights reserved.',
    },
  },
  fr: {
    common: {
      wealthstone: 'Wealthstone',
      simplyInvestSmart: 'Investir Intelligemment',
    },
    navigation: {
      home: 'Accueil',
      philosophy: 'Philosophie',
      investmentAreas: 'Domaines d\'Investissement',
      contact: 'Contact',
    },
    hero: {
      trustIndicator: 'Investissements Alternatifs',
      title: 'Investir Intelligemment',
      subtitle: 'Investissements Alternatifs Avancés',
      description: 'Société d\'investissement israélienne spécialisée dans les investissements alternatifs avec focus sur six principes fondamentaux guidant nos opérations.',
      cta: {
        investors: 'Portail Investisseurs',
        discovery: 'Portail Découverte',
      },
    },
    philosophy: {
      title: 'Six Principes Directeurs',
      subtitle: 'Notre philosophie est basée sur six principes fondamentaux qui guident chaque décision d\'investissement',
      principles: {
        experience: {
          title: 'Expérience',
          description: 'Années d\'expérience sur les marchés financiers et investissements alternatifs',
          hebrew: 'ניסיון',
        },
        professionalism: {
          title: 'Professionnalisme',
          description: 'Approche professionnelle et approfondie de chaque investissement',
          hebrew: 'מקצועיות',
        },
        uniqueness: {
          title: 'Unicité',
          description: 'Identifier et investir dans des opportunités uniques non disponibles aux investisseurs réguliers',
          hebrew: 'ייחודיות',
        },
        diversification: {
          title: 'Diversification',
          description: 'Diversification intelligente des investissements à travers différents secteurs et régions',
          hebrew: 'פיזור השקעות',
        },
        supervision: {
          title: 'Supervision',
          description: 'Surveillance étroite et contrôle continu de tous les investissements et risques',
          hebrew: 'פיקוח ובקרה',
        },
        priority: {
          title: 'Priorité Investisseur',
          description: 'Maintenir les intérêts des investisseurs comme priorité absolue',
          hebrew: 'עדיפות למשקיע',
        },
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. Tous droits réservés.',
    },
  },
  ru: {
    common: {
      wealthstone: 'Wealthstone',
      simplyInvestSmart: 'Просто Инвестируй Умно',
    },
    navigation: {
      home: 'Главная',
      philosophy: 'Философия',
      investmentAreas: 'Области Инвестиций',
      contact: 'Контакты',
    },
    hero: {
      trustIndicator: 'Альтернативные Инвестиции',
      title: 'Просто Инвестируй Умно',
      subtitle: 'Передовые Альтернативные Инвестиции',
      description: 'Израильская инвестиционная компания, специализирующаяся на альтернативных инвестициях с фокусом на шести основных принципах, направляющих нашу деятельность.',
      cta: {
        investors: 'Портал Инвесторов',
        discovery: 'Портал Открытий',
      },
    },
    philosophy: {
      title: 'Шесть Руководящих Принципов',
      subtitle: 'Наша философия основана на шести фундаментальных принципах, которые направляют каждое инвестиционное решение',
      principles: {
        experience: {
          title: 'Опыт',
          description: 'Многолетний опыт на финансовых рынках и альтернативных инвестициях',
          hebrew: 'ניסיון',
        },
        professionalism: {
          title: 'Профессионализм',
          description: 'Профессиональный и тщательный подход к каждой инвестиции',
          hebrew: 'מקצועיות',
        },
        uniqueness: {
          title: 'Уникальность',
          description: 'Выявление и инвестирование в уникальные возможности, недоступные обычным инвесторам',
          hebrew: 'ייחודיות',
        },
        diversification: {
          title: 'Диверсификация',
          description: 'Умная диверсификация инвестиций по различным секторам и географическим регионам',
          hebrew: 'פיזור השקעות',
        },
        supervision: {
          title: 'Надзор',
          description: 'Тщательный мониторинг и постоянный контроль всех инвестиций и рисков',
          hebrew: 'פיקוח ובקרה',
        },
        priority: {
          title: 'Приоритет Инвестора',
          description: 'Поддержание интересов инвестора как высшего приоритета во всех видах деятельности',
          hebrew: 'עדיפות למשקיע',
        },
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. Все права защищены.',
    },
  },
  zh: {
    common: {
      wealthstone: 'Wealthstone',
      simplyInvestSmart: '简单智能投资',
    },
    navigation: {
      home: '首页',
      philosophy: '理念',
      investmentAreas: '投资领域',
      contact: '联系我们',
    },
    hero: {
      trustIndicator: '另类投资',
      title: '简单智能投资',
      subtitle: '先进的另类投资',
      description: '以色列投资公司，专注于另类投资，遵循指导我们运营的六项基本原则。',
      cta: {
        investors: '投资者门户',
        discovery: '发现门户',
      },
    },
    philosophy: {
      title: '六项指导原则',
      subtitle: '我们的理念基于六项指导每个投资决策的基本原则',
      principles: {
        experience: {
          title: '经验',
          description: '在金融市场和另类投资方面的多年经验',
          hebrew: 'ניסיון',
        },
        professionalism: {
          title: '专业性',
          description: '对每项投资采取专业和彻底的方法',
          hebrew: 'מקצועיות',
        },
        uniqueness: {
          title: '独特性',
          description: '识别并投资普通投资者无法获得的独特机会',
          hebrew: 'ייחודיות',
        },
        diversification: {
          title: '多元化',
          description: '在不同行业和地理区域进行明智的投资多元化',
          hebrew: 'פיזור השקעות',
        },
        supervision: {
          title: '监督',
          description: '对所有投资和风险进行密切监控和持续控制',
          hebrew: 'פיקוח ובקרה',
        },
        priority: {
          title: '投资者优先',
          description: '在所有活动中将投资者利益作为最高优先级',
          hebrew: 'עדיפות למשקיע',
        },
      },
    },
    footer: {
      copyright: '© 2025 Wealthstone. 保留所有权利。',
    },
  },
};