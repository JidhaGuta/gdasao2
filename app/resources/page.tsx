import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen px-6 py-12 text-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text">
        Explore GDASAO Resources
      </h1>

      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Discover valuable resources and information for our community members
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="transform transition-all duration-300 hover:scale-105">
          <Link
            href="/resources/members"
            className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-xl font-semibold text-lg"
          >
            Members
          </Link>
        </div>
      </div>
    </div>
  );
}
