import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  ArrowUp,
  ExternalLink,
  Briefcase,
  User,
  Layers,
} from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const getProjectTypeIcon = (type) => {
    switch (type) {
      case "professional":
        return <Briefcase size={14} />;
      case "personal":
        return <User size={14} />;
      case "fullstack":
        return <Layers size={14} />;
      default:
        return <Briefcase size={14} />;
    }
  };

  const getProjectTypeColor = (type) => {
    switch (type) {
      case "professional":
        return "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/70 dark:text-indigo-300 dark:border-indigo-600/50";
      case "personal":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/70 dark:text-green-300 dark:border-green-600/50";
      case "fullstack":
        return "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/70 dark:text-violet-300 dark:border-violet-600/50";
      default:
        return "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/70 dark:text-indigo-300 dark:border-indigo-600/50";
    }
  };

  const formatProjectType = (type) => {
    switch (type) {
      case "professional":
        return "Professional";
      case "personal":
        return "Personal";
      case "fullstack":
        return "Full-Stack";
      default:
        return "Professional";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are selected projects showcasing my full-stack delivery,
            frontend depth, and practical use of modern AI-enhanced development
            workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

                {/* Project Type Badge - NOW ACTIVE */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${getProjectTypeColor(
                      project.type
                    )}`}
                  >
                    {getProjectTypeIcon(project.type)}
                    {formatProjectType(project.type)}
                  </div>
                </div>

                {/* Overlay with links - NOW WITH GITHUB SUPPORT */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a
                        href={`https://${project.links.live}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Site"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 flex-1">
                    {project.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-muted border border-border text-muted-foreground text-xs rounded-full font-medium">
                    {project.role}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  {/* Frontend Link */}
                  {project.links.github_frontend && (
                    <a
                      href={`https://${project.links.github_frontend}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} className="mr-2" />
                      Frontend Code
                    </a>
                  )}

                  {/* Backend Link */}
                  {project.links.github_backend && (
                    <a
                      href={`https://${project.links.github_backend}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} className="mr-2" />
                      Backend Code
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm font-semibold text-foreground hover:text-indigo-400 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    {project.links.live ? (
                      <a
                        href={`https://${project.links.live}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-sm font-semibold group/link"
                      >
                        View Live
                        <ArrowUp
                          className="ml-1 transform rotate-45 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                          size={16}
                        />
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm font-semibold">
                        Private Project
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-muted-foreground text-xs">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        project.links.live ? "bg-green-500 animate-pulse" : "bg-muted-foreground/50"
                      }`}
                    ></span>
                    {project.links.live ? "Live" : "Internal"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/ssSobuj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-card hover:bg-accent border border-border text-foreground rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="mr-3" size={24} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
