import { Magic_Card } from "@/components/animated";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Basic_Card_Props {
  children: ReactNode;
  className?: string;
}

export default function Basic_Card({ className, children }: Basic_Card_Props) {
  return (
    <Magic_Card className={cn("rounded-md p-3 md:p-5 shadow-lg", className)} gradientSize={200} gradientColor="#ff2056" gradientOpacity={0.075}>
      {children}
    </Magic_Card>
  );
}
