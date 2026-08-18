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
    "Ebunoluwa Amoo is a penultimate-year Systems Engineering student, with a degree in Computer Science and experience in Software Engineering.",
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
    {
      type: "image",
      src: "/about/pic-1.jpg",
      alt: "Presenting a project to classmates in a lecture room",
    },
    {
      type: "image",
      src: "/about/pic-2.jpg",
      alt: "Presenting a coding project on a projector screen",
    },
    {
      type: "image",
      src: "/about/pic-3.jpg",
      alt: "Receiving an award on stage at African Leadership University",
    },
    {
      type: "image",
      src: "/about/pic-4.jpg",
      alt: "At a community event",
    },
    {
      type: "image",
      src: "/about/pic-5.jpg",
      alt: "Presenting a project to classmates in a lecture room",
    },
    {
      type: "image",
      src: "/about/pic-6.jpg",
      alt: "Presenting a coding project on a projector screen",
    },
    {
      type: "image",
      src: "/about/pic-7.jpg",
      alt: "Presenting a coding project on a projector screen",
    },
    {
      type: "image",
      src: "/about/pic-8.jpg",
      alt: "At a community event",
    },
    {
      type: "image",
      src: "/about/pic-9.jpg",
      alt: "Presenting a project to classmates in a lecture room",
    },
    {
      type: "image",
      src: "/about/pic-10.jpg",
      alt: "Presenting a coding project on a projector screen",
    },
    // {
    //   type: "video",
    //   src: "/about/vid-1.mp4",
    //   poster: "/about/vid-1-poster.jpg",
    //   alt: "At a community event",
    // },
    {
      type: "image",
      src: "/about/pic-11.jpg",
      alt: "Presenting a coding project on a projector screen",
    },
    {
      type: "image",
      src: "/about/pic-12.jpg",
      alt: "At a community event",
    },
    {
      type: "image",
      src: "/about/pic-13.jpg",
      alt: "Presenting a project to classmates in a lecture room",
    },
    {
      type: "image",
      src: "/about/pic-14.jpg",
      alt: "Presenting a coding project on a projector screen",
    }
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
      body: "I'm currently pursuing a degree in Systems Engineering at the University of Lagos and hold a Higher Diploma in Computer Science from Kibo School. Alongside my studies, I'm working on Kàwé, an EdTech platform designed to make learning more interactive, engaging, and accessible for children. It's a project that brings together my interest in technology, education, and building things that can make a meaningful difference.",
    },
    {
      heading: "When I'm Not Working",
      body: "You'll find me volunteering, reading fiction, enjoying good music or watching kdramas. I also write about my faith, growth, and journey on Medium and Substack. To follow along with my career journey, you can subscribe to 'Corporate Ebun' on Substack.",
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
      "Build and maintain responsive React features",
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
  { avatar: "/testimonial/test-2.jpeg", name: "Oluwaseun Hamzat ", role: "Technology/Startup Ecosystem Developer", quote: `Ebun is an absolute joy to work with. She is highly conscientious and has all the makings of a great leader. Her natural curiosity and eagerness to take on new responsibilities make her an invaluable team member. She is easily the go-to person for her colleagues, always ready to lend a hand and offer support...` },
  { avatar: "/testimonial/test-3.jpeg", name: "Tomeka Morrison", role: "Data Analytics", quote: "I had the pleasure of working with Ebunoluwa Amoo during her time as a development intern at Flexie, where she played a key role in strengthening our app’s backend infrastructure and improving the connection between our user-facing platform and internal systems." },
  { avatar: "/testimonial/test-1.jpeg", name: "David Cubrilla", role: "Chief Technology Officer at Flexie Inc", quote: "Since joining Flexie's Tech Team, she has been instrumental in launching key features and enabling other members of Flexie. Whether it's tackling complex problems or mentoring others, Ebun brings her A-game every single day. Any tech team would be lucky to have Ebun!" },
];

