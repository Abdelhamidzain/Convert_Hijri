import { Helmet } from 'react-helmet-async';
import DateConverter from '@/components/DateConverter';
import SEOContent from '@/components/SEOContent';

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>تحويل التاريخ الهجري - محول التاريخ من ميلادي إلى هجري والعكس</title>
        <meta 
          name="description" 
          content="أداة سريعة ودقيقة لتحويل التاريخ الهجري إلى ميلادي والعكس. حوّل أي تاريخ بسهولة واحصل على النتيجة فوراً. مثالية لمعرفة تواريخ رمضان والحج والأعياد الإسلامية." 
        />
        <meta 
          name="keywords" 
          content="تحويل التاريخ الهجري, التقويم الهجري, تحويل التاريخ من ميلادي إلى هجري, تحويل التاريخ من هجري إلى ميلادي, التاريخ اليوم هجري, تواريخ رمضان, تواريخ الحج, محول التاريخ, تاريخ هجري, تاريخ ميلادي, التقويم الإسلامي" 
        />
        <meta property="og:title" content="تحويل التاريخ الهجري - محول التاريخ من ميلادي إلى هجري" />
        <meta property="og:description" content="أداة سريعة ودقيقة لتحويل التاريخ الهجري إلى ميلادي والعكس. حوّل أي تاريخ بسهولة واحصل على النتيجة فوراً." />
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
              تحويل التاريخ الهجري
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
              أداة سريعة وسهلة لتحويل التاريخ بين التقويم الهجري والميلادي
              <br />
              <span className="text-primary">بدقة عالية وبدون إعلانات مزعجة</span>
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
              أداة تحويل التاريخ الهجري - مجانية وسريعة
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              التحويل يعتمد على التقويم الهجري الحسابي وقد يختلف بيوم أو يومين عن التقويم المعتمد على رؤية الهلال
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
