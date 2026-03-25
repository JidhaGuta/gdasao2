"use client";

import {
  Heart,
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
  Send,
  Shield,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Join Our Community
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Become a part of GDASAO and help us make a difference. Fill out the
          form below to get started.
        </p>
      </section>

      {/* BENEFITS SECTION - Quick highlights before form */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Free Membership
            </h3>
            <p className="text-sm text-gray-600">No fees, no obligations</p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Exclusive Access
            </h3>
            <p className="text-sm text-gray-600">
              Events, resources, community
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Learning Opportunities
            </h3>
            <p className="text-sm text-gray-600">
              Workshops, mentorship, growth
            </p>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl">
              <Send className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Registration Form
            </h2>
          </div>

          <form
            action="YOUR_GOOGLE_FORM_ACTION_URL"
            method="POST"
            target="_blank"
            className="flex flex-col gap-5"
          >
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </div>
              <input
                name="entry.XXXX"
                placeholder="Full Name"
                className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                name="entry.YYYY"
                type="email"
                placeholder="Email Address"
                className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone size={18} />
              </div>
              <input
                name="entry.ZZZZ"
                placeholder="Phone Number"
                className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <BookOpen size={18} />
              </div>
              <input
                name="entry.AAAA"
                placeholder="Department"
                className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <MessageSquare size={18} />
              </div>
              <textarea
                name="entry.BBBB"
                placeholder="Role"
                rows={4}
                className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={18} />
              Submit Registration
            </button>
          </form>
        </div>
      </div>

      {/* FAQ / SUPPORT SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/50 backdrop-blur rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Have questions about registration? Reach out to our support team.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:register@gdasao.org"
              className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
            >
              <Mail size={16} />
              gdasao2026@gmail.com
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="tel:0900431233"
              className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
            >
              <Phone size={16} />
              0900431233
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
