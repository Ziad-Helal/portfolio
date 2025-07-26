import { About_Card } from "@/components";
import { homeCourses } from "@/../db";
import { SingleCourse } from "./components";

export default function Courses() {
  return (
    <About_Card title="Courses" containerClassName="space-y-2">
      {homeCourses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
    </About_Card>
  );
}
