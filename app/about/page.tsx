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

export default function AboutPage() {
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
            alt="About GDASAO"
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
              About GDASAO
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              Discover our story, mission, and the impact we're making in
              communities. We're building a better future through collaboration
              and shared values.
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
              Full Description
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            GDASAO (The Gumii Dagaagina Aadaa,Seenaa fi Afaan Oromoo) of Jimma
            University is based on Article 39/2 of the Federal Constitution of
            Ethiopia which states that every nation, ethnic group and people of
            Ethiopia has the right to speak , write and develop their language
            It was founded in Jimma in 2005 Ethiopian calender.
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
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="mt-4 flex items-center gap-2 text-teal-600">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                Making a difference daily
              </span>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Research the cultures that are currently going to disappear and
              work on the history of the heroes whose blood and bones have been
              used for their people.
            </p>
            <div className="mt-4 flex items-center gap-2 text-teal-600">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">
                Building tomorrow's leaders
              </span>
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
            <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Since its formation, GDASAO has actively engaged in various
            activities including supporting students through educational
            programs, organizing cultural events to preserve Oromo traditions,
            providing community outreach initiatives, and creating networking
            opportunities for members across different zones and beyond. Through
            its dedicated leadership and passionate members, GDASAO has grown
            into a vibrant community that empowers its members, promotes
            cultural identity, and contributes to the development of its people
            both locally and globally.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-teal-600 font-bold text-xl">2005 E.C</div>
              <div className="text-xs text-gray-500">Founded</div>
            </div>

            <div className="text-center">
              <div className="text-teal-600 font-bold text-xl">2018 E.C</div>
              <div className="text-xs text-gray-500">500+ Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Community First
            </h3>
            <p className="text-gray-600 text-sm">
              Building strong, supportive connections with other GDASAO branches
              and the wider community.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center mb-4">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-sm">
              Growing together through Sharing culture, history and language
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Global Perspective
            </h3>
            <p className="text-gray-600 text-sm">
              Embracing diversity and inclusion to create a welcoming
              environment for all GDASAO members worldwide.
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
          Be Part of Our Journey
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Join us in creating meaningful change and building a better future
          together. Your journey starts here.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/register">
            <button className="bg-white text-teal-600 px-6 py-3 rounded-xl hover:scale-105 transition font-semibold shadow-lg">
              Get Started
            </button>
          </Link>
          <Link href="https://t.me/yourtelegram" target="_blank">
            <button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition font-semibold">
              Join Telegram
            </button>
          </Link>
        </div>

        <p className="mt-4 text-sm">Join today</p>
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
