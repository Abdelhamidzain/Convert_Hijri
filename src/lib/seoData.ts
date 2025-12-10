// SEO Data and utilities for programmatic pages

export const PRIMARY_KEYWORDS = [
  'تحويل التاريخ الهجري',
  'تحويل التاريخ من ميلادي لهجري',
  'تحويل التاريخ من هجري الى ميلادي',
  'تحويل التاريخ من ميلادي الى هجري',
  'محول التاريخ الهجري',
  'حساب العمر بالهجري',
  'التقويم الهجري',
  'تاريخ اليوم هجري'
];

export const CITIES = [
  { slug: 'riyadh', name: 'الرياض', country: 'السعودية' },
  { slug: 'jeddah', name: 'جدة', country: 'السعودية' },
  { slug: 'mecca', name: 'مكة المكرمة', country: 'السعودية' },
  { slug: 'medina', name: 'المدينة المنورة', country: 'السعودية' },
  { slug: 'dubai', name: 'دبي', country: 'الإمارات' },
  { slug: 'abu-dhabi', name: 'أبو ظبي', country: 'الإمارات' },
  { slug: 'cairo', name: 'القاهرة', country: 'مصر' },
  { slug: 'alexandria', name: 'الإسكندرية', country: 'مصر' },
  { slug: 'amman', name: 'عمّان', country: 'الأردن' },
  { slug: 'kuwait', name: 'الكويت', country: 'الكويت' },
  { slug: 'doha', name: 'الدوحة', country: 'قطر' },
  { slug: 'manama', name: 'المنامة', country: 'البحرين' },
  { slug: 'muscat', name: 'مسقط', country: 'عُمان' },
  { slug: 'beirut', name: 'بيروت', country: 'لبنان' },
  { slug: 'baghdad', name: 'بغداد', country: 'العراق' },
];

export const HIJRI_YEAR_RANGE = {
  start: 1440,
  end: 1460
};

export const GREGORIAN_YEAR_RANGE = {
  start: 2018,
  end: 2040
};

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  canonical: string;
}

export function generateCalendarYearSEO(hijriYear: number): PageSEO {
  return {
    title: `التقويم الهجري ${hijriYear} - تحويل التاريخ الهجري للميلادي`,
    description: `التقويم الهجري لعام ${hijriYear} هـ كامل مع تحويل كل شهر للتاريخ الميلادي. جدول شامل لأشهر السنة الهجرية ${hijriYear} ومقابلها بالميلادي.`,
    keywords: [`تقويم ${hijriYear} هجري`, `السنة الهجرية ${hijriYear}`, 'تحويل التاريخ الهجري', 'التقويم الهجري'],
    h1: `التقويم الهجري لعام ${hijriYear} هـ`,
    intro: `استعرض التقويم الهجري الكامل لعام ${hijriYear} هجري مع تحويل دقيق لكل تاريخ إلى التقويم الميلادي. يتضمن هذا الجدول جميع أشهر السنة الهجرية ${hijriYear} مع المناسبات الإسلامية المهمة.`,
    canonical: `/calendar/${hijriYear}`
  };
}

export function generateHijriToGregorianSEO(year: number): PageSEO {
  return {
    title: `تحويل سنة ${year} هجري إلى ميلادي - محول التاريخ`,
    description: `حول أي تاريخ من سنة ${year} هجري إلى التاريخ الميلادي المقابل. أداة دقيقة لتحويل التواريخ الهجرية لعام ${year} هـ.`,
    keywords: [`تحويل ${year} هجري`, 'تحويل التاريخ من هجري الى ميلادي', `سنة ${year} هجري بالميلادي`],
    h1: `تحويل سنة ${year} هجري إلى ميلادي`,
    intro: `استخدم أداة تحويل التاريخ الهجري لتحويل أي يوم من سنة ${year} هجري إلى التاريخ الميلادي المقابل. الأداة تعتمد على خوارزمية أم القرى الدقيقة.`,
    canonical: `/convert/hijri-to-gregorian/${year}`
  };
}

