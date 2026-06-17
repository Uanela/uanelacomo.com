import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export default function Section({
  title,
  children,
  seeMore,
}: {
  children: ReactNode;
  title?: string;
  seeMore?: { to: string; text?: string } | string;
}) {
  if (typeof seeMore === "string") seeMore = { to: seeMore };

  return (
    <div className="bg-fd-background p-8 rounded-xl w-full grid gap-4">
      {title && (
        <h3 className="font-bold text-fd-primary text-xl text-left">{title}</h3>
      )}
      {children}
      {seeMore && (
        <div className="text-right">
          <Link to={seeMore.to} className="text-right mt-2 text-fd-primary">
            {seeMore.text || "See more"}
          </Link>
        </div>
      )}
    </div>
  );
}
