// // context/LanguageContext.tsx
// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { Language, Translation, translations } from "@/lib/translations";

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: Translation;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(
//   undefined,
// );

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguage] = useState<Language>("en");

//   useEffect(() => {
//     // Load saved language from localStorage
//     const savedLang = localStorage.getItem("language") as Language;
//     if (savedLang && ["en", "ao", "am"].includes(savedLang)) {
//       setLanguage(savedLang);
//     }
//   }, []);

//   const handleSetLanguage = (lang: Language) => {
//     setLanguage(lang);
//     localStorage.setItem("language", lang);

//     // Update HTML lang attribute for SEO
//     document.documentElement.lang =
//       lang === "en" ? "en" : lang === "ao" ? "om" : "am";

//     // For Amharic, set text direction if needed (RTL)
//     if (lang === "am") {
//       document.documentElement.dir = "ltr"; // Amharic is LTR
//     } else {
//       document.documentElement.dir = "ltr";
//     }
//   };

//   const t = translations[language];

//   return (
//     <LanguageContext.Provider
//       value={{ language, setLanguage: handleSetLanguage, t }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// }
