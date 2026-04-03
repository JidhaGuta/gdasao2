"use client";

import { useState } from "react";
import Image from "next/image";

// Define types for members
type Member = {
  name: string;
  image: string;
};

// Sample data - update with your actual data
const members: Member[] = [
  {
    name: "Bona",
    image: "/members/bona.jpg",
  },
  {
    name: "Oljira",
    image: "/members/oljira.jpg",
  },
  {
    name: "Isa",
    image: "/members/isa.jpg",
  },
  {
    name: "Yonas",
    image: "/members/yonas.jpg",
  },
  {
    name: "Naol",
    image: "/members/naol.jpg",
  },
  {
    name: "Tolera",
    image: "/members/tolera.jpg",
  },
  {
    name: "Jidha",
    image: "/members/jidha.jpg",
  },
  {
    name: "Latera",
    image: "/members/latera.jpg",
  },
  {
    name: "Samuel",
    image: "/members/samuel.jpg",
  },
  {
    name: "Lensa",
    image: "/members/lensa.jpg",
  },
  {
    name: "Falmi",
    image: "/members/falmi.jpg",
  },
  {
    name: "Bilen",
    image: "/members/bilen.jpg",
  },
  {
    name: "Abdi",
    image: "/members/abdi.jpg",
  },
  {
    name: "Sadik",
    image: "/members/sadik.jpg",
  },
  {
    name: "",
    image: "/members/gamta1.jpg",
  },
  {
    name: "Tolera",
    image: "/members/kuku.jpg",
  },
  {
    name: "Lami",
    image: "/members/lami.jpg",
  },

  {
    name: "",
    image: "/members/gamta2.jpg",
  },
  {
    name: "",
    image: "/members/gamta3.jpg",
  },
  {
    name: "",
    image: "/members/gamta4.jpg",
  },
  {
    name: "",
    image: "/members/gamta5.jpg",
  },
];

export default function MembersPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Helper function to render member card
  const renderMemberCard = (member: Member, key: string) => (
    <div
      key={key}
      className="group relative bg-white rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Full Image Container - Fixed aspect ratio 1:1 for square images */}
      <div className="relative w-full aspect-square overflow-hidden">
        {!imageErrors[key] ? (
          <>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700 bg-gray-100"
              onError={() => handleImageError(key)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={key === "member-0" || key === "member-1"}
            />
            {/* Gradient Overlay - Always visible for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-500 flex flex-col items-center justify-center text-white">
            <div className="text-7xl font-bold mb-2">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        )}
      </div>

      {/* Name Section - Always visible with improved positioning */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
        <h3 className="text-white font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">
          {member.name}
        </h3>
        <button className="mt-2 text-white/80 hover:text-white text-sm font-medium inline-flex items-center gap-1 transition-colors group/btn opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View Profile
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text">
          Some of Our Members
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Meet the dedicated individuals who make GDASAO strong and vibrant. Our
          members come from different Oromia Zones, preserving our culture and
          empowering our community.
        </p>
      </section>

      {/* MEMBERS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) =>
            renderMemberCard(member, `member-${index}`),
          )}
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white">
        <svg
          className="mx-auto mb-4 w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Become a member and connect with like-minded individuals
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-teal-600 px-6 py-3 rounded-xl hover:scale-105 transition font-semibold">
            Register Now
          </button>
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition font-semibold">
            Learn More
          </button>
        </div>
        <p className="mt-4 text-sm"> • Join today</p>
      </section>
    </div>
  );
}
