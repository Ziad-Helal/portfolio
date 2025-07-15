import Image from "next/image";
import { FallingText, Lens } from "@/components/animated";
import type { ProjectDemo } from "@/types";

interface Project_Card_Props {
  project: ProjectDemo;
}

export default function Project_Card({ project }: Project_Card_Props) {
  return (
    <div className="bg-secondary/50 rounded-md p-2 flex flex-col">
      <Lens zoomFactor={2} className="aspect-video rounded-md">
        <Image src={project.thumbnail} alt="placeholder" className="object-cover w-full" width={750} height={421} />
      </Lens>
      <div className="flex-auto flex flex-col">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="line-clamp-3 text-ellipsis">{project.description}</p>
        <div className="mt-2 border border-dashed rounded-lg p-1 min-h-20 flex-auto">
          <h4 className="sr-only">Tech stack</h4>
          <FallingText text={project.techStack.join(" ")} trigger="click" asTags />
        </div>
      </div>
    </div>
  );
}
