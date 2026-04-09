"use client";

import {
  Heart,
  Users,
  Globe,
  Calendar,
  Star,
  Info,
  Target,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  // Optional: Add a fallback in case translations are missing
  const hasTranslations = t("hero.title") !== "hero.title";

  if (!hasTranslations) {
    console.warn("About page translations not loaded properly");
  }

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay - Updated to teal/cyan/emerald */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-bg.jpg"
            alt={t("hero.alt")}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* FULL DESCRIPTION SECTION */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
              <Info className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {t("fullDescription.title")}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t("fullDescription.content")}
          </p>
        </div>
      </section>

      {/* MISSION & VISION - Side by side layout */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {t("mission.title")}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t("mission.content")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-teal-600">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                {t("mission.tagline")}
              </span>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                {t("vision.title")}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t("vision.content")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-teal-600">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">{t("vision.tagline")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORY SECTION */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
              <Clock className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {t("history.title")}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t("history.content")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-teal-600 font-bold text-xl">
                {t("history.foundedYear")}
              </div>
              <div className="text-xs text-gray-500">
                {t("history.foundedLabel")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-teal-600 font-bold text-xl">
                {t("history.membersYear")}
              </div>
              <div className="text-xs text-gray-500">
                {t("history.membersLabel")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("values.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4">{t("values.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {t("values.community.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("values.community.description")}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {t("values.learning.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("values.learning.description")}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {t("values.global.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("values.global.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
