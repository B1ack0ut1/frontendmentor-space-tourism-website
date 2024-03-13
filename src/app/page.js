import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="custom-container text-white">
      <Link href="#">
        <div className="large-button uppercase font-serif rounded-full grid place-content-center w-32 h-32 bg-white text-dark">
          Explore
        </div>
      </Link>
    </div>
  );
}
