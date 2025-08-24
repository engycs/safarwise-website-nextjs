import en from '@/content/en';
import ar from '@/content/ar';

export type Locale = 'en' | 'ar';

const dictionaries = { en, ar };

export function getDictionary(locale: Locale){
  return dictionaries[locale] ?? dictionaries.en;
}
