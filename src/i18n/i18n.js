import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        home: "Home",
        product: "Product",
        aboutUs: "About Us",
        changeLanguage: "Geo",
      },
    },
    ka: {
      translation: {
        home: "მთავარი",
        product: "პროდუქტი",
        aboutUs: "ჩვენს შესახებ",
        changeLanguage: "Eng",
      },
    },
  },
});


export default i18n;
