import { Loading } from "@/components/misc";
import { Button as ClassicButton, Tooltip, TooltipContent, TooltipTrigger, type ButtonProps } from "@/components/ui";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const iconSizeVariants = cva("", {
  variants: {
    size: {
      default: "size-4.5",
      sm: "size-4",
      lg: "size-5",
      icon: "size-4.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Button_Props extends ButtonProps {
  icon?: LucideIcon;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  iconClassName?: string;
  isLoading?: boolean;
  loadingText?: string;
  tooltip?: ReactNode;
}

export default function Button({
  icon: Icon,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  className,
  iconClassName,
  isLoading,
  loadingText,
  size,
  tooltip,
  children,
  ...props
}: Button_Props) {
  const iconClassNames = cn(iconSizeVariants({ size }), iconClassName);
  const iconProps = { className: iconClassNames, "aria-hidden": true };

  const btn = (
    <ClassicButton className={className} type={props.type || "button"} disabled={props.disabled || isLoading} size={size} {...props}>
      {LeadingIcon && !isLoading && <LeadingIcon {...iconProps} />}
      {isLoading ? (
        <Loading iconClassName={iconClassNames} loadingText={size == "icon" ? undefined : loadingText || children} />
      ) : size == "icon" ? (
        Icon ? (
          <>
            <Icon {...iconProps} />
            <span className="sr-only">{children}</span>
          </>
        ) : (
          children
        )
      ) : (
        children
      )}
      {TrailingIcon && !isLoading && <TrailingIcon {...iconProps} />}
    </ClassicButton>
  );

  return tooltip ? (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>{btn}</TooltipTrigger>
      <TooltipContent className="px-2 py-1 bg-popover text-muted-foreground border max-w-sm" sideOffset={4}>
        {typeof tooltip === "string" ? <p className="capitalize">{tooltip}</p> : tooltip}
      </TooltipContent>
    </Tooltip>
  ) : (
    btn
  );
}
