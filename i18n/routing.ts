export const routing = {
  locales: ["en", "om"],
  defaultLocale: "om",
  localePrefix: "as-needed",
} as const;

export type Locale = (typeof routing.locales)[number];
