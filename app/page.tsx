"use client";

import { Profile } from "@/components/profile/Profile";
import { About } from "@/components/about/About";
import { Work } from "@/components/work/Work";
import { ProjectStack } from "@/components/work/ProjectStack";
import { Education } from "@/components/education/Education";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Profile />
      </motion.div>
      <motion.div variants={itemVariants}>
        <About />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Work />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ProjectStack />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Education />
      </motion.div>
    </motion.main>
  );
}
