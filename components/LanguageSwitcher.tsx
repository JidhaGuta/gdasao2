// // components/LanguageSwitcher.tsx
// "use client";

// import { useLanguage } from "@/contexts/LanguageContext";

// export default function LanguageSwitcher() {
//   const { language, setLanguage } = useLanguage();

//   const languages = [
//     { code: "en", name: "English", flag: "🇬🇧" },
//     { code: "ao", name: "Afaan Oromoo", flag: "🇪🇹" },
//     { code: "am", name: "አማርኛ", flag: "🇪🇹" },
//   ] as const;

//   return (
//     <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
//       {languages.map((lang) => (
//         <button
//           key={lang.code}
//           onClick={() => setLanguage(lang.code)}
//           className={`
//             px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
//             flex items-center gap-1.5
//             ${
//               language === lang.code
//                 ? "bg-white text-indigo-600 shadow-md"
//                 : "text-gray-700 hover:bg-white/20"
//             }
//           `}
//         >
//           <span>{lang.flag}</span>
//           <span className="hidden sm:inline">{lang.name}</span>
//         </button>
//       ))}
//     </div>
//   );
// }
