"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tip Calculator App",
    description:
      "A full-featured tip calculating app built with HTML, CSS and Vanilla JavaScript which featurs bill splitting and custom tip percentages.",
    image: "/desktop-design-completed.png",
    technologies: ["Vanilla JavaScript", "HTML", "CSS"],
    liveUrl: "https://tipcalculatorapp-anuade.netlify.app/",
    githubUrl:
      "https://github.com/De-jola/Frontend-mentor-projects/tree/main/tip-calculator-app-main",
  },
  {
    id: 2,
    title: "E-commerce Product Page",
    description:
      "An interactive e-commerce product page with shopping cart functionality, image gallery, and responsive design for an optimal user experience.",
    image: "/desktop-preview.png",
    technologies: ["HTML", "Bootstrap", "CSS"],
    liveUrl: "https://sneakerstore-hompage.netlify.app/",
    githubUrl:
      "https://github.com/De-jola/Frontend-mentor-projects/tree/main/ecommerce-product-page-main",
  },
  {
    id: 3,
    title: "OptiComply Landing Page",
    description:
      "An interactive landing page built for a client with  application featuring real-time weather data, location search, and beautiful data visualization with responsive design.",
    image: "/OptiComply Image.png",
    technologies: ["React.js", "Motion", "Email.js", "Tailwind CSS", "Vite"],
    liveUrl: "https://opti-comply.vercel.app/",
    githubUrl: "https://github.com/De-jola/OptiComply",
  },
  {
    id: 4,
    title: "Job Listing with Filtering",
    description:
      "A job listing application that allows users to filter job postings based on role, level, languages, and tools using React for dynamic rendering and state management.",
    image: "/desktop-design.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Vite",
      "Render",
    ],
    liveUrl: "https://job-listing-seven-phi.vercel.app/",
    githubUrl: "https://github.com/De-jola/job-listing",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="mb-12 space-y-4 fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Featured Projects
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A selection of projects that showcase my expertise in building
          responsive, performant, and accessible web applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 fade-in">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  aria-label={`View ${project.title} live`}
                >
                  View Live <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
