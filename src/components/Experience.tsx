import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = ({ data }: { data: any }) => {
  const experiences = data.items;

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {data.heading}
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {data.description}
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
                  <p className="text-indigo-400 font-medium">
                    {experience.company}
                  </p>
                </div>
                {experience.type && (
                  <span className="text-xs font-medium text-indigo-700 bg-indigo-100 border border-indigo-200 dark:text-indigo-300 dark:bg-indigo-900/60 dark:border-indigo-600/40 px-3 py-1 rounded-full">
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
                <p className="text-muted-foreground mt-4">{experience.summary}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
