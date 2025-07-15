export const routes = {
  home: "",
  about: "#about",
  projects: "#projects",
  contact: "#contact",
};

export const mainNavigationRoutes: { label: keyof typeof routes; href: string }[] = [
  {
    label: "home",
    href: routes.home,
  },
  {
    label: "about",
    href: routes.about,
  },
  {
    label: "projects",
    href: routes.projects,
  },
  {
    label: "contact",
    href: routes.contact,
  },
];
