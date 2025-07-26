import type { ExperienceDemo } from "@/types";

interface SingleExperience_Props {
  singleExperience: ExperienceDemo;
}

export default function SingleExperience({ singleExperience }: SingleExperience_Props) {
  const { position, company, responsibilities, contract, workSetting, joinedAt, leftAt } = singleExperience;

  return (
    <div className="not-first:pt-2 not-first:border-t">
      <div className="flex justify-between max-sm:flex-col max-sm:text-center">
        <h4 className="text-2xl font-medium">
          {position} <span className="text-muted-foreground">at</span> {company}
        </h4>
        <div className="text-sm text-muted-foreground text-center sm:text-end [&_span]:text-foreground max-sm:mt-2">
          <p>
            {joinedAt.toLocaleString(undefined, { month: "short", year: "numeric" })} <span>Until</span>{" "}
            {leftAt?.toLocaleString(undefined, { month: "short", year: "numeric" }) || "Now"}
          </p>
          <p>
            {workSetting} <span>|</span> {contract}
          </p>
        </div>
      </div>
      <h5 className="text-lg">Responsibilities</h5>
      <ul className="list-disc ps-10">
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
