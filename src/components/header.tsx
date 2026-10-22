"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [active, setActive] = useState("top");

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (pathname !== "/") return;

    const nodes = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-[73.75rem] items-center justify-between gap-3 rounded-[1.35rem] bg-white px-3 py-2.5 text-ink shadow-[0_10px_30px_rgba(16,36,63,0.08)] sm:px-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-6">
        <nav aria-label="Primary" className="hidden min-w-0 lg:block">
          <ul className="flex w-max items-center">
            {navLinks
              .filter((link) => link.id !== "top")
              .map((link) => {
                const current = pathname === "/" && active === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      aria-current={current ? "page" : undefined}
                      className={`block whitespace-nowrap rounded-full px-2 py-1.5 text-sm transition ${
                        current ? "font-medium text-ink" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
        <Logo />
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <Link
            href="/#contact"
            className="hidden text-sm text-ink/75 transition hover:text-ink sm:inline"
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-sm font-medium text-ink transition hover:bg-[#b08d45] sm:px-4"
          >
            Enquire
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-auto mt-2 max-w-[73.75rem] rounded-[1.35rem] bg-white px-4 py-2 text-ink shadow-[0_10px_30px_rgba(16,36,63,0.08)] lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block py-3 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
