"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  const workLinks = [
    { label: "Omada Health", href: "/omada-health" },
    { label: "MD FactFarm", href: "/mdfactfarm" },
    { label: "CareerVillage Coach AI", href: "/coach-ai" },
  ];

  return (
    <footer
      className="border-t border-border mt-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container-portfolio py-14 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-border">
          {/* Work */}
          <div>
            <p className="label-tag mb-5" style={{ color: "var(--text-tertiary)" }}>
              Work
            </p>
            <ul className="space-y-3">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-tag mb-5" style={{ color: "var(--text-tertiary)" }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/anncyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-accent transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:anncyu@berkeley.edu"
                  className="text-sm text-ink-muted hover:text-accent transition-colors duration-200"
                >
                  anncyu@berkeley.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Appearance */}
          <div>
            <p className="label-tag mb-5" style={{ color: "var(--text-tertiary)" }}>
              Appearance
            </p>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border text-ink-muted text-sm hover:text-accent hover:border-accent transition-colors duration-200"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
              <span className="font-body">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            © 2026 Ann Yu. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Made with 🩶 and a lot of cappuccinos with almond milk.
          </p>
        </div>
      </div>
    </footer>
  );
}
