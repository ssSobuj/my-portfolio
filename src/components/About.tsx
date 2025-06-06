import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Frontend Developer with Full-Stack Vision
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate frontend developer who specializes in creating
              exceptional digital experiences. With expertise in modern
              JavaScript frameworks like React.js, Next.js, Vue.js, and Nuxt.js,
              I bring ideas to life through clean, efficient code.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development has led me to work on diverse
              projects, from e-commerce platforms to learning management systems
              and AI-powered applications. I believe in writing maintainable
              code that not only works flawlessly but also provides an
              outstanding user experience.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source projects, and staying updated with the latest
              trends in web development.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-indigo-400 font-semibold">1.5+</span>
                <span className="text-gray-300 ml-2">Years Experience</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-indigo-400 font-semibold">7+</span>
                <span className="text-gray-300 ml-2">Projects Completed</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-indigo-400 font-semibold">3+</span>
                <span className="text-gray-300 ml-2">
                  Technologies Mastered
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-green-400 text-sm">
                    const developer = {`{`}
                  </div>
                  <div className="text-gray-300 text-sm ml-4">
                    name: "Sobuj Mia",
                  </div>
                  <div className="text-gray-300 text-sm ml-4">
                    role: "Frontend Developer",
                  </div>
                  <div className="text-gray-300 text-sm ml-4">
                    experience: "1.5+ years",
                  </div>
                  <div className="text-gray-300 text-sm ml-4">
                    location: "Bangladesh",
                  </div>
                  <div className="text-gray-300 text-sm ml-4">
                    passion: "Building amazing UIs"
                  </div>
                  <div className="text-green-400 text-sm">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
