"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const { lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.png" // path in public folder
              alt="GDASAO Logo"
              width={50} // adjust size
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-transparent bg-clip-text">
              GDASAO
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 font-semibold">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
          >
            About
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="px-4 py-2 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 inline-flex items-center gap-1"
            >
              Resources
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
              <div className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-xl min-w-[200px] border z-50">
                <Link
                  href="/resources/members"
                  onClick={() => setOpenDropdown(false)}
                  className="block px-5 py-3 hover:bg-teal-500 hover:text-white"
                >
                  Members
                </Link>
                <Link
                  href="/resources/gootota"
                  onClick={() => setOpenDropdown(false)}
                  className="block px-5 py-3 hover:bg-teal-500 hover:text-white border-t"
                >
                  Gootota Oromoo
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
          >
            Contact
          </Link>

          <Link href="/register">
            <button className="px-6 py-2 rounded-xl text-white font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:scale-105">
              Register
            </button>
          </Link>

          {/* 🌍 Language Switcher (DESKTOP) */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "en" | "om" | "am")}
            className="ml-3 px-3 py-2 rounded-lg border text-sm bg-white text-gray-800"
          >
            <option value="en">EN</option>
            <option value="om">OM</option>
            <option value="am">AM</option>
          </select>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-teal-500 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-teal-500 hover:text-white"
            >
              About
            </Link>

            {/* Resources */}
            <div>
              <div className="px-4 py-2 font-medium">Resources</div>
              <Link
                href="/resources/members"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 hover:bg-teal-500 hover:text-white"
              >
                Members
              </Link>
              <Link
                href="/resources/gootota"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 hover:bg-teal-500 hover:text-white"
              >
                Gootota Oromoo
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-teal-500 hover:text-white"
            >
              Contact
            </Link>

            <Link href="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-6 py-2 rounded-xl text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500">
                Register
              </button>
            </Link>

            {/* 🌍 Language Switcher (MOBILE) */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "om" | "am")}
              className="mt-3 px-4 py-2 border rounded-xl"
            >
              <option value="en">English</option>
              <option value="om">Afaan Oromo</option>
              <option value="am">Amharic</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
