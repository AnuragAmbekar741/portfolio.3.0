"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Project: React.FC = () => {
  return (
    <div
      className={cn(
        "w-1/2 border border-dashed border-t-0 border-r-0",
        "border-foreground/20 dark:border-foreground/30"
      )}
    >
      <div className="flex items-center justify-center">
        <h3 className="text-[2.5rem] font-semibold text-">PROJECT</h3>
      </div>
    </div>
  );
};
