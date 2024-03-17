import Image from "next/image";
import Navigation from "./components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grid-container grid-container--home">
        <div>
          <h1 className="headline text-accent fs-500 font-sans-cond uppercase letter-spacing-1">
            So, you want to travel&nbsp;to{" "}
            <span className="fs-900 font-serif text-white block">Space</span>
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
      </div>
    </>
  );
}
