"use client";

import * as React from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { Label } from "../../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Input } from "../../ui/input";

interface Props {
  id: string;
  label?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  showTime?: boolean;
  placeholder?: string;
}

export default function DatePickerInput({
  id,
  label,
  value,
  onChange,
  showTime = false,
  placeholder = "Select a date",
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value
  );

  // Synchronize external value with internal
  React.useEffect(() => {
    setInternalDate(value);
  }, [value]);

  // Date change handler
  const handleDateChange = (date: Date | undefined) => {
    setInternalDate(date);
    onChange?.(date);
  };

  // Manual time change handler
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;

    // If no date is selected, create a new one with the time
    if (!internalDate) {
      const newDate = new Date();
      if (time) {
        const [hours, minutes] = time.split(":").map(Number);
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
      }
      setInternalDate(newDate);
      onChange?.(newDate);
      return;
    }

    // If there's already a date, update only the time
    if (!time) {
      // If time is deleted, keep the date but reset time
      const updated = new Date(internalDate);
      updated.setHours(0, 0, 0, 0);
      setInternalDate(updated);
      onChange?.(updated);
      return;
    }

    const [hours, minutes] = time.split(":").map(Number);
    const updated = new Date(internalDate);
    updated.setHours(hours);
    updated.setMinutes(minutes);
    setInternalDate(updated);
    onChange?.(updated);
  };

  // Format the time for the time input
  const formatTimeValue = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "HH:mm");
  };

  return (
    <div className="space-y-2 w-full">
      {label && <Label htmlFor={id}>{label}</Label>}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${
              !internalDate && "text-muted-foreground"
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {internalDate
              ? format(
                  internalDate,
                  showTime ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy"
                )
              : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-4" align="start">
          <Calendar
            mode="single"
            selected={internalDate}
            onSelect={handleDateChange}
          />

          {showTime && (
            <div className="mt-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Input
                type="time"
                value={formatTimeValue(internalDate)}
                onChange={handleTimeChange}
                className="w-32"
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
