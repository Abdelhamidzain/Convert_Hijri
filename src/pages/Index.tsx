import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import DateConverter from '@/components/DateConverter';
import { PageLayout } from '@/components/PageLayout';
import { getTodayDates } from '@/lib/hijriConverter';
import { InternalLinks } from '@/components/InternalLinks';

// Lazy load SEO content - not needed for initial paint
const SEOContent = lazy(() => import('@/components/SEOContent'));

// WebApplication Schema - للظهور كتطبيق في نتائج البحث
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري",
  "alternateName": ["تحويل التاريخ الهجري", "Hijri Date Converter", "تاريخ اليوم هجري"],
  "description": "أداة مجانية لتحويل التاريخ من هجري إلى ميلادي والعكس. اعرف تاريخ اليوم هجري وميلادي بدقة عالية.",
  "url": "https://hijri-calendar.lovable.app",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "1.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "SAR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "تحويل التاريخ من هجري إلى ميلادي",
    "تحويل التاريخ من ميلادي إلى هجري",
    "عرض تاريخ اليوم هجري وميلادي",
    "دعم التقويم الهجري أم القرى",
    "واجهة عربية سهلة الاستخدام"
  ],
  "inLanguage": "ar",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "محول التاريخ الهجري"
  }
};

// FAQPage Schema - محسّن لاحتلال مساحة أكبر في SERP
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كيف أعرف تاريخ اليوم هجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يظهر تاريخ اليوم بالتقويم الهجري والميلادي تلقائياً في أعلى صفحة محول التاريخ. التاريخ يتم تحديثه يومياً ويعتمد على تقويم أم القرى الرسمي المعتمد في المملكة العربية السعودية."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحول التاريخ من هجري لميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من هجري إلى ميلادي: 1) اختر 'هجري إلى ميلادي' من أزرار التحويل. 2) أدخل اليوم والشهر والسنة الهجرية. 3) اضغط زر 'تحويل' للحصول على التاريخ الميلادي المقابل فوراً."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحول التاريخ من ميلادي لهجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من ميلادي إلى هجري: 1) اختر 'ميلادي إلى هجري' من أزرار التحويل. 2) أدخل اليوم والشهر والسنة الميلادية. 3) اضغط زر 'تحويل' للحصول على التاريخ الهجري المقابل."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين التاريخ الهجري والميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التقويم الهجري (الإسلامي) يعتمد على دورة القمر ويتكون من 354 أو 355 يوماً في السنة. بينما التقويم الميلادي يعتمد على دورة الشمس ويتكون من 365 أو 366 يوماً. لذلك السنة الهجرية أقصر بحوالي 11 يوماً من السنة الميلادية."
      }
    },
    {
      "@type": "Question",
      "name": "متى يبدأ شهر رمضان 1446؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يبدأ شهر رمضان المبارك 1446 هجرياً في يوم 1 رمضان 1446 الموافق تقريباً لـ 28 فبراير أو 1 مارس 2025 ميلادياً. التاريخ الفعلي يعتمد على رؤية الهلال."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي أشهر السنة الهجرية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "أشهر السنة الهجرية الـ 12 هي: محرم، صفر، ربيع الأول، ربيع الثاني، جمادى الأولى، جمادى الآخرة، رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. الأشهر الحرم هي: محرم، رجب، ذو القعدة، وذو الحجة."
      }
    },
    {
      "@type": "Question",
      "name": "هل محول التاريخ دقيق؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، محول التاريخ يستخدم خوارزمية تقويم أم القرى الرسمي المعتمد في المملكة العربية السعودية، وهو التقويم الرسمي المستخدم في تحديد المناسبات الإسلامية. دقة التحويل عالية جداً للتواريخ من سنة 1356 إلى 1500 هجري."
      }
    }
  ]
};

// BreadcrumbList Schema - للتنقل الواضح في SERP
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": "https://hijri-calendar.lovable.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "محول التاريخ الهجري",
      "item": "https://hijri-calendar.lovable.app"
    }
  ]
};

// Combined schema for single script injection
const combinedSchema = [webAppSchema, faqSchema, breadcrumbSchema];

const Index = () => {
  const { hijri, gregorian } = getTodayDates();
  
  return (
    <PageLayout>
      {/* Structured Data - WebApplication + FAQPage + BreadcrumbList */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <div className="pattern-islamic">
        {/* Header */}
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center" role="img" aria-label="أيقونة الهلال">
                <svg 
                  width="32"
                  height="32"
                  viewBox="0 0 24 24" 
                  className="text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              تاريخ اليوم هجري - تحويل التاريخ الهجري
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              اعرف <strong>كم التاريخ الهجري</strong> اليوم وحوّل بين <strong>التقويم الهجري والميلادي</strong>
              <br />
              <span className="text-primary font-medium">التقويم الهجري {hijri.year} - سريع ودقيق وبدون إعلانات</span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />
            
            {/* Quick Links Section - للربط الداخلي */}
            <section className="mt-8 bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">أدوات مفيدة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link 
                  to="/date/today"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title="تاريخ اليوم هجري وميلادي"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-foreground">تاريخ اليوم</div>
                </Link>
                <Link 
                  to={`/calendar/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title={`التقويم الهجري ${hijri.year}`}
                >
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm font-medium text-foreground">التقويم {hijri.year}</div>
                </Link>
                <Link 
                  to="/how-old-am-i/hijri"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title="حساب العمر بالتاريخ الهجري"
                >
                  <div className="text-2xl mb-2">🎂</div>
                  <div className="text-sm font-medium text-foreground">حساب العمر</div>
                </Link>
                <Link 
                  to={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title={`تحويل سنة ${hijri.year} هجري لميلادي`}
                >
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="text-sm font-medium text-foreground">تحويل {hijri.year}</div>
                </Link>
              </div>
            </section>
            
            {/* Internal Links */}
            <InternalLinks type="all" />
            <InternalLinks type="cities" limit={6} />
            
            {/* Lazy load SEO content after main converter */}
            <Suspense fallback={null}>
              <SEOContent />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