export function generateGregorianToHijriSEO(year: number): PageSEO {
  return {
    title: `تحويل سنة ${year} ميلادي إلى هجري - محول التاريخ`,
    description: `حول أي تاريخ من سنة ${year} ميلادي إلى التاريخ الهجري المقابل. أداة دقيقة لتحويل التواريخ الميلادية لعام ${year} م.`,
    keywords: [`تحويل ${year} ميلادي`, 'تحويل التاريخ من ميلادي لهجري', `سنة ${year} ميلادي بالهجري`],
    h1: `تحويل سنة ${year} ميلادي إلى هجري`,
    intro: `استخدم أداة تحويل التاريخ الميلادي لتحويل أي يوم من سنة ${year} ميلادي إلى التاريخ الهجري المقابل. حساب دقيق معتمد على التقويم الإسلامي.`,
    canonical: `/convert/gregorian-to-hijri/${year}`
  };
}

export function generateTodayDateSEO(): PageSEO {
  return {
    title: 'تاريخ اليوم هجري وميلادي - التاريخ الهجري اليوم',
    description: 'ما هو تاريخ اليوم بالهجري والميلادي؟ اعرف التاريخ الهجري اليوم والتاريخ الميلادي المقابل مع معلومات عن اليوم والشهر الهجري الحالي.',
    keywords: ['تاريخ اليوم هجري', 'التاريخ الهجري اليوم', 'اليوم كم هجري', 'تاريخ اليوم بالهجري'],
    h1: 'تاريخ اليوم بالهجري والميلادي',
    intro: 'تعرف على تاريخ اليوم الهجري والميلادي بدقة. صفحة محدثة يومياً تعرض التاريخ الهجري الحالي مع معلومات تفصيلية عن الشهر الهجري والمناسبات الإسلامية.',
    canonical: '/date/today'
  };
}

export function generateCityDateSEO(citySlug: string): PageSEO {
  const city = CITIES.find(c => c.slug === citySlug);
  const cityName = city?.name || citySlug;
  const country = city?.country || '';
  
  return {
    title: `تاريخ اليوم في ${cityName} هجري وميلادي`,
    description: `تاريخ اليوم في ${cityName}${country ? ` - ${country}` : ''} بالتقويم الهجري والميلادي. اعرف التاريخ الهجري اليوم في ${cityName} مع أوقات الصلاة.`,
    keywords: [`تاريخ اليوم في ${cityName}`, `التاريخ الهجري في ${cityName}`, `${cityName} تاريخ اليوم`],
    h1: `تاريخ اليوم في ${cityName}`,
    intro: `تعرف على تاريخ اليوم الهجري والميلادي في ${cityName}${country ? ` - ${country}` : ''}. صفحة محدثة تلقائياً تعرض التاريخ الحالي مع معلومات محلية.`,
    canonical: `/date-today/${citySlug}`
  };
}

export function generateAgeCalculatorHijriSEO(): PageSEO {
  return {
    title: 'حساب العمر بالهجري - كم عمري بالتاريخ الهجري',
    description: 'احسب عمرك بالتاريخ الهجري بدقة. أدخل تاريخ ميلادك الهجري واعرف عمرك بالسنوات والأشهر والأيام الهجرية.',
    keywords: ['حساب العمر بالهجري', 'كم عمري بالهجري', 'حاسبة العمر الهجري', 'العمر بالتقويم الهجري'],
    h1: 'حاسبة العمر بالتاريخ الهجري',
    intro: 'احسب عمرك الدقيق بالتقويم الهجري. أدخل تاريخ ميلادك بالهجري أو الميلادي واحصل على عمرك بالسنوات والأشهر والأيام الهجرية مع تفاصيل دقيقة.',
    canonical: '/how-old-am-i/hijri'
  };
}

export function generateAgeCalculatorGregorianSEO(): PageSEO {
  return {
    title: 'حساب العمر بالميلادي - كم عمري بالتاريخ الميلادي',
    description: 'احسب عمرك بالتاريخ الميلادي بدقة. أدخل تاريخ ميلادك واعرف عمرك بالسنوات والأشهر والأيام مع تحويل للتاريخ الهجري.',
    keywords: ['حساب العمر', 'كم عمري', 'حاسبة العمر', 'حساب العمر بالميلادي'],
    h1: 'حاسبة العمر بالتاريخ الميلادي',
    intro: 'احسب عمرك الدقيق بالتقويم الميلادي. أدخل تاريخ ميلادك واحصل على عمرك بالسنوات والأشهر والأيام مع تحويل تلقائي للعمر بالهجري.',
    canonical: '/how-old-am-i/gregorian'
  };
}

