import { useState, useEffect, memo } from 'react';
import { gregorianToHijri, hijriToGregorian, formatHijriDate, formatGregorianDate, getTodayDates, getHijriMonths, isValidHijriDate, type HijriDate, type GregorianDate } from '@/lib/hijriConverter';

type Mode = 'toHijri' | 'toGregorian';

const ArrowsIcon = memo(() => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>);
const SparklesIcon = memo(() => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-1.5"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>);

const DateConverter = () => {
  const [mode, setMode] = useState<Mode>('toHijri');
  const [gregorianInput, setGregorianInput] = useState('');
  const [hijriDay, setHijriDay] = useState('');
  const [hijriMonth, setHijriMonth] = useState('');
  const [hijriYear, setHijriYear] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [resultDetails, setResultDetails] = useState<HijriDate | GregorianDate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const months = getHijriMonths();
  const { hijri: todayH, gregorian: todayG } = getTodayDates();

  useEffect(() => {
    const t = new Date();
    setGregorianInput(t.toISOString().split('T')[0]);
    setHijriDay(todayH.day.toString());
    setHijriMonth(todayH.month.toString());
    setHijriYear(todayH.year.toString());
  }, [todayH.day, todayH.month, todayH.year]);

  const convert = () => {
    setError(null);
    setBusy(true);
    requestAnimationFrame(() => {
      try {
        if (mode === 'toHijri') {
          if (!gregorianInput) { setError('يرجى اختيار تاريخ'); setResult(null); setResultDetails(null); setBusy(false); return; }
          const [y, m, d] = gregorianInput.split('-').map(Number);
          const h = gregorianToHijri(y, m, d);
          setResult(formatHijriDate(h)); setResultDetails(h);
        } else {
          const d = +hijriDay, m = +hijriMonth, y = +hijriYear;
          if (!d || !m || !y) { setError('يرجى إدخال جميع الحقول'); setResult(null); setResultDetails(null); setBusy(false); return; }
          if (!isValidHijriDate(y, m, d)) { setError('التاريخ غير صحيح'); setResult(null); setResultDetails(null); setBusy(false); return; }
          const g = hijriToGregorian(y, m, d);
          setResult(formatGregorianDate(g)); setResultDetails(g);
        }
      } catch { setError('خطأ في التحويل'); setResult(null); setResultDetails(null); }
      setBusy(false);
    });
  };

  const toggle = () => { setMode(m => m === 'toHijri' ? 'toGregorian' : 'toHijri'); setResult(null); setResultDetails(null); setError(null); };

  const btn = "min-w-[100px] min-h-[44px] px-3 py-2 rounded-xl font-medium text-sm transition-colors";
  const on = "bg-primary text-primary-foreground";
  const off = "bg-secondary text-secondary-foreground";

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border/50 text-center">
        <p className="text-xs font-medium text-muted-foreground mb-1">تاريخ اليوم هجري وميلادي</p>
        <p className="text-lg font-bold text-foreground">{formatHijriDate(todayH)}</p>
        <p className="text-xs text-muted-foreground mt-1">الميلادي: {formatGregorianDate(todayG)}</p>
      </div>

      <nav className="flex items-center justify-center gap-2 mb-6">
        <button onClick={() => setMode('toHijri')} className={`${btn} ${mode === 'toHijri' ? on : off}`}>ميلادي ← هجري</button>
        <button onClick={toggle} className="min-w-[44px] min-h-[44px] p-2 rounded-full bg-secondary"><ArrowsIcon /></button>
        <button onClick={() => setMode('toGregorian')} className={`${btn} ${mode === 'toGregorian' ? on : off}`}>هجري ← ميلادي</button>
      </nav>

      <div className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] border border-border/30">
        {mode === 'toHijri' ? (
          <div>
            <label htmlFor="gd" className="block text-sm font-medium mb-2">📅 التاريخ الميلادي</label>
            <input type="date" id="gd" value={gregorianInput} onChange={e => setGregorianInput(e.target.value)} className="w-full px-3 py-3 rounded-lg bg-background border-2 border-input text-base focus:border-primary outline-none" dir="ltr" />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium mb-2">🌙 التاريخ الهجري</label>
            <div className="grid grid-cols-3 gap-3">
              <div><label htmlFor="hd" className="block text-xs text-muted-foreground mb-1">اليوم</label><input type="number" id="hd" min="1" max="30" value={hijriDay} onChange={e => setHijriDay(e.target.value)} className="w-full px-2 py-2.5 rounded-lg bg-background border-2 border-input text-center focus:border-primary outline-none" /></div>
              <div><label htmlFor="hm" className="block text-xs text-muted-foreground mb-1">الشهر</label><select id="hm" value={hijriMonth} onChange={e => setHijriMonth(e.target.value)} className="w-full px-2 py-2.5 rounded-lg bg-background border-2 border-input focus:border-primary outline-none"><option value="">اختر</option>{months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}</select></div>
              <div><label htmlFor="hy" className="block text-xs text-muted-foreground mb-1">السنة</label><input type="number" id="hy" min="1" max="1500" value={hijriYear} onChange={e => setHijriYear(e.target.value)} className="w-full px-2 py-2.5 rounded-lg bg-background border-2 border-input text-center focus:border-primary outline-none" /></div>
            </div>
          </div>
        )}

        <button onClick={convert} disabled={busy} className="w-full mt-5 min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold flex items-center justify-center gap-1 shadow-[var(--shadow-card)] disabled:opacity-50">
          {busy ? 'جارٍ...' : <><SparklesIcon />تحويل</>}
        </button>

        {error && <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-center text-sm animate-fade-in">{error}</div>}

        {result && !error && (
          <div className="mt-4 p-4 rounded-lg bg-primary/5 border-2 border-primary/20 text-center animate-fade-in">
            <p className="text-xs text-muted-foreground mb-1">{mode === 'toHijri' ? 'التاريخ الهجري' : 'التاريخ الميلادي'}</p>
            <p className="text-xl font-bold text-primary">{result}</p>
            {resultDetails && <p className="mt-2 text-xs text-muted-foreground">{resultDetails.day}/{resultDetails.month}/{resultDetails.year}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateConverter;
