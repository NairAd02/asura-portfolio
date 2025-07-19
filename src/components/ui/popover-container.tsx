import React, { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface Props {
  trigger: ReactNode;
  children: ReactNode;
}

export default function PopoverContainer({ trigger, children }: Props) {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}
