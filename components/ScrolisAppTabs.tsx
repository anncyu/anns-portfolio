"use client";

import { useState } from "react";
import Image from "next/image";

type AppTabId = "homepage" | "explore" | "profile";

interface AppTab {
  id: AppTabId;
  number: string;
  title: string;
  desc: string;
  image: string;
}

const tabs: AppTab[] = [
  {
    id: "homepage",
    number: "01",
    title: "Finite Digest",
    desc: "A date-anchored daily digest of five curated topics — numbered, completable, and free from the algorithm. When you've read them, the feed ends.",
    image: "/Scrolis - Homepage.png",
  },
  {
    id: "explore",
    number: "02",
    title: "Explore & Search",
    desc: "Search any topic beyond your daily digest. Trending cards surface real-time discourse pulled from your connected feeds.",
    image: "/Scrolis - Explore Search.png",
  },
  {
    id: "profile",
    number: "03",
    title: "Profile",
    desc: "A lightweight reflection layer showing your perspective breakdown across Your Feed, Wandering, and Uncharted — plus a calendar archive of every past digest.",
    image: "/Scrolis - Profile.png",
  },
];

export default function ScrolisAppTabs() {
  const [active, setActive] = useState<AppTabId>("homepage");

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-16">
      {/* Cards — left */}
      <div className="flex flex-col gap-3 w-full lg:max-w-sm">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div key={tab.id}>
              <button
                onClick={() => setActive(tab.id)}
                className={[
                  "w-full text-left rounded-2xl px-6 py-5 border transition-all duration-200",
                  isActive
                    ? "bg-bg-subtle border-border shadow-sm"
                    : "bg-transparent border-border hover:bg-bg-subtle",
                ].join(" ")}
                style={isActive ? { borderColor: "var(--accent)" } : {}}
              >
                <p className="label-tag text-ink-faint mb-1">{tab.number}</p>
                <h4 className="font-semibold text-ink text-[1rem] mb-1">
                  {tab.title}
                </h4>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {tab.desc}
                </p>
              </button>

              {/* Mobile: image below active card */}
              {isActive && (
                <div className="lg:hidden mt-4 flex justify-center">
                  <Image
                    src={tab.image}
                    alt={`${tab.title} screen`}
                    width={220}
                    height={440}
                    className="object-contain rounded-2xl"
                    unoptimized
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop: phone mockup right, all stacked with opacity fade */}
      <div className="hidden lg:block relative flex-1 h-[520px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: active === tab.id ? 1 : 0 }}
          >
            <Image
              src={tab.image}
              alt={`${tab.title} screen`}
              fill
              className="object-contain"
              sizes="40vw"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
