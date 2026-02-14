import {
  Code2,
  Server,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { DevToIcon } from "@/components/ui/icons";
import habikaImage from "@/assets/images/habika.webp";
import fooddailyImage from "@/assets/images/fooddaily.webp";

// Navigation
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Blog", href: "#blog" },
];

// Social links (shared by Navbar and Footer)
export const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/emmanuel-godwin-houenou",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/godwinmanu", label: "GitHub" },
  { icon: DevToIcon, href: "https://dev.to/godwinmanu", label: "DEV.to" },
  { icon: Mail, href: "mailto:godwinemmanuel302@gmail.com", label: "Email" },
];

// Hero
export const skills = [
  "React",
  "TypeScript",
  "Django",
  "AWS",
  "Docker",
  "PostgreSQL",
];

// About - Services
export const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, performant UIs with React, TypeScript, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing scalable APIs and services using Django and RESTful architecture.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on cloud with Docker, CI/CD pipelines, and NGINX.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Structuring efficient data models with PostgreSQL and optimizing query performance.",
  },
];

// About - Stats
export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Developers Trained" },
];

// Works - Projects
export const projects = [
  {
    title: "Habika",
    description:
      "Full-stack property management platform with React admin panel, public website, and Django REST API. Features AWS S3 storage, Kafka message queue, and Docker deployment.",
    tags: ["React", "Django", "AWS", "Docker", "Kafka"],
    image: habikaImage,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Fooddaily",
    description:
      "Food delivery platform built with Next.js and TypeScript. Achieved 95% Lighthouse performance score through optimized rendering and caching.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    image: fooddailyImage,
    liveUrl: "https://fooddaily.vercel.app",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Winify",
    description:
      "Published UI component library featuring reusable Web Components with multiple customizable variants on NPM.",
    tags: ["Web Components", "NPM", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    liveUrl: "https://npmjs.com/package/winify",
    githubUrl: "#",
    featured: false,
  },
];
