import { Moon, CheckCircle2, Zap, Globe, Shield, Clock, Calendar, Star, BookOpen } from 'lucide-react';

const SEOContent = () => {
  return (
    <section className="mt-16 space-y-12">
      {/* Quick Answer Box - High Volume Keywords */}
      <article className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-primary" />
          كم التاريخ الهجري اليوم؟
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          استخدم أداتنا أعلاه لمعرفة تاريخ اليوم هجري وميلادي بدقة. 
          نوفر لك أسرع طريقة لتحويل التاريخ من هجري لميلادي أو من ميلادي إلى هجري.
        </p>
      </article>

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
        <div className="prose prose-lg text-foreground/80 leading-relaxed space-y-4">
          <p>
            التقويم الهجري (أو التقويم الإسلامي) هو التقويم القمري الذي يعتمده المسلمون لتحديد المناسبات الدينية. 
            يُعرف أيضاً باسم التاريخ الهجري نسبة لهجرة النبي محمد ﷺ من مكة إلى المدينة المنورة عام 622 ميلادي.
          </p>
          <p>
            يتكون العام الهجري من 12 شهراً قمرياً، ويبلغ عدد أيامه 354 أو 355 يوماً. لذلك يختلف التاريخ الهجري مقابل الميلادي كل عام، 
            مما يجعل أداة تحويل التاريخ الهجري ضرورية لمعرفة التواريخ المهمة.
          </p>
          <p>
            يُستخدم التقويم الهجري 1446 حالياً، ونحن نستعد للانتقال إلى التقويم الهجري 1447. 
            تساعدك أداتنا في معرفة شهر كم هجري اليوم وشهر كم ميلادي.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">المناسبات الدينية المرتبطة بالتقويم الهجري:</h3>
          <ul className="list-none space-y-2 mt-4">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">شهر رمضان - شهر الصيام المبارك (الشهر التاسع هجري)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">عيد الفطر - أول أيام شهر شوال</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">موسم الحج - في شهر ذي الحجة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">عيد الأضحى - العاشر من ذي الحجة</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">المولد النبوي - 12 ربيع الأول</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">يوم عاشوراء - 10 محرم</span>
            </li>
          </ul>
        </div>
      </article>

      {/* Conversion Guide */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            كيفية تحويل التاريخ من هجري إلى ميلادي
          </h2>
        </div>
        <div className="prose prose-lg text-foreground/80 leading-relaxed space-y-4">
          <p>
            تحويل من هجري لميلادي أصبح سهلاً مع أداتنا المجانية. سواء كنت تريد تحويل تاريخ هجري إلى ميلادي 
            أو العكس (تحويل من ميلادي إلى هجري)، نوفر لك نتائج دقيقة وفورية.
          </p>
          <h3 className="text-lg font-semibold text-foreground mt-4">خطوات تحويل التاريخ:</h3>
          <ol className="list-decimal list-inside space-y-2 mr-4">
            <li>اختر نوع التحويل: ميلادي إلى هجري أو هجري إلى ميلادي</li>
            <li>أدخل التاريخ المراد تحويله (اليوم، الشهر، السنة)</li>
            <li>اضغط على زر "تحويل" للحصول على النتيجة فوراً</li>
            <li>سيظهر لك التاريخ الهجري أو الميلادي المقابل</li>
          </ol>
          <p className="mt-4">
            أداتنا تدعم تحويل العمر من هجري الى ميلادي أيضاً، وهي مفيدة لمعرفة تاريخ ميلادك بالتقويمين.
          </p>
        </div>
      </article>

      {/* Features Section */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          مميزات محول التاريخ الهجري
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">تحويل فوري وسريع</h3>
              <p className="text-foreground/70">
                تحويل التاريخ بضغطة زر واحدة بدون انتظار أو تحميل
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">دقة عالية (تقويم أم القرى)</h3>
              <p className="text-foreground/70">
                نستخدم خوارزمية التقويم الهجري المعتمدة في السعودية
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">يعمل بدون إنترنت</h3>
              <p className="text-foreground/70">
                بعد التحميل الأول، تعمل أداة تحويل هجري ميلادي على جهازك
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 rounded-xl bg-primary/10 h-fit">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">تحويل ثنائي الاتجاه</h3>
              <p className="text-foreground/70">
                هجري الى ميلادي أو ميلادي الى هجري بسهولة
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Hijri Months Reference */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">
          الأشهر الهجرية - التقويم الهجري 1446/1447
        </h2>
        <p className="text-foreground/70 mb-6">
          تعرف على الشهور الهجرية بالترتيب. معرفة الشهر الهجري الحالي مهمة لتتبع المناسبات الإسلامية.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { num: 1, name: 'محرم', note: 'بداية السنة الهجرية' },
            { num: 2, name: 'صفر', note: '' },
            { num: 3, name: 'ربيع الأول', note: 'المولد النبوي' },
            { num: 4, name: 'ربيع الآخر', note: '' },
            { num: 5, name: 'جمادى الأولى', note: '' },
            { num: 6, name: 'جمادى الآخرة', note: '' },
            { num: 7, name: 'رجب', note: 'الإسراء والمعراج' },
            { num: 8, name: 'شعبان', note: '' },
            { num: 9, name: 'رمضان', note: 'شهر الصيام' },
            { num: 10, name: 'شوال', note: 'عيد الفطر' },
            { num: 11, name: 'ذو القعدة', note: '' },
            { num: 12, name: 'ذو الحجة', note: 'الحج وعيد الأضحى' },
          ].map((month) => (
            <div
              key={month.num}
              className="p-4 rounded-xl bg-muted/50 border border-border/30 text-center hover:bg-primary/5 hover:border-primary/30 transition-colors duration-300"
            >
              <span className="block text-sm text-foreground/60 mb-1">
                الشهر {month.num}
              </span>
              <span className="block font-semibold text-foreground">
                {month.name}
              </span>
              {month.note && (
                <span className="block text-xs text-primary mt-1">
                  {month.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* FAQ Section for SEO */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          أسئلة شائعة عن تحويل التاريخ الهجري
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              كيف أعرف تاريخ اليوم هجري؟
            </h3>
            <p className="text-foreground/70">
              يظهر تاريخ اليوم هجري وميلادي تلقائياً في أعلى الصفحة. نعرض لك كم التاريخ الهجري اليوم بالأرقام واسم اليوم بالعربية.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              كيف أحول التاريخ من هجري لميلادي؟
            </h3>
            <p className="text-foreground/70">
              اختر "هجري ← ميلادي" ثم أدخل التاريخ الهجري (اليوم، الشهر، السنة) واضغط تحويل. ستحصل على التاريخ الميلادي فوراً.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              ما الفرق بين التاريخ الهجري والميلادي؟
            </h3>
            <p className="text-foreground/70">
              التقويم الهجري قمري (354-355 يوم) بينما التقويم الميلادي شمسي (365-366 يوم). لذلك التاريخ الهجري مقابل الميلادي يتغير كل سنة بفارق حوالي 11 يوماً.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              هل يمكنني تحويل تاريخ ميلادي إلى هجري لمعرفة عمري؟
            </h3>
            <p className="text-foreground/70">
              نعم! استخدم أداة تحويل التاريخ من ميلادي إلى هجري لمعرفة تاريخ ميلادك بالتقويم الهجري. يمكنك أيضاً تحويل العمر من هجري الى ميلادي.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              شهر كم هجري الآن؟ وشهر كم ميلادي؟
            </h3>
            <p className="text-foreground/70">
              نعرض لك الشهر الهجري والشهر الميلادي الحالي في أعلى المحول. حالياً نحن في التقويم الهجري 1446.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              هل الأداة دقيقة في التحويل؟
            </h3>
            <p className="text-foreground/70">
              نعم، نستخدم خوارزمية تقويم أم القرى المعتمدة في السعودية. تحويل هجري ميلادي دقيق جداً وقد يختلف يوم واحد عن رؤية الهلال الفعلية.
            </p>
          </div>
        </div>
      </article>

      {/* Year Calendars Reference */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">
          التقويم الهجري للسنوات
        </h2>
        <p className="text-foreground/70 mb-6">
          تصفح التقويم الهجري للسنوات المختلفة. من تقويم 1444 إلى التقويم الهجري 1447.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['1444', '1445', '1446', '1447'].map((year) => (
            <div
              key={year}
              className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center hover:bg-primary/10 transition-colors duration-300"
            >
              <span className="block text-sm text-foreground/60 mb-1">التقويم الهجري</span>
              <span className="block text-2xl font-bold text-primary">{year}</span>
              <span className="block text-xs text-foreground/60 mt-1">هـ</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default SEOContent;