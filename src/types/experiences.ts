export type Contract = "Full Time" | "Part Time" | "per Project" | "Freelance" | "per Hour";

export type WorkSetting = "On Site" | "Remote" | "Hybrid";

export interface ExperienceDemo {
  id: string;
  company: string;
  position: string;
  contract: Contract;
  workSetting: WorkSetting;
  responsibilities: string[];
  joinedAt: Date;
  leftAt?: Date;
}
