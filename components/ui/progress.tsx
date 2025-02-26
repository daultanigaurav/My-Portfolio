import * as React from "react";

export interface ProgressProps {
  value: number;
  max?: number;
}

export function Progress({ value, max = 100 }: ProgressProps) {
  return (
    <div className="relative w-full bg-gray-200 rounded-full h-2">
      <div
        className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
}
