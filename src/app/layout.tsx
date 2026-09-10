import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const amiri = Amiri({
  weight: ["400", "700"],
  variable: "--font-arabic",
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
      <body className={`${cormorant.variable} ${pinyon.variable} ${amiri.variable} antialiased bg-[#fdfdfc] text-emerald-900`}>
        {children}
      </body>
    </html>
  );
}
