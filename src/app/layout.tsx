import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/root-layout/components/header/header";
import Footer from "@/sections/root-layout/components/footer/footer";
import ProgressBar from "@/components/providers/progress-bar.";
import { Lora, Cormorant_Garamond } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Asura-Portfolio",
  description: "Portafolio personalizado para mostrar mis habilidades",
};

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
