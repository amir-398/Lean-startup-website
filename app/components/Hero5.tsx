import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import Image from "next/image";

const Hero5 = () => {
  return (
    <section className="flex flex-col px-20 py-10 rounded-3xl font-medium items-center ">
      <div className="flex p-5 flex-col w-full md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-5 flex-shrink-0 overflow-auto">
          <p className="text-orange font-semibold flex items-center">FAQ</p>
          <h3 className="font-bold text-3xl">
            Une question ? Voici quelques réponses.
          </h3>
          <p className="text-grey text-sm leading-loose">
            Nous avons rassemblé les interrogations les plus fréquentes pour
            t’aider à mieux comprendre notre application. Si tu ne trouves pas
            ta réponse ici, notre équipe est toujours prête à t’aider !
          </p>
        </div>
        <div className="flex flex-row flex-wrap md:flex-col w-full md:w-1/2 p-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Comment fonctionne l’application ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels sports sont disponibles ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Puis-je organiser un événement privé ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Comment fonctionne le système de niveaux ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Comment fonctionne le système de matchmaking ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Puis-je réserver des terrains directement depuis l’application ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Que faire si personne ne rejoint mon match ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="bg-orange rounded-xl w-4/5 p-10 relative overflow-hidden">
        <h3 className="font-bold text-3xl text-white">
          Prêt à rejoindre le jeu ?{" "}
        </h3>
        <br />
        <p className="text-white font-normal z-index-10">
          Match ou pas match ? la balle est dans ton camp !
        </p>
        <br />
        <button className="bg-white rounded-3xl font-semibold p-3">
          <p>
            <span className="text-orange">GO!</span> m'inscrire
          </p>
        </button>
        <div className="hidden md:block">
          <Image
            src="/ball.png"
            alt="basketball"
            width={470}
            height={470}
            className="  absolute right-0 bottom-0 z-index-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero5;
