"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
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

const Hero1 = () => {
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
        <Popover>
          <PopoverTrigger asChild>
            <button className="bg-orange rounded-3xl pl-2 pr-2 pt-1 pb-1 text-gray-50 w-40 flex items-center justify-center">
              Je m&aposinscris
              <Image
                className="ml-2"
                src="/right-arrow.svg"
                alt="arrow icon"
                width={24}
                height={24}
              />
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
                        L&aposapplication est en cours de développement.
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
                        className="bg-orange rounded-xl w-44 h-16  text-gray-50 font-bold flex items-center justify-center cursor-pointer"
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
      </div>
      <div className=" flex justify-center absolute right-24">
        <div className=" rotate flex justify-center">
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
