import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./assets/locale/en/translation.json";
import translationAR from "./assets/locale/ar/translation.json";

// تعريف الموارد (resources)
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next) // دمج i18n مع React
  .use(LanguageDetector) // استخدام كاشف اللغة (LanguageDetector)
  .init({
    resources, // تمرير الموارد هنا
    fallbackLng: "en", // اللغة الافتراضية في حال لم تكن الترجمة متاحة
    detection: {
      order: [
        'cookie',         // الكشف عن اللغة من الكوكيز
        'htmlTag',        // الكشف عن اللغة من الوسوم HTML
        'querystring',    // الكشف عن اللغة من رابط الـ URL
        'localStorage',   // الكشف عن اللغة من التخزين المحلي
        'sessionStorage', // الكشف عن اللغة من تخزين الجلسة
        'navigator',      // الكشف عن اللغة من متصفح المستخدم
        'path',           // الكشف عن اللغة من مسار الرابط
        'subdomain'       // الكشف عن اللغة من النطاق الفرعي
      ],
      caches: ["cookie"], // تخزين اللغة المختارة في الكوكيز
      lookupCookie: 'i18next', // الكوكي الذي سيتم استخدامه لتخزين اللغة
    },
    debug: process.env.NODE_ENV === 'development', // تفعيل الـ debug في بيئة التطوير فقط
    interpolation: {
      escapeValue: false // React يقوم بالهروب من النصوص بشكل تلقائي
    }
  });

export default i18n;
