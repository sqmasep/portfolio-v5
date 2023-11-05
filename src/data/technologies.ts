import type { NonEmptyTuple } from "../../types";

export const technologies = [
  { name: "HTML", icon: "", importance: 5, category: "language" },
  { name: "CSS", icon: "", importance: 5, category: "language" },
  { name: "JavaScript", icon: "", importance: 5, category: "language" },
  { name: "React", icon: "", importance: 5, category: "frontend" },
  { name: "TypeScript", icon: "", importance: 5, category: "language" },
  { name: "MaterialUI", icon: "", importance: 5, category: "frontend" },
  { name: "Vue", icon: "", importance: 5, category: "full-stack framework" },
  { name: "ESLint", icon: "", importance: 5, category: "tool" },
  { name: "Prettier", icon: "", importance: 5, category: "tool" },
  { name: "Storybook", icon: "", importance: 5, category: "docs" },
  { name: "NextJS", icon: "", importance: 5, category: "full-stack framework" },
  { name: "tRPC", icon: "", importance: 5, category: "backend" },
  { name: "Prisma", icon: "", importance: 5, category: "database" },
  { name: "Zod", icon: "", importance: 5, category: "validation" },
  { name: "TailwindCSS", icon: "", importance: 5, category: "frontend" },
  { name: "React-Query", icon: "", importance: 5, category: "frontend" },
  { name: "Playwright", icon: "", importance: 5, category: "testing" },
  { name: "Vitest", icon: "", importance: 5, category: "testing" },
  {
    name: "Angular",
    icon: "",
    importance: 5,
    category: "full-stack framework",
  },
  { name: "Svelte", icon: "", importance: 5, category: "full-stack framework" },
  { name: "Jira", icon: "", importance: 5, category: "tool" },
  { name: "GitHub", icon: "", importance: 5, category: "tool" },
  { name: "GitLab", icon: "", importance: 5, category: "tool" },
  { name: "HeadlessUI", icon: "", importance: 5, category: "frontend" },
  { name: "Rust", icon: "", importance: 5, category: "language" },
  { name: "MongoDB", icon: "", importance: 5, category: "database" },
  { name: "Redis", icon: "", importance: 5, category: "database" },
  { name: "Postgres", icon: "", importance: 5, category: "database" },
  { name: "Pug", icon: "", importance: 5, category: "language" },
  { name: "Sass/SCSS", icon: "", importance: 5, category: "frontend" },
  { name: "Stylus", icon: "", importance: 5, category: "frontend" },
  { name: "Figma", icon: "", importance: 5, category: "design" },
  { name: "Framer", icon: "", importance: 5, category: "design" },
  { name: "Framer Motion", icon: "", importance: 5, category: "animation" },
  { name: "GSAP", icon: "", importance: 5, category: "animation" },
  { name: "Valibot", icon: "", importance: 5, category: "validation" },
  { name: "Photoshop", icon: "", importance: 5, category: "design" },
  { name: "Illustrator", icon: "", importance: 5, category: "design" },
  {
    name: "Laravel",
    icon: "",
    importance: -100,
    category: "full-stack framework",
  },
] as const satisfies NonEmptyTuple<Technology>;

type TechnologyCategory =
  | "full-stack framework"
  | "tool"
  | "docs"
  | "language"
  | "database"
  | "animation"
  | "validation"
  | "frontend"
  | "backend"
  | "design"
  | "testing"
  | "other";

interface Technology {
  name: string;
  importance: number;
  icon: React.ReactNode;
  category?: TechnologyCategory;
}

export type TechnologyName = (typeof technologies)[number]["name"];
