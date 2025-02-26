import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={`border rounded-lg p-4 shadow-md bg-white ${className}`} {...props} />
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="font-bold text-lg mb-2">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-gray-700">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 border-t pt-2">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold">{children}</h3>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}
