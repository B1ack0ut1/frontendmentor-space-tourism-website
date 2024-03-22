"use client";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Link from "next/link";
import Background from "../components/Background";

export default function Home() {
  return (
    <>
      <Link className="skip-to-content" href="#main">
        Skip to main content
      </Link>
      <Navigation />
      <main className="grid-container grid-container--home">
        <div>
          <h1 className="headline">
            So, you want to travel&nbsp;to{" "}
            <span className="fs-900 ff-serif text-white d-block">Space</span>
          </h1>
          <p className="sub-headline">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link href="#">
            <div className="large-button">Explore</div>
          </Link>
        </div>
      </main>
    </>
  );
}
