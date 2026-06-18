"use client";

import { useState } from "react";
import Image from "next/image";

type TabId = "feed" | "wandering" | "uncharted";

interface Tab {
  id: TabId;
  number: string;
  title: string;
  desc: string;
  image: string;
}

const tabs: Tab[] = [
  {
    id: "feed",
    number: "01",
    title: "Your Feed",
    desc: "Synthesized from accounts you already follow. Your existing bubble, made readable.",
    image: "/Scrolis - Your Feed.png",
  },
  {
    id: "wandering",
    number: "02",
    title: "Wandering",
    desc: "Voices adjacent to your follow list. A slightly wider view, without going anywhere uncomfortable.",
    image: "/Scrolis - Wandering.png",
  },
  {
    id: "uncharted",
    number: "03",
    title: "Uncharted",
    desc: "Perspectives with zero overlap with your feed. The ones you'd never find on your own.",
    image: "/Scrolis - Uncharted.png",
  },
];

export default function ScrolisFeatureTabs() {
  const [active, setActive] = useState<TabId>("feed");;

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-16">
      {/* Desktop: phone mockup LEFT, all stacked with opacity fade */}
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

      {/* Cards — right */}
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

              {/* Mobile: image drops in below the active card */}
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
    </div>
  );
}
