export type UserRole = "admin" | "faculty" | "student" | "author";

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  competencyTags: string[];
}
