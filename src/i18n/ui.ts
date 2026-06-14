// UI string translations kept separate from components.
// Project content lives in content collections; this file is only for
// interface chrome (navigation, labels, buttons).

export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'site.tagline': 'Visual storytelling for products, spaces and ideas.',
    'projects.title': 'Selected Work',
    'projects.viewProject': 'View project',
    'project.client': 'Client',
    'project.year': 'Year',
    'project.category': 'Category',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.about': 'عن الاستوديو',
    'nav.contact': 'تواصل',
    'site.tagline': 'سردٌ بصريّ للمنتجات والفضاءات والأفكار.',
    'projects.title': 'أعمالٌ مختارة',
    'projects.viewProject': 'عرض المشروع',
    'project.client': 'العميل',
    'project.year': 'السنة',
    'project.category': 'التصنيف',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// Helper for building locale-aware URLs.
// English (default) has no prefix; Arabic is prefixed with /ar.
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ar' ? `/ar${clean === '/' ? '' : clean}` : clean;
}
