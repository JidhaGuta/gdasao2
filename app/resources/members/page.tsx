const members = [
  { name: "John Doe", role: "President" },
  { name: "Jane Smith", role: "Member" },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 relative">
        <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur text-teal-600 text-sm font-semibold mb-4 shadow-sm">
          Our Community
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text">
          Members
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Meet the dedicated individuals who make GDASAO a thriving community
        </p>
      </section>

      {/* MEMBERS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {members.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur rounded-2xl p-12 max-w-md mx-auto">
              <p className="text-gray-500 text-lg">No members found</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((m, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-6 text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-bold text-xl text-gray-800">
                  {m.name}
                </h3>
                <p className="text-gray-500 mt-1">{m.role}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-flex items-center gap-1">
                    View Profile
                    <svg
                      className="w-4 h-4"
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
            ))}
          </div>
        )}
      </div>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-100 via-cyan-100 to-emerald-100 text-center mt-12">
        <h2 className="text-3xl md:text-5xl font-bold text-teal-700 mb-6">
          Growing Together
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          <div>
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md">
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
              {members.length}+
            </h3>
            <p className="text-gray-600">Active Members</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md">
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
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-2xl flex items-center justify-center mb-3 shadow-md">
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
