"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface WorkSectionProps {
  type: "project" | "stack";
}

export const WorkSection: React.FC<WorkSectionProps> = ({ type }) => {
  const isProject = type === "project";
  const title = isProject ? "PROJECT" : "STACK";

  return (
    <div
      className={cn(
        "w-1/2 border border-dashed border-t-0",
        "border-foreground/20 dark:border-foreground/30",
        isProject && "border-r-0"
      )}
    >
      <div className="flex items-center justify-center">
        <h3 className="text-[2.5rem] font-semibold">{title}</h3>
      </div>
    </div>
  );
};
