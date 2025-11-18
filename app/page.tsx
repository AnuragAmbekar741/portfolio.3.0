"use client";

import { Profile } from "@/components/profile/Profile";
import { About } from "@/components/about/About";
import { Work } from "@/components/work/Work";
import { ProjectStack } from "@/components/work/ProjectStack";
import { Education } from "@/components/education/Education";

export default function Home() {
  return (
    <main>
      <Profile />
      <About />
      <Work />
      <ProjectStack />
      <Education />
    </main>
  );
}
