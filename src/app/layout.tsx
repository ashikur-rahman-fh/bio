import "./globals.css";
import type { Metadata } from "next";
import { Caveat, Inter, Patrick_Hand } from "next/font/google";
import { ThemeProvider } from "@/app/components/MTComponent";

import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaperBackground from "./components/Sketch/PaperBackground";

import { Analytics } from "@vercel/analytics/react";

import { DEFAULT_METADATA } from "./constants";

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

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

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
      <ThemeProvider>
        <body className={`${inter.className} relative font-body text-ink`}>
          <PaperBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <Maintenance />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
