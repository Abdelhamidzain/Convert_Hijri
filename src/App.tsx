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
      {/* Main page */}
      <Route path="/" element={<Index />} />
      
      {/* Today's date */}
      <Route path="/date/today" element={
        <Suspense fallback={<PageLoader />}>
          <TodayDate />
        </Suspense>
      } />
      
      {/* Calendar year pages */}
      <Route path="/calendar/:year" element={
        <Suspense fallback={<PageLoader />}>
          <CalendarYear />
        </Suspense>
      } />
      
      {/* Hijri to Gregorian conversion pages */}
      <Route path="/convert/hijri-to-gregorian/:year" element={
        <Suspense fallback={<PageLoader />}>
          <HijriToGregorianYear />
        </Suspense>
      } />
      
      {/* Gregorian to Hijri conversion pages */}
      <Route path="/convert/gregorian-to-hijri/:year" element={
        <Suspense fallback={<PageLoader />}>
          <GregorianToHijriYear />
        </Suspense>
      } />
      
      {/* Age calculators */}
      <Route path="/how-old-am-i/hijri" element={
        <Suspense fallback={<PageLoader />}>
          <AgeCalculatorHijri />
        </Suspense>
      } />
      <Route path="/how-old-am-i/gregorian" element={
        <Suspense fallback={<PageLoader />}>
          <AgeCalculatorGregorian />
        </Suspense>
      } />
      
      {/* City date pages */}
      <Route path="/date-today/:city" element={
        <Suspense fallback={<PageLoader />}>
          <CityDate />
        </Suspense>
      } />
      
      {/* 404 */}
      <Route path="*" element={
        <Suspense fallback={<PageLoader />}>
          <NotFound />
        </Suspense>
      } />
    </Routes>
  </BrowserRouter>
);

export default App;
