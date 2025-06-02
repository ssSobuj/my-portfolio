// import React, { useState } from "react";
// import { Github, Linkedin, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleSmoothScroll = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string
//   ) => {
//     e.preventDefault();
//     const targetId = href.replace("#", "");
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     // Close mobile menu if open
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-white">
//               Sobuj<span className="text-indigo-400">.</span>
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => handleSmoothScroll(e, item.href)}
//                   className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="https://github.com/ssSobuj"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-colors duration-200"
//             >
//               <Github size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/developer-sabuj-mia/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-colors duration-200"
//             >
//               <Linkedin size={20} />
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-400 hover:text-white"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-900 border-t border-gray-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => handleSmoothScroll(e, item.href)}
//                 className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
//               >
//                 {item.name}
//               </a>
//             ))}
//             <div className="flex space-x-4 px-3 py-2">
//               <a
//                 href="https://github.com/ssSobuj"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/developer-sabuj-mia/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white"
//               >
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// 2nd version

// import React, { useState, useEffect } from "react";
// import { Github, Linkedin, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleSmoothScroll = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string
//   ) => {
//     e.preventDefault();
//     const targetId = href.replace("#", "");
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-shadow duration-300 bg-gray-900/90 ${
//         scrolled ? "shadow-xl border-gray-700" : "border-gray-800"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 select-none cursor-default">
//             <span className="text-3xl font-extrabold text-white tracking-tight">
//               Sobuj<span className="text-indigo-500">.</span>
//             </span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-12">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={(e) => handleSmoothScroll(e, item.href)}
//                 className="relative group text-gray-300 hover:text-white font-semibold text-lg transition-colors duration-300"
//                 aria-label={item.name}
//               >
//                 {item.name}
//                 {/* Animated underline */}
//                 <span className="absolute left-0 -bottom-1 w-0 h-1 bg-indigo-500 rounded-full group-hover:w-full transition-all duration-300 ease-in-out" />
//               </a>
//             ))}
//           </div>

//           {/* Social Icons */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="https://github.com/ssSobuj"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-indigo-500 transform hover:scale-110 transition-transform duration-300"
//               aria-label="GitHub"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/developer-sabuj-mia/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-indigo-500 transform hover:scale-110 transition-transform duration-300"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
//               aria-label="Toggle menu"
//               aria-expanded={isMenuOpen}
//             >
//               {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <div
//         className={`md:hidden bg-gray-900 border-t border-gray-800 rounded-b-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
//           isMenuOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col px-6 py-5 space-y-4">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               onClick={(e) => handleSmoothScroll(e, item.href)}
//               className="text-gray-300 hover:text-indigo-500 rounded-md text-lg font-semibold px-3 py-2 transition-colors duration-300"
//               aria-label={item.name}
//             >
//               {item.name}
//             </a>
//           ))}

//           <div className="flex space-x-8 px-3 pt-2">
//             <a
//               href="https://github.com/ssSobuj"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-110"
//               aria-label="GitHub"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/developer-sabuj-mia/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-110"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wide select-none cursor-default">
          Sobuj<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`relative text-gray-300 font-medium text-lg transition-colors duration-300 hover:text-indigo-500 ${
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
          <div className="hidden md:flex space-x-6 text-gray-400">
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
            className="md:hidden text-gray-300 hover:text-indigo-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-gray-300 hover:text-indigo-500 font-medium text-lg ${
                  activeSection === item.href.replace("#", "")
                    ? "text-indigo-500"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex space-x-6 pt-4 border-t border-gray-800">
              <a
                href="https://github.com/ssSobuj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/developer-sabuj-mia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500"
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
