"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Background = ({ children }) => {
  const pathname = usePathname();

  const pathMap = {
    "/": "home",
    "/destination": "destination",
    "/crew": "crew",
    "/technology": "technology",
  };
  return (
    <div className={`background ${pathMap[pathname]}-background`}>
      {children}
    </div>
  );
};

export default Background;
