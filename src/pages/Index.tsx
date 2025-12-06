import { Helmet } from 'react-helmet-async';
import DateConverter from '@/components/DateConverter';
import SEOContent from '@/components/SEOContent';

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>تاريخ اليوم هجري | تحويل التاريخ الهجري - التقويم الهجري 1446</title>
        <meta 
          name="description" 
          content="تاريخ اليوم هجري وميلادي - أداة تحويل التاريخ من هجري لميلادي والعكس. اعرف كم التاريخ الهجري اليوم بدقة. التقويم الهجري 1446 - محول التاريخ الأسرع والأدق." 
        />
        <meta 
          name="keywords" 
          content="تاريخ اليوم هجري, التاريخ الهجري, تحويل التاريخ, تاريخ اليوم ميلادي, التقويم الهجري, تحويل من هجري لميلادي, تحويل من هجري الى ميلادي, التاريخ الميلادي, تحويل التاريخ الهجري, محول التاريخ, تحويل التاريخ من هجري الى ميلادي, كم تاريخ اليوم, تاريخ هجري, التقويم الهجري 1446, تقويم هجري, كم التاريخ هجري, هجري ميلادي, تاريخ ميلادي, التقويم الهجري 1447, شهر كم هجري, تحويل هجري ميلادي" 
        />
        <meta property="og:title" content="تاريخ اليوم هجري | تحويل التاريخ الهجري - التقويم الهجري" />
        <meta property="og:description" content="اعرف تاريخ اليوم هجري وميلادي. أداة تحويل التاريخ من هجري لميلادي والعكس بسرعة ودقة عالية. التقويم الهجري 1446." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="تحويل التاريخ الهجري" />
        <meta property="og:locale" content="ar_AR" />
        <link rel="canonical" href="https://hijri-converter.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background pattern-islamic" dir="rtl">
        {/* Header */}
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-fade-in">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 animate-fade-in">
              تاريخ اليوم هجري - تحويل التاريخ الهجري
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              اعرف <strong>كم التاريخ الهجري</strong> اليوم وحوّل بين <strong>التقويم الهجري والميلادي</strong>
              <br />
              <span className="text-primary">التقويم الهجري 1446 - سريع ودقيق وبدون إعلانات</span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 pb-16">
          <div className="container max-w-4xl mx-auto">
            <div className="animate-fade-in animation-delay-400">
              <DateConverter />
            </div>
            
            <SEOContent />
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
