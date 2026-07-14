"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

// Main nav links, excluding the "Contact Me" CTA which gets its own arrow icon
const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu if someone clicks anywhere outside the navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If someone resizes the window back up to desktop width, close the mobile menu
  // so it doesn't stay open in a state that no longer makes sense
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the mobile menu on Escape for keyboard users
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl tracking-tight text-night sm:text-2xl font-body"
          onClick={() => setIsMenuOpen(false)}
        >
          S-C
        </Link>

        {/* Desktop nav links, hidden below the md breakpoint */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal transition-colors hover:text-gray-500 font-switzer-medium"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="group flex items-center gap-1 text-charcoal transition-colors hover:text-gray-500 font-switzer-medium"
          >
            Contact Me
            <FiArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu toggle button, hidden at md and above */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-md p-1 text-gray-900 md:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel. Animates open/closed with max-height + opacity
          instead of display:none so the transition actually plays. */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-gray-100 px-6 pb-6 pt-4 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-3 text-base text-gray-900 transition-colors hover:bg-gray-50"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-1 rounded-md px-2 py-3 text-base text-gray-900 transition-colors hover:bg-gray-50"
          >
            Contact Me
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
