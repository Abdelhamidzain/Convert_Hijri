import { lazy, Suspense } from 'react';
import DateConverter from '@/components/DateConverter';

// Lazy load SEO content - not needed for initial paint
const SEOContent = lazy(() => import('@/components/SEOContent'));

// Inline FAQ schema to avoid react-helmet-async dependency
const faqSchemaScript = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "كيف أعرف تاريخ اليوم هجري؟", "acceptedAnswer": {"@type": "Answer", "text": "يظهر تاريخ اليوم هجري وميلادي تلقائياً في أعلى الصفحة."}},
    {"@type": "Question", "name": "كيف أحول التاريخ من هجري لميلادي؟", "acceptedAnswer": {"@type": "Answer", "text": "اختر هجري إلى ميلادي ثم أدخل التاريخ الهجري واضغط تحويل."}},
    {"@type": "Question", "name": "ما الفرق بين التاريخ الهجري والميلادي؟", "acceptedAnswer": {"@type": "Answer", "text": "التقويم الهجري قمري (354-355 يوم) بينما الميلادي شمسي (365-366 يوم)."}}
  ]
}`;

const Index = () => {
  return (
    <>
      {/* Inject schema without react-helmet */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: faqSchemaScript }}
      />

      <div className="min-h-screen bg-background pattern-islamic" dir="rtl">
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
              <span className="text-primary font-medium">التقويم الهجري 1446 - سريع ودقيق وبدون إعلانات</span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 pb-16">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />
            
            {/* Lazy load SEO content after main converter */}
            <Suspense fallback={null}>
              <SEOContent />
            </Suspense>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              تحويل التاريخ الهجري | تاريخ اليوم هجري وميلادي | التقويم الهجري 1446
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              محول التاريخ من هجري لميلادي والعكس - التحويل يعتمد على التقويم الهجري الحسابي (أم القرى)
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
