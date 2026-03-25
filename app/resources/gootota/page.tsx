const heroes = [
  { name: "Hero 1", description: "Short bio..." },
  { name: "Hero 2", description: "Short bio..." },
];

export default function GoototaPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-cyan-50/90 to-emerald-50/90" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 relative">
        <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur text-teal-600 text-sm font-semibold mb-4 shadow-sm">
          Honoring Heroes
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-transparent bg-clip-text">
          Gootota Oromoo
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Celebrating the remarkable individuals who have shaped our heritage
          and inspired generations
        </p>
      </section>

      {/* HEROES GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {heroes.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur rounded-2xl p-12 max-w-md mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <p className="text-gray-500 text-lg">No heroes found</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroes.map((h, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-6 group"
              >
                {/* Hero Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300 mb-4">
                  {h.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="font-bold text-2xl text-gray-800 text-center mb-3">
                  {h.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {h.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                    Learn More
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
          Legacy of Greatness
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {heroes.length}+
            </h3>
            <p className="text-gray-600">Honored Heroes</p>
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
            <h3 className="text-2xl font-bold text-gray-800">Centuries</h3>
            <p className="text-gray-600">of Rich History</p>
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Inspiring</h3>
            <p className="text-gray-600">Future Generations</p>
          </div>
        </div>
      </section>

      {/* FEATURED QUOTE SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 md:p-12 text-center hover:shadow-xl transition-all duration-300">
          <svg
            className="w-12 h-12 mx-auto text-teal-500 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
            "The legacy of heroes is the memory of a great name and the
            inheritance of a great example."
          </p>
          <p className="text-gray-500 font-medium">— Benjamin Disraeli</p>
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Honor Our Heroes
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Learn more about the remarkable individuals who shaped our history and
          continue to inspire us today
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-teal-600 px-6 py-3 rounded-xl hover:scale-105 transition font-semibold">
            Explore Stories
          </button>
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-teal-600 transition font-semibold">
            Share a Hero
          </button>
        </div>

        <p className="mt-4 text-sm">
          ✨ Preserving history • Inspiring tomorrow
        </p>
      </section>
    </div>
  );
}
