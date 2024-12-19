import Image from "next/image";
import React from "react";

const Hero3 = () => {
  return (
    <section className="flex flex-col px-5 py-10 rounded-3xl font-medium md:px-20">
      <div className="flex flex-col-reverse items-center md:flex-row justify-center">
        <div className="w-1/2 h-auto">
          <Image
            src="/basketball.jpg"
            alt="basketball picture"
            width={470}
            height={470}
            className="rounded-3xl"
          />
        </div>

        <div className=" flex flex-col w-full p-5 md:w-1/2">
          <p className="text-orange font-semibold flex items-center">
            <Image
              src="/mouseclick.svg"
              alt="basketball picture"
              width={24}
              height={24}
              className="mr-2"
            />
            DES AVANTAGES EXCLUSIFS POUR VOS PARTIES
          </p>
          <h3 className="font-bold text-3xl">
            Joues mieux, <br /> payes moins !
          </h3>
          <p className="text-grey text-sm leading-loose">
            Grâce à nos partenariats avec des centres sportifs privés comme
            Five, Urban Soccer, ou d&apos;autres complexes de sports collectifs,
            nous te proposons des tarifs exclusifs et des réductions pour
            organiser tes matchs en toute simplicité.
          </p>
          <ul className="text-grey text-sm list-disc list-inside mt-2">
            <li>Réductions sur les terrains</li>
            <li>Des réservations simplifiées</li>
            <li>Avantages pour les abonnés réguliers</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-full h-auto flex flex-col  justify-center p-5 md:w-1/2">
          <p className="text-orange font-semibold flex items-center">
            <Image
              src="/basketball-icon.svg"
              alt="basketball icon"
              width={24}
              height={24}
              className="mr-2"
            />
            REJOINS LE JEU, EN TOUTE SIMPLICITÉ
          </p>
          <h3 className="font-bold text-3xl pl-1">
            Ton prochain match est à un clic.
          </h3>
          <ul className="text-grey text-sm list-disc list-inside mt-2 pl-2">
            <li>Découvre des joueurs et des matchs autour de toi</li>
            <li>Organise ton prochain match en quelques clics</li>
            <li>Rejoins des équipes selon ton niveau</li>
            <li>Échange avec une communauté motivée</li>
          </ul>
        </div>
        <div className="w-full h-auto p-5 md:w-1/2">
          <Image
            src="/mock2.png"
            alt="mobile application mockup"
            width={225}
            height={225}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
