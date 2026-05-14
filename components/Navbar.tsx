"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Work", href: "/#selected-works" },
    { label: "About", href: "/about" },
    {
      label: "CV",
      href: "https://drive.google.com/file/d/144g8Sq_8unk3SlGA7oA9Oe85miDbycqt/view?usp=sharing",
      external: true,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/about") return pathname === "/about";
    return false;
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-border"
      style={{ backgroundColor: "var(--navbar-bg)" }}
    >
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/6836376d31b6512d1e0d8d48_Adobe%20Express%20-%20file.png"
              alt="Ann Yu"
              width={110}
              height={36}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-tag text-ink-muted hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`label-tag transition-colors duration-200 relative ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-ink-muted hover:text-accent"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink-muted hover:text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border py-5 flex flex-col gap-5">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-tag text-ink-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`label-tag ${isActive(link.href) ? "text-accent" : "text-ink-muted"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
