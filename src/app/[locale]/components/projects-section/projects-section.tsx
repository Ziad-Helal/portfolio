import { homeProjects } from "../../../../../db";
import { Section } from "../../components";
import { Project_Card } from "./components";

export default function Projects_Section() {
  return (
    <Section heading="Some of my projects" id="projects" className="scroll-mt-14" containerClassName="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
      {homeProjects.map((project) => (
        <Project_Card key={project.id} project={project} />
      ))}
    </Section>
  );
}
