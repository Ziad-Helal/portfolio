import type { CourseDemo } from "@/types";

interface SingleCourse_Props {
  course: CourseDemo;
}

export default function SingleCourse({ course }: SingleCourse_Props) {
  const { name, institution } = course;

  return (
    <div className="not-first:pt-2 not-first:border-t">
      <p className="text-lg font-light">
        {name} <span className="text-muted-foreground">from</span> {institution}
      </p>
    </div>
  );
}
