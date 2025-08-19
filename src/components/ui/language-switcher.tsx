import { useLanguage } from '@/hooks/useLanguage';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { currentLocale, changeLanguage, isEnglish } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => changeLanguage(isEnglish ? 'ru' : 'en')}
        className="bg-pixel-dark text-pixel-lime px-4 py-2 border-2 border-pixel-dark shadow-brutal hover:bg-pixel-lime hover:text-pixel-dark transition-colors font-mono text-sm uppercase tracking-wider flex items-center gap-2"
        title={isEnglish ? 'Переключить на русский' : 'Switch to English'}
      >
        <Languages className="w-4 h-4" />
        {currentLocale.toUpperCase()}
      </button>
    </div>
  );
}; 