import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-20 pt-2">
      <header className="flex justify-around items-center bg-white2 p-2  rounded-3xl ">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
          <h3 className="font-bold pl-2">LUDORA</h3>
        </div>
        <Link href="/">Accueil</Link>
        <Link href="/about">A propos</Link>
        <Link href="/contact">Nous contacter</Link>
        <Link
          href="/form"
          className="bg-orange rounded-3xl pl-2 pr-2 pt-1 pb-1 text-gray-50"
        >
          S'inscrire
        </Link>
      </header>
    </div>
  );
};

export default Header;
