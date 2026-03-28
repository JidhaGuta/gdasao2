// // components/Navigation.tsx
// "use client";

// import Link from "next/link";
// import { useLanguage } from "@/contexts/LanguageContext";
// import LanguageSwitcher from "./LanguageSwitcher";
// import { useState } from "react";

// export default function Navigation() {
//   const { t } = useLanguage();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { href: "/", label: t.home },
//     { href: "/about", label: t.about },
//     { href: "/contact", label: t.contact },
//   ];

//   return (
//     <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">G</span>
//             </div>
//             <span className="font-bold text-gray-800">{t.appName}</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <LanguageSwitcher />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center gap-3">
//             <LanguageSwitcher />
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-600 hover:text-indigo-600"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
