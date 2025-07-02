import React from "react";
import {
  Github,
  ArrowUp,
  ExternalLink,
  Briefcase,
  User,
  Layers,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "uylab",
      name: "Learning Management System",
      description:
        "I've nearly finished Uylab's LMS front end, creating a responsive UI with Next.js, SASS, and Bootstrap, ensuring smooth UX with real-time sync.",
      image: "/projects/uylab.png",
      links: {
        live: "uylab.org",
      },
      techs: ["NextJs", "Bootstrap", "SCSS"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "kireibd",
      name: "Kirai BD a e-commerce Website",
      description:
        "I've nearly completed the front end of my e-commerce platform, creating a responsive and engaging user interface with Next.js, Bootstrap, and SASS, ensuring a smooth shopping experience with real-time updates.",
      image: "/projects/kiraibd.png",
      links: {
        live: "kireibd.com",
      },
      techs: ["NextJs", "Bootstrap", "SCSS"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "cuet",
      name: "CUET Official Web Application",
      description:
        "I worked on the CUET official web app front end, focusing on responsive design and optimizing the user experience.",
      image: "/projects/cuet.png",
      links: {
        live: "cuet.thetork.com",
      },
      techs: ["NextJs", "Bootstrap", "SCSS"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "zepid",
      name: "AI Generator Platform Development",
      description:
        "Developing an AI generator platform with Next.js, TypeScript, Tailwind CSS, Radix UI, and ShadCN UI, focusing on a responsive, interactive, and visually engaging interface.",
      image: "/projects/zepid.png",
      links: {
        live: "zepid.ai",
      },
      techs: ["NextJs", "Tailwind", "TypeScript"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "thetork",
      name: "The Tork Inc. Official Website Development",
      description:
        "Developed The Tork Inc. website using React and Next.js, creating a responsive, high-performance platform that highlights the company's tech services and enhances user experience.",
      image: "/projects/thetork.png",
      links: {
        live: "thetork.com",
      },
      techs: ["NextJs", "Bootstrap", "SCSS"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "jobcuet",
      name: "CUET Job Portal",
      description:
        "Built the frontend for a CUET job portal with responsive dashboards, job listings, and a CV builder using React and Next.js. Integrated REST APIs for seamless data flow and implemented real-time updates with SWR.",
      image: "/projects/jobcuet.png",
      links: {
        live: "jobs.cuet.ac.bd",
      },
      techs: ["NextJs", "Bootstrap", "SCSS"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
    {
      id: "meridian",
      name: "Meridian Consultancy – Immigration & Visa Solutions",
      description:
        "Built the frontend for Meridian Consultancy using React and Next.js. Implemented dynamic pages with API integration and a responsive contact section with external form handling.",
      image: "/projects/meridian-consultancy.png",
      links: {
        live: "meridianconsultancy.com.au",
      },
      techs: ["NextJs", "Css"],
      hasImage: true,
      type: "professional",
      role: "Frontend Developer",
    },
  ];

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
        return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
      case "personal":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "fullstack":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
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

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in frontend development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-fill transition-transform duration-500 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Project Type Badge */}
                {/* <div className="absolute top-4 left-4">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${getProjectTypeColor(
                      project.type
                    )}`}
                  >
                    {getProjectTypeIcon(project.type)}
                    {formatProjectType(project.type)}
                  </div>
                </div> */}

                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <a
                      href={`https://${project.links.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 flex-1">
                    {project.name}
                  </h3>
                </div>

                {/* Role Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-800 border border-gray-600 text-gray-300 text-xs rounded-full font-medium">
                    {project.role}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs rounded-full font-medium hover:bg-indigo-500/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
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

                  <div className="flex items-center text-gray-500 text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Live
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
            className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
