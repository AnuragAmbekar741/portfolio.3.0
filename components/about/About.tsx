"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <div className="flex items-center justify-between border border-t-0">
      <div className="w-4/5 p-6 font-inter">
        <p className="text-md font-extralight leading-relaxed">
          Hi, I am <span className="font-semibold">Anurag</span> — my favourite
          anime character is <span className="font-semibold">Itachi</span> and I
          am a <span className="font-semibold">Gooner</span>. I love building
          products and work at the intersection of{" "}
          <span className="font-semibold">growth</span> and{" "}
          <span className="font-semibold">software engineering</span> to map my
          code with business impact.
        </p>
      </div>
      <div className="w-1/5">
        <div
          className={cn(
            "relative w-full h-auto max-h-32 border-l border-dashed",
            "border-foreground/20 dark:border-foreground/30",
            "flex items-center justify-center p-0"
          )}
        >
          {/* 2x2 Grid of Icons */}
          <div className="grid grid-cols-2 w-full aspect-square max-h-32">
            {/* Row 1 */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center",
                "border-r border-b border-dashed",
                "border-foreground/20 dark:border-foreground/30"
              )}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 214, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center",
                "border-b border-dashed",
                "border-foreground/20 dark:border-foreground/30"
              )}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 122, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Github className="w-6 h-6 text-foreground" />
            </motion.a>

            {/* Row 2 */}
            <motion.a
              href="mailto:your@email.com"
              className={cn(
                "flex items-center justify-center",
                "border-r border-dashed",
                "border-foreground/20 dark:border-foreground/30"
              )}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 0, 105, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail className="w-6 h-6 text-foreground" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(211, 0, 197, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FileText className="w-6 h-6 text-foreground" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
