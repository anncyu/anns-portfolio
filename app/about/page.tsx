import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ann Yu — former healthcare professional, grad student at UC Berkeley, product manager and designer.",
};

// Photo order per spec:
// 1. Coffee/latte art — top wide (IMG_6238)
// 2. Headshot — bottom-left (MimsPortraits)
// 3. Sunset silhouette — bottom-right (IMG_8261)
const photos = {
  wide: {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/684c9c19f188a2ab8eb25744_IMG_6238.jpg",
    alt: "Latte art coffee cup",
  },
  bottomLeft: {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/684c9d5e1a94a4a6eb189524_20240819_MimsPortraits_bhs_037.jpg",
    alt: "Ann Yu headshot",
  },
  bottomRight: {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/69965da39214cbcaddc9ad8f_IMG_8261.jpg",
    alt: "Sunset silhouette",
  },
};

const paragraphs = [
  "Similar to patients gaining access to healthcare services, I want to create user-centered designs that empower individuals to engage with products that meet their unique needs.",
  "Whether I'm exploring new cultures, discovering music, or savoring a perfect cup of coffee, I draw creative energy from the everyday and extraordinary moments around me.",
  "As the eldest daughter, I've always taken on the role of making life easier for others. Design became a natural extension of that instinct: blending empathy with thoughtful, user-centered solutions.",
];

export default function About() {
  return (
    <div className="container-portfolio py-20 md:py-28">
      {/* Desktop: two-column. Mobile: stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-14 lg:gap-20 items-center">

        {/* ── Left column: photo grid ── */}
        <FadeIn>
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {/* Top wide photo */}
            <div className="col-span-2 rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photos.wide.src}
                alt={photos.wide.alt}
                width={900}
                height={675}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* Bottom left — headshot */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <Image
                src={photos.bottomLeft.src}
                alt={photos.bottomLeft.alt}
                width={450}
                height={450}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* Bottom right — sunset */}
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <Image
                src={photos.bottomRight.src}
                alt={photos.bottomRight.alt}
                width={450}
                height={450}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile stacked */}
          <div className="lg:hidden flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={photos.wide.src}
                alt={photos.wide.alt}
                width={900}
                height={675}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={photos.bottomLeft.src}
                alt={photos.bottomLeft.alt}
                width={900}
                height={675}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={photos.bottomRight.src}
                alt={photos.bottomRight.alt}
                width={900}
                height={675}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </FadeIn>

        {/* ── Right column: text ── */}
        <div>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-[clamp(2.4rem,5vw,3.75rem)] text-ink leading-tight mb-12">
              Hi, I&apos;m Ann! 👋
            </h1>
          </FadeIn>

          <div className="space-y-8">
            {paragraphs.map((text, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <div className="flex gap-5">
                  <span
                    className="label-tag flex-shrink-0 mt-1 tabular-nums"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    0{i + 1}
                  </span>
                  <p className="text-ink-muted leading-relaxed text-[1rem]">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.42}>
            <div className="mt-12">
              <Link
                href="https://drive.google.com/file/d/144g8Sq_8unk3SlGA7oA9Oe85miDbycqt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-ink text-bg px-7 py-3 rounded-full text-sm font-medium font-body hover:opacity-85 transition-opacity duration-200"
              >
                View Resume
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
