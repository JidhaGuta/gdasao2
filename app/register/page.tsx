"use client";

import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    batch: "",
    zone: "",
    woreda: "",
    telegram: "",
    phone: "",
    talent: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    gender?: string;
    batch?: string;
    zone?: string;
    woreda?: string;
    talent?: string;
  }>({});

  const zones = [
    "Adaamaa Godina Addaa",
    "Arsii",
    "Arsii Lixaa",
    "Baalee",
    "Baalee Bahaa",
    "Boorana",
    "Buunoo Baddallee",
    "Guji",
    "Harargee Bahaa",
    "Harargee Lixaa",
    "Horo Guduruu Wallaggaa",
    "Iluu Abbaa Booraa",
    "Jimmaa",
    "Jimmaa Godina Addaa",
    "Qeellam Wallaggaa",
    "Shaawaa Kaabaa",
    "Shawaa Bahaa",
    "Shawaa Kibba Lixaa",
    "Shawaa Lixaa",
    "Shaggar",
    "Wallaggaa Bahaa",
    "Wallaggaa Lixaa",
  ];

  const talents = [
    "Seenessuu",
    "Walaloo",
    "Taatoo",
    "Barreessuu",
    "Suurawwan Bocuu",
    "Graphics Design",
    "Seena Barsiisuu",
    "others",
  ];

  const batches = [
    "Waggaa 1ffaa",
    "Waggaa 2ffaa",
    "Waggaa 3ffaa",
    "Waggaa 4ffaa",
    "Waggaa 5ffaa",
  ];

  // Auto-dismiss message after 5 seconds
  useEffect(() => {
    if (message && message.text) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    // Handle phone number - allow user to input directly
    if (name === "phone") {
      // Only allow digits and limit to 10 digits
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTalentChange = (talentValue: string) => {
    const currentTalents = formData.talent
      ? formData.talent.split(", ").filter((t) => t)
      : [];

    if (currentTalents.includes(talentValue)) {
      // Remove talent
      const updatedTalents = currentTalents.filter((t) => t !== talentValue);
      setFormData((prev) => ({ ...prev, talent: updatedTalents.join(", ") }));
    } else {
      // Add talent
      const updatedTalents = [...currentTalents, talentValue];
      setFormData((prev) => ({ ...prev, talent: updatedTalents.join(", ") }));
    }

    // Clear talent error if exists
    if (fieldErrors.talent) {
      setFieldErrors((prev) => ({ ...prev, talent: undefined }));
    }
  };

  const validateForm = () => {
    const errors: {
      fullName?: string;
      email?: string;
      gender?: string;
      batch?: string;
      zone?: string;
      woreda?: string;
      talent?: string;
    } = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) errors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.gender) errors.gender = "Please select your gender";
    if (!formData.batch) errors.batch = "Please select your batch/year";
    if (!formData.zone.trim()) errors.zone = "Please select your zone";
    if (!formData.woreda.trim()) errors.woreda = "Woreda is required";
    if (!formData.talent.trim())
      errors.talent = "Please select at least one talent/skill";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZF7Q0U23GYOTuIWdCbufZ3f0g0KjMflr8GLwHxW8b-xisTTLNtA25K2khw0h7QpWrNA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        },
      );

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (result.status === "success") {
        setMessage({
          type: "success",
          text: "🎉 Registration successful! Welcome to GDASAO!",
        });

        setFormData({
          fullName: "",
          email: "",
          gender: "",
          batch: "",
          zone: "",
          woreda: "",
          telegram: "",
          phone: "",
          talent: "",
          comment: "",
        });

        setFieldErrors({});
      } else {
        setMessage({
          type: "error",
          text:
            typeof result.message === "string"
              ? result.message
              : "❌ Submission failed. Try again.",
        });
      }
    } catch (err: any) {
      setMessage({
        type: "error",
        text: err?.message || "❌ Network error. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-3 shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg
              className="w-7 h-7 text-white"
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
            Join GDASAO
          </h1>
          <p className="text-gray-600 text-sm">Become part of our community</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-9 pr-3 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-sm ${
                    fieldErrors.fullName
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
              </div>
              {fieldErrors.fullName && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full pl-9 pr-3 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-sm ${
                    fieldErrors.email
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
              </div>
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-8 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 appearance-none text-sm ${
                    fieldErrors.gender
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {fieldErrors.gender && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.gender}
                </p>
              )}
            </div>

            {/* Batch */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Batch <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-8 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 appearance-none text-sm ${
                    fieldErrors.batch
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select batch/year</option>
                  {batches.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {fieldErrors.batch && (
                <p className="mt-1 text-xs text-red-500">{fieldErrors.batch}</p>
              )}
            </div>

            {/* Zone */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Zone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-8 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 appearance-none text-sm ${
                    fieldErrors.zone
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select zone</option>
                  {zones.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {fieldErrors.zone && (
                <p className="mt-1 text-xs text-red-500">{fieldErrors.zone}</p>
              )}
            </div>

            {/* Woreda */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Woreda <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <input
                  name="woreda"
                  value={formData.woreda}
                  onChange={handleChange}
                  placeholder="Enter your woreda"
                  className={`w-full pl-9 pr-3 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-sm ${
                    fieldErrors.woreda
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
              </div>
              {fieldErrors.woreda && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.woreda}
                </p>
              )}
            </div>

            {/* Telegram */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Telegram
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <input
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="@username"
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="09XXXXXXXX"
                  maxLength={10}
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            {/* Talent - Checkbox Group */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Talent / Skill <span className="text-red-500">*</span>
              </label>
              <div
                className={`p-4 bg-gray-50 border rounded-lg ${
                  fieldErrors.talent
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {talents.map((talent) => (
                    <label
                      key={talent}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.talent.split(", ").includes(talent)}
                        onChange={() => handleTalentChange(talent)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">{talent}</span>
                    </label>
                  ))}
                </div>
              </div>
              {fieldErrors.talent && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.talent}
                </p>
              )}
              {formData.talent && (
                <p className="mt-2 text-xs text-gray-500">
                  Selected: {formData.talent}
                </p>
              )}
            </div>

            {/* Comment */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Additional Comments
              </label>
              <div className="relative">
                <div className="absolute top-2.5 left-3 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="put your comments here..."
                  rows={2}
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 resize-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Message Alert - Fixed with proper null check */}
          {message && message.text && (
            <div
              className={`mt-4 mb-3 px-5 py-3 rounded-xl shadow-lg w-full transform transition-all duration-300 ${
                message.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gradient-to-r from-red-500 to-rose-500 text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {message.type === "success" ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="font-medium text-sm">{message.text}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg text-sm"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
