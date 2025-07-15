export type TechStack =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React.JS"
  | "Next.JS"
  | "Redux Toolkit"
  | "Zustand"
  | "React Query"
  | "i18n"
  | "next-intl"
  | "React Router"
  | "Framer Motion"
  | "ShadCN";

export interface ProjectDemo {
  id: string;
  title: string;
  description: string;
  techStack: TechStack[];
  thumbnail: string;
  isInDevelopment?: boolean;
  isInProduction?: boolean;
  isReceivingUpdates?: boolean;
  isOpenSource?: boolean;
  startedAt?: Date;
  endedAt?: Date;
  demo?: string;
  repo?: string;
}

export interface Project {}
