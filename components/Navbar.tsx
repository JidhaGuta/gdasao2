"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  type Language = {
    code: string;
    name: string;
    native: string;
    flag: string;
  };

  const languages = [
    { code: "om", name: "Afan Oromo", native: "Afaan Oromoo", flag: "🇪🇹" },
    { code: "en", name: "English", native: "English", flag: "🇺🇸" },
  ];

  const switchLanguage = (newLocale: string) => {
    // Get the current path without the locale
    const newPathname = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${newPathname}`);
    setIsLangOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-green-50 via-emerald-100 to-green-50 border-b border-green-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <div className="flex items-center gap-2 cursor-pointer group">
            <Image
              src="/logo.png"
              alt="GDASAO Logo"
              width={50}
              height={50}
              className="rounded-full group-hover:scale-105 transition-transform duration-300 ring-2 ring-green-400/50"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
              GDASAO
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 font-semibold">
          {/* Language Switcher - Before Home */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Globe size={18} />
              <span>{languages.find((l) => l.code === locale)?.flag}</span>
              <span className="text-sm">{locale === "en" ? "EN" : "OM"}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white backdrop-blur-md rounded-xl shadow-2xl min-w-[160px] border border-green-200 z-50 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`w-full text-left px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:text-white transition-all duration-200 flex items-center gap-2 ${
                      locale === lang.code ? "bg-green-100 text-green-700" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.native}</span>
                    {locale === lang.code && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}`}
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
          >
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/about`}
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
          >
            {t("about")}
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300 inline-flex items-center gap-1"
            >
              {t("resources")}
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white backdrop-blur-md rounded-xl shadow-2xl min-w-[200px] border border-green-200 z-50 overflow-hidden">
                <Link
                  href={`/${locale}/resources/members`}
                  onClick={() => setOpenDropdown(false)}
                  className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:text-white transition-all duration-200"
                >
                  {t("members")}
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
          >
            {t("contact")}
          </Link>

          <Link href={`/${locale}/register`}>
            <button className="px-6 py-2 rounded-xl text-white font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
              {t("register")}
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 p-2 hover:bg-green-200/50 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-green-50 to-emerald-50 border-t border-green-200">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {/* Language Switcher - First in mobile */}
            <div className="mb-2">
              <div className="px-4 py-2 text-gray-700 font-medium flex items-center gap-2">
                <Globe size={18} />
                <span>Select Language</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300 flex items-center justify-center gap-2 ${
                      locale === lang.code
                        ? "bg-green-100 ring-1 ring-green-400"
                        : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.native}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-green-200 my-2"></div>

            <Link
              href={`/${locale}`}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
            >
              {t("home")}
            </Link>

            <Link
              href={`/${locale}/about`}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
            >
              {t("about")}
            </Link>

            <div>
              <div className="px-4 py-2 text-gray-700 font-medium">
                {t("resources")}
              </div>
              <Link
                href={`/${locale}/resources/members`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 text-gray-700 hover:text-gray-900 hover:bg-green-200/50 rounded-lg transition-all duration-300"
              >
                {t("members")}
              </Link>
            </div>

            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-gray-900 hover:bg-green-200/50 transition-all duration-300"
            >
              {t("contact")}
            </Link>

            <Link
              href={`/${locale}/register`}
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full px-6 py-2 rounded-xl text-white font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 transition-all duration-300">
                {t("register")}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
