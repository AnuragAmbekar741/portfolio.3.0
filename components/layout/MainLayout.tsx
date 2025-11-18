import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-6xl lg:px-8 xl:max-w-4xl xl:py-10 2xl:max-w-4xl">
      {children}
    </div>
  );
};

export default MainLayout;
