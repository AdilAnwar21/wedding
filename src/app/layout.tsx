import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const amiri = Amiri({
  weight: ["400", "700"],
  variable: "--font-amiri",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Muhammed Ridwan & Aneesha - Wedding Invitation",
  description: "Join us in celebrating the marriage of Muhammed Ridwan and Aneesha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${greatVibes.variable} ${amiri.variable} antialiased bg-[#fdfdfc] text-emerald-900`}>
        {children}
      </body>
    </html>
  );
}
