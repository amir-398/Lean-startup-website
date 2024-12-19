"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addDoc, collection } from "firebase/firestore";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { User } from "../types/constants";
import { db } from "@/firebase.config";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Veuillez entrer un email valide")
    .required("L'email est obligatoire"),
  prénom: yup.string().required("Le prénom est obligatoire"),
  nom: yup.string().required("Le nom est obligatoire"),
  dateDeNaissance: yup
    .date()
    .required("La date de naissance est obligatoire")
    .nullable(),
});

const Hero5 = () => {
  const [loading, setLoading] = useState(false);

  const submitBtn = async (
    values: User,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "users"), {
        email: values.email,
        prénom: values.prénom,
        nom: values.nom,
        dateDeNaissance: values.dateDeNaissance,
      });
      console.log("values", values);
      alert("Données envoyées avec succès !");
      resetForm();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      alert("Erreur lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col px-5 py-10 rounded-3xl font-medium items-center px-20">
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
        <Popover>
          <PopoverTrigger asChild>
            <button className="bg-white rounded-3xl font-semibold p-3">
              <p>
                <span className="text-orange">GO!</span> m&apos;inscrire
              </p>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4 justify-center">
              <Formik
                initialValues={{
                  email: "",
                  prénom: "",
                  nom: "",
                  dateDeNaissance: "",
                }}
                validationSchema={validationSchema}
                onSubmit={submitBtn}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Inscriptions</h4>
                      <p className="text-sm text-gray">
                        L&apos;application est en cours de développement.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4 flex-row">
                        <Label htmlFor="nom">Nom</Label>
                        <Field
                          id="nom"
                          name="nom"
                          as={Input}
                          className="col-span-2 h-8"
                        />
                        <ErrorMessage
                          name="nom"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4 flex-row">
                        <Label htmlFor="prénom">Prénom</Label>
                        <Field
                          id="prénom"
                          name="prénom"
                          as={Input}
                          className="col-span-2 h-8"
                        />
                        <ErrorMessage
                          name="prénom"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4 flex-row">
                        <Label htmlFor="email">Email</Label>
                        <Field
                          id="email"
                          name="email"
                          as={Input}
                          className="col-span-2 h-8"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4 flex-row">
                        <Label htmlFor="dateDeNaissance">
                          Date de naissance
                        </Label>
                        <Field
                          id="dateDeNaissance"
                          name="dateDeNaissance"
                          as={Input}
                          type="date"
                          className="col-span-2 h-8"
                        />
                        <ErrorMessage
                          name="dateDeNaissance"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-orange rounded-xl w-30 h-10 px-3  text-gray-50 font-bold flex items-center justify-center cursor-pointer"
                        disabled={loading}
                      >
                        {loading ? "Envoi..." : "Envoyer"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </PopoverContent>
        </Popover>
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
