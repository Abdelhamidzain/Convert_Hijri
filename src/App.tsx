import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load programmatic pages for performance
const TodayDate = lazy(() => import("./pages/TodayDate"));
const CalendarYear = lazy(() => import("./pages/CalendarYear"));
const HijriToGregorianYear = lazy(() => import("./pages/HijriToGregorianYear"));
const GregorianToHijriYear = lazy(() => import("./pages/GregorianToHijriYear"));
const AgeCalculatorHijri = lazy(() => import("./pages/AgeCalculatorHijri"));
const AgeCalculatorGregorian = lazy(() => import("./pages/AgeCalculatorGregorian"));
const CityDate = lazy(() => import("./pages/CityDate"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Trend-jacking pages
const SalaryDateGregorian = lazy(() => import("./pages/SalaryDateGregorian"));
const SalaryDateHijri = lazy(() => import("./pages/SalaryDateHijri"));
const WhiteDays = lazy(() => import("./pages/WhiteDays"));
const HijriMonthStart = lazy(() => import("./pages/HijriMonthStart"));
const IslamicEvents = lazy(() => import("./pages/IslamicEvents"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
      <div className="text-muted-foreground">جارٍ التحميل...</div>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/date/today" element={<Suspense fallback={<PageLoader />}><TodayDate /></Suspense>} />
      <Route path="/calendar/:year" element={<Suspense fallback={<PageLoader />}><CalendarYear /></Suspense>} />
      <Route path="/convert/hijri-to-gregorian/:year" element={<Suspense fallback={<PageLoader />}><HijriToGregorianYear /></Suspense>} />
      <Route path="/convert/gregorian-to-hijri/:year" element={<Suspense fallback={<PageLoader />}><GregorianToHijriYear /></Suspense>} />
      <Route path="/how-old-am-i/hijri" element={<Suspense fallback={<PageLoader />}><AgeCalculatorHijri /></Suspense>} />
      <Route path="/how-old-am-i/gregorian" element={<Suspense fallback={<PageLoader />}><AgeCalculatorGregorian /></Suspense>} />
      <Route path="/date-today/:city" element={<Suspense fallback={<PageLoader />}><CityDate /></Suspense>} />
      
      {/* Trend-jacking routes */}
      <Route path="/salary/date/:monthYear" element={<Suspense fallback={<PageLoader />}><SalaryDateGregorian /></Suspense>} />
      <Route path="/salary/hijri/:monthYear" element={<Suspense fallback={<PageLoader />}><SalaryDateHijri /></Suspense>} />
      <Route path="/white-days/:monthYear" element={<Suspense fallback={<PageLoader />}><WhiteDays /></Suspense>} />
      <Route path="/hijri-month/start/:monthYear" element={<Suspense fallback={<PageLoader />}><HijriMonthStart /></Suspense>} />
      <Route path="/events/:eventYear" element={<Suspense fallback={<PageLoader />}><IslamicEvents /></Suspense>} />
      
      <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
    </Routes>
  </BrowserRouter>
);

export default App;
