"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const hero = heroRef.current;
    const circle = circleRef.current;
    if (!hero || !circle) return;

    // Initialize to center
    const rect = hero.getBoundingClientRect();
    posRef.current = { x: rect.width / 2, y: rect.height / 2 };
    targetRef.current = { x: rect.width / 2, y: rect.height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      targetRef.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.08);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.08);

      if (circle) {
        circle.style.transform = `translate(${posRef.current.x - 350}px, ${posRef.current.y - 350}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden container-portfolio pt-20 md:pt-28 pb-24 md:pb-32"
    >
      {/* Blur circle — desktop: mouse-tracked, mobile: static center */}
      <div
        ref={circleRef}
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #c0d6f5 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.55,
          top: 0,
          left: 0,
          transform: isMobile
            ? "translate(calc(50vw - 350px), -80px)"
            : "translate(-350px, -350px)",
          willChange: "transform",
          transition: isMobile ? "none" : undefined,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-[clamp(2.3rem,6.5vw,5rem)] text-ink leading-[1.05] tracking-tight max-w-4xl mb-10"
        >
          I&apos;m Ann, a former healthcare professional now applying{" "}
          <em className="not-italic font-black">systems thinking</em> to{" "}
          <em className="not-italic font-black">Product Management</em>, to
          empower and engage.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-12 text-sm text-ink-muted font-body"
        >
          <span>2+ years in healthcare management</span>
          <span className="hidden sm:inline mx-3 text-ink-faint">•</span>
          <span>Currently a grad student @ UC Berkeley</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium font-body text-ink underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent transition-colors duration-200"
          >
            Learn more about me
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
