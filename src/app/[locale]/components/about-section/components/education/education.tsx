import { About_Card } from "@/components";

export default function Education() {
  return (
    <About_Card title="Education" containerClassName="text-lg [&_span]:text-muted-foreground">
      <p>
        <span>Bachelor of:</span> Statistics and Computer Science
      </p>
      <p>
        <span>From the</span> Faculty Of Science, Helwan University
      </p>
      <p></p>
      <p className="text-muted-foreground">2022</p>
    </About_Card>
  );
}
