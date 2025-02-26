import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-md ${
        variant === "outline"
          ? "border border-gray-400 text-gray-700"
          : "bg-blue-600 text-white"
      } ${className}`}
      {...props}
    />
  );
}
