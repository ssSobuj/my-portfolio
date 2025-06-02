import React from "react";

const Skills = () => {
  const skills = {
    language: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    database: ["MongoDB Atlas", "Mongoose"],
    styling: ["SASS/SCSS", "Tailwind CSS", "Bootstrap"],
    frontend: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "React Hook Form",
      "Redux Toolkit",
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "NextAuth.js"],
    tools: [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Firebase",
      "Vercel",
      "Jira",
    ],
  };

  const skillCategories = [
    { title: "Languages", skills: skills.language, color: "blue" },
    { title: "Frontend", skills: skills.frontend, color: "green" },
    { title: "Styling", skills: skills.styling, color: "purple" },
    { title: "Backend", skills: skills.backend, color: "orange" },
    { title: "Database", skills: skills.database, color: "red" },
    { title: "Tools", skills: skills.tools, color: "cyan" },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-indigo-500 text-indigo-400 bg-indigo-500/10",
      green: "border-green-500 text-green-400 bg-green-500/10",
      purple: "border-purple-500 text-purple-400 bg-purple-500/10",
      orange: "border-orange-500 text-orange-400 bg-orange-500/10",
      red: "border-red-500 text-red-400 bg-red-500/10",
      cyan: "border-cyan-500 text-cyan-400 bg-cyan-500/10",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getDotColor = (color: string) => {
    const colors = {
      blue: "bg-indigo-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
      cyan: "bg-cyan-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-3 ${getDotColor(
                    category.color
                  )}`}
                ></div>
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105 ${getColorClasses(
                      category.color
                    )}`}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
