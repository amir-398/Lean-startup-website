import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-white2 flex flex-col px-20 rounded-3xl">
      <div className=" flex">
        <div className="flex flex-col">
          <h3 className="text-orange font-semibold">
            POURQUOI CETTE APPICATION ?
          </h3>
          <h2 className="font-semibold text-3xl">
            Marre de jouer seul ? Trouve tes Partenaires de jeu facilement !
          </h2>
          <br />
          <p className="text-gray-600 text-sm">
            NOTRE APPLICATION TE PERMET DE:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="w-3/4 text-slate-800 text-sm leading-loose">
            Organiser un match ou rejoindre une équipe, c’est souvent compliqué
            : horaires, lieux, niveaux... Mais on a la solution pour toi !
          </p>
        </div>
      </div>
      <div className=" h-3/4 flex mt-3">
        <div className=" w-1/2 bg-green text-white rounded-3xl mr-2 flex flex-col items-center p-5">
          <h2 className=" font-semibold text-3xl">
            Trouver des joueurs près de chez toi
          </h2>
          <p className="leading-loose ">
            {" "}
            Connecte-toi avec des passionnés partageant ton niveau et organise
            des parties adaptées à tes envies{" "}
          </p>
          <div>
            <Image
              src="/iphone16double.png"
              alt="mockup"
              width={200}
              height={200}
              className=""
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className=" bg-white3 rounded-3xl ml-2 mb-2 flex flex-col p-5">
            <h2 className="font-bold text-3xl">
              Organiser rapidement <br /> des matchs
            </h2>
            <div className="flex">
              <div className=" w-3/5">
                <p className="text-slate-800 text-sm leading-loose">
                  Choisis le lieu, l’heure et le niveau, invite des joueurs en
                  quelques clics et laisse notre algorithme s’occuper du reste
                </p>
              </div>
              <div className="w-2/5  flex justify-center ">
                <Image
                  src="/mock2.png"
                  alt="mockup"
                  width={170}
                  height={170}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white3 rounded-3xl ml-2 mt-2 p-5">
            <h2 className="font-bold text-3xl">
              Créer des équipes selon ton niveau
            </h2>
            <br />
            <p className="text-slate-800 text-sm">
              Des avantages pour rendre tes matchs encore meilleurs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
