"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "../LogoComponent/Hamburger";
import Close from "../LogoComponent/Close";

import CrayonUnderline from "../Sketch/CrayonUnderline";
import Social from "./Social";

import { NAV_ITEMS, SOCIAL_PLATFORMS } from "./constants";

import {
  getSamePageHashFragment,
  pushHashUrl,
  scrollToFragment,
} from "@/lib/smoothScroll";

const LOGO_LINK_CLASS =
  "focus-sketch crayon-text relative flex-shrink-0 overflow-visible pb-2 " +
  "font-hand text-2xl tracking-wide text-ink sm:text-3xl";

function navLinkClass(active: boolean) {
  const tone = active ? "text-crayon-blue" : "text-ink/75 hover:text-ink";
  return (
    "group focus-sketch crayon-text relative whitespace-nowrap pb-2 font-hand " +
    `text-xl transition-colors ${tone}`
  );
}

function underlineClass(active: boolean) {
  const scale = active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100";
  return (
    "absolute bottom-0 left-0 h-[5px] w-full origin-left rounded-full " +
    `bg-crayon-blue transition-transform duration-300 ${scale}`
  );
}

const MOBILE_MENU_TRIGGER_CLASS =
  "focus-sketch flex h-12 min-h-[44px] min-w-[44px] items-center justify-center " +
  "rounded-full border-2 border-crayon-blue bg-paper";

function fragmentFromHref(href: string): string | null {
  const i = href.indexOf("#");
  if (i === -1) {
    return null;
  }
  return href.slice(i + 1) || null;
}

function navItemIsActive(pathname: string, hashId: string, href: string) {
  const frag = fragmentFromHref(href);
  if (frag !== null) {
    if (pathname !== "/") {
      return false;
    }
    if (frag === "top") {
      return hashId === "" || hashId === "top";
    }
    return hashId === frag;
  }
  if (href === "/" || href === "/#top") {
    return pathname === "/" && (hashId === "" || hashId === "top");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hashId, setHashId] = useState("");

  function handleInPageNav(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const fragment = getSamePageHashFragment(pathname, href);
    if (fragment === null) {
      return;
    }
    e.preventDefault();
    pushHashUrl(href);
    scrollToFragment(fragment);
  }

  useEffect(() => {
    const syncHash = () => {
      setHashId(window.location.hash.replace(/^#/, ""));
    };
    syncHash();
    const onHashChange = () => {
      syncHash();
      setMenuOpen(false);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    setHashId(
      typeof window !== "undefined"
        ? window.location.hash.replace(/^#/, "")
        : "",
    );
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b-2 border-pencil/60 bg-paper/90 backdrop-blur-sm"
        role="banner"
      >
        <nav
          aria-label="Primary"
          className="page-container flex h-16 items-center justify-between gap-3 lg:h-20"
        >
          <Link
            className={LOGO_LINK_CLASS}
            href="/#top"
            onClick={(e) => handleInPageNav(e, "/#top")}
            scroll={false}
          >
            ASHIKUR
            <span className="text-crayon-blue">.</span>
            <CrayonUnderline className="-bottom-0.5 w-[108%]" color="blue" delay={0.15} />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const active = navItemIsActive(pathname, hashId, item.href);
              return (
                <Link
                  key={item.href}
                  className={navLinkClass(active)}
                  href={item.href}
                  onClick={(e) => handleInPageNav(e, item.href)}
                  scroll={false}
                >
                  {item.text}
                  <span aria-hidden className={underlineClass(active)} />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Social platforms={SOCIAL_PLATFORMS} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              aria-expanded={menuOpen}
              aria-controls="sketch-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={MOBILE_MENU_TRIGGER_CLASS}
              onClick={() => setMenuOpen((o) => !o)}
              type="button"
            >
              {menuOpen ? (
                <Close className="h-[22px] w-[22px]" />
              ) : (
                <Hamburger style={{ width: "22px" }} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div
          className={
            "fixed inset-0 z-[60] flex flex-col overscroll-contain bg-paper lg:hidden " +
            "shadow-[inset_0_0_0_1px_rgba(216,209,196,0.45)]"
          }
          id="sketch-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className={
              "flex min-h-16 shrink-0 items-center justify-between gap-4 " +
              "border-b-2 border-pencil/60 bg-paper px-4 pb-3 " +
              "pt-[calc(0.75rem+env(safe-area-inset-top,0px))] sm:px-6"
            }
          >
            <span className="crayon-text font-hand text-2xl leading-none text-ink sm:text-3xl">
              Menu
            </span>
            <button
              aria-label="Close menu"
              className={`${MOBILE_MENU_TRIGGER_CLASS} shrink-0`}
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <Close className="h-[22px] w-[22px]" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto bg-paper px-4 py-6 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                className={
                  "focus-sketch crayon-text rounded-xl border-2 border-transparent " +
                  "py-4 pl-3 pr-3 font-hand text-3xl leading-tight text-ink " +
                  "transition-colors hover:border-pencil/50 hover:bg-pencil/25 " +
                  "active:bg-pencil/35 sm:text-[2rem]"
                }
                href={item.href}
                onClick={(e) => {
                  handleInPageNav(e, item.href);
                  setMenuOpen(false);
                }}
                scroll={false}
              >
                {item.text}
              </Link>
            ))}
            <div className="mt-auto flex flex-wrap justify-center gap-3 pt-10 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
              <Social platforms={SOCIAL_PLATFORMS} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
