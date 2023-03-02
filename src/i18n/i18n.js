import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        navbar: {
          home: "Home",
          shop: "Shop",
          aboutUs: "About Us",
        },
      },
    },
    ka: {
      translation: {
        navbar: {
          home: "მთავარი",
          shop: "მაღაზია",
          aboutUs: "ჩვენს შესახებ",
        },
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

export default i18next;
