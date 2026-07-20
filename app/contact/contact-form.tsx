"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }

    // Clear error when user starts typing
    if (value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    validateField(name as keyof typeof formData, value);
  };

  const validateField = (field: keyof typeof formData, value: string) => {
    let isValid = true;

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else {
      isValid = value.trim().length > 0;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: !isValid,
    }));

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Validate all fields
    const nameValid = validateField("name", formData.name);
    const emailValid = validateField("email", formData.email);
    const subjectValid = validateField("subject", formData.subject);
    const messageValid = validateField("message", formData.message);

    // If all valid, show confirmation and clear the form.
    if (nameValid && emailValid && subjectValid && messageValid) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
      setIsSubmitted(true);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">
        Send a Message
      </h2>

      {isSubmitted && (
        <p
          role="status"
          className="mb-6 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300"
        >
          Thanks. Your message is ready and validated. If you prefer direct
          contact, email us at contact@developerutilitytools.com.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50"
          >
            Your Name
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-lg border bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900 ${
                touched.name && errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
              }`}
              placeholder="Your name"
              aria-invalid={touched.name && errors.name}
              aria-describedby={
                touched.name && errors.name ? "name-error" : undefined
              }
            />
          </div>
          {touched.name && errors.name && (
            <p
              id="name-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              Please enter your name
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-lg border bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900 ${
                touched.email && errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
              }`}
              placeholder="your.email@example.com"
              aria-invalid={touched.email && errors.email}
              aria-describedby={
                touched.email && errors.email ? "email-error" : undefined
              }
            />
          </div>
          {touched.email && errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              Please enter a valid email address
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50"
          >
            Subject
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MessageSquare
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block w-full rounded-lg border bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900 ${
                touched.subject && errors.subject
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
              }`}
              placeholder="How can we help?"
              aria-invalid={touched.subject && errors.subject}
              aria-describedby={
                touched.subject && errors.subject ? "subject-error" : undefined
              }
            />
          </div>
          {touched.subject && errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              Please enter a subject
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-50"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={6}
            className={`block w-full rounded-lg border bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900 ${
              touched.message && errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
            }`}
            placeholder="Tell us what's on your mind..."
            aria-invalid={touched.message && errors.message}
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
          />
          {touched.message && errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-600 dark:text-red-400"
            >
              Please enter a message
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          Validate and Send
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          This form validates your message locally in the browser.
        </p>
      </form>
    </div>
  );
}
