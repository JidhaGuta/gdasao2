"use client";

import {
  Heart,
  Users,
  Globe,
  Calendar,
  Award,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay - Updated to teal/cyan/emerald gradient (matching About page) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION WITH FULL WIDTH IMAGE AND OVERLAY TEXT */}
      <section className="relative w-full h-screen md:h-[90vh] min-h-[600px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt={t("hero.alt")}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text visibility - matching About page overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content Overlay - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/register">
                <button className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
                  {t("hero.getStarted")}
                </button>
              </Link>
              <Link href="https://t.me/gdasaoJIT2025" target="_blank">
                <button className="px-8 py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold backdrop-blur-sm">
                  {t("hero.joinTelegram")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SECTION - What We Do */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("whatWeDo.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("whatWeDo.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("whatWeDo.educating.title")}
            </h3>
            <p className="text-gray-600">
              {t("whatWeDo.educating.description")}
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("whatWeDo.store.title")}
            </h3>
            <p className="text-gray-600">{t("whatWeDo.store.description")}</p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {t("whatWeDo.engagement.title")}
            </h3>
            <p className="text-gray-600">
              {t("whatWeDo.engagement.description")}
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      {/* IMPACT STATS SECTION - Changed to white/light gray like About page */}
      <section className="py-20 px-6 bg-gray-50 text-gray-800 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {t("impact.title")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("impact.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              {t("impact.members")}+
            </h3>
            <p className="text-gray-600">{t("impact.membersLabel")}</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              {t("impact.events")}+
            </h3>
            <p className="text-gray-600">{t("impact.eventsLabel")}</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Star size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              {t("impact.years")}+
            </h3>
            <p className="text-gray-600">{t("impact.yearsLabel")}</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Changed to dark gray like About page */}
      <section className="py-20 px-6 text-center bg-white text-gray-900">
        <h2 className="text-3xl md:text-5xl mb-4">{t("cta.title")}</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-600">
          {t("cta.description")}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/register">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
              {t("cta.getStarted")}
            </button>
          </Link>
          <Link href="https://t.me/gdasaoJIT2025" target="_blank">
            <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300">
              {t("cta.joinTelegram")}
            </button>
          </Link>
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
