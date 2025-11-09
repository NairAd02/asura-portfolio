"use client";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  fullWidth?: boolean;
  rows?: number;
  textAreaClassName?: string;
}

export function RHFTextAreaField({
  name,
  label,
  placeholder,
  description,
  fullWidth = true,
  rows = 4,
  textAreaClassName,
}: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${fullWidth ? "w-full" : ""} font-lora`}>
          {label && <FormLabel className="font-semibold">{label}</FormLabel>}
          <FormControl>
            <Textarea
              rows={rows}
              className={`${fullWidth ? "w-full" : ""} ${textAreaClassName}`}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
