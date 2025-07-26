import contacts from "@/constants/contacts";
import { Section } from "@/app/[locale]/components";
import { Contact_Card } from "./components";

export default function Contact_Section() {
  return (
    <Section heading="Contact me" id="contact" className="scroll-mt-14 bg-secondary/50">
      <div className="mt-7 flex justify-center gap-2 sm:gap-4 md:gap-8">
        {contacts.map((contact) => (
          <Contact_Card key={contact.title} contact={contact} />
        ))}
      </div>
    </Section>
  );
}
