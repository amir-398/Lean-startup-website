import Image from "next/image";
import Link from "next/link";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
    </div>
  );
}
