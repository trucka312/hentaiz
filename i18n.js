import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import viTranslation from "./locales/vi.json";

const resources = {
  en: { translation: enTranslation },
  vi: { translation: viTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "vi", // Ngôn ngữ sẽ được sử dụng nếu ngôn ngữ yêu cầu không tồn tại
  interpolation: {
    escapeValue: false, // Không thoát giá trị được chèn
  },
});

export default i18n;
