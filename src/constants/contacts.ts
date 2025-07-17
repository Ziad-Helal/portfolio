import { LinkedinIcon, MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

const contacts = [
  {
    title: "Email me",
    hint: "zgalhelaly@gmail.com",
    link: "mailto:zgalhelaly@gmail.com",
    icon: MailIcon,
    PrimaryColor: "#BB001B",
  },
  {
    title: "Call me",
    hint: "+201553409045",
    link: "tel:+201553409045",
    icon: PhoneIcon,
    PrimaryColor: "#0000FF",
  },
  {
    title: "Connect with me",
    hint: "Ziad Al-Helal",
    link: "https://www.linkedin.com/in/ziad-al-helaly",
    icon: LinkedinIcon,
    PrimaryColor: "#0077B5",
  },
  {
    title: "Message me",
    hint: "+201553409045",
    link: "https://wa.me/+201553409045",
    icon: MessageCircleIcon,
    PrimaryColor: "#075E54",
  },
];

export type Contact = (typeof contacts)[number];
export default contacts;
