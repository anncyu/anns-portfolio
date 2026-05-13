"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NextProjectProps {
  icon: string;
  iconAlt: string;
  label: string;
  href: string;
}

export default function NextProject({
  icon,
  iconAlt,
  label,
  href,
}: NextProjectProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border mt-24 py-16"
    >
      <div className="container-portfolio">
        <p className="label-tag text-ink-faint mb-8">Next Project</p>
        <Link
          href={href}
          className="group inline-flex items-center gap-5"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-bg-subtle flex-shrink-0">
            <Image
              src={icon}
              alt={iconAlt}
              width={48}
              height={48}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
          <span className="font-display font-bold text-[clamp(1.4rem,3vw,2rem)] text-ink group-hover:text-accent transition-colors duration-300">
            {label}
          </span>
          <ArrowRight
            size={20}
            className="text-ink-faint group-hover:text-accent transition-colors duration-300 flex-shrink-0 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.section>
  );
}
