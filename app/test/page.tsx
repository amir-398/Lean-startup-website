"use client";
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

export default function Test() {
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
    <div className="grid gap-4 justify-center">
      <Formik
        initialValues={{ email: "", prénom: "", nom: "", dateDeNaissance: "" }}
        validationSchema={validationSchema}
        onSubmit={submitBtn}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
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
                <Label htmlFor="dateDeNaissance">Date de naissance</Label>
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
  );
}
