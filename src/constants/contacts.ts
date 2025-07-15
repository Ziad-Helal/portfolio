const contacts = [
  {
    title: "Email me",
    hint: "zgalhelaly@gmail.com",
    link: "mailto:zgalhelaly@gmail.com",
  },
  {
    title: "Call me",
    hint: "+201553409045",
    link: "tel:+201553409045",
  },
  {
    title: "Connect with me",
    hint: "Ziad Al-Helal",
    link: "https://www.linkedin.com/in/ziad-al-helaly",
  },
  {
    title: "Message me",
    hint: "+201553409045",
    link: "https://wa.me/+201553409045",
  },
];

export type Contact = (typeof contacts)[number];
export default contacts;
