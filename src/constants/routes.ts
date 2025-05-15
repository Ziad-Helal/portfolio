export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
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
    label: "contact",
    href: routes.contact,
  },
];
