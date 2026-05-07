/**
 * In-page section navigation for the home SPA (/ + #fragment).
 * Next.js <Link> hash jumps are instant; we smooth-scroll and sync the URL.
 */

export function getSamePageHashFragment(
  pathname: string,
  href: string,
): string | null {
  if (typeof window === "undefined" || !href.includes("#")) {
    return null;
  }
  try {
    const url = new URL(href, window.location.origin);
    if (pathname !== "/" || url.pathname !== "/") {
      return null;
    }
    const raw = url.hash.replace(/^#/, "");
    return raw === "" ? "top" : raw;
  } catch {
    return null;
  }
}

export function scrollToFragment(fragment: string): void {
  if (typeof window === "undefined") {
    return;
  }
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

  if (!fragment || fragment === "top") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const el = document.getElementById(fragment);
  if (el) {
    el.scrollIntoView({ behavior, block: "start" });
  }
}

/** Push hash URL without full navigation; emit hashchange for Navbar sync. */
export function pushHashUrl(href: string): void {
  const url = new URL(href, window.location.origin);
  window.history.pushState(null, "", `${url.pathname}${url.hash}`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
