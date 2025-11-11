"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
    >
      <div className="grid gap-12 items-center md:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Frontend Developer & Design Enthusiast
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I craft beautiful, responsive, and accessible web experiences.
              Specializing in React, Vue, and modern frontend technologies with
              a focus on performance and user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/De-jola"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/esther-adejola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:adejolanu@gmail.com"
              aria-label="Email"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column - Avatar */}
        <div className="relative flex justify-center md:justify-end fade-in">
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            {/* Background gradient circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"></div>

            {/* Avatar Image */}
            <div className="relative h-full w-full rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
              <Image
                src="/Hero-img.png"
                alt="Professional developer avatar"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative badge */}
            <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Available for Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
