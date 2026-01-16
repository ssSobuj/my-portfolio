import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sobuj<span className="text-indigo-400">.</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Full-Stack Developer passionate about building end-to-end
              products with modern technologies and clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ssSobuj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-white hover:bg-indigo-600 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/developer-sobuj-mia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-white hover:bg-indigo-600 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mdsobujredoy@gmail.com"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-white hover:bg-indigo-600 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+8801731620933"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-white hover:bg-indigo-600 transition-all duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Technologies
            </h4>
            <div className="space-y-2">
              {[
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Redis",
                "TypeScript",
                "React.js",
              ].map((tech) => (
                <span key={tech} className="block text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sobuj Mia. All rights reserved. Built
            with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
