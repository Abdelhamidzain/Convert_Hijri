import { Moon, CheckCircle2, Zap, Globe, Shield, Clock } from 'lucide-react';

const SEOContent = () => {
  return (
    <section className="mt-16 space-y-12">
      {/* What is Hijri Calendar */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Moon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            ما هو التقويم الهجري؟
          </h2>
        </div>
        <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
          <p>
            التقويم الهجري هو التقويم الإسلامي الذي يعتمد على دورة القمر، ويُستخدم لتحديد المناسبات الدينية الإسلامية المهمة. 
            بدأ هذا التقويم من هجرة النبي محمد ﷺ من مكة إلى المدينة المنورة عام 622 ميلادي.
          </p>
          <p>
            يتكون العام الهجري من 12 شهراً قمرياً، ويبلغ عدد أيامه 354 أو 355 يوماً، مما يجعله أقصر من العام الميلادي بحوالي 11 يوماً. 
            تُحدد بداية كل شهر هجري برؤية الهلال الجديد.
          </p>
          <p>
            يُستخدم التقويم الهجري في تحديد أوقات العبادات والمناسبات الدينية مثل:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span>شهر رمضان المبارك وموعد الصيام</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span>عيد الفطر وعيد الأضحى المبارك</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span>موسم الحج في شهر ذي الحجة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span>ذكرى المولد النبوي الشريف</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span>يوم عاشوراء في شهر محرم</span>
            </li>
          </ul>
        </div>
      </article>

      {/* Features Section */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          مميزات أداة تحويل التاريخ الهجري
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">سرعة فائقة</h3>
              <p className="text-muted-foreground">
                تحويل فوري للتاريخ بدون أي تأخير أو انتظار للتحميل
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">دقة عالية</h3>
              <p className="text-muted-foreground">
                نستخدم خوارزميات موثوقة لضمان دقة التحويل
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">يعمل بدون إنترنت</h3>
              <p className="text-muted-foreground">
                بعد التحميل الأول، يعمل التطبيق بالكامل على جهازك
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">تحويل ثنائي الاتجاه</h3>
              <p className="text-muted-foreground">
                حوّل من الميلادي للهجري أو العكس بسهولة
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Hijri Months Reference */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          أشهر التقويم الهجري
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { num: 1, name: 'محرم' },
            { num: 2, name: 'صفر' },
            { num: 3, name: 'ربيع الأول' },
            { num: 4, name: 'ربيع الآخر' },
            { num: 5, name: 'جمادى الأولى' },
            { num: 6, name: 'جمادى الآخرة' },
            { num: 7, name: 'رجب' },
            { num: 8, name: 'شعبان' },
            { num: 9, name: 'رمضان' },
            { num: 10, name: 'شوال' },
            { num: 11, name: 'ذو القعدة' },
            { num: 12, name: 'ذو الحجة' },
          ].map((month) => (
            <div
              key={month.num}
              className="p-4 rounded-xl bg-muted/50 border border-border/30 text-center hover:bg-primary/5 hover:border-primary/30 transition-colors duration-300"
            >
              <span className="block text-sm text-muted-foreground mb-1">
                الشهر {month.num}
              </span>
              <span className="block font-semibold text-foreground">
                {month.name}
              </span>
            </div>
          ))}
        </div>
      </article>

      {/* FAQ Section for SEO */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          أسئلة شائعة
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              كيف أحول التاريخ من ميلادي إلى هجري؟
            </h3>
            <p className="text-muted-foreground">
              اختر التاريخ الميلادي من الحقل المخصص، ثم اضغط على زر "تحويل" للحصول على التاريخ الهجري المقابل فوراً.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              هل الأداة دقيقة في التحويل؟
            </h3>
            <p className="text-muted-foreground">
              نعم، نستخدم خوارزمية التقويم الهجري الحسابي المعتمدة والتي توفر دقة عالية في التحويل بين التاريخين.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              هل يمكنني استخدام الأداة بدون اتصال بالإنترنت؟
            </h3>
            <p className="text-muted-foreground">
              نعم، بعد تحميل الصفحة لأول مرة، تعمل الأداة بالكامل على جهازك بدون الحاجة لاتصال بالإنترنت.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SEOContent;
