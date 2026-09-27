import { es } from './es';
import { en } from './en';
import { ca } from './ca';

export type Lang = 'es' | 'en' | 'ca';
export const LANGS: Lang[] = ['es', 'en', 'ca'];
export const DEFAULT_LANG: Lang = 'es';

const translations = { es, en, ca } as const;

export function useTranslations(lang: Lang) {
  const t = translations[lang];
  return t;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'ca' || lang === 'es') return lang;
  return DEFAULT_LANG;
}

/** Devuelve la URL equivalente en otro idioma */
export function translatePath(pathname: string, targetLang: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  const firstPart = parts[0];
  if (LANGS.includes(firstPart as Lang)) {
    parts[0] = targetLang;
  } else {
    parts.unshift(targetLang);
  }
  return '/' + parts.join('/');
}
