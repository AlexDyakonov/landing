export { ru } from './ru';
export { en } from './en';

export type Locale = 'ru' | 'en';
export type Translations = typeof import('./ru').ru; 