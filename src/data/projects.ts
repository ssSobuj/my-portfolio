export type ProjectType = "professional" | "personal" | "fullstack";

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  overview: string;
  image: string;
  links: {
    live?: string;
    github_frontend?: string;
    github_backend?: string;
  };
  techs: string[];
  hasImage: boolean;
  type: ProjectType;
  role: string;
  features: string[];
  frontendWork: string[];
  backendWork: string[];
  aiWorkflow: string[];
  outcomes: string[];
}

export const projects: ProjectData[] = [
  {
    id: "saas-crm-accounting",
    name: "Multi-Tenant SaaS CRM & Accounting Platform",
    description:
      "Built a multi-tenant SaaS platform with CRM and accounting modules, role-based access control, real-time notifications with Socket.io and SMS integration, and an EPS payment/subscription workflow. Delivered a public landing page, user dashboard, and super admin panel while designing scalable APIs, optimizing database performance, and accelerating delivery with AI-assisted implementation and debugging workflows.",
    overview:
      "This project is a complete multi-tenant SaaS product with business operations across CRM and accounting workflows. I delivered key product experiences from landing to dashboard to admin, while structuring architecture for scale, role control, and reliable performance in production.",
    image: "/projects/shocchota.png",
    links: { live: "landing-page-shocchota.vercel.app" },
    techs: [
      "Next.js",
      "Prisma",
      "MySQL",
      "React Query",
      "Zustand",
      "Socket.io",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    hasImage: true,
    type: "fullstack",
    role: "Full-Stack Developer",
    features: [
      "Multi-tenant architecture with role-based access",
      "CRM and accounting modules under one platform",
      "Real-time notifications with Socket.io and SMS",
      "Subscription and payment workflow integration",
    ],
    frontendWork: [
      "Built landing page, dashboard, and super admin UI",
      "Designed reusable components for product consistency",
    ],
    backendWork: [
      "Designed scalable API structure for tenant isolation",
      "Optimized Prisma queries and database access patterns",
    ],
    aiWorkflow: [
      "Used AI tools to speed up implementation alternatives",
      "Used AI-assisted debugging to reduce iteration time",
    ],
    outcomes: [
      "Delivered production-ready full product flow",
      "Improved delivery speed while keeping clean architecture",
    ],
  },
  {
    id: "aurora-bangladesh",
    name: "Aurora Bangladesh - E-commerce Platform",
    description:
      "Developed a full-stack multi-store and multi-branch e-commerce platform for store, showroom, and warehouse operations. Implemented admin/super-admin/staff RBAC, integrated SSLCommerz payments and SSL SMS templates, and built scalable backend workflows with reusable ShadCN UI components and AI-supported rapid iteration.",
    overview:
      "Aurora Bangladesh is a commerce platform covering catalog browsing, checkout, and business operations for multiple stores and branches. I worked across both product and system layers to ensure the storefront experience and internal workflows stayed reliable and scalable.",
    image: "/projects/aurora.png",
    links: {
      live: "aurorabangladesh.com",
    },
    techs: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    hasImage: true,
    type: "fullstack",
    role: "Full-Stack Developer",
    features: [
      "Multi-store and multi-branch operations",
      "RBAC for admin, super admin, and staff",
      "Integrated payment and SMS workflows",
      "Responsive storefront with product browsing and cart",
    ],
    frontendWork: [
      "Built responsive pages for category and product browsing",
      "Implemented reusable UI sections using ShadCN patterns",
    ],
    backendWork: [
      "Built scalable backend flows for store operations",
      "Implemented secure role-based permission logic",
    ],
    aiWorkflow: [
      "Used AI-assisted code suggestions for faster iteration",
      "Used AI support for refactor validation and cleanup",
    ],
    outcomes: [
      "Shipped a live e-commerce system with operations support",
      "Maintained product speed across customer and admin views",
    ],
  },
  {
    id: "cuet",
    name: "CUET Official Web Application",
    description:
      "I worked on the CUET official web app front end, focusing on responsive design and optimizing the user experience.",
    overview:
      "I contributed to the official university web application by improving frontend quality, responsiveness, and content accessibility for different device sizes.",
    image: "/projects/cuet.png",
    links: {
      live: "cuet.ac.bd",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Responsive layouts for key pages",
      "Improved visual hierarchy and readability",
    ],
    frontendWork: [
      "Implemented responsive page sections",
      "Optimized UI behavior across desktop and mobile",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI support for UI refinement and faster QA passes"],
    outcomes: ["Delivered a smoother experience for public users"],
  },
  {
    id: "kireibd",
    name: "Kirai BD a e-commerce Website",
    description:
      "I've nearly completed the front end of my e-commerce platform, creating a responsive and engaging user interface with Next.js, Bootstrap, and SASS, ensuring a smooth shopping experience with real-time updates.",
    overview:
      "Kirei BD is an e-commerce frontend implementation focused on visual polish, responsive behavior, and smooth shopping interactions for customer-facing pages.",
    image: "/projects/kiraibd.png",
    links: {
      live: "kireibd.com",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Responsive storefront pages",
      "Product-focused UI interactions",
      "Real-time update-friendly interface patterns",
    ],
    frontendWork: [
      "Built customer-facing frontend with modern UI patterns",
      "Improved interaction quality for product browsing",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI support for component iteration and styling speed"],
    outcomes: ["Reached near-complete frontend delivery"],
  },
  {
    id: "uylab",
    name: "Learning Management System",
    description:
      "I've nearly finished Uylab's LMS front end, creating a responsive UI with Next.js, SASS, and Bootstrap, ensuring smooth UX with real-time sync.",
    overview:
      "This LMS frontend focuses on course-driven UX, responsive dashboard sections, and stable interaction patterns for learners and instructors.",
    image: "/projects/uylab.png",
    links: {
      live: "uylab.org",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Responsive LMS dashboard interfaces",
      "Course and learning flow UI sections",
      "Real-time sync-ready UX structure",
    ],
    frontendWork: [
      "Built and structured key LMS frontend pages",
      "Improved responsiveness and usability",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI suggestions for faster UI problem solving"],
    outcomes: ["Delivered near-finished responsive LMS frontend"],
  },
  {
    id: "jobcuet",
    name: "CUET Job Portal",
    description:
      "Built the frontend for a CUET job portal with responsive dashboards, job listings, and a CV builder using React and Next.js. Integrated REST APIs for seamless data flow and implemented real-time updates with SWR.",
    overview:
      "The portal includes job discovery, profile, and CV builder flows. I focused on making dashboards responsive and data interactions feel smooth and reliable.",
    image: "/projects/jobcuet.png",
    links: {
      live: "jobs.cuet.ac.bd",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Job listing and application flows",
      "Responsive dashboards and profile pages",
      "CV builder interface",
    ],
    frontendWork: [
      "Built portal UI with responsive interaction flows",
      "Integrated REST APIs and SWR for live data updates",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI assistance to speed up integration troubleshooting"],
    outcomes: ["Delivered stable, responsive frontend for job platform"],
  },
  {
    id: "story-nest",
    name: "Story Nest - Full-Stack Publishing Platform",
    description:
      "A full-stack story-telling platform where users can write, publish, and share their stories. Features a robust authentication system with Google OAuth and JWT-based email/password login. Incorporates a multi-tiered role system (User, Admin, Super Admin) to manage content approval workflows, ensuring content quality and platform integrity.",
    overview:
      "Story Nest is a complete publishing platform with auth, role-based moderation, and content workflow control. I built the system to support secure access and structured publishing operations.",
    image: "/projects/story-nest.png",
    links: {
      live: "story-nest-topaz.vercel.app",
      github_frontend: "github.com/ssSobuj/storyNestFrontend",
      github_backend: "github.com/ssSobuj/storyNestServer",
    },
    techs: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    hasImage: true,
    type: "personal",
    role: "Full-Stack Developer",
    features: [
      "Google OAuth and JWT authentication",
      "Role-based approval workflow",
      "Publishing flow for user-generated stories",
    ],
    frontendWork: [
      "Built writing, publishing, and content browsing pages",
      "Created role-aware UI states",
    ],
    backendWork: [
      "Implemented auth and role-based authorization",
      "Designed moderation-oriented content workflows",
    ],
    aiWorkflow: ["Used AI for faster planning, refactor checks, and debugging"],
    outcomes: ["Shipped a complete end-to-end content platform"],
  },
  {
    id: "mailprofessors",
    name: "Mail Professors - AI Academic Outreach Platform",
    description:
      "Developed the frontend for an AI-powered platform that helps students find and contact university professors for research opportunities. My responsibilities included building the core user interfaces for searching professors, filtering results, and managing AI-generated personalized emails. Leveraged Next.js and MUI to create a highly responsive and intuitive user experience.",
    overview:
      "Mail Professors helps students discover matching professors and generate personalized outreach emails. I focused on building clear user flows for search, filtering, and email generation management.",
    image: "/projects/mailprofessors.png",
    links: {
      live: "mailprofessors.com",
    },
    techs: ["Next.js", "MUI", "TypeScript", "AI Integration"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Professor discovery and filtering interface",
      "AI-generated personalized email management",
      "Plan and usage-focused onboarding screens",
    ],
    frontendWork: [
      "Built core product pages for student workflows",
      "Implemented responsive interaction across desktop and mobile",
    ],
    backendWork: [],
    aiWorkflow: [
      "Worked on UI experience for AI-driven email generation features",
      "Used AI tools in development for faster implementation loops",
    ],
    outcomes: ["Delivered frontend for a live AI-powered platform"],
  },
  {
    id: "zepid",
    name: "AI Generator Platform Development",
    description:
      "Developing an AI generator platform with Next.js, TypeScript, Tailwind CSS, Radix UI, and ShadCN UI, focusing on a responsive, interactive, and visually engaging interface with production-ready frontend workflows.",
    overview:
      "Zepid is focused on generating web applications and landing pages quickly. I contributed frontend work for responsive product experiences and interactive builder-related interfaces.",
    image: "/projects/zepid.png",
    links: {
      live: "zepid.ai",
    },
    techs: ["NextJs", "Tailwind", "TypeScript"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Interactive AI generator-facing UI",
      "Responsive builder and preview-friendly layouts",
      "Production-focused visual system integration",
    ],
    frontendWork: [
      "Built interactive frontend sections for generator product",
      "Improved usability for creation and preview flows",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI-assisted workflow to speed up component delivery"],
    outcomes: ["Supported a live AI product with polished frontend delivery"],
  },
  {
    id: "thetork",
    name: "The Tork Inc. Official Website Development",
    description:
      "Developed The Tork Inc. website using React and Next.js, creating a responsive, high-performance platform that highlights the company's tech services and enhances user experience.",
    overview:
      "A company website implementation focused on performance, clear communication of services, and conversion-friendly layout behavior.",
    image: "/projects/thetork.png",
    links: {
      live: "thetork.com",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Service-focused landing experience",
      "Responsive and performance-conscious frontend",
    ],
    frontendWork: [
      "Built core marketing pages and UX flow",
      "Improved responsiveness and load behavior",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI-assisted content and UI refinement workflow"],
    outcomes: ["Delivered polished public-facing company website"],
  },
  {
    id: "meridian",
    name: "Meridian Consultancy - Immigration & Visa Solutions",
    description:
      "Built the frontend for Meridian Consultancy using React and Next.js. Implemented dynamic pages with API integration and a responsive contact section with external form handling.",
    overview:
      "Meridian Consultancy required a professional web presence with dynamic content sections and clear lead/contact pathways. I implemented frontend sections and integrations to support that outcome.",
    image: "/projects/meridian-consultancy.png",
    links: {
      live: "meridianconsultancy.com.au",
    },
    techs: ["NextJs", "Css"],
    hasImage: true,
    type: "professional",
    role: "Frontend Developer",
    features: [
      "Dynamic page rendering with API-driven content",
      "Responsive contact and lead capture sections",
    ],
    frontendWork: [
      "Built responsive frontend pages and interactive sections",
      "Integrated API-powered dynamic content",
    ],
    backendWork: [],
    aiWorkflow: ["Used AI support for component-level implementation speed"],
    outcomes: ["Delivered production-ready consultancy web experience"],
  },
];
