import { Basic_Card } from "@/components";
import { AuroraText, MotionEffect, Pointer } from "@/components/animated";
import type { ReactNode } from "react";

interface About_Card_Props {
  title: string;
  children: ReactNode;
  containerClassName?: string;
}

export default function About_Card({ title, containerClassName, children }: About_Card_Props) {
  return (
    <MotionEffect slide={{ direction: "down", offset: 200 }} inView>
      <Basic_Card>
        <h3 className="text-2xl sm:text-4xl font-medium mb-2 sm:mb-3">
          <AuroraText>{title}</AuroraText>
        </h3>
        <div className={containerClassName}>{children}</div>
      </Basic_Card>
      <Pointer>
        <div className="text-2xl">👆</div>
      </Pointer>
    </MotionEffect>
  );
}
