import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../public/logo.svg";
export default function Footer() {
  return (
    <div className="px-20 py-10">
      <div className="flex sm:flex-row items-center flex-col gap-5">
        {/* left component*/}
        <div className="flex flex-1 flex-col justify-between items-center sm:items-start gap-5">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Ludora logo" width={50} />
            <h1 className="font-bold text-2xl">LUDORA</h1>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xl mb-5">Contactez-nous</p>
            <ul className="list-disc flex items-center sm:items-start flex-col gap-2">
              <li>40 rue du chemin vert, 75011 Paris</li>
              <li>ludroraapp@gmail.com</li>
              <li>01 40 81 85 00</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 my-10">
            <h2 className="font-bold text-2xl">Newsletter</h2>
            <div className="flex gap-5">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="bg-gray-200 sm:w-72 w-56 sm:py-5 rounded-lg pl-5 outline-orange py-3 "
              />
              <Link
                href="/form"
                className="bg-orange rounded-xl px-8 py-2 text-gray-50 font-bold flex items-center justify-center"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </div>
        {/* right component*/}
        <div className="flex flex-1  flex-col gap-5 items-center sm:items-end">
          <h2 className="font-bold text-2xl">Ressources</h2>
          <Link href="/">Blog et conseils</Link>
          <Link href="/about">Création de session</Link>
          <Link href="/contact">Actualités</Link>
          <Link href="/contact">Matchmaker</Link>
          <Link href="/contact">Trouver une session</Link>
          <Link href="/contact">FAQ</Link>
        </div>

        {/* -----------------------------------------*/}
        {/* center component*/}
        <div className="flex flex-1 flex-col gap-5 items-center sm:items-end">
          <h2 className="font-bold text-2xl">LUDORA.FR</h2>
          <Link href="/">Accueil</Link>
          <Link href="/about">A propos</Link>
          <Link href="/contact">Mentions légales</Link>
          <Link href="/contact">Termes et conditions</Link>
          <Link href="/contact">Politique de confidentialité</Link>
          <Link href="/contact">Télécharger l&apos;application</Link>
        </div>
        {/* -----------------------------------------*/}
      </div>
      <div className="w-full h-0.5 bg-gray-200 sm:my-0 my-5"></div>
      <div className="flex justify-between items-center w-full sm:mt-5 sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center rounded-full border-2 size-10">
            <p className="text-grey">C</p>
          </div>
          <p className="text-grey">2024 LUDORA, Inc. Tous droits reservés.</p>
        </div>
        <div className="flex items-center gap-2">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <BsTwitterX size={30} />
          <AiFillTikTok size={30} />
        </div>
      </div>
    </div>
  );
}