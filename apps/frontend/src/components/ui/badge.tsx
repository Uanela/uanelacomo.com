import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  color?: "sky" | "pink" | "emerald" | "gray" | "red" | "orange";
  children: ReactNode;
};

export default function Badge({ color, children }: BadgeProps) {
  const colors: Record<
    Exclude<BadgeProps["color"], undefined>,
    [`text-${string}`, `bg-${string}`, `border-${string}`]
  > = {
    sky: ["text-sky-200", "bg-sky-900", "border-sky-500"],
    pink: ["text-pink-200", "bg-pink-900", "border-pink-500"],
    emerald: ["text-emerald-200", "bg-emerald-900", "border-emerald-500"],
    gray: ["text-gray-200", "bg-gray-900", "border-gray-500"],
    orange: ["text-orange-200", "bg-orange-900", "border-orange-500"],
    red: ["text-red-200", "bg-red-900", "border-red-500"],
  };

  return (
    <span
      className={twMerge(
        "text-xs bg-sky-900 px-1  text-sky-200 border border-sky-500 rounded-full",
        ...colors[color || "sky"]
      )}
    >
      {children}
    </span>
  );
}
