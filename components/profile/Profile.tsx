"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { LayoutTextFlip } from "@/src/components/ui/layout-text-flip";

export const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-between border">
      <div className="w-3/8">
        <div
          className={cn(
            "relative aspect-square border-r border-dashed",
            "border-foreground/20 dark:border-foreground/30",
            "flex items-center justify-center"
          )}
        >
          {/* Circle inside */}
          <div
            className={cn(
              "w-7/8 h-7/8  rounded-full border-2 border-solid",
              "border-foreground/40 dark:border-foreground/50",
              "bg-muted/50 dark:bg-muted/30"
            )}
          />
        </div>
      </div>
      <div className="w-4/5">
        <h1
          className="diplomata-sc-regular text-[3.75rem] px-1.5 font-normal tracking-tighter leading-12"
          style={{ transform: "scaleY(1.5)" }}
        >
          <span className="text-primary">
            <LayoutTextFlip
              words={["SOFTWARE", "PRODUCT", "GROWTH"]}
              duration={3000}
            />
          </span>
          <br />
          <span className="inline-block -mt-2 dark:text-stone-200">
            ENGINEER
          </span>
        </h1>
      </div>
    </div>
  );
};
