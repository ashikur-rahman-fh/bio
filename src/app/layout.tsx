import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: "Ashikur Rahman - Software Developer at Nokia",
  description: "Software Developer with expertise in data structures and algorithms and excelling in complex problem-solving. Over 2(two) years of experience in software development and " +
    "5+ years in competitive programming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
