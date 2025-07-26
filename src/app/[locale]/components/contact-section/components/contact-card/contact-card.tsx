import { Link } from "@/i18n/navigation";
// import { CopyButton } from "@/components";
// import { cn } from "@/lib/utils";
// import { getLocale } from "next-intl/server";
// import { getLangDir } from "rtl-detect";
import type { Contact } from "@/constants/contacts";

interface Contact_Card_Props {
  contact: Contact;
}

export default async function Contact_Card({ contact }: Contact_Card_Props) {
  const { hint, link, icon: Icon, PrimaryColor } = contact;
  // const locale = await getLocale();
  // const dir = getLangDir(locale);

  return (
    <Link href={link} className="border-2 rounded-full p-2 sm:p-4 w-fit flex items-center justify-center" style={{ borderColor: PrimaryColor }}>
      <h3 className="sr-only">{hint}</h3>
      <Icon color={PrimaryColor} className="md:size-10" />
    </Link>
  );

  // return (
  //   <Link
  //     href={link}
  //     className="border rounded-sm p-4 grid items-center bg-background sm:aspect-square text-center overflow-hidden relative hover:[&>.absolute]:top-0"
  //     target="_blank"
  //   >
  //     <h3 className="text-lg sm:text-2xl font-light">{title}</h3>
  //     <div className="absolute inset-0 top-full grid items-center bg-black/50 backdrop-blur-xs transition-all">
  //       <CopyButton copyText={hint} className={cn("absolute top-2", dir == "ltr" ? "right-2" : "left-2")} />
  //       <p>{hint}</p>
  //     </div>
  //   </Link>
  // );
}
