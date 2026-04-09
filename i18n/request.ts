import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale;

  // Default to 'om' (Afan Oromo) if no locale is provided
  if (!locale) {
    locale = "om";
  }

  // Validate that locale is supported
  const supportedLocales = ["en", "om"];
  if (!supportedLocales.includes(locale)) {
    locale = "om"; // Fallback to Afan Oromo instead of English
  }

  // Load messages for the locale
  let messages;
  try {
    messages = (await import(`../app/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to Afan Oromo
    messages = (await import(`../app/messages/om.json`)).default;
  }

  // IMPORTANT: Must return an object with 'locale' and 'messages'
  return {
    locale, // ← This is REQUIRED!
    messages,
  };
});  
