import "./globals.css";
import { ThemeProvider } from "@/app/components/MTComponent";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaperBackground from "./components/Sketch/PaperBackground";
import StructuredData from "./components/StructuredData";
import { SOCIAL_PLATFORMS } from "./components/Navbar/constants";

import { Analytics } from "@vercel/analytics/react";

import { SITE_METADATA } from "./constants";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?" +
  "family=Caveat:wght@400..700&" +
  "family=Inter:wght@400;500;600;700&" +
  "family=Patrick+Hand&" +
  "display=swap";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
        {relMeLinks.map((href) => (
          <link key={href} href={href} rel="me" />
        ))}
        <StructuredData />
      </head>
      <ThemeProvider>
        <body className="relative font-body text-ink">
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
