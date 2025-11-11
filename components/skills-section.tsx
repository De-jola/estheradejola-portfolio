"use client";

import type React from "react";

import { Code2, Database, Palette, Zap } from "lucide-react";

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend Frameworks",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Styling & Design",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Tailwind CSS", "CSS3", "Responsive Design"],
  },
  {
    category: "Tools & Build",
    icon: <Zap className="w-6 h-6" />,
    skills: ["Webpack", "Vite", "Git", "npm/yarn", "GitHub Actions"],
  },
  {
    category: "Additional Skills",
    icon: <Database className="w-6 h-6" />,
    skills: ["REST APIs", "Performance Optimization", "Render"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-muted/30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="mb-12 space-y-4 fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Skills & Expertise
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A comprehensive overview of my technical skills and proficiencies
          developed through hands-on experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 fade-in">
        {skillsData.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-xl border border-border bg-card p-6 space-y-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {skillGroup.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {skillGroup.category}
              </h3>
            </div>

            <ul className="space-y-2">
              {skillGroup.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
