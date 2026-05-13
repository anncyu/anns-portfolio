"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TagPill from "./TagPill";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  label: string;
  headline: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
  isGif?: boolean;
}

export default function ProjectCard({
  label,
  headline,
  image,
  imageAlt,
  tags,
  href,
  isGif = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={href} className="block">
        {/* Cover image */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-bg-subtle"
             style={{ height: "clamp(240px, 40vw, 420px)" }}>
          {isGif ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 1100px"
              unoptimized
            />
          )}
        </div>

        {/* Meta below image */}
        <div className="mt-6 space-y-3">
          <p className="label-tag text-ink-faint">{label}</p>

          <h3 className="font-display font-bold text-[clamp(1.3rem,3vw,1.75rem)] text-ink leading-tight group-hover:opacity-75 transition-opacity duration-200">
            {headline}
          </h3>

          <div className="flex flex-wrap gap-2 pt-0.5">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <div className="flex items-center gap-1.5 pt-1">
            <span
              className="label-tag transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              View Work
            </span>
            <ArrowUpRight
              size={13}
              style={{ color: "var(--accent)" }}
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
