// All routes to be pre-rendered for SEO
// This file exports all routes that should have static HTML generated at build time

import { CITIES, HIJRI_YEAR_RANGE, GREGORIAN_YEAR_RANGE } from './seoData';
import { HIJRI_MONTHS, GREGORIAN_MONTHS, ISLAMIC_EVENTS } from './trendData';

const currentYear = new Date().getFullYear();
const currentHijriYear = 1446;

export function getAllRoutesToPrerender(): string[] {
  const routes: string[] = [
    // Static pages
    '/',
    '/date/today',
    '/how-old-am-i/hijri',
    '/how-old-am-i/gregorian',
  ];
  
  // Calendar year pages (Hijri years)
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/calendar/${year}`);
  }
  
  // Hijri to Gregorian conversion pages
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/convert/hijri-to-gregorian/${year}`);
  }
  
  // Gregorian to Hijri conversion pages
  for (let year = GREGORIAN_YEAR_RANGE.start; year <= GREGORIAN_YEAR_RANGE.end; year++) {
    routes.push(`/convert/gregorian-to-hijri/${year}`);
  }
  
  // City date pages
  CITIES.forEach(city => {
    routes.push(`/date-today/${city.slug}`);
  });
  
  // === TREND-JACKING PAGES ===
  
  // Salary pages - Gregorian months (2 years)
  for (let year = currentYear; year <= currentYear + 1; year++) {
    GREGORIAN_MONTHS.forEach(month => {
      routes.push(`/salary/date/${month.slug}-${year}`);
    });
  }
  
  // Salary pages - Hijri months (3 years)
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/salary/hijri/${month.slug}-${year}`);
    });
  }
  
  // White days pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/white-days/${month.slug}-${year}`);
    });
  }
  
  // Hijri month start pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/hijri-month/start/${month.slug}-${year}`);
    });
  }
  
  // Islamic events pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    ISLAMIC_EVENTS.forEach(event => {
      routes.push(`/events/${event.slug}-${year}`);
    });
  }
  
  return routes;
}
