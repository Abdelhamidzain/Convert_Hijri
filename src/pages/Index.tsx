import { lazy, Suspense } from 'react';

// Lazy load both components - DateConverter after first paint, SEO content even later
const DateConverter = lazy(() => import('@/components/DateConverter'));
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
            {/* Lazy load DateConverter - shows skeleton until ready */}
            <Suspense fallback={
              <div className="w-full max-w-2xl mx-auto">
                <div className="mb-8 p-5 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="h-6 bg-muted rounded animate-pulse mb-2 mx-auto w-48" />
                  <div className="h-8 bg-muted rounded animate-pulse mx-auto w-64" />
                </div>
                <div className="flex justify-center gap-3 mb-8">
                  <div className="h-12 w-32 bg-muted rounded-xl animate-pulse" />
                  <div className="h-12 w-12 bg-muted rounded-full animate-pulse" />
                  <div className="h-12 w-32 bg-muted rounded-xl animate-pulse" />
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/30">
                  <div className="h-14 bg-muted rounded-xl animate-pulse mb-4" />
                  <div className="h-14 bg-muted rounded-xl animate-pulse" />
                </div>
              </div>
            }>
              <DateConverter />
            </Suspense>
            
            {/* Below-fold SEO content with content-visibility optimization */}
            <div className="below-fold" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
              <Suspense fallback={null}>
                <SEOContent />
              </Suspense>
            </div>
          </div>
        </main>

        {/* Footer - below fold with content-visibility */}
        <footer className="border-t border-border/50 py-8 px-4 below-fold" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 100px' }}>
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
