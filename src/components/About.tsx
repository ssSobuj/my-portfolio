import React from "react";

const About = ({ data }: { data: any }) => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{data.heading}</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {data.subHeading}
            </h3>

            {data.paragraphs.map((p: string, index: number) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 mt-8">
              {data.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-card border border-border px-4 py-2 rounded-lg">
                  <span className="text-indigo-400 font-semibold">{stat.value}</span>
                  <span className="text-muted-foreground ml-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-background rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-green-400 text-sm">
                    const developer = {`{`}
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    name: "{data.terminalCode.name}",
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    role: "{data.terminalCode.role}",
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    experience: "{data.terminalCode.experience}",
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    location: "{data.terminalCode.location}",
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    passion: "{data.terminalCode.passion}"
                  </div>
                  <div className="text-muted-foreground text-sm ml-4">
                    aiWorkflow: "{data.terminalCode.aiWorkflow}"
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
