import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "fagarsfasheg | Import & Export Excellence",
  description: "Your trusted partner in import and export across farm produce, food products, and electronics. Delivering quality globally from Nigeria.",
  keywords: "import, export, farm produce, food products, electronics, Nigeria, international trade, logistics, distribution",
  authors: [{ name: "fagarsfasheg" }],
  openGraph: {
    title: "fagarsfasheg | Import & Export Excellence",
    description: "Your trusted partner in import and export across farm produce, food products, and electronics.",
    url: "https://fagarsfasheg.com",
    siteName: "fagarsfasheg",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "fagarsfasheg Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fagarsfasheg | Import & Export Excellence",
    description: "Your trusted partner in import and export across farm produce, food products, and electronics.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
