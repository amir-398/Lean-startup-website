import Image from "next/image";
import React from "react";

const Hero1 = () => {
  return (
    <section className="flex flex-col justify-between items-center px-20 py-10 font-medium md:flex-row ">
      <div className=" flex w-full justify-center flex-col flex-1 items-center md:w-1/2">
        <div className="lg:mb-5">
          <h1 className="font-bold text-5xl">Rejoins le jeu.</h1>
          <h1 className="font-bold text-5xl">Trouves ton équipe.</h1>
        </div>
        <p className="mb-5">
          Connecte-toi à des passionnés de sports collectifs près
          <br /> de chez toi. Organise, joue et partage des moments <br />{" "}
          uniques. Inscris-toi en avant-première
        </p>
        <button className="bg-orange rounded-3xl pl-2 pr-2 pt-1 pb-1 text-gray-50 w-40 flex items-center justify-center">
          Je m'inscris
          <Image
            className="ml-2"
            src="/right-arrow.svg"
            alt="arrow icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className=" flex justify-center absolute right-5">
        <div className="rotate flex justify-center">
          <Image
            src="/iphone16double.png"
            alt="mockup"
            width={240}
            height={240}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
