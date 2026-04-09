"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "om", name: "Afan Oromo", native: "Afaan Oromoo" },
  ];

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
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
