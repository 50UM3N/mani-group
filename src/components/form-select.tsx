import React from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { IconInfoCircle } from "@tabler/icons-react";

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: null | string | boolean | any;
  asterisk?: boolean;
  description?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  color?: "default" | "white"; // Added color prop
  onChange?: (e: { currentTarget: { value: any; name: string }; target: { value: any; name: string } }) => void;
}

const FormSelect = React.forwardRef<any, FormSelectProps>(
  (
    {
      label,
      description,
      error,
      asterisk,
      disabled,
      children,
      placeholder,
      value,
      onChange,
      className,
      defaultValue,
      color = "default", // Set default value
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(className)}>
        {label && (
          <span
            className={cn(
              "text-sm mb-2 flex items-center gap-1 font-medium leading-none",
              { "cursor-not-allowed opacity-70": disabled },
              { "text-red-500": error },
              { "text-white": color === "white" } // Add white text for white variant
            )}
          >
            {label} {(props.required || asterisk) && <span className="text-red-500">*</span>}{" "}
            {description && (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn("size-[14px] rounded-full", {
                      "text-muted-foreground": color === "default",
                      "text-white/70": color === "white",
                    })}
                  >
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
        <select
          ref={ref}
          onChange={onChange}
          value={value as string}
          disabled={disabled}
          defaultValue={defaultValue}
          className={cn(
            "flex h-12 w-full rounded-md select-color border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            {
              "border-zinc-300 file:text-color-6 focus-visible:ring-color-6": color === "default",
              "border-white text-white placeholder:text-white/50 focus-visible:ring-white": color === "white",
            }
          )}
          {...props}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {children as any}
        </select>
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

FormSelect.displayName = "FormSelect";

export default FormSelect;
