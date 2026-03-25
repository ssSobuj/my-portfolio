import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "home";
      navItems.forEach((item) => {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollY >= offsetTop - 80) {
            currentSection = item.href.replace("#", "");
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        {/* Logo */}
        <div className="text-foreground font-bold text-2xl tracking-wide select-none cursor-default">
          Sabuj Mia<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`relative text-muted-foreground font-medium text-lg transition-colors duration-300 hover:text-indigo-500 ${
                activeSection === item.href.replace("#", "")
                  ? "text-indigo-500"
                  : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Socials & Hamburger */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex space-x-6 text-muted-foreground">
            <a
              href="https://github.com/ssSobuj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-500"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/developer-sabuj-mia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-500"
            >
              <Linkedin size={22} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-indigo-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-muted-foreground hover:text-indigo-500 font-medium text-lg ${
                  activeSection === item.href.replace("#", "")
                    ? "text-indigo-500"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex space-x-6 pt-4 border-t border-border">
              <a
                href="https://github.com/ssSobuj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-indigo-500"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/developer-sabuj-mia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-indigo-500"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
