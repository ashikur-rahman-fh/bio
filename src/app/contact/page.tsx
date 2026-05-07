"use client";

import { useEffect } from "react";

/**
 * Old URL — forwards to the single-page portfolio (#contact).
 */
export default function LegacyContactRedirectPage() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);

  return (
    <main className="page-container py-16 text-center font-hand text-xl text-ink">
      <p>Redirecting…</p>
    </main>
  );
}
