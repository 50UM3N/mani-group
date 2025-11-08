import React from "react";
import { cn } from "@/lib/utils";
import { IconInfoCircle } from "@tabler/icons-react";
import { Textarea, TextareaProps } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export interface FormTextAreaProps extends TextareaProps {
  label?: string;
  error?: null | string | boolean | any;
  asterisk?: boolean;
  inputClassName?: string;
  description?: string;
}

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ label, description, error, asterisk, disabled, inputClassName, className, ...props }, ref) => {
    return (
      <div className={cn(className)}>
        {label && (
          <span
            className={cn(
              "text-sm mb-2 flex items-center gap-1 font-medium leading-none",
              { "cursor-not-allowed opacity-70": disabled },
              { "text-destructive": error }
            )}
          >
            {label} {(props.required || asterisk) && <span className="text-destructive">*</span>}{" "}
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
        <Textarea className={inputClassName} disabled={disabled} ref={ref} {...props} />
        {error && (
          <span
            className={cn("text-[0.8rem] block font-medium text-destructive mt-1", {
              "cursor-not-allowed opacity-70": disabled,
            })}
          >
            {error}
          </span>
        )}
        {description && (
          <span
            className={cn("text-[0.8rem] block text-muted-foreground mt-1", {
              "cursor-not-allowed opacity-70": disabled,
            })}
          >
            {description}
          </span>
        )}
      </div>
    );
  }
);
FormTextArea.displayName = "FormTextArea";
export default FormTextArea;
