"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // const { lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Image
              src="/logo.png"
              alt="GDASAO Logo"
              width={50}
              height={50}
              className="rounded-full group-hover:scale-105 transition-transform duration-300 ring-2 ring-purple-400/50"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
              GDASAO
            </span>
          </div>
        </Link>

        {/* 🌍 Language Switcher (DESKTOP)
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as "en" | "om" | "am")}
          className="ml-3 px-3 py-2 rounded-lg border border-white/20 text-sm bg-slate-800/50 backdrop-blur-sm text-gray-200 hover:bg-slate-700/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        >
          <option value="en">EN</option>
          <option value="om">OM</option>
          <option value="am">AM</option>
        </select> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 font-semibold">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            About
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-1"
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
              <div className="absolute left-0 top-full mt-2 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl min-w-[200px] border border-white/20 z-50 overflow-hidden">
                <Link
                  href="/resources/members"
                  onClick={() => setOpenDropdown(false)}
                  className="block px-5 py-3 text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200"
                >
                  Members
                </Link>
                {/* <Link
                  href="/resources/gootota"
                  onClick={() => setOpenDropdown(false)}
                  className="block px-5 py-3 text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 border-t border-white/10"
                >
                  Gootota Oromoo
                </Link> */}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact
          </Link>

          <Link href="/register">
            <button className="px-6 py-2 rounded-xl text-white font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-200 p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 to-purple-900 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              About
            </Link>

            {/* Resources */}
            <div>
              <div className="px-4 py-2 text-gray-300 font-medium">
                Resources
              </div>
              <Link
                href="/resources/members"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Members
              </Link>
              <Link
                href="/resources/gootota"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Gootota Oromoo
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact
            </Link>

            <Link href="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-6 py-2 rounded-xl text-white font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300">
                Register
              </button>
            </Link>

            {/* 🌍 Language Switcher (MOBILE) */}
            {/* <select
              value={lang}
              onChange={(e) => setLang(e.target.value as "en" | "om" | "am")}
              className="mt-3 px-4 py-2 border border-white/20 rounded-xl bg-slate-800/50 backdrop-blur-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="en">English</option>
              <option value="om">Afaan Oromo</option>
              <option value="am">Amharic</option>
            </select> */}
          </div>
        </div>
      )}
    </nav>
  );
}
