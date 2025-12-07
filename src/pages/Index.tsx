import { lazy, Suspense } from 'react';
import DateConverter from '@/components/DateConverter';

const SEOContent = lazy(() => import('@/components/SEOContent'));

const faqSchema = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"كيف أعرف تاريخ اليوم هجري؟","acceptedAnswer":{"@type":"Answer","text":"يظهر تاريخ اليوم هجري وميلادي تلقائياً في أعلى الصفحة."}},{"@type":"Question","name":"كيف أحول التاريخ من هجري لميلادي؟","acceptedAnswer":{"@type":"Answer","text":"اختر هجري إلى ميلادي ثم أدخل التاريخ الهجري واضغط تحويل."}}]}`;

const Index = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
    <div className="min-h-screen bg-background pattern-islamic" dir="rtl">
      <header className="pt-10 pb-6 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">تاريخ اليوم هجري - تحويل التاريخ الهجري</h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto">اعرف <strong>كم التاريخ الهجري</strong> اليوم وحوّل بين <strong>التقويم الهجري والميلادي</strong><br /><span className="text-primary font-medium">التقويم الهجري 1446 - سريع ودقيق</span></p>
        </div>
      </header>
      <main className="px-4 pb-12">
        <div className="container max-w-4xl mx-auto">
          <DateConverter />
          <Suspense fallback={null}><SEOContent /></Suspense>
        </div>
      </main>
      <footer className="border-t border-border/50 py-6 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">تحويل التاريخ الهجري | تاريخ اليوم هجري وميلادي | التقويم الهجري 1446</p>
        </div>
      </footer>
    </div>
  </>
);

export default Index;
