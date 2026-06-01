import type { Lang } from './types';

/** Applies `rtl` class on text containers when Arabic is active. */
export function textDirClass(lang: Lang): string {
  return lang === 'ar' ? 'rtl' : '';
}
