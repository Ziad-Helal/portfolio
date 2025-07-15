"use client";

import Button from "./button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import type { ButtonType } from "./button";
import type { ComponentProps, MouseEvent } from "react";
import { useTranslations } from "next-intl";

interface CopyButton_Props extends ComponentProps<ButtonType> {
  copyText: string;
}

export default function CopyButton({ copyText, onClick, ...props }: CopyButton_Props) {
  const t = useTranslations("keyWords");
  const [icon, setIcon] = useState<typeof CopyIcon>(CopyIcon);
  function clickHandler(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    event.preventDefault();
    onClick?.(event);
    navigator.clipboard.writeText(copyText);
    setIcon(CheckIcon);
    setTimeout(() => {
      setIcon(CopyIcon);
    }, 2000);
  }

  return (
    <Button tooltip={t("copyToClipboard")} size="icon" variant="outline" icon={icon} onClick={clickHandler} {...props}>
      {t("copyToClipboard")}
    </Button>
  );
}
