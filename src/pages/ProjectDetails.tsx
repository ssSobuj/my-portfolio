import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Briefcase, Github, Layers, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const getProjectTypeIcon = (type: string) => {
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

const getProjectTypeColor = (type: string) => {
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

const formatProjectType = (type: string) => {
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

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Project not found</h1>
              <p className="text-muted-foreground mb-6">
                The project you are trying to view does not exist.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold"
              >
                <ArrowLeft size={18} />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-20">
        <section className="py-10 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden border border-border bg-card">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full min-h-[320px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${getProjectTypeColor(
                      project.type
                    )}`}
                  >
                    {getProjectTypeIcon(project.type)}
                    {formatProjectType(project.type)}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card text-muted-foreground">
                    {project.role}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {project.name}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={`https://${project.links.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                    >
                      Visit Live Project
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                  {project.links.github_frontend && (
                    <a
                      href={`https://${project.links.github_frontend}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-accent font-semibold"
                    >
                      <Github size={18} />
                      Frontend Code
                    </a>
                  )}
                  {project.links.github_backend && (
                    <a
                      href={`https://${project.links.github_backend}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:bg-accent font-semibold"
                    >
                      <Github size={18} />
                      Backend Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Work</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.frontendWork.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Work</h3>
                {project.backendWork.length > 0 ? (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.backendWork.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Primarily frontend-focused contribution on this project.</p>
                )}
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold mb-4">AI Workflow</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.aiWorkflow.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-5">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-muted px-4 py-3 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted border border-border text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold mb-5">Outcomes</h3>
              <ul className="space-y-2 text-muted-foreground">
                {project.outcomes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
