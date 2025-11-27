import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/root-layout/components/header/header";
import Footer from "@/sections/root-layout/components/footer/footer";
import ProgressBar from "@/components/providers/progress-bar.";
import { Lora, Cormorant_Garamond } from "next/font/google";
import { getPersonalInformationInfo } from "@/lib/services/portfolio-info";
import { principalPlaceHolder } from "@/lib/place-holders";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export async function generateMetadata(): Promise<Metadata> {
  const res = await getPersonalInformationInfo();

  if (!res.data || res.error)
    throw new Error("Error al cargar la información personal");

  const personalInformation = res.data;
  return {
    title: personalInformation.contact_name,
    description: personalInformation.introductory_phrase,
    openGraph: {
      title:
        "Hola, soy: " +
        personalInformation.contact_name +
        ". Y este es mi Portafolio",
      description: personalInformation.introductory_phrase,
      images: [personalInformation.contact_image || principalPlaceHolder],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Hola, soy: " +
        personalInformation.contact_name +
        ". Y este es mi Portafolio",
      description: personalInformation.introductory_phrase,
      images: [personalInformation.contact_image || principalPlaceHolder],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${cormorant.variable} antialiased`}>
        <ProgressBar>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ProgressBar>
      </body>
    </html>
  );
}
