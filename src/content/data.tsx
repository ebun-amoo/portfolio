import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faCode,
  faDiagramProject,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export const profile = {
  name: "Ebunoluwa Amoo",
  title: "Software Engineer",
  heroBlurb:
    "Ebunoluwa Amoo is a penultimate-year Systems Engineering student, with a background in Computer Science and experience in Software Engineering.",
  location: "Lagos, Nigeria",
  email: "ebunoluwaamoo@gmail.com",
  phone: "+234-701-514-7567",
  github: "https://github.com/ebun-amoo/",
  linkedin: "https://www.linkedin.com/in/ebunoluwa-amoo/",
  medium: "https://medium.com/@ebunamoo",
  resumeFile: "/resume.pdf", 
};

export const about = {
  intro:
    "I build with intention. Creating technology that brings people closer, solves real problems, and sparks lasting impact.",
  photos: [
    { src: "/about/photo-1.jpg", alt: "Presenting a project to classmates in a lecture room" },
    { src: "/about/photo-2.jpg", alt: "Presenting a coding project on a projector screen" },
    { src: "/about/photo-3.jpg", alt: "Receiving an award on stage at African Leadership University" },
    { src: "/about/photo-4.jpg", alt: "At a community event" },
  ],
  sections: [
    {
      heading: "What I Do",
      body: "I'm a Software Engineer with experience across SaaS and EdTech. At Flexie (Techstars '22), I've contributed to both backend and frontend systems: developing APIs, improving data performance, and crafting responsive UIs that enhance user experience. Outside of work, I've also led digital literacy programs: teaching Python to secondary school students and bridging technology gaps in public schools.",
    },
    {
      heading: "What Drives Me",
      body: "I believe technology should do more than just work. It should mean something. My journey has taught me how access to digital education can transform lives, and I'm passionate about creating tools that make learning and connection more accessible for everyone.",
    },
    {
      heading: "Where I Am",
      body: "I'm currently pursuing a degree in Systems Engineering at the University of Lagos and hold a Higher Diploma in Computer Science from Kibo School. Alongside this, I'm building Ile-Alayo, a community initiative creating spaces of joy and belonging for Nigeria's older generation. Inspired by inter-generational storytelling and shared culture, it's a project close to my heart.",
    },
    {
      heading: "When I'm Not Working",
      body: "You'll find me contributing to communities I'm part of or volunteering on projects that resonate with my values. I also write about faith, growth, and creativity on Medium and Substack, where I reflect on the quieter lessons that shape how we live and build.",
    },
  ],
};

export const experience = [
  {
    company: "Flexie Inc (Techstars '22)",
    role: "Junior Software Engineer",
    period: "Sep 2023 – Present",
    impact: [
     "Develop and maintain scalable backend APIs using Node.js, TypeScript, and PostgreSQL.",
     "Improve backend performance through SQL optimization and efficient database design.",
     "Implement secure authentication and authorization systems.",
      "Build and maintain responsive React and React Native features",
      "Collaborate in Agile teams through code reviews, sprint planning, and technical discussions."
    ],
  },
  {
    company: "Flexie Inc. (Techstars '22)",
    role: "Software Engineer Intern",
    period: "Jul 2023 – Aug 2023",
    impact: [
      "Built responsive UI features that enhanced the platform's overall user experience.",
      "Contributed to user-facing tools, including the resume builder feature.",
      "Recognized as Most Improved Team Member for rapid growth in technical skill and impact.",
    ],
  },
  {
    company: "Kibo School",
    role: "Student Ambassador",
    period: "Aug 2023 – Jun 2024",
    impact: [
      "Led student engagement initiatives, including launching the \"Life at Kibo\" community page.",
      "Taught Python to 500+ secondary school students through the CS4Schools program.",
      "Organized events that strengthened community participation among students.",
    ],
  },
  {
    company: "Kibo School",
    role: "Outreach Ambassador",
    period: "Apr 2023 – Jul 2023",
    impact: [
      "Drove outreach campaigns that increased prospective student engagement.",
      "Supported admissions communications for incoming student cohorts.",
      "Collaborated with the marketing team to expand Kibo's reach online.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Systems Engineering",
    school: "University of Lagos",
    period: "Expected 2027",
  },
  {
    degree: "Higher Diploma in Computer Science",
    school: "Kibo School of Technology, Woolf University",
    period: "Graduated 2024",
  },
];

export const talents = [
  {
    icon: <FontAwesomeIcon icon={faServer} className="h-5 w-5" />,
    category: "Backend Development",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} className="h-5 w-5" />,
    category: "Frontend Development",
  },
  {
    icon: <FontAwesomeIcon icon={faDiagramProject} className="h-5 w-5" />,
    category: "Project Management & Collaboration",
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleGroup} className="h-5 w-5" />,
    category: "Community & Leadership",
  },
];

