import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-white3 flex flex-col">
      <div className="test1 flex">
        <div className="flex flex-col">
          <h3 className="text-orange font-semibold">
            POURQUOI CETTE APPICATION ?
          </h3>
          <h2 className="font-semibold text-2xl">
            Marre de jouer seul ? Trouve tes Partenaires de jeu facilement !
          </h2>
          <br />
          <p className="text-gray-600  text-sm">
            NOTRE APPLICATION TE PERMET DE:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pl-10 pr-10">
          <p className="w-3/4 text-slate-800 text-sm">
            Organiser un match ou rejoindre une équipe, c’est souvent compliqué
            : horaires, lieux, niveaux... Mais on a la solution pour toi !
          </p>
        </div>
      </div>
      <div className="test2 h-3/4 flex p-2">
        <div className="test3 w-1/2 bg-green text-white rounded-lg m-1">
          <h2 className="font-semibold text-2xl">
            Trouver des joueurs près de chez toi
          </h2>
        </div>
        <div className=" w-1/2 flex flex-col">
          <div className="test4 bg-slate-100 rounded-lg m-1 flex flex-col">
            <h2 className="font-semibold text-2xl">
              Organiser rapidement des matchs
            </h2>
            <div className="flex">
              <div>
                <p className="text-slate-800 text-sm">
                  Choisis le lieu, l’heure et le niveau, invite des joueurs en
                  quelques clics et laisse notre algorithme s’occuper du reste
                </p>
              </div>
              <div>
                <Image
                  src="/iphone16double.png"
                  alt="mockup"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg m-1">
            <h2 className="font-semibold text-2xl">
              Créer des équipes selon ton niveau
            </h2>
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
