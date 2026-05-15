import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life with full-stack engineering and modern
            AI-enhanced development workflows.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 lg:p-8 border border-border">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-lg">
              I'm always interested in hearing about new projects and
              opportunities. Whether you're a company looking to hire, or you're
              a developer looking to collaborate, I'd love to hear from you.
              I bring full-stack execution with practical experience using
              Claude, OpenAI, and Copilot in real development workflows.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Email</h4>
                <a
                  href="mailto:mdsobujredoy@gmail.com"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
                >
                  mdsobujredoy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Linkedin className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/developer-sabuj-mia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
                >
                  developer-sabuj-mia
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Github className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold">GitHub</h4>
                <a
                  href="https://github.com/ssSobuj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
                >
                  ssSobuj
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-foreground font-semibold">Phone</h4>
                <a
                  href="tel:+01731620933"
                  className="text-muted-foreground hover:text-indigo-400 transition-colors duration-200"
                >
                  +01731620933
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