// Generate all programmatic routes for sitemap
export function getAllProgrammaticRoutes(): string[] {
  const routes: string[] = [
    '/',
    '/date/today',
    '/how-old-am-i/hijri',
    '/how-old-am-i/gregorian'
  ];
  
  // Calendar year pages
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/calendar/${year}`);
  }
  
  // Hijri to Gregorian conversion pages
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/convert/hijri-to-gregorian/${year}`);
  }
  
  // Gregorian to Hijri conversion pages
  for (let year = GREGORIAN_YEAR_RANGE.start; year <= GREGORIAN_YEAR_RANGE.end; year++) {
    routes.push(`/convert/gregorian-to-hijri/${year}`);
  }
  
  // City date pages
  CITIES.forEach(city => {
    routes.push(`/date-today/${city.slug}`);
  });
  
  return routes;
}

// FAQ data for different page types
export const FAQ_DATA = {
  general: [
    {
      question: 'كيف أحول التاريخ من هجري لميلادي؟',
      answer: 'لتحويل التاريخ من هجري لميلادي، أدخل التاريخ الهجري (اليوم والشهر والسنة) في الأداة واضغط على زر التحويل. ستحصل فوراً على التاريخ الميلادي المقابل.'
    },
    {
      question: 'ما الفرق بين السنة الهجرية والميلادية؟',
      answer: 'السنة الهجرية تعتمد على دورة القمر وتتكون من 354 أو 355 يوماً، بينما السنة الميلادية تعتمد على دورة الشمس وتتكون من 365 أو 366 يوماً. لذلك السنة الهجرية أقصر بحوالي 11 يوماً.'
    },
    {
      question: 'متى يبدأ رمضان هذا العام؟',
      answer: 'يبدأ شهر رمضان عند رؤية هلال الشهر التاسع من التقويم الهجري. استخدم أداة التحويل لمعرفة التاريخ الميلادي المتوقع لبداية رمضان.'
    },
    {
      question: 'كيف أحسب عمري بالتاريخ الهجري؟',
      answer: 'لحساب عمرك بالهجري، أدخل تاريخ ميلادك في حاسبة العمر وستحصل على عمرك بالسنوات والأشهر والأيام الهجرية مع التحويل للميلادي.'
    },
    {
      question: 'هل التحويل دقيق 100%؟',
      answer: 'نعم، نستخدم خوارزمية أم القرى المعتمدة في المملكة العربية السعودية والتي تعتبر المرجع الرسمي للتقويم الهجري.'
    },
    {
      question: 'ما هي أشهر السنة الهجرية؟',
      answer: 'أشهر السنة الهجرية هي: محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة.'
    },
    {
      question: 'كم يوم في الشهر الهجري؟',
      answer: 'الأشهر الهجرية تتناوب بين 29 و30 يوماً. الأشهر الفردية (محرم، ربيع الأول، إلخ) فيها 30 يوماً، والأشهر الزوجية فيها 29 يوماً، ما عدا ذو الحجة في السنة الكبيسة يكون 30 يوماً.'
    }
  ],
  ageCalculator: [
    {
      question: 'كيف أحسب عمري بالهجري من تاريخ ميلادي ميلادي؟',
      answer: 'أدخل تاريخ ميلادك بالميلادي في الحاسبة وستقوم تلقائياً بتحويله للهجري وحساب عمرك بالتقويمين.'
    },
    {
      question: 'لماذا عمري بالهجري أكبر من عمري بالميلادي؟',
      answer: 'لأن السنة الهجرية أقصر من السنة الميلادية بحوالي 11 يوماً، فإن عدد السنوات الهجرية التي عشتها أكبر من عدد السنوات الميلادية.'
    },
    {
      question: 'هل يمكنني حساب عمري بالأيام؟',
      answer: 'نعم، حاسبة العمر تعطيك عمرك الدقيق بالسنوات والأشهر والأيام، بل وحتى بالساعات إذا أردت.'
    }
  ],
  calendar: [
    {
      question: 'كيف أعرف أي يوم من الأسبوع يوافق تاريخ معين؟',
      answer: 'استخدم جدول التقويم الهجري لمعرفة أيام الأسبوع لأي تاريخ. كل خلية في الجدول تظهر اليوم الهجري والميلادي المقابل.'
    },
    {
      question: 'متى تبدأ المناسبات الإسلامية هذا العام؟',
      answer: 'راجع التقويم الهجري للسنة الحالية لمعرفة تواريخ المناسبات الإسلامية مثل رمضان والعيدين ويوم عرفة وغيرها.'
    }
  ]
};
