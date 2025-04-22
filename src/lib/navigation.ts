import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'de'] as const;
export const defaultLocale = 'fr' as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });
