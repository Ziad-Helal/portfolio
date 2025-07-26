import type { EducationDemo } from "@/types";

interface SingleEducation_Prpos {
  singleEducation: EducationDemo;
}

export default function SingleEducation({ singleEducation }: SingleEducation_Prpos) {
  const { university, college, degree, major, graduatedAt } = singleEducation;

  return (
    <div className="not-first:pt-2 not-first:border-t">
      <div className="flex flex-wrap gap-x-2 justify-between items-center max-sm:flex-col max-sm:text-center">
        <h4 className="text-2xl font-medium">
          {degree} of {college} <span className="text-muted-foreground">in</span> {major}
        </h4>
        <p className="text-sm text-muted-foreground text-center sm:text-end max-sm:mt-2 sm:ms-auto">
          Graduated in {graduatedAt?.toLocaleString(undefined, { month: "short", year: "numeric" })}
        </p>
      </div>
      <p>
        From the Faculty of {college}, {university} University
      </p>
    </div>
  );
}
