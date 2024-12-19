import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <div className="sm:px-20 px:10 fixed w-full z-50 top-3 py-2">
      <header className="flex justify-between items-center bg-[rgba(255,255,255,0.8)] p-5 rounded-3xl ">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
            <h3 className="font-bold pl-2">LUDORA</h3>
          </div>
          <div className="items-center gap-10 hidden sm:flex">
            <Link href="/">Accueil</Link>
            <Link href="/about">A propos</Link>
            <Link href="/contact">Nous contacter</Link>
          </div>
        </div>
        <div>
          <Link
            href="/form"
            className="bg-orange rounded-3xl px-8 py-2 text-gray-50 hidden sm:block font-bold"
          >
            S&apos;inscrire
          </Link>
          <div className="sm:hidden block">
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
