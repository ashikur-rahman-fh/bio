import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/MTComponent";

import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/react";

import { DEFAULT_METADATA } from "./constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          <Maintenance />
          {children}
          <Footer />
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
