"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "../LogoComponent/Hamburger";
import Close from "../LogoComponent/Close";

import CrayonUnderline from "../Sketch/CrayonUnderline";
import Social from "./Social";

import { NAV_ITEMS, SOCIAL_PLATFORMS } from "./constants";

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

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link className={LOGO_LINK_CLASS} href="/">
            ASHIKUR
            <span className="text-crayon-blue">.</span>
            <CrayonUnderline className="-bottom-0.5 w-[108%]" color="blue" delay={0.15} />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  className={navLinkClass(active)}
                  href={item.href}
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
                <Close style={{ width: "26px" }} />
              ) : (
                <Hamburger style={{ width: "22px" }} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-paper/97 lg:hidden"
          id="sketch-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between border-b-2 border-pencil/50 px-4 py-4">
            <span className="crayon-text font-hand text-2xl text-ink">
              Menu
            </span>
            <button
              aria-label="Close menu"
              className="focus-sketch flex h-12 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-ink/20"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <Close style={{ width: "26px" }} />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                className="focus-sketch crayon-text border-b border-pencil/60 py-4 font-hand text-3xl text-ink"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <div className="mt-auto flex flex-wrap justify-center gap-3 pb-8 pt-10">
              <Social platforms={SOCIAL_PLATFORMS} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
