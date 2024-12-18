import Image from "next/image";
import Link from "next/link";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <Hero2 />
    </div>
  );
}
