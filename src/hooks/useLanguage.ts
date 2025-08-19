import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ru, en, type Locale, type Translations } from '@/locales';

const translations: Record<Locale, Translations> = { ru, en };

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLocale, setCurrentLocale] = useState<Locale>('ru');

  useEffect(() => {
    // Определяем язык из URL
    if (location.pathname.startsWith('/en/')) {
      setCurrentLocale('en');
    } else {
      setCurrentLocale('ru');
    }
  }, [location.pathname]);

  const t = translations[currentLocale];

  const changeLanguage = (locale: Locale) => {
    if (locale === 'en') {
      // Переходим на английскую версию
      const newPath = location.pathname.replace(/^\/?/, '/en/');
      navigate(newPath);
    } else {
      // Переходим на русскую версию
      const newPath = location.pathname.replace(/^\/en\//, '/');
      navigate(newPath);
    }
  };

  const isEnglish = currentLocale === 'en';

  return {
    t,
    currentLocale,
    changeLanguage,
    isEnglish
  };
}; 