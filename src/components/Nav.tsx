"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/content/data";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  {
    label: "Resume",
    href: profile.resumeFile,
    external: true,
    newTab: true,
  },
  {
    label: "Contact",
    href: `https://calendly.com/ebunoluwaamoo/let-s-connect`,
    external: true,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-nav text-nav-foreground fixed top-0 left-0 right-0 z-50 border-b border-border-subtle">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Home"
          className="h-10 w-10 rounded-lg bg-accent-mauve block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-foreground"
        />

        {/* Desktop */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm sm:flex"
        >
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className="rounded transition-colors hover:text-accent-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground"
              >
                {link.label === "Contact" ? (
                  <span className="flex items-center gap-2 p-2 rounded-full bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground">
                    <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
                    Let's talk
                  </span>
                ) : (
                  link.label
                )}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded transition-colors hover:text-accent-mauve focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="rounded p-2 transition-colors hover:bg-white/10 sm:hidden"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          aria-label="Primary"
          className="border-t border-white/10 px-6 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-accent-mauve"
                >
                  {link.label === "Contact" ? (
                    <span className="flex items-center gap-2 p-2 rounded-full bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-foreground w-fit">
                      <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
                      Let's talk
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-accent-mauve"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}