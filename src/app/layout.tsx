import "./globals.css";
import { Caveat, Inter, Patrick_Hand } from "next/font/google";
import { ThemeProvider } from "@/app/components/MTComponent";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaperBackground from "./components/Sketch/PaperBackground";
import StructuredData from "./components/StructuredData";
import { SOCIAL_PLATFORMS } from "./components/Navbar/constants";

import { Analytics } from "@vercel/analytics/react";

import { SITE_METADATA } from "./constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = SITE_METADATA;

const relMeLinks = SOCIAL_PLATFORMS.map((p) => p.link).filter(
  (link) => !link.startsWith("mailto:"),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${inter.variable} ${patrickHand.variable} ${caveat.variable}`}
      lang="en"
    >
      <head>
        {relMeLinks.map((href) => (
          <link key={href} href={href} rel="me" />
        ))}
        <StructuredData />
      </head>
      <ThemeProvider>
        <body className={`${inter.className} relative font-body text-ink`}>
          <PaperBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