export const skills = [
  {
    category: "I Build",
    items: [
      "Backend APIs",
      "Responsive UIs",
      "Full-stack Web Apps",
      "Authentication Systems",
      "Internal Tools",
    ],
  },
  {
    category: "Core Technologies",
    items: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      "System Design",
      "REST API Development",
      "SQL Optimization",
      "Testing with Jest",
      "Code Reviews",
      "Technical Documentation",
    ],
  },
  {
    category: "Developer Toolkit",
    items: [
      "Git & GitHub",
      "Postman",
      "Swagger",
      "Azure Blob Storage",
      "Supabase",
      "Linear",
      "Figma",
    ],
  },
];

export const awards = [
  {
    title: "Dean's List",
    org: "Kibo School of Technology (Fall 2022 – Winter 2023)",
  },
  {
    title: "Kibo Legacy Award",
    org: "Kibo School (2024)",
  },
  {
    title: "Most Improved Team Member",
    org: "Flexie Inc. (2023)",
  },
  {
    title: "Kibo Digital Literacy Fellowship Winner",
    org: "Kibo School (2023)",
  },
  {
    title: "Community Engagement Lead",
    org: "Google Developer Student Clubs (GDSC) Kibo",
  },
  {
    title: "Founder & Team Lead",
    org: "Kibo Student Socials",
  },
  {
    title: "Team Lead",
    org: "CS4Schools Initiative",
  },
  {
    title: "Facilitator",
    org: "Digital Literacy Initiative",
  },
  {
    title: "Volunteer",
    org: "Tech For The Street Initiative",
  },
];

// PLACEHOLDER CONTENT — replace name/role/quote with real testimonials before launch.
export const testimonials = [
  { avatar: "/about/photo-1.jpg", name: "Add a name", role: "Add their role & company", quote: "Replace this with a real testimonial before this section goes live." },
  { avatar: "/about/photo-1.jpg", name: "Add a name", role: "Add their role & company", quote: "Replace this with a real testimonial before this section goes live." },
  { avatar: "/about/photo-1.jpg", name: "Add a name", role: "Add their role & company", quote: "Replace this with a real testimonial before this section goes live." },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "flexie-mobile-app",
    name: "Flexie Mobile App",
    summary: "Implemented and tested APIs that improved data retrieval speeds by 25% and reduced backend errors by 30%.",
    description:
      "Worked on the mobile app's backend integration layer, designing and testing REST APIs that materially improved data retrieval performance and reduced backend error rates. Collaborated closely with frontend engineers to make sure API contracts matched real UI needs.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Jest"],
    links: [],
  },
  {
    slug: "flexie-authentication-app",
    name: "Flexie Authentication App",
    summary:
      "Developed a standalone authentication system with email and phone number verification, ensuring secure and reliable access for Flexie users.",
    description:
      "Built a standalone authentication service supporting both email and phone number verification flows, used across Flexie's product surface. Focused on secure token handling, clear error states, and a verification flow that stayed simple for the end user.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    links: [],
  },
  {
    slug: "flexie-authentication-ap",
    name: "Flexie Authentication App",
    summary:
      "Developed a standalone authentication system with email and phone number verification, ensuring secure and reliable access for Flexie users.",
    description:
      "Built a standalone authentication service supporting both email and phone number verification flows, used across Flexie's product surface. Focused on secure token handling, clear error states, and a verification flow that stayed simple for the end user.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    links: [],
  },
  {
    slug: "flexie-authentication-appz",
    name: "Flexie Authentication App",
    summary:
      "Developed a standalone authentication system with email and phone number verification, ensuring secure and reliable access for Flexie users.",
    description:
      "Built a standalone authentication service supporting both email and phone number verification flows, used across Flexie's product surface. Focused on secure token handling, clear error states, and a verification flow that stayed simple for the end user.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    links: [],
  }
];
