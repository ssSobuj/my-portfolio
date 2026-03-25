import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SeloraX",
      title: "Full Stack Developer",
      type: "Full-time",
      period: "Jan 2026 - Present",
      duration: "1 mo",
      location: "Mirpur, Dhaka, Bangladesh",
      mode: "On-site",
      summary:
        "Refactored complex Prisma queries and indexing to reduce latency, migrated legacy modules into a type-safe TypeScript design system, and collaborated on PostgreSQL schema optimization for high-traffic dashboards with zero-downtime releases.",
    },
    {
      company: "Boost Rava",
      title: "Full Stack Developer",
      type: "Part-time",
      period: "July 2024 - Dec 2025",
      duration: "1 yr 6 mos",
      location: "Dhaka, Bangladesh",
      mode: "Remote",
      summary:
        "Led a mobile-first analytics dashboard redesign with interactive charts and responsive CSS Grid layouts, improved app performance by 30% through lazy loading and code splitting, and synchronized live ad performance data with Redux Toolkit for accurate real-time reporting.",
    },
    {
      company: "The Tork",
      title: "Frontend Developer",
      type: "Full-time",
      period: "Nov 2024 - Dec 2025",
      duration: "1 yr 2 mos",
      location: "Dhaka, Bangladesh",
      mode: "On-site",
      summary:
        "Managed UI/UX delivery for an enterprise LMS, reduced drop-off in complex registration flows with persistent local-storage sync, and redesigned dashboard information architecture with a modular front-end system.",
    },
    {
      company: "The Tork",
      title: "Junior Frontend Developer",
      type: "Full-time",
      period: "May 2024 - Oct 2024",
      duration: "6 mos",
      location: "Dhaka, Bangladesh",
      mode: "On-site",
      summary:
        "Built and shipped responsive product features with React and Next.js, supported component-level refactors for better maintainability, and collaborated with senior developers on production-ready UI workflows.",
    },
    {
      company: "The Tork",
      title: "Development Intern",
      type: "Internship",
      period: "Feb 2024 - Apr 2024",
      duration: "3 mos",
      location:
        "Block-G, The Tork (Dhaka Head Office), House-32 Rd 01, Dhaka 1219",
      mode: "On-site",
      summary:
        "Contributed to front-end feature development using React and Next.js, translated design requirements into reusable UI sections, and learned team delivery workflows, code review, and release practices.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A timeline of roles where I delivered web products across the stack.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.title}-${experience.period}`}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-indigo-400 font-medium">
                    {experience.company}
                  </p>
                </div>
                {experience.type && (
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-900/60 border border-indigo-600/40 px-3 py-1 rounded-full">
                    {experience.type}
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>
                    {experience.period}
                    {experience.duration ? ` (${experience.duration})` : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-indigo-400" />
                  <span>
                    {experience.location}
                    {experience.mode ? ` - ${experience.mode}` : ""}
                  </span>
                </div>
              </div>

              {experience.summary && (
                <p className="text-gray-300 mt-4">{experience.summary}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
