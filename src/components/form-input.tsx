import React from "react";
import { cn } from "@/lib/utils";
import { IconInfoCircle } from "@tabler/icons-react";
import { Input, InputProps } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export interface FormInputProps extends InputProps {
  label?: string;
  error?: null | string | boolean | any;
  asterisk?: boolean;
  inputClassName?: string;
  description?: string;
  color?: "default" | "white";
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, color = "default", description, error, asterisk, disabled, inputClassName, className, ...props }, ref) => {
    return (
      <div className={cn(className)}>
        {label && (
          <span
            className={cn(
              "text-sm mb-2 flex items-center gap-1 font-medium leading-none",
              { "cursor-not-allowed opacity-70": disabled },
              { "text-red-500": error }
            )}
          >
            {label} {(props.required || asterisk) && <span className="text-red-500">*</span>}
            {description && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="size-[14px] text-muted-foreground rounded-full">
                    <IconInfoCircle size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="text-sm text-muted-foreground p-2" align="start">
                  {description}
                </PopoverContent>
              </Popover>
            )}
          </span>
        )}
        <Input color={color} className={inputClassName} disabled={disabled} ref={ref} {...props} />
        {error && (
          <span
            className={cn("text-[0.8rem] block font-medium text-red-500 mt-1", {
              "cursor-not-allowed opacity-70": disabled,
            })}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
export default FormInput;
