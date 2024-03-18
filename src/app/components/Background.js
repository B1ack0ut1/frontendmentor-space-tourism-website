"use client";
import { usePathname } from "next/navigation";

const Background = ({ children }) => {
  const pathname = usePathname();

  const pathMap = {
    "/": "home",
    "/destination": "destination",
    "/crew": "crew",
    "/technology": "technology",
  };
  return <div className={`background destination-background`}>{children}</div>;
};

export default Background;
