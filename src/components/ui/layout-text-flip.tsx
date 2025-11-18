"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "",
  words = ["SOFTWARE", "PRODUCT", "GROWTH"],
  duration = 15000,
  className,
}: {
  text?: string;
  words?: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Measure the width of all words to find the longest
    if (measureRef.current) {
      const widths = words.map((word) => {
        measureRef.current!.textContent = word;
        return measureRef.current!.offsetWidth;
      });
      const maxWidth = Math.max(...widths);
      setContainerWidth(maxWidth);
    }
  }, [words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <>
      {text && (
        <motion.span
          layoutId="subtext"
          className={cn("inline-block", className)}
        >
          {text}
        </motion.span>
      )}
      {/* Hidden span to measure text width */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none whitespace-nowrap"
        aria-hidden="true"
        style={{ visibility: "hidden" }}
      >
        {words[0]}
      </span>
      <motion.span
        layout
        className={cn("relative inline-block overflow-hidden", className)}
        style={{
          width: containerWidth ? `${containerWidth}px` : "auto",
          minWidth: containerWidth ? `${containerWidth}px` : "auto",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
