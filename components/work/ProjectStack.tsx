"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ProjectStack: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div
        className={cn(
          "w-1/2 border border-t-0 border-r-0",
          "border-foreground/20 dark:border-foreground/30"
        )}
      >
        <div className="flex items-center justify-center py-2.5 px-1">
          <h3 className="diplomata-sc-regular text-[2.5rem] font-bold tracking-tighter">
            PROJECT
          </h3>
        </div>
      </div>
      <div className="w-1/2 border border-t-0">
        <div className="flex items-center justify-center p-2.5">
          <h3 className="diplomata-sc-regular text-[2.5rem] font-bold tracking-tighter text-[#FF0069]">
            STACK
          </h3>
        </div>
      </div>
    </div>
  );
};
