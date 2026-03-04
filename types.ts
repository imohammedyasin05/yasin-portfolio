import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  liveDemo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}
