import { About_Card } from "@/components";
import { homeExperience } from "@/../db";
import { SingleExperience } from "./components";

export default function Experience() {
  return (
    <About_Card title="Experience" containerClassName="space-y-3">
      {homeExperience.map((singleExperience) => (
        <SingleExperience key={singleExperience.id} singleExperience={singleExperience} />
      ))}
    </About_Card>
  );
}
