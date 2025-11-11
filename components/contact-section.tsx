"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="mb-12 space-y-4 fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3 fade-in">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card rounded-xl border border-border p-6"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-foreground"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                aria-required="true"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                aria-required="true"
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                aria-required="true"
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || submitted}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label={submitted ? "Message sent" : "Send message"}
            >
              {submitted ? (
                <>
                  <CheckCircle size={20} /> Message Sent!
                </>
              ) : isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:adejolanu@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  adejolanu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold text-foreground">Follow Me</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/De-jola"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/esther-adejola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
