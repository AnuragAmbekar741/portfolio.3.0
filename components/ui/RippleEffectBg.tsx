"use client";

import React, { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 30,
}: {
  cellSize?: number;
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Calculate dimensions and grid size
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate rows and cols to cover entire viewport
  // Only calculate after dimensions are set to avoid hydration mismatch
  const cols =
    dimensions.width > 0 ? Math.ceil(dimensions.width / cellSize) + 2 : 0;
  const rows =
    dimensions.height > 0 ? Math.ceil(dimensions.height / cellSize) + 2 : 0;

  // Don't render until dimensions are set to avoid hydration mismatch
  if (rows === 0 || cols === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 h-screen w-screen overflow-hidden pointer-events-none",
        "[--cell-border-color:rgba(255,255,255,0.04)] [--cell-fill-color:rgba(255,255,255,0.01)]",
        "dark:[--cell-border-color:rgba(255,255,255,0.03)] dark:[--cell-fill-color:rgba(255,255,255,0.005)]"
      )}
    >
      <div className="relative h-full w-full">
        <DivGrid
          className="absolute inset-0"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize = 30,
  borderColor = "rgba(255,255,255,0.04)",
  fillColor = "rgba(255,255,255,0.01)",
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols]
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100%",
    height: "100%",
    minWidth: cols * cellSize,
    minHeight: rows * cellSize,
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        return (
          <div
            key={idx}
            className="relative border-[0.5px] opacity-30"
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
            }}
          />
        );
      })}
    </div>
  );
};
