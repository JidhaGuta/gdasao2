"use client";

import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90" />

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 relative">
        <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur text-indigo-600 text-sm font-semibold mb-4 shadow-sm">
          Get in Touch
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </section>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT COLUMN - MAP & ADDRESS */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl">
                  <MapPin className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Visit Us</h2>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="300"
                className="rounded-xl shadow-lg border-0"
                title="Location Map"
              ></iframe>
              <p className="mt-4 text-gray-600 flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-indigo-600 flex-shrink-0 mt-1"
                />
                <span>Address / School Name</span>
              </p>
            </div>

            {/* CONTACT INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                <p className="text-sm text-gray-600">hello@gdasao.org</p>
                <p className="text-sm text-gray-600">support@gdasao.org</p>
              </div>

              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm</p>
              </div>

              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Office Hours
                </h3>
                <p className="text-sm text-gray-600">Monday - Friday</p>
                <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
              </div>

              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Social Media
                </h3>
                <p className="text-sm text-gray-600">@gdasao</p>
                <p className="text-sm text-gray-600">
                  Twitter • Instagram • LinkedIn
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl">
                <Send className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Send Us a Message
              </h2>
            </div>

            <form
              action="YOUR_GOOGLE_FORM_ACTION_URL"
              method="POST"
              target="_blank"
              className="flex flex-col gap-5"
            >
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} />
                </div>
                <input
                  name="entry.XXXX"
                  placeholder="Full Name"
                  className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  name="entry.YYYY"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="entry.ZZZZ"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              We'll get back to you within 24-48 hours
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION - Matching home and about pages */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white mt-12">
        <Heart className="mx-auto mb-4" size={48} />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Be part of something bigger. Connect with us and help shape the
          future.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:scale-105 transition font-semibold">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition font-semibold">
            Join Telegram
          </button>
        </div>

        <p className="mt-4 text-sm">✨ Free registration • Instant access</p>
      </section>
    </div>
  );
}
