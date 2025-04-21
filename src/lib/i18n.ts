import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      locale: locale,  // Explicitly set the locale
      messages: messages,
      timeZone: 'Europe/Paris'  // You can adjust this to your needs
    };
  } catch (error) {
    return {
      locale: defaultLocale,
      messages: (await import(`../../messages/${defaultLocale}.json`)).default,
      timeZone: 'Europe/Paris'
    };
  }
});
