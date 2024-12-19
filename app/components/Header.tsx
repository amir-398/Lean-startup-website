"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
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
const Header = () => {
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
          <Popover>
            <PopoverTrigger asChild>
              <button className="bg-orange rounded-3xl pl-2 pr-2 pt-1 pb-1 text-gray-50 w-40 flex items-center justify-center">
                S'inscrire
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
                        <h4 className="font-medium leading-none">
                          Inscriptions
                        </h4>
                        <p className="text-sm text-gray">
                          L'application est en cours de développement.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
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
                        <div className="grid grid-cols-3 items-center gap-4">
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
                        <div className="grid grid-cols-3 items-center gap-4">
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
                        <div className="grid grid-cols-3 items-center gap-4">
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
                          className="bg-orange rounded-xl font-medium w-1/4 p-2 hover:border-2 hover:border-green"
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
          <div className="sm:hidden block">
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
