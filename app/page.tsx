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

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay - Updated to teal/cyan/emerald gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION WITH FULL WIDTH IMAGE AND OVERLAY TEXT */}
      <section className="relative w-full h-screen md:h-[90vh] min-h-[600px] overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt="GDASAO Community"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content Overlay - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              Welcome to GDASAO
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg">
              Join a vibrant community dedicated to preserving culture, Afan
              Oromoo language, and positive change. Together, we shape the
              future through collaboration and shared vision.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/register">
                <button className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
                  Get Started
                </button>
              </Link>
              <Link href="https://t.me/gdasaoJIT2025" target="_blank">
                <button className="px-8 py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold backdrop-blur-sm">
                  Join Telegram
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
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Empowering communities Educating Generation, Engagement, and
            cultural exchange
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Educating Generation
            </h3>
            <p className="text-gray-600">
              Since its inception, it has been working with its members and
              supporters to educate and inform tomorrow's generation.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              GDASAO store
            </h3>
            <p className="text-gray-600">
              GDASAO members are buying pictures of Oromo heroes and various
              books on culture, history and novels and offering them to members.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Engagement</h3>
            <p className="text-gray-600">
              GDASAO has been the best for her members on her basic goal of
              identity, unity and Oromoness and has published a book called
              Hayyuu Bara Keenyaa and Faana Seenaa.
            </p>
          </div>
        </div>
      </section>
      {/* IMPACT STATS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Our Impact from 2005 E.C to 2018 E.C
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto">
          Making a measurable difference in communities through our programs,
          events, and initiatives. Here are some of our key impact metrics:
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-white/80">Active Members</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Calendar size={32} />
            </div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-white/80">Total Events</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Star size={32} />
            </div>
            <h3 className="text-3xl font-bold">12+</h3>
            <p className="text-white/80">Years of Impact</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white">
        <Heart className="mx-auto mb-4" size={48} />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Shape the Future?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Join thousands of members who are already making a difference. Your
          journey starts here.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/register">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
              Get Started
            </button>
          </Link>
          <Link href="https://t.me/gdasaoJIT2025" target="_blank">
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold">
              Join Telegram
            </button>
          </Link>
        </div>

        <p className="mt-4 text-sm">
          ✨ Free registration • Instant access • Join today
        </p>
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
