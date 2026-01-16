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
      summary: "Node.js and full-stack development.",
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
        "Handled front-end development and design with Next.js, Tailwind, Bootstrap, and SCSS.",
    },
    {
      company: "The Tork",
      title: "Junior Frontend Developer",
      type: "Full-time",
      period: "May 2024 - Oct 2024",
      duration: "6 mos",
      location: "Dhaka, Bangladesh",
      mode: "On-site",
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
      summary: "Worked on front-end features with React and Next.js.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of roles where I delivered web products across the stack.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.title}-${experience.period}`}
              className="bg-card rounded-xl p-6 border border-border hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-300 font-medium">
                    {experience.company}
                  </p>
                </div>
                {experience.type && (
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-100 border border-indigo-200 px-3 py-1 rounded-full dark:text-indigo-300 dark:bg-indigo-900/60 dark:border-indigo-600/40">
                    {experience.type}
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
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
                <p className="text-muted-foreground mt-4">
                  {experience.summary}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
