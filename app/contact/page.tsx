"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailtoUrl = `mailto:gdasaojujitcampus@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Show popup after slight delay (better UX)
    setTimeout(() => {
      setShowSuccess(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/90 via-purple-50/90 to-pink-50/90" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-gray-600">
                  gdasaojujitcampus@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-gray-600">+251 951 220 757</p>
              </div>

              {/* Hours */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Office Hours</h3>
                <p className="text-sm text-gray-600">Mon - Fri</p>
                <p className="text-sm text-gray-600">8AM - 5PM</p>
              </div>

              {/* Social */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">Social</h3>
                <p className="text-sm text-gray-600">
                  @https://t.me/gdasaoJIT2025
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-indigo-600" />
                <h2 className="text-xl font-bold">Our Location</h2>
              </div>
              <p className="text-gray-600">
                JIT Clinic building 1st floor, JIT Campus, Jimma, Oromia,
                Ethiopia
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-3 rounded-xl border"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 rounded-xl border"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="p-3 rounded-xl border"
                required
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="font-semibold">Email Ready!</p>
            <p className="text-sm">Please click send in your email app.</p>
          </div>
        </div>
      )}
    </div>
  );
}