export type ProjectStatus = "Ongoing" | "Completed" | "In progress";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "flexie-account-dashboard",
    name: "Flexie Account Dashboard",
    status: "Ongoing",
    summary:
      "Own and evolve Flexie's account dashboard, improving account management, documents, referrals, and the overall user experience.",
    image: "/projects/project-1.png",
    description:
      "Own the development and ongoing improvement of Flexie's Account Dashboard across frontend and backend integration. Built account and profile management flows, a user document management system, and a revamped referral experience, while also developing reusable responsive components, integrating APIs, and implementing localization and language switching. These improvements have made account management more intuitive and given users a more consistent experience across the platform.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: [{
      label: "Live App",
      href: "https://user-account.goflexie.com",
    }],
  },

    {
    slug: "kawe",
    name: "Kàwé",
    status: "In progress",
    summary:
      "An EdTech platform I'm developing to make learning more interactive, personalized, and accessible for African children.",
    image: "/projects/project-6.png",
    description:
      "Kàwé is an EdTech product I'm currently developing around the idea that learning should be engaging as well as effective. I'm shaping the product experience around interactive quizzes, personalization, gamification, leaderboards, and rewards, with a focus on making quality learning experiences more accessible to children. The project brings together my interests in software, education, product design, and building technology with meaningful real-world impact.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    links: [],
  },

  {
    slug: "flexie-mobile-app",
    name: "Flexie Mobile App",
    status: "Ongoing",
    summary:
      "Built and tested backend APIs supporting the redesigned Flexie mobile experience.",
    image: "/projects/project-3.jpg",
    description:
      "Developed and tested REST APIs supporting the redesigned Flexie mobile application, working across Node.js and PostgreSQL to improve validation, error handling, and data consistency. Documented API contracts with Swagger and wrote unit tests for major API flows, while collaborating with frontend engineers to ensure reliable integration. This provided the mobile team with a more stable and predictable backend foundation.",
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "Jest"],
    links: [{
      label: "Live App",
      href: "https://goflexie.onelink.me/qghS/web"
    }],
  },

  {
    slug: "flexie-shifts-web-app",
    name: "Flexie Shifts Web App",
    status: "Ongoing",
    summary:
      "Helped redesign Flexie's shift management platform, improving operational workflows for managers.",
    image: "/projects/project-4.png",   
    description:
      "Contributed across the frontend and backend of Flexie's Shift Manager application, working on complex operational workflows used to manage Flexers, locations, and shift assignments. Built reusable React components, introduced Zustand for predictable client-side state management, developed supporting APIs, and implemented role-based access control. These changes made the application more responsive and reliable while simplifying key manager workflows.",
    stack: ["React", "TypeScript", "Zustand", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "Live App",
        href: "https://shifts.goflexie.com/",
      },
    ],
  },

  {
    slug: "automated-flexer-screening",
    name: "Automated Flexer Screening with AI Agents",
    status: "Completed",
    summary:
      "Built an AI-powered screening workflow that automates applicant interviews and evaluates responses against structured criteria.",
    image: "/projects/project-5.png",    
    description:
      "Designed and implemented an automated screening workflow using AI agents to conduct dynamic applicant interviews and evaluate responses against structured reliability criteria. Built the backend workflow with Node.js and PostgreSQL, integrated the OpenAI API, and designed the system to store only the information needed for downstream decisions. The automation reduced manual screening effort and created a more consistent evaluation process.",
    stack: ["Node.js", "OpenAI API", "PostgreSQL"],
    links: [],
  },

  {
    slug: "flexie-authentication-app",
    name: "Flexie Authentication App",
    status: "Completed",
    summary:
      "Built a centralized authentication system that provides secure email and phone verification across Flexie's products.",
    image: "/projects/project-2.png",
    description:
      "Built a centralized authentication system across the frontend, backend, and database layers, supporting login, OTP verification, and email and phone number updates. Designed verification flows, database structures, error handling, and secure authentication logic, then integrated the system across Flexie's web and mobile products. This created a more consistent authentication experience and a shared foundation for user identity management.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "Live App",
        href: "https://auth.goflexie.com/",
      },
    ],
  },

  {
    slug: "whatsapp-birthday-bot",
    name: "WhatsApp Birthday Bot",
    status: "Completed",
    summary:
      "Built a scheduled messaging bot that automatically sends birthday wishes to specified WhatsApp groups.",
    image: "/projects/project-7.jpg",
    description:
      "Built a personal automation tool using Node.js, whatsapp-web.js, and node-cron to schedule and send birthday messages to WhatsApp groups. Implemented session handling, logging, environment configuration, and data persistence while exploring the technical and compliance limitations of WhatsApp automation. The project gave me practical experience building scheduled background processes and working with a third-party messaging platform.",
    stack: ["Node.js", "whatsapp-web.js", "node-cron", "Winston"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ebun-amoo/whatsapp-birthday-bot",
      },
    ],
  },
];