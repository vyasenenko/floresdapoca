import type { Metadata } from "next";
import { Inter, Anton, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

// Anton — a tall, condensed grotesque used for the brutalist display type.
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

// Space Mono — monospaced labels, eyebrows and numerals give the industrial edge.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Flores da Poça — Florista & Garden Center · Estoril / Sintra",
  description:
    "Florista e garden center no Estoril e em Sintra. Plantas de interior e exterior, ramos de mão e flores frescas — tratadas por quem mete as mãos na terra. Entregas em Portugal Continental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${anton.variable} ${spaceMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
