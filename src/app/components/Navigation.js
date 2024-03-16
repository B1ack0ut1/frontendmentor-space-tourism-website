"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  return (
    <header>
      <div>
        <img
          className="w-10 h-10 md:w-12 md:h-12"
          src="/shared/logo.svg"
          alt="logo"
        />
      </div>
      {/* <div className="lg:border lg:border-blue-300">random line</div> */}
      <button
        onClick={toggleNav}
        className={`mobile-nav-toggle ${isNavOpen ? "open-nav" : ""}`}
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <menu
          id="primary-navigation"
          className={`gap-8 px-16 primary-navigation underline-indicators ${
            isNavOpen ? "open-nav" : ""
          }`}
        >
          <li className={isActive("/") ? "active" : ""}>
            <Link href="/" className="uppercase text-white letter-spacing-2">
              <span>00</span>Home
            </Link>
          </li>
          <li className={isActive("/destination") ? "active" : ""}>
            <Link
              href="/destination"
              className="font-sans uppercase text-white letter-spacing-2"
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li className={isActive("/crew") ? "active" : ""}>
            <Link
              href="/crew"
              className="font-sans uppercase text-white letter-spacing-2"
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li className={isActive("/technology") ? "active" : ""}>
            <Link
              href="/technology"
              className="font-sans uppercase text-white letter-spacing-2"
            >
              <span>03</span>Technology
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navigation;
