"use client";

import { useEffect } from "react";

/**
 * Old URL — forwards to the single-page portfolio (#projects).
 */
export default function LegacyExperienceRedirectPage() {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return (
    <main className="page-container py-16 text-center font-hand text-xl text-ink">
      <p>Redirecting…</p>
    </main>
  );
}
