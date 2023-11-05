import type { NonEmptyTuple } from "../../types";
import type { TechnologyName } from "./technologies";

export const webProjects = [
  {
    name: "Belt web",
    description: "",
    origin: "personal",
    technologies: ["NextJS", "TypeScript", "tRPC", "React", "React-Query"],
  },
] as const satisfies {
  name: string;
  description: string;
  origin: WebProjectOrigin;
  technologies: NonEmptyTuple<TechnologyName>;
}[];

export type WebProjectOrigin = "university" | "personal";
