import Link from "next/link";

import CrayonButton from "@/app/components/Sketch/CrayonButton";

export default function NotFound() {
  return (
    <main className="page-container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="crayon-text font-hand text-5xl text-crayon-blue md:text-6xl">
        404
      </h1>
      <p className="mt-4 max-w-md font-hand text-xl text-ink md:text-2xl">
        This page doesn&apos;t exist. Head back to Ashikur Rahman&apos;s
        portfolio.
      </p>
      <nav
        aria-label="Helpful links"
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
      >
        <CrayonButton href="/">Home</CrayonButton>
        <Link
          className="font-hand text-lg text-crayon-blue underline decoration-crayon-blue/70 underline-offset-4 hover:text-ink"
          href="/#projects"
        >
          Work Experience
        </Link>
        <Link
          className="font-hand text-lg text-crayon-blue underline decoration-crayon-blue/70 underline-offset-4 hover:text-ink"
          href="/#contact"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
