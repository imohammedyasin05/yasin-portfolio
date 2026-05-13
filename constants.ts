import { Terminal, BookOpen, Trophy, Target } from 'lucide-react';
import { Project, SkillCategory, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "SK MD YASIN",
  brand: "imohammedyasin",
  role: "AI + Full-Stack Systems Engineer",
  tagline: "AI + Full-Stack Systems Engineer | Systems Builder",
  subtext: "I build AI-powered systems and scalable web platforms that solve real-world problems. Engineering high-impact, real-time solutions from architecture to deployment.",
  mission: "I architect scalable backend systems, integrate AI models for predictive analysis, and build high-performance web platforms.",
  quote: "Discipline creates freedom. Building real-world products with measurable impact.",
  email: "shaikyasin.dev@gmail.com"
};

export const SOCIAL_LINKS = {
  github: "https://github.com/imohammedyasin",
  linkedin: "https://www.linkedin.com/in/shaikmohammedyasin"
};

// INSTRUCTIONS FOR YOUR IMAGE:
// 1. Local paths like "file:///C:/..." DO NOT WORK on websites.
// 2. You must upload your photo to a site like Imgur.com or PostImages.org.
// 3. Get the Direct Link (ends in .jpg, .png, or .webp) and paste it below.
export const HERO_IMAGES = [
  // User's Dropbox Image (converted to direct link via raw=1)
  "https://www.dropbox.com/scl/fi/plnb0ver1o7l97yn21uf9/IMG_20251222_081448_257-1.jpg?rlkey=inolw29hlo8anka78n1tknmoe&st=5soo6e36&raw=1"
];

export const PROJECTS: Project[] = [
  {
    title: "ClimateRisk AI",
    tagline: "AI-powered climate risk prediction and policy engine.",
    bullets: [
      "Built a machine learning microservice to predict temperature anomalies using historical climate datasets.",
      "Engineered a scalable Node.js backend to orchestrate data flow between the AI engine and the frontend.",
      "Designed an interactive React dashboard with Chart.js to visualize real-time risk scores and trends.",
      "Optimized API response times for large datasets to ensure a seamless user experience."
    ],
    tech: ["React", "Node.js", "Python", "Scikit-learn", "System Design", "LLM"],
    github: "https://github.com/imohammedyasin05/ClimateRisk-AI",
    featured: true
  },
  {
    title: "Rapidaid",
    tagline: "AI-driven emergency response orchestration platform.",
    bullets: [
      "Engineered a real-time dispatch system using WebSockets for sub-second emergency routing.",
      "Integrated Gemini AI to parse unstructured emergency text into structured priority categories.",
      "Built a scalable backend architecture capable of handling high-throughput concurrent requests during crises.",
      "Designed a mission-control UI for rapid decision-making by emergency operators."
    ],
    tech: ["React", "Node.js", "Socket.io", "Gemini AI", "MongoDB"],
    github: "https://github.com/imohammedyasin05/Rapidaid",
    featured: true
  },
  {
    title: "CareQueue",
    tagline: "AI Hospital Queue Optimization System.",
    bullets: [
      "Built a predictive triage system to estimate patient wait times dynamically.",
      "Engineered scalable API endpoints to sync real-time hospital resource availability.",
      "Optimized queue flow logic to reduce average patient wait time via intelligent routing algorithms."
    ],
    tech: ["Next.js", "Node.js", "Python", "ML Algorithms"],
    github: "https://github.com/imohammedyasin05/CareQueue"
  },
  {
    title: "TCS NQT Smart Practice Platform",
    tagline: "High-performance assessment simulator for tech recruitment.",
    bullets: [
      "Designed a scalable, real-time assessment simulator mimicking enterprise testing environments.",
      "Engineered dynamic code execution and automated grading pipelines.",
      "Optimized frontend rendering for zero-latency question transitions and strict timer synchronization."
    ],
    tech: ["React", "Node.js", "System Architecture", "Tailwind"],
    github: "https://github.com/imohammedyasin05/tcs-nqt-smart-practice-platform"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Flask", "MongoDB", "PostgreSQL"]
  },
  {
    title: "AI / ML",
    skills: ["Scikit-learn", "LangChain", "Hugging Face", "LLM Integrations"]
  },
  {
    title: "Tools & Architecture",
    skills: ["Git", "System Design", "REST APIs", "Microservices", "WebSockets"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Learning Streaks",
    description: "Consistent daily coding practice and algorithm solving.",
    icon: Terminal
  },
  {
    title: "Internship Project",
    description: "Successfully delivered industry-standard modules during internship.",
    icon: Target
  },
  {
    title: "Self-Improvement",
    description: "Documented journey of physical and mental growth.",
    icon: Trophy
  },
  {
    title: "Skill Building",
    description: "Continuous acquisition of modern web technologies.",
    icon: BookOpen
  }
];

export const EDUCATION = {
  college: "KHIT (Kallam Haranadha Reddy Institute of Technology)",
  course: "Computer Science Engineering",
  batch: "2023",
  focus: "Programming, Web Development, Systems Architecture"
};