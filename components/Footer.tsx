"use client";

import Link from "next/link";
import { Moon } from "lucide-react";

export default function Footer() {
  const workLinks = [
    { label: "MD FactFarm", href: "/mdfactfarm" },
    { label: "CareerVillage Coach AI", href: "/coach-ai" },
    { label: "CalCommunity", href: "#" },
    { label: "SF Picnic Rentals", href: "#" },
  ];

  return (
    <footer className="bg-bg border-t border-border mt-28">
      <div className="container-portfolio py-14 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-border">
          {/* Work */}
          <div>
            <p className="label-tag text-ink-faint mb-5">Work</p>
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
            <p className="label-tag text-ink-faint mb-5">Contact</p>
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
            <p className="label-tag text-ink-faint mb-5">Appearance</p>
            <button
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border text-ink-faint text-sm cursor-not-allowed select-none"
              disabled
              title="Dark mode coming soon!"
            >
              <Moon size={13} />
              <span className="font-body">Dark mode</span>
            </button>
            <p className="text-xs text-ink-faint mt-2">Coming soon!</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            © 2024 Ann Yu. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Made with 🩶 and a lot of cappuccinos with almond milk.
          </p>
        </div>
      </div>
    </footer>
  );
}
