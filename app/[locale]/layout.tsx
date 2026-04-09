import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "GDASAO",
    om: "GDASAO",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    // description: "GDASAO",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale
  const validLocales = ["en", "om"];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  // Get messages with error handling
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error("Error loading messages:", error);
    // Provide fallback messages
    messages = {
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact",
        register: "Register",
        resources: "Resources",
        members: "Members",
      },
    };
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
