"use client";

import Link from "next/link";
import {
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content - Centered */}
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text mb-3">
              GDASAO
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            GDASAO is promoting Oromo Culture, History and Afaan Oromoo
            language. Join us in our journey to create meaningful impact and
            show our cultures to the world.
          </p>

          {/* Social Media Icons - Centered with gap */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <Link
              href="https://t.me/gdasaoJIT2025"
              target="_blank"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <FaTelegramPlane className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link
              href="https://www.youtube.com/@GDASAOJIT-CAMPUS"
              target="_blank"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <FaYoutube className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link
              href="https://www.tiktok.com/@gdasao.jitcampus"
              target="_blank"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <FaTiktok className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/gdasao.jit_campus"
              target="_blank"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <FaInstagram className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </Link>

            {/* <Link
              href="https://twitter.com/yourprofile"
              target="_blank"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <FaTwitter className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
              </div>
            </Link> */}
          </div>
        </div>
        {/* Bottom Bar - Centered */}
        <div className="text-center pt-8 border-t border-gray-700/50 mt-8">
          <p className="text-sm text-gray-400">
            © {currentYear} GDASAO Jimma Institute of Technology. All rights
            reserved
            <br />
            Designed and Developed by Jidha Guta
          </p>
        </div>
      </div>
    </footer>
  );
}



