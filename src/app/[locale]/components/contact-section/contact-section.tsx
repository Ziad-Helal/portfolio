import contacts from "@/constants/contacts";
import { Section } from "../../components";
import { Contact_Card } from "./components";

export default function Contact_Section() {
  return (
    <Section heading="Contact me" id="contact" className="scroll-mt-14 bg-secondary/50">
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {contacts.map((contact) => (
          <Contact_Card key={contact.title} contact={contact} />
        ))}
      </div>
    </Section>
  );
}
