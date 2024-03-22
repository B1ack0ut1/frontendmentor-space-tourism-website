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
    <header className="primary-header">
      <div className="logo">
        <img src="/shared/logo.svg" alt="logo" />
      </div>
      <hr className="nav-hr-line" />
      <button
        onClick={toggleNav}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded={isNavOpen ? "true" : "false"}>
          Menu
        </span>
      </button>
      <nav>
        <menu
          id="primary-navigation"
          className="primary-navigation underline-indicators"
          data-visible={isNavOpen ? "true" : "false"}
        >
          <li className={isActive("/") ? "active" : ""}>
            <Link href="/">
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className={isActive("/destination") ? "active" : ""}>
            <Link href="/destination">
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className={isActive("/crew") ? "active" : ""}>
            <Link href="/crew">
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className={isActive("/technology") ? "active" : ""}>
            <Link href="/technology">
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navigation;
