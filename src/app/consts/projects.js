/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
  {
    id: "uylab",
    name: "Learning Management System (LMS)",
    description:
      "I've nearly finished Uylab's LMS front end, creating a responsive UI with Next.js, SASS, and Bootstrap, ensuring smooth UX with real-time sync.",
    image: "/images/projects/uylab.png",
    links: {
      live: "uylab.org",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
  },
  {
    id: "cuet",
    name: "CUET Official Web Application",
    description:
      "I worked on the CUET official web app front end, focusing on responsive design and optimizing the user experience.",
    image: "/images/projects/cuet.png",
    links: {
      live: "cuet.thetork.com",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
  },
  {
    id: "zepid",
    name: "AI Generator Platform Development",
    description:
      "Developing an AI generator platform with Next.js, TypeScript, Tailwind CSS, Radix UI, and ShadCN UI, focusing on a responsive, interactive, and visually engaging interface.",
    image: "/images/projects/zepid.png",
    links: {
      live: "zepid.ai",
    },
    techs: ["NextJs", "Tailwind", "TypeScript"],
    hasImage: true,
  },
  {
    id: "thetork",
    name: "The Tork Inc. Official Website Development",
    description:
      "Developed The Tork Inc. website using React and Next.js, creating a responsive, high-performance platform that highlights the company’s tech services and enhances user experience.",
    image: "/images/projects/thetork.png",
    links: {
      live: "thetork.com",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
  },
  {
    id: "jobcuet",
    name: "CUET Job Portal",
    description:
      "Built the frontend for a CUET job portal with responsive dashboards, job listings, and a CV builder using React and Next.js. Integrated REST APIs for seamless data flow and implemented real-time updates with SWR.",
    image: "/images/projects/jobcuet.png",
    links: {
      live: "jobs.cuet.ac.bd",
    },
    techs: ["NextJs", "Bootstrap", "SCSS"],
    hasImage: true,
  },
];

export default projects;
