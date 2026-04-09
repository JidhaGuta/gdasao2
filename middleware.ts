import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default createMiddleware({
  locales: ["en", "om"],
  defaultLocale: "en",
  localePrefix: "always", // Change to 'always' to ensure locale is always in URL
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
