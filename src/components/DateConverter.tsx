import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  gregorianToHijri, 
  hijriToGregorian, 
  formatHijriDate, 
  formatGregorianDate,
  getTodayDates,
  getHijriMonths,
  isValidHijriDate,
  type HijriDate,
  type GregorianDate
} from '@/lib/hijriConverter';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

type ConversionMode = 'toHijri' | 'toGregorian';

const DateConverter = () => {
  const [mode, setMode] = useState<ConversionMode>('toHijri');
  const [gregorianInput, setGregorianInput] = useState('');
  const [hijriDay, setHijriDay] = useState('');
  const [hijriMonth, setHijriMonth] = useState('');
  const [hijriYear, setHijriYear] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [resultDetails, setResultDetails] = useState<HijriDate | GregorianDate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const hijriMonths = getHijriMonths();

  // Set default date to today
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setGregorianInput(formattedDate);
    
    const { hijri } = getTodayDates();
    setHijriDay(hijri.day.toString());
    setHijriMonth(hijri.month.toString());
    setHijriYear(hijri.year.toString());
  }, []);

  const handleConvert = () => {
    setError(null);
    setIsConverting(true);

    setTimeout(() => {
      try {
        if (mode === 'toHijri') {
          if (!gregorianInput) {
            setError('يرجى اختيار تاريخ ميلادي');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          const [year, month, day] = gregorianInput.split('-').map(Number);
          const hijri = gregorianToHijri(year, month, day);
          setResult(formatHijriDate(hijri));
          setResultDetails(hijri);
        } else {
          const day = parseInt(hijriDay);
          const month = parseInt(hijriMonth);
          const year = parseInt(hijriYear);

          if (!day || !month || !year) {
            setError('يرجى إدخال جميع حقول التاريخ الهجري');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          if (!isValidHijriDate(year, month, day)) {
            setError('التاريخ الهجري غير صحيح');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          const gregorian = hijriToGregorian(year, month, day);
          setResult(formatGregorianDate(gregorian));
          setResultDetails(gregorian);
        }
      } catch {
        setError('حدث خطأ في التحويل. يرجى التحقق من التاريخ المدخل.');
        setResult(null);
        setResultDetails(null);
      }
      setIsConverting(false);
    }, 300);
  };

  const toggleMode = () => {
    setMode(mode === 'toHijri' ? 'toGregorian' : 'toHijri');
    setResult(null);
    setResultDetails(null);
    setError(null);
  };

  const { hijri: todayHijri, gregorian: todayGregorian } = getTodayDates();

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Today's Date Display - High Volume Keywords */}
      <div className="mb-8 p-5 rounded-xl bg-secondary/50 border border-border/50 text-center">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">تاريخ اليوم هجري وميلادي</h2>
        <p className="text-xl font-bold text-foreground">
          {formatHijriDate(todayHijri)}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          التاريخ الميلادي: {formatGregorianDate(todayGregorian)}
        </p>
        <p className="text-xs text-primary mt-2">
          التقويم الهجري {todayHijri.year} | شهر {todayHijri.month} هجري
        </p>
      </div>

      {/* Mode Toggle */}
      <nav className="flex items-center justify-center gap-3 md:gap-4 mb-8" aria-label="اختيار نوع التحويل">
        <button
          onClick={() => setMode('toHijri')}
          className={`min-w-[120px] min-h-[48px] px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            mode === 'toHijri'
              ? 'bg-primary text-primary-foreground shadow-card'
              : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
          aria-pressed={mode === 'toHijri'}
        >
          ميلادي ← هجري
        </button>
        <button
          onClick={toggleMode}
          className="min-w-[48px] min-h-[48px] p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
          aria-label="تبديل اتجاه التحويل"
        >
          <ArrowLeftRight className="w-5 h-5 text-foreground" aria-hidden="true" />
        </button>
        <button
          onClick={() => setMode('toGregorian')}
          className={`min-w-[120px] min-h-[48px] px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            mode === 'toGregorian'
              ? 'bg-primary text-primary-foreground shadow-card'
              : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
          }`}
          aria-pressed={mode === 'toGregorian'}
        >
          هجري ← ميلادي
        </button>
      </nav>

      {/* Input Section */}
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/30">
        {mode === 'toHijri' ? (
          <div className="space-y-4">
            <label htmlFor="gregorian-date" className="block text-lg font-medium text-foreground mb-2">
              <span className="inline-block w-5 h-5 ml-2 text-primary" aria-hidden="true">📅</span>
              التاريخ الميلادي
            </label>
            <input
              type="date"
              id="gregorian-date"
              value={gregorianInput}
              onChange={(e) => setGregorianInput(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-background border-2 border-input text-foreground text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              dir="ltr"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block text-lg font-medium text-foreground mb-2">
              <span className="inline-block w-5 h-5 ml-2 text-primary" aria-hidden="true">🌙</span>
              التاريخ الهجري
            </label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="hijri-day" className="block text-sm text-muted-foreground mb-1">
                  اليوم
                </label>
                <input
                  type="number"
                  id="hijri-day"
                  min="1"
                  max="30"
                  value={hijriDay}
                  onChange={(e) => setHijriDay(e.target.value)}
                  placeholder="١"
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input text-foreground text-center text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="hijri-month" className="block text-sm text-muted-foreground mb-1">
                  الشهر
                </label>
                <select
                  id="hijri-month"
                  value={hijriMonth}
                  onChange={(e) => setHijriMonth(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl bg-background border-2 border-input text-foreground text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="">اختر</option>
                  {hijriMonths.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="hijri-year" className="block text-sm text-muted-foreground mb-1">
                  السنة
                </label>
                <input
                  type="number"
                  id="hijri-year"
                  min="1"
                  max="1500"
                  value={hijriYear}
                  onChange={(e) => setHijriYear(e.target.value)}
                  placeholder="١٤٤٦"
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input text-foreground text-center text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Convert Button */}
        <Button
          onClick={handleConvert}
          variant="converter"
          size="xl"
          className="w-full mt-6 min-h-[56px]"
          disabled={isConverting}
          aria-busy={isConverting}
        >
          {isConverting ? (
            <span>جارٍ التحويل...</span>
          ) : (
            <>
              <Sparkles className="w-5 h-5 ml-2" aria-hidden="true" />
              تحويل
            </>
          )}
        </Button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Result Display */}
        {result && !error && (
          <div className="mt-6 p-6 rounded-xl bg-primary/5 border-2 border-primary/20 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">
              {mode === 'toHijri' ? 'التاريخ الهجري' : 'التاريخ الميلادي'}
            </p>
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">
              {result}
            </p>
            {resultDetails && (
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                  <span>اليوم: {resultDetails.day}</span>
                  <span>الشهر: {resultDetails.month}</span>
                  <span>السنة: {resultDetails.year}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateConverter;
