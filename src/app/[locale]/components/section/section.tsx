"use client";

import { ComponentProps } from "react";
import { Container } from "../../components";
import { cn } from "@/lib/utils";
import { TextAnimate, Wave } from "@/components/animated";

interface Section_Props extends ComponentProps<"section"> {
  heading?: string;
  fullPage?: boolean;
  containerClassName?: string;
}

export default function Section({ heading, fullPage, className, containerClassName, children, ...props }: Section_Props) {
  return (
    <section className={cn("relative", fullPage ? "py-2 min-h-svh grid items-center" : "py-30 odd:py-60 sm:py-60 sm:odd:py-120", className)} {...props}>
      <Container>
        {heading && (
          <h2
            className="capitalize text-2xl sm:text-6xl font-medium mb-7 sm:mb-10 w-fit cursor-grab relative z-50"
            onMouseDown={(event) => (event.currentTarget.style.cursor = "grabbing")}
            onMouseUp={(event) => (event.currentTarget.style.cursor = "grab")}
          >
            <TextAnimate className="backdrop-blur-xs" animation="scaleDown" by="character" dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} drag dragSnapToOrigin>
              {heading}
            </TextAnimate>
          </h2>
        )}
        <div className={containerClassName}>{children}</div>
      </Container>
      <Wave position="top" />
      <Wave position="bottom" />
    </section>
  );
}
