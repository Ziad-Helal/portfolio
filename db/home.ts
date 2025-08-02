import type { CourseDemo, EducationDemo, ExperienceDemo, ProjectDemo } from "@/types";

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

export const homeCourses: CourseDemo[] = [
  {
    id: "1",
    name: "Frontend Web Development",
    institution: "Route Academy",
  },
  {
    id: "2",
    name: "React - The Complete Guide",
    institution: "Maximilian Schwarzmüller",
  },
  {
    id: "3",
    name: "Frontend Web Development - Professional (Nanodegree Program)",
    institution: "Udacity",
  },
  {
    id: "4",
    name: "Frontend Web Development - Challenger (Nanodegree Program)",
    institution: "Udacity",
  },
  {
    id: "5",
    name: "CS50's Understanding Technology",
    institution: "Harvard University",
  },
];

export const homeCertificates = [];

export const homeProjects: ProjectDemo[] = [
  {
    id: "1",
    title: "Roze Moon",
    description: "A flower e-commerce platform for merchants. Supports localization in 16 languages",
    thumbnail: "/project.png",
    techStack: ["React.JS", "TypeScript", "React Router", "Redux Toolkit", "i18n"],
  },
  {
    id: "2",
    title: "Dasboard for Roze Moon",
    description: "A dashboard for ",
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
