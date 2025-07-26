import type { EducationDemo, ExperienceDemo, ProjectDemo } from "@/types";

export const homeExperience: ExperienceDemo[] = [
  {
    id: "1",
    company: "Tuwaiq",
    position: "Frontend Developer",
    contract: "Full Time",
    workSetting: "On Site",
    responsibilities: ["Building frontend web applications", "Managing the comunication between the different teams", "Managing the hosting on Hostinger"],
    joinedAt: new Date("3/1/2024"),
  },
  {
    id: "2",
    company: "AxleWeb",
    position: "Frontend Web Intern",
    contract: "per Project",
    workSetting: "Remote",
    responsibilities: ["Building some pages", "Creating a user friendly CMS system for the owner to be able to change the home page content"],
    joinedAt: new Date("12/1/2023"),
    leftAt: new Date("2/29/2024"),
  },
  {
    id: "3",
    company: "Leen Store",
    position: "Accountant",
    contract: "Full Time",
    workSetting: "On Site",
    responsibilities: [
      "Creating a web application to automate a lot of work, reducing the time and effort of managing the orders shipmint from taking about 6 hours minmum, to just about 10 minutes",
      "Other accounting work that is not related to web development",
    ],
    joinedAt: new Date("5/1/2023"),
    leftAt: new Date("11/31/2024"),
  },
];

export const homeEducation: EducationDemo[] = [
  {
    id: "1",
    university: "Helwan",
    college: "Sience",
    degree: "Bachelor",
    major: "Statistics and Computer Science",
    graduatedAt: new Date("7/1/2022"),
  },
];

export const homeCourses = [];

export const homeProjects: ProjectDemo[] = [
  {
    id: "1",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus, eaque recusandae libero at rem aliquid fugiat beatae earum velit id accusamus facilis ea, itaque soluta culpa reprehenderit illum corrupti!",
    thumbnail: "/project.png",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React.JS", "React Router", "React Query"],
  },
  {
    id: "2",
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus, eaque recusandae libero at rem aliquid fugiat beatae earum velit id accusamus facilis ea, itaque soluta culpa reprehenderit illum corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus, eaque recusandae libero at rem aliquid fugiat beatae earum velit id accusamus facilis ea, itaque soluta culpa reprehenderit illum corrupti!",
    thumbnail: "/project.png",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.JS", "Zustand", "next-intl"],
  },
  {
    id: "3",
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    thumbnail: "/project.png",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React.JS", "React Router", "Redux Toolkit", "i18n"],
  },
];
