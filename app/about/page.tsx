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

const photos = [
  {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/69965da39214cbcaddc9ad8f_IMG_8261.jpg",
    alt: "Sunset silhouette",
  },
  {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/684c9d5e1a94a4a6eb189524_20240819_MimsPortraits_bhs_037.jpg",
    alt: "Ann Yu headshot",
  },
  {
    src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/684c9c19f188a2ab8eb25744_IMG_6238.jpg",
    alt: "Latte art coffee cup",
  },
];

const paragraphs = [
  "Similar to patients gaining access to healthcare services, I want to create user-centered designs that empower individuals to engage with products that meet their unique needs.",
  "Whether I'm exploring new cultures, discovering music, or savoring a perfect cup of coffee, I draw creative energy from the everyday and extraordinary moments around me.",
  "As the eldest daughter, I've always taken on the role of making life easier for others. Design became a natural extension of that instinct: blending empathy with thoughtful, user-centered solutions.",
];

export default function About() {
  return (
    <div className="container-portfolio py-20 md:py-28">

      {/* ── Photo row ── */}
      <FadeIn>
        <div className="flex items-end justify-center gap-4 mb-8" style={{ paddingBottom: "2rem" }}>
          {/* Left — shorter, sits lower */}
          <div
            className="rounded-2xl overflow-hidden shadow-md flex-shrink-0"
            style={{ width: "clamp(130px, 20vw, 220px)", height: "clamp(170px, 27vw, 300px)" }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={440}
              height={600}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {/* Center — taller, elevated */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            style={{ width: "clamp(155px, 24vw, 260px)", height: "clamp(210px, 34vw, 390px)" }}
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={520}
              height={780}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {/* Right — shorter, sits lower */}
          <div
            className="rounded-2xl overflow-hidden shadow-md flex-shrink-0"
            style={{ width: "clamp(130px, 20vw, 220px)", height: "clamp(170px, 27vw, 300px)" }}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width={440}
              height={600}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </FadeIn>

      {/* ── Text section ── */}
      <div className="max-w-[750px] mx-auto pt-8">
        <FadeIn delay={0.1}>
          <h1
            className="font-display font-extrabold text-center text-ink leading-tight mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
          >
            Hi, I&apos;m Ann! 👋
          </h1>
        </FadeIn>

        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.08}>
              <p className="text-ink-muted leading-relaxed text-[1rem]">
                <span className="font-semibold text-ink">{i + 1}.</span> {text}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.42}>
          <div className="mt-12 flex justify-center">
            <Link
              href="https://drive.google.com/file/d/144g8Sq_8unk3SlGA7oA9Oe85miDbycqt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium font-body hover:opacity-85 transition-opacity duration-200"
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
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
  );
}
