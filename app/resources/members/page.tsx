"use client";

import { useState } from "react";
import Image from "next/image";

// Define types for members
type Member = {
  name: string;
  role: string;
  image: string;
  skill?: string; // Optional skill for members
};

// Sample data - update with your actual data
const members = {
  president: [
    {
      name: "Bona Teshale",
      role: "President(2018/2019)",
      image: "/members/bona.jpg",
    },
  ],
  executive: [
    { name: "Jane Smith", role: "Vice President", image: "/members/vice.jpg" },
    { name: "Bob Johnson", role: "Secretary", image: "/members/secretary.jpg" },
    { name: "Alice Brown", role: "Councilor", image: "/members/councilor.jpg" },
  ],
  abbaGadaas: [
    {
      name: "Abba Gadaa 1",
      role: "Abba Gadaa",
      image: "/members/abbagada1.jpg",
    },
    {
      name: "Abba Gadaa 2",
      role: "Abba Gadaa",
      image: "/members/abbagada2.jpg",
    },
    {
      name: "Abba Gadaa 3",
      role: "Abba Gadaa",
      image: "/members/abbagada3.jpg",
    },
    {
      name: "Abba Gadaa 4",
      role: "Abba Gadaa",
      image: "/members/abbagada4.jpg",
    },
  ],
  skilledMembers: [
    {
      name: "Tech Expert",
      role: "Member",
      image: "/members/tech.jpg",
      skill: "Software Development",
    },
    {
      name: "Cultural Leader",
      role: "Member",
      image: "/members/cultural.jpg",
      skill: "Cultural Preservation",
    },
    {
      name: "Community Organizer",
      role: "Member",
      image: "/members/community.jpg",
      skill: "Community Outreach",
    },
    {
      name: "Educator",
      role: "Member",
      image: "/members/educator.jpg",
      skill: "Education & Training",
    },
    {
      name: "Healthcare Advocate",
      role: "Member",
      image: "/members/health.jpg",
      skill: "Health Services",
    },
    {
      name: "Legal Expert",
      role: "Member",
      image: "/members/legal.jpg",
      skill: "Legal Advisory",
    },
  ],
};

export default function MembersPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Helper function to render regular member card
  const renderMemberCard = (
    member: Member,
    key: string,
    showSkill: boolean = false,
  ) => (
    <div
      key={key}
      className="bg-white/70 backdrop-blur rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-6 text-center group"
    >
      {/* Profile Image */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
        {!imageErrors[key] ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => handleImageError(key)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 flex flex-col items-center justify-center text-white">
            <div className="text-6xl font-bold mb-2">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            View Profile
          </span>
        </div>
      </div>

      <h3 className="mt-4 font-bold text-xl text-gray-800">{member.name}</h3>
      <p className="text-teal-600 text-sm font-medium mt-1">{member.role}</p>
      {showSkill && member.skill && (
        <p className="text-gray-500 text-xs mt-1">{member.skill}</p>
      )}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-flex items-center gap-1 transition-colors group/btn">
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

  // Special render function for president with larger image
  const renderPresidentCard = (member: Member, key: string) => (
    <div
      key={key}
      className="bg-white/70 backdrop-blur rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-8 text-center group max-w-md w-full"
    >
      {/* Profile Image - Larger size for president */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
        {!imageErrors[key] ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => handleImageError(key)}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Prioritize loading president image
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 flex flex-col items-center justify-center text-white">
            <div className="text-8xl font-bold mb-2">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            View Profile
          </span>
        </div>
      </div>

      <h3 className="mt-6 font-bold text-2xl text-gray-800">{member.name}</h3>
      <p className="text-teal-600 text-base font-medium mt-2">{member.role}</p>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-flex items-center gap-1 transition-colors group/btn">
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

      {/* MEMBERS CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        {/* SECTION 1: PRESIDENT - Centered with larger image */}
        <section>
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8 pb-2 border-b-2 border-teal-300 inline-block w-full">
            Leadership
          </h2>
          <div className="flex justify-center">
            {members.president.map((m, i) =>
              renderPresidentCard(m, `president-${i}`),
            )}
          </div>
        </section>

        {/* SECTION 2: EXECUTIVE TEAM - Vice President, Secretary, Councilor */}
        <section>
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8 pb-2 border-b-2 border-teal-300 inline-block w-full">
            Executive Committee
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {members.executive.map((m, i) =>
              renderMemberCard(m, `executive-${i}`, false),
            )}
          </div>
        </section>

        {/* SECTION 3: ABBA GADAAS - Can be multiple */}
        <section>
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8 pb-2 border-b-2 border-teal-300 inline-block w-full">
            Abba Gadaas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.abbaGadaas.map((m, i) =>
              renderMemberCard(m, `abbagada-${i}`, false),
            )}
          </div>
        </section>

        {/* SECTION 4: MEMBERS WITH SKILLS - Multiple members with different skills */}
        <section>
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8 pb-2 border-b-2 border-teal-300 inline-block w-full">
            Skilled Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.skilledMembers.map((m, i) =>
              renderMemberCard(m, `skilled-${i}`, true),
            )}
          </div>
        </section>
      </div>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-100 via-cyan-100 to-emerald-100 text-center mt-12">
        <h2 className="text-3xl md:text-5xl font-bold text-teal-700 mb-6">
          Growing Together
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          <div>
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-teal-600"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {members.president.length +
                members.executive.length +
                members.abbaGadaas.length +
                members.skilledMembers.length}
              +
            </h3>
            <p className="text-gray-600">Active Members</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">10+</h3>
            <p className="text-gray-600">Countries</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">5+</h3>
            <p className="text-gray-600">Years Active</p>
          </div>
        </div>
      </section>

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
        <p className="mt-4 text-sm">✨ Free registration • Join today</p>
      </section>
    </div>
  );
}
