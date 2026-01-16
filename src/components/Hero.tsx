// import React from "react";
// import { ArrowDown } from "lucide-react";

// const Hero = () => {
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
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-28 lg:pt-32 py-20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="animate-fade-in text-center lg:text-left">
//             <div className="mb-8">
//               <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
//                 <span className="text-indigo-400 text-sm font-medium">
//                   Open for new opportunities
//                 </span>
//               </div>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               I am a <span className="text-indigo-400">Full-Stack</span>
//               <br />
//               Developer Specializing in
//               <br />
//               <span className="text-indigo-400">front-end</span> Development
//             </h1>

//             <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//               I design and develop responsive, high-performance web
//               applications, merging cutting-edge frontend tech with robust
//               backend solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
//               <a
//                 href="/Md_Sabuj_Mia_Frontend_Developer_CV_2025.pdf"
//                 download
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               >
//                 Download CV
//               </a>
//               <a
//                 href="#"
//                 onClick={(e) => handleSmoothScroll(e, "#about")}
//                 className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
//               >
//                 Learn More
//                 <ArrowDown size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative animate-fade-in">
//             <div className="relative z-10">
//               <img
//                 // src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
//                 src="/sobujcv.jpg"
//                 alt="Developer workspace"
//                 className="w-full max-h-[500px] h-auto rounded-2xl shadow-2xl object-cover"
//               />
//               {/* Gradient overlay for better integration */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-600/20 rounded-2xl"></div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>
//             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
//           </div>
//         </div>

//         {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ArrowDown className="text-gray-400" size={24} />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
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

  // Variants for container and each word
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background pt-28 lg:pt-32 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={word} className="mb-8">
              <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
                <span className="text-indigo-400 text-sm font-medium">
                  Open for new opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={word}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-center lg:text-left"
            >
              <span className="text-indigo-400">Full-Stack</span> Developer
              <br />
              Building Modern Web Applications
            </motion.h1>

            <motion.p
              variants={word}
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
            >
              I build fast, reliable web apps with React/Next.js, Node.js APIs,
              and SQL/NoSQL databases.
            </motion.p>

            <motion.div
              variants={word}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <a
                href="/MD-Sabuj-Mia-Frontend-Developer.pdf"
                download
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
              <a
                href="#"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Learn More
                <ArrowDown size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div variants={word} className="relative z-10">
              <img
                src="/sobujcv.jpg"
                alt="Developer workspace"
                className="w-full max-h-[500px] h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-600/20 rounded-2xl"></div>
            </motion.div>

            <motion.div
              variants={word}
              className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              variants={word}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
