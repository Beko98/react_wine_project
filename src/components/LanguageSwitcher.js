import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <button
    className="languageSwitcher"
      onClick={() =>
        i18n.changeLanguage(currentLanguage === "en" ? "ka" : "en")
      }
    >
      {t("changeLanguage")}
    </button>
  );
}

export default LanguageSwitcher;
