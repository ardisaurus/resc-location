import { useEffect, useState } from "react";

const GetBrowserLanguage = () => {
  const [browserLang, setBrowserLang] = useState(null);

  useEffect(() => {
    const getNavigatorLanguage = () => {
      if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
      } else {
        return (
          navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          "en"
        );
      }
    };

    const mBrowserLang = getNavigatorLanguage();
    setBrowserLang(mBrowserLang);
  }, []);

  return (
    <div className="main-container">
      <div className="section-title">Get browser language setting</div>
      <div className="inner-container">
        <div>{browserLang}</div>{" "}
      </div>
    </div>
  );
};

export default GetBrowserLanguage;
