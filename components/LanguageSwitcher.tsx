"use client";

import { usePathname, useRouter as useNextRouter } from "next/navigation"; // Correct imports
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useNextRouter();
  const currentLocale = useLocale();

  const languages = [
    { code: "en", name: "English", native: "English", flag: "🇺🇸" },
    { code: "om", name: "Afan Oromo", native: "Afaan Oromoo", flag: "🇪🇹" },
  ];

  const handleLanguageChange = (locale: string) => {
    // Navigate to the same path with the selected locale
    router.push(`/${locale}${pathname}`);
  };

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.native}
          </option>
        ))}
      </select>
    </div>
  );
}
