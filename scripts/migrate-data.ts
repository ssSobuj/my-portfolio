import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects.js"; // Note: tsx allows .js extension for .ts files

const CONTENT_DIR = path.join(process.cwd(), "src/content");
const SITE_DIR = path.join(CONTENT_DIR, "site");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");

// Ensure directories exist
[SITE_DIR, PROJECTS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Migrate Projects
console.log("Migrating projects...");
projects.forEach((project) => {
  const filePath = path.join(PROJECTS_DIR, `${project.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(project, null, 2));
  console.log(`- Created ${project.id}.json`);
});

// 2. Migrate Hero
console.log("Migrating Hero data...");
const heroData = {
  tagline: "Open for new opportunities",
  titlePart1: "Full-Stack",
  titlePart2: " Developer",
  subtitle: "Building Modern Web Applications",
  description: "I build fast, reliable web apps with React/Next.js, Node.js APIs, and SQL/NoSQL databases, while using AI-assisted workflows with Claude, OpenAI, and Copilot to speed up iteration and improve code quality.",
  cvLink: "/Sabuj_Mia_FullStack_Engineer.pdf",
  cvText: "Download CV",
  learnMoreText: "Learn More",
  image: "/sobujcv.jpg"
};
fs.writeFileSync(path.join(SITE_DIR, "hero.json"), JSON.stringify(heroData, null, 2));

// 3. Migrate About
console.log("Migrating About data...");
const aboutData = {
  heading: "About Me",
  subHeading: "Full-Stack Developer Building End-to-End Products",
  paragraphs: [
    "I'm a full-stack developer who builds modern web experiences from UI to API. I specialize in React and Next.js on the frontend and Node.js with REST APIs on the backend, delivering clean, maintainable code.",
    "I work with SQL and PostgreSQL alongside MongoDB and Redis, choosing the right data model for each feature. I also use AI-assisted development workflows with Claude, OpenAI, and GitHub Copilot for faster prototyping, smarter debugging, and safer refactoring.",
    "My focus is on scalable architecture, performance, and product polish across the stack while using modern AI tools to improve delivery speed and maintain strong engineering quality."
  ],
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "9+" },
    { label: "Technologies Mastered", value: "10+" }
  ],
  terminalCode: {
    name: "Sobuj Mia",
    role: "Full-Stack Developer",
    experience: "2+ years",
    location: "Bangladesh",
    passion: "Building end-to-end products",
    aiWorkflow: "Claude, OpenAI, Copilot"
  }
};
fs.writeFileSync(path.join(SITE_DIR, "about.json"), JSON.stringify(aboutData, null, 2));

// 4. Migrate Experience
console.log("Migrating Experience data...");
const experienceData = {
  heading: "Experience",
  description: "A timeline of roles where I delivered web products across the stack.",
  items: [
    {
      company: "SeloraX",
      title: "Full Stack Developer",
      type: "Full-time",
      period: "Jan 2026 - Present",
      duration: "1 mo",
      location: "Mirpur, Dhaka, Bangladesh",
      mode: "On-site",
      summary: "Refactored complex Prisma queries and indexing to reduce latency, migrated legacy modules into a type-safe TypeScript design system, and collaborated on PostgreSQL schema optimization for high-traffic dashboards with zero-downtime releases, supported by AI-assisted debugging and review workflows."
    },
    {
      company: "Boost Rava",
      title: "Full Stack Developer",
      type: "Part-time",
      period: "July 2024 - Dec 2025",
      duration: "1 yr 6 mos",
      location: "Dhaka, Bangladesh",
      mode: "Remote",
      summary: "Led a mobile-first analytics dashboard redesign with interactive charts and responsive CSS Grid layouts, improved app performance by 30% through lazy loading and code splitting, and synchronized live ad performance data with Redux Toolkit for accurate real-time reporting while using AI tools to speed up iteration cycles."
    },
    {
      company: "The Tork",
      title: "Frontend Developer",
      type: "Full-time",
      period: "Nov 2024 - Dec 2025",
      duration: "1 yr 2 mos",
      location: "Dhaka, Bangladesh",
      mode: "On-site",
      summary: "Managed UI/UX delivery for an enterprise LMS, reduced drop-off in complex registration flows with persistent local-storage sync, and redesigned dashboard information architecture with a modular front-end system using AI-assisted implementation support."
    },
    {
      company: "The Tork",
      title: "Junior Frontend Developer",
      type: "Full-time",
      period: "May 2024 - Oct 2024",
      duration: "6 mos",
      location: "Dhaka, Bangladesh",
      mode: "On-site",
      summary: "Built and shipped responsive product features with React and Next.js, supported component-level refactors for better maintainability, and collaborated with senior developers on production-ready UI workflows with AI-supported code refinement."
    },
    {
      company: "The Tork",
      title: "Development Intern",
      type: "Internship",
      period: "Feb 2024 - Apr 2024",
      duration: "3 mos",
      location: "Block-G, The Tork (Dhaka Head Office), House-32 Rd 01, Dhaka 1219",
      mode: "On-site",
      summary: "Contributed to front-end feature development using React and Next.js, translated design requirements into reusable UI sections, and learned team delivery workflows, code review, and release practices including AI-assisted productivity techniques."
    }
  ]
};
fs.writeFileSync(path.join(SITE_DIR, "experience.json"), JSON.stringify(experienceData, null, 2));

// 5. Migrate Skills
console.log("Migrating Skills data...");
const skillsData = {
  heading: "Skills & Technologies",
  description: "Here are the technologies and tools I use to bring ideas to life",
  categories: [
    { title: "Languages", color: "blue", skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
    { title: "Frontend", color: "green", skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "React Hook Form", "Redux Toolkit"] },
    { title: "Styling", color: "purple", skills: ["SASS/SCSS", "Tailwind CSS", "Bootstrap"] },
    { title: "Backend", color: "orange", skills: ["Node.js", "Express.js", "REST APIs", "NextAuth.js"] },
    { title: "Database", color: "red", skills: ["MongoDB Atlas", "Mongoose"] },
    { title: "Tools", color: "cyan", skills: ["Git/GitHub", "VS Code", "Figma", "Postman", "Firebase", "Vercel", "Jira"] }
  ]
};
fs.writeFileSync(path.join(SITE_DIR, "skills.json"), JSON.stringify(skillsData, null, 2));

// 6. Migrate Contact
console.log("Migrating Contact data...");
const contactData = {
  heading: "Get In Touch",
  description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: "sobujece40@gmail.com",
  phone: "+8801568285526",
  location: "Dhaka, Bangladesh",
  socials: {
    github: "https://github.com/ssSobuj",
    linkedin: "https://www.linkedin.com/in/sssobuj/",
    twitter: "https://twitter.com/sssobuj"
  }
};
fs.writeFileSync(path.join(SITE_DIR, "contact.json"), JSON.stringify(contactData, null, 2));

console.log("Migration complete!");
