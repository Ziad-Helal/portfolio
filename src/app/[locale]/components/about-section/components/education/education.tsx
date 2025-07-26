import { About_Card } from "@/components";
import { SingleEducation } from "./components";
import { homeEducation } from "@/../db";

export default function Education() {
  return (
    <About_Card title="Education" containerClassName="text-lg [&_span]:text-muted-foreground">
      {homeEducation.map((singleEducation) => (
        <SingleEducation key={singleEducation.id} singleEducation={singleEducation} />
      ))}
    </About_Card>
  );
}
