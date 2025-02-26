import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <textarea
          ref={ref}
          className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
          aria-invalid={errorMessage ? "true" : "false"}
          aria-describedby={errorMessage ? "textarea-error" : undefined}
          {...props}
        />
        {errorMessage && (
          <span id="textarea-error" className="text-sm text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
