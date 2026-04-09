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
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

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

    const subject = `${t("form.emailSubject")} ${name}`;
    const body = `${t("form.nameLabel")}: ${name}
${t("form.emailLabel")}: ${email}

${t("form.messageLabel")}:
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/90 via-emerald-50/90 to-green-50/90" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
          {t("hero.title")}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          {t("hero.description")}
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
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">
                  {t("contactInfo.email.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  gdasaojujitcampus@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">
                  {t("contactInfo.phone.title")}
                </h3>
                <p className="text-sm text-gray-600">+251 951 220 757</p>
              </div>

              {/* Hours */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">
                  {t("contactInfo.hours.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("contactInfo.hours.days")}
                </p>
                <p className="text-sm text-gray-600">
                  {t("contactInfo.hours.time")}
                </p>
              </div>

              {/* Social */}
              <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h3 className="font-semibold">
                  {t("contactInfo.social.title")}
                </h3>
                <p className="text-sm text-gray-600">
                  @https://t.me/gdasaoJIT2025
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-green-600" size={24} />
                <h2 className="text-xl font-bold">{t("location.title")}</h2>
              </div>
              <p className="text-gray-600">{t("location.address")}</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{t("form.title")}</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.namePlaceholder")}
                className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.emailPlaceholder")}
                className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form.messagePlaceholder")}
                rows={5}
                className="p-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
              >
                <Send size={18} />
                {t("form.submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
          <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="font-semibold">{t("popup.title")}</p>
            <p className="text-sm">{t("popup.message")}</p>
          </div>
        </div>
      )}

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
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
