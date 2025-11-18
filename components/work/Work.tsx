"use client";
import React from "react";

export const Work: React.FC = () => {
  return (
    <div className="flex items-center justify-start border border-t-0">
      <div className="w-full py-6 px-1.5">
        <h2
          className="diplomata-sc-regular text-[2.5rem] font-normal tracking-tighter leading-12 flex flex-1 justify-center items-center"
          style={{ transform: "scaleY(1.5)" }}
        >
          <span className="text-secondary">WORK</span>{" "}
          <span className="text-stone-300 ml-5">EXPERIENCE</span>
        </h2>
      </div>
    </div>
  );
};
