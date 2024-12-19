import Image from "next/image";
import React from "react";

const Hero4 = () => {
  return (
    <section className="flex flex-col px-5 py-10 rounded-3xl font-medium items-center bg-white2 md:px-20">
      <p className="text-orange font-semibold flex items-center">MATCHMAKING</p>

      <h3 className="font-bold text-3xl">
        Laisse notre algorithme faire le reste.
      </h3>
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col flex-wrap w-full p-5 md:flex-row  md:w-1/2">
          <div className="flex flex-col  md:w-1/2">
            <div className="p-3 rounded-lg bg-white3 w-1/6 flex justify-center ">
              <Image
                src="/location.svg"
                alt="location icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-xl font-medium">Localisation optimisée</p>
              <p className="text-grey text-sm leading-loose">
                Il identifie les matchs et équipes proches de toi pour minimiser
                les déplacements.
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:w-1/2">
            <div className="p-3 rounded-lg bg-white3 w-1/6 flex justify-center">
              <Image
                src="/sparkles.svg"
                alt="sparkles picture"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-xl font-medium">Matching par niveau</p>
              <p className="text-grey text-sm leading-loose">
                Il associe les joueurs et équipes selon leur niveau, pour des
                parties équilibrées et motivantes.
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:w-1/2">
            <div className="p-3 rounded-lg bg-white3 w-1/6 flex justify-center">
              <Image
                src="/preferences.svg"
                alt="preferences icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-xl font-medium">Préférences sportives</p>
              <p className="text-grey text-sm leading-loose">
                Il prend en compte tes sports favoris et tes disponibilités pour
                des recommandations personnalisées.
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:w-1/2">
            <div className="p-3 rounded-lg bg-white3 w-1/6 flex justify-center">
              <Image src="/graph.svg" alt="graph icon" width={24} height={24} />
            </div>
            <div>
              <p className="text-xl font-medium">MAJ en temps réel</p>
              <p className="text-grey text-sm leading-loose">
                Les matchs et joueurs disponibles sont actualisés en continu
                pour t’offrir le meilleur choix.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <Image
            src="/graph.png"
            alt="graph"
            width={500}
            height={500}
            className=" bg-orange rounded-3xl mr-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero4;
