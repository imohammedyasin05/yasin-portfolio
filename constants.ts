import { Terminal, BookOpen, Trophy, Target } from 'lucide-react';
import { Project, SkillCategory, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "SK MD YASIN",
  brand: "imohammedyasin",
  role: "Full-Stack Developer | CSE Student",
  tagline: "Full-Stack Developer | CSE Student | AI & Web Systems Builder",
  subtext: "I build full-stack web applications and AI-powered systems that solve real-world problems. Currently focused on MERN stack development, machine learning integration, and scalable system design.",
  mission: "Build skills, create value, and grow daily.",
  quote: "Discipline creates freedom.",
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
    description: "A full-stack machine learning platform that analyzes historical climate data, predicts future temperature trends, calculates climate risk scores, and generates AI-powered policy recommendations. Built using a React dashboard, Node.js backend, and a Python ML microservice with scikit-learn.",
    tech: ["React", "Node.js", "Express", "Python", "Flask", "scikit-learn", "Chart.js", "Gemini AI"],
    github: "https://github.com/imohammedyasin05/ClimateRisk-AI",
    featured: true
  },
  {
    title: "LearnHub",
    description: "A full-stack LMS platform where users can enroll in courses, watch video lectures, track their learning progress, and generate certificates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/imohammedyasin/ShaikMohammedYasin"
  },
  {
    title: "PawPrint AI",
    description: "An AI-powered web application that identifies dog breeds from images using transfer learning models such as ResNet-50 and Vision Transformers.",
    tech: ["React", "Flask", "Hugging Face API", "Deep Learning"],
    github: "https://github.com/imohammedyasin/PawPrint-AI"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Stack",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Node.js", "Express", "MongoDB", "Git & GitHub", "Bootstrap", "Material UI"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Content Creation", "Communication", "Discipline", "Systems Thinking"]
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