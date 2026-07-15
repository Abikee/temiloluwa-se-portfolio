import type { Metadata } from "next";
import { Courgette, Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import { Dancing_Script } from "next/font/google";
import { Changa_One } from "next/font/google";
import { Monoton } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";
import { Bungee } from "next/font/google";
import { Wallpoet } from "next/font/google";
import { Cutive_Mono} from "next/font/google";
import {Caveat} from "next/font/google";
import {Galindo} from "next/font/google";





const changaOne = Changa_One({
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
});

export const fredericka = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
});


export const wallpoet = Wallpoet({
  weight: "400",
  subsets: ["latin"],
});

export const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export const cutiveMono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

export const galindo = Galindo({
  weight: "400",
  subsets: ["latin"],
});

export const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});



export { dancingScript };
export {changaOne}; 



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Geist+Pixel&display=swap"
          rel="stylesheet"
        />

      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
