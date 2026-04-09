"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Member = {
  name: string;
  image: string;
};

const members: Member[] = [
  { name: "Bona", image: "/members/bona.jpg" },
  { name: "Oljira", image: "/members/oljira.jpg" },
  { name: "Isa", image: "/members/isa.jpg" },
  { name: "Yonas", image: "/members/yonas.jpg" },
  { name: "Naol", image: "/members/naol2.jpg" },
  { name: "Tolera", image: "/members/tolera.jpg" },
  { name: "Jidha", image: "/members/jidha.jpg" },
  { name: "Latera", image: "/members/latera.jpg" },
  { name: "Samuel", image: "/members/samuel.jpg" },
  { name: "Lensa", image: "/members/lensa.jpg" },
  { name: "Falmi", image: "/members/falmi.jpg" },
  { name: "Bilen", image: "/members/bilen.jpg" },
  { name: "Gutu", image: "/members/gutu.jpg" },
  { name: "Abdi", image: "/members/abdi.jpg" },
  { name: "Sadik", image: "/members/sadik.jpg" },
  { name: "Tolera", image: "/members/kuku2.png" },
  { name: "Lami", image: "/members/lami2.png" },
  { name: "Mamo", image: "/members/mamo.jpg" },
  { name: "Hirpha", image: "/members/hirpha.jpg" },
  { name: "", image: "/members/gamta1.jpg" },
  { name: "", image: "/members/gamta2.jpg" },
  { name: "", image: "/members/gamta3.jpg" },
  { name: "", image: "/members/gamta4.jpg" },
  { name: "", image: "/members/gamta5.jpg" },
];

export default function MembersPage() {
  const t = useTranslations("members");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  const renderMemberCard = (member: Member, key: string) => (
    <div
      key={key}
      className="group relative bg-white rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* ✅ FIXED IMAGE CONTAINER */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
        {!imageErrors[key] ? (
          <>
            <Image
              src={member.image}
              alt={member.name || t("memberAlt")}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              onError={() => handleImageError(key)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={key === "member-0" || key === "member-1"}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-500 flex flex-col items-center justify-center text-white">
            <div className="text-7xl font-bold mb-2">
              {member.name
                ? member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "?"}
            </div>
            <p className="text-sm">{t("imageNotAvailable")}</p>
          </div>
        )}
      </div>

      {/* Name Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
        <h3 className="text-white font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">
          {member.name || t("anonymousMember")}
        </h3>

        <button className="mt-2 text-white/80 hover:text-white text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {t("viewProfile")}
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text">
          {t("title")}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          {t("description")}
        </p>
      </section>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) =>
            renderMemberCard(member, `member-${index}`),
          )}
        </div>
      </div>

      {/* CTA */}

      <section className="py-20 px-6 text-center bg-white text-gray-900">
        <h2 className="text-3xl md:text-5xl font mb-4">{t("cta.title")}</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-600">
          {t("cta.description")}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/register">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition font-semibold hover:shadow-xl">
              {t("cta.registerButton")}
            </button>
          </Link>
          <Link href="/about">
            <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition font-semibold">
              {t("cta.learnMoreButton")}
            </button>
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">{t("cta.footer")}</p>
      </section>
    </div>
  );
}
