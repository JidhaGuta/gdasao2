// // components/LanguageSwitcher.tsx
// "use client";

// import { useLanguage } from "@/contexts/LanguageContext";
// import { useState } from "react";

// export default function LanguageSwitcher() {
//   const { language, setLanguage } = useLanguage();
//   const [isOpen, setIsOpen] = useState(false);

//   const languages = [
//     { code: "en", name: "English", flag: "🇬🇧", localName: "English" },
//     { code: "ao", name: "Afaan Oromoo", flag: "🇪🇹", localName: "Afaan Oromoo" },
//     { code: "am", name: "አማርኛ", flag: "🇪🇹", localName: "አማርኛ" },
//   ] as const;

//   const currentLanguage = languages.find((lang) => lang.code === language);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
//       >
//         <span className="text-lg">{currentLanguage?.flag}</span>
//         <span className="text-sm font-medium text-gray-700 hidden sm:inline">
//           {currentLanguage?.name}
//         </span>
//         <svg
//           className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <>
//           <div
//             className="fixed inset-0 z-10"
//             onClick={() => setIsOpen(false)}
//           />
//           <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
//             {languages.map((lang) => (
//               <button
//                 key={lang.code}
//                 onClick={() => {
//                   setLanguage(lang.code);
//                   setIsOpen(false);
//                 }}
//                 className={`
//                   w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors
//                   ${language === lang.code ? "bg-indigo-50 text-indigo-600" : "text-gray-700"}
//                 `}
//               >
//                 <span className="text-lg">{lang.flag}</span>
//                 <div className="flex flex-col">
//                   <span className="text-sm font-medium">{lang.name}</span>
//                   <span className="text-xs text-gray-500">
//                     {lang.localName}
//                   </span>
//                 </div>
//                 {language === lang.code && (
//                   <svg
//                     className="w-4 h-4 ml-auto text-indigo-600"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 )}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
