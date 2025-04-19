import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    locale = 'en';
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
