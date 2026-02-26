import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/scroll-to-top";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  title: "DentalWeb | Diseño Web de Élite para Odontólogos",
  description: "Transformamos clínicas dentales en marcas de prestigio. Páginas web premium con animaciones 3D, SEO local y conversión garantizada para especialistas dentales.",
  keywords: [
    "diseño web odontólogos",
    "branding para dentistas",
    "páginas web clínicas dentales",
    "marketing dental profesional",
    "posicionamiento seo dentistas",
    "dental web design"
  ],
  authors: [{ name: "DentalWeb Premium" }],
  robots: "index, follow",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "DentalWeb | El Futuro de tu Clínica es Digital",
    description: "Diseño web de alto impacto para odontólogos de élite. Consigue más pacientes hoy.",
    type: "website",
    locale: "es_MX",
    url: "https://dentalweb.pro",
    siteName: "DentalWeb",
    images: [
      {
        url: "/images/despues_dental.png",
        width: 1200,
        height: 630,
        alt: "DentalWeb Premium Design Preview",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalWeb | Diseño Web Premium para Dentistas",
    description: "Lleva tu clínica al siguiente nivel con tecnología visual de vanguardia.",
    images: ["/images/despues_dental.png"],
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
        <ScrollToTop />

      </body>
    </html>
  );
}
