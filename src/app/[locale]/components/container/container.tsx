import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("w-full max-w-6xl 2xl:max-w-7xl px-2 md:px-4 mx-auto", className)} {...props} />;
}
