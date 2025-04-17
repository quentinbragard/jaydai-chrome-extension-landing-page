import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/lib/navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: defaultLocale,
  
  // This function is called to detect the preferred locale
  localeDetection: true,
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. favicon.ico)
  // - api routes
  // - _next paths (internal Next.js paths)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
