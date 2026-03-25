import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "GDASAO",
  description: "GDASAO Club Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">
        {/* 🌍 Language Provider wraps everything */}
        <LanguageProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
