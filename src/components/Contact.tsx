import React, { useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    emailjs
      .sendForm(
        "service_2y5vgh1",
        "template_sdusixi",
        form.current,
        "-3W3Ae_tDcZcDgkfg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you're a company looking to hire, or
                you're a developer looking to collaborate, I'd love to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:mdsobujredoy@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
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
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/developer-sabuj-mia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
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
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/ssSobuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    ssSobuj
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-4 lg:p-8 border border-gray-700">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
