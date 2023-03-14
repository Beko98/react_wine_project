import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

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

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   function handleLanguageChange(event) {
//     i18next.changeLanguage(event.target.value);
//   }

//   return (
//     <select onChange={handleLanguageChange}>
//       <option value="en">English</option>
//       <option value="ka">Georgian</option>
//     </select>
//   );
// }

export default i18n;
