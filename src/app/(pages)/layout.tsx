

import type { Metadata } from "next";
import localFont from "next/font/local";

import "../globals.css";
import Providers from "../providers";
import SlidesPage from "./slidesPage";

const RubikLight = localFont({
  src: "../fonts/Rubik/static/Rubik-Light.ttf",
  variable: "--font-rubik-light",
});

const RubikRegular = localFont({
  src: "../fonts/Rubik/static/Rubik-Regular.ttf",
  variable: "--font-rubik-regular",
});

const RubikMedium = localFont({
  src: "../fonts/Rubik/static/Rubik-Medium.ttf",
  variable: "--font-rubik-medium",
});

const RubikSemiBold = localFont({
  src: "../fonts/Rubik/static/Rubik-SemiBold.ttf",
  variable: "--font-rubik-semibold",
});

const RubikBold = localFont({
  src: "../fonts/Rubik/static/Rubik-Bold.ttf",
  variable: "--font-rubik-bold",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">

        <body className={`${RubikLight.variable} ${RubikRegular.variable} ${RubikMedium.variable} ${RubikSemiBold.variable} ${RubikBold.variable} antialiased `}>

          {children}
          <SlidesPage />
        </body>

      </html>
    </Providers>
  );
}
