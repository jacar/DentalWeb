import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalWeb - Diseno y Desarrollo Web para Odontologos",
  description: "Creamos paginas web profesionales para clinicas dentales. Consigue mas pacientes con un sitio web moderno. Cotizacion gratis.",
  keywords: ["diseno web dental", "pagina web odontologo", "clinica dental web", "desarrollo web dentista", "marketing dental"],
  authors: [{ name: "DentalWeb" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DentalWeb - Diseno Web para Odontologos",
    description: "Paginas web profesionales para clinicas dentales. Consigue mas pacientes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalWeb - Diseno Web para Odontologos",
    description: "Paginas web profesionales para clinicas dentales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
