import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const montSerrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ludora",
  description: "Ludora's landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montSerrat.className} style={{ paddingTop: "3.5rem" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
