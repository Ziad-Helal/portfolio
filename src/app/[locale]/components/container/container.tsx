import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("w-full max-w-6xl px-2 mx-auto", className)} {...props} />;
}
