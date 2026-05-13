import type { Metadata } from "next";
import Image from "next/image";
import CaseHero from "@/components/CaseHero";
import MetaTable from "@/components/MetaTable";
import TagPill from "@/components/TagPill";
import NextProject from "@/components/NextProject";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Omada Health — Internship 2025",
  description:
    "Driving frictionless program onboarding at Omada Health through A/B testing and competitive analysis.",
};

export default function OmadaHealth() {
  return (
    <>
      <CaseHero
        image="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/699659bba366048d5750fe8b_Omada%20Background.png"
        imageAlt="Omada Health background"
        title="OMADA HEALTH — INTERNSHIP 2025"
        subtitle="Removing Friction, Driving Enrollment"
      />

      {/* Intro */}
      <div className="container-portfolio py-14">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-ink-muted leading-relaxed text-[1.05rem] mb-6">
              During the summer of 2025, I joined Omada Health&apos;s Enrollment
              &amp; Growth team as a Product Grad Intern, working alongside a
              Senior PM to tackle a deceptively simple question: what friction
              stands between an eligible user and their first step in the
              program? Over 3 months, I led two interconnected workstreams — a
              competitive analysis of onboarding flows across the digital health
              landscape and a live A/B test reaching 12,000+ users — that
              together shaped roadmap priorities and produced measurable gains in
              enrollment conversion.
            </p>
            <p
              className="text-sm italic pl-4"
              style={{ borderLeft: "2px solid var(--accent)", color: "var(--ink-faint)" }}
            >
              ⚠️ To comply with confidentiality agreements, specific metrics,
              flows, and internal details have been modified or removed. I
              welcome the opportunity to discuss my contributions further.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="container-portfolio"><div className="h-px bg-border" /></div>

      {/* Project 1: A/B Testing */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            <TagPill label="A/B Testing" />
            <TagPill label="12,000+ Users" />
          </div>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-10">
            Proving One Field Really Matters
          </h2>
        </FadeIn>

        <FadeIn>
          <MetaTable
            items={[
              { label: "My Role", value: "Product Grad Intern" },
              { label: "Stakeholders", value: "PMs / Engineering / Marketing / Sales" },
              { label: "Timeline", value: "3 months" },
              { label: "Tools", value: "Figma / Miro / Amplitude / Tableau" },
            ]}
          />
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-bg-subtle mb-12">
            <video controls preload="metadata" className="w-full rounded-2xl" aria-label="A/B test screen recording">
              <source
                src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376%2F69d84e468eb9d0acf9fc5447_Screen%20Recording%202026-04-09%20at%206.10.22%E2%80%AFPM_mp4.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>

        <div className="max-w-3xl space-y-10">
          <FadeIn>
            <div>
              <h3 className="label-tag text-ink mb-3">The Problem</h3>
              <p className="text-ink-muted leading-relaxed">
                Eligible users were dropping off during onboarding at the access
                code field — an 8-digit code sent via email that required leaving
                the application page. This created roughly a{" "}
                <strong className="text-ink font-semibold">7% drop-off rate</strong>.
                With client demand shifting and competitors removing access codes,
                the question became: Does this field actually impact conversion?
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="label-tag text-ink mb-3">The Test</h3>
              <p className="text-ink-muted leading-relaxed mb-6">
                Designed and executed an A/B test across{" "}
                <strong className="text-ink font-semibold">12,000+ users</strong> with
                two treatment arms and one control group.
              </p>
              <div className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image
                  src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/69d84a1f0d5517bcffa72c2b_Treatment%20Groups.png"
                  alt="Treatment groups diagram"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl px-8 py-6 border border-border" style={{ background: "var(--accent-light)" }}>
              <h3 className="label-tag mb-3" style={{ color: "var(--accent)" }}>The Result</h3>
              <p className="text-ink-muted leading-relaxed">
                Removing the access code field drove a{" "}
                <strong style={{ color: "var(--accent)" }} className="font-bold text-lg">6.24% lift</strong>{" "}
                in application-to-enrollment submissions. The change was shipped in{" "}
                <strong className="text-ink font-semibold">October 2025</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container-portfolio"><div className="h-px bg-border" /></div>

      {/* Project 2: Competitive Analysis */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            <TagPill label="Competitive Analysis" />
            <TagPill label="12 Platforms" />
          </div>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-10">
            What Competitors Revealed About Application Friction
          </h2>
        </FadeIn>

        <FadeIn>
          <MetaTable
            items={[
              { label: "My Role", value: "Product Grad Intern" },
              { label: "Stakeholders", value: "PMs / Engineering / Marketing / UXD/UXR / Sales" },
              { label: "Timeline", value: "3 months" },
              { label: "Tools", value: "Figma / Miro / LLMs" },
            ]}
          />
        </FadeIn>

        <div className="max-w-3xl space-y-10">
          <FadeIn>
            <div>
              <h3 className="label-tag text-ink mb-3">The Problem</h3>
              <p className="text-ink-muted leading-relaxed">
                Omada hadn&apos;t benchmarked its onboarding against competitors
                in three years. Users arrived motivated but dropped off due to
                confusion around the program&apos;s scope.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="label-tag text-ink mb-3">The Process</h3>
              <p className="text-ink-muted leading-relaxed mb-6">
                First-hand competitive audit across 12 platforms (direct,
                adjacent, and out-of-category competitors) — documented every
                experience screen by screen.
              </p>
              <div className="rounded-2xl overflow-hidden bg-bg-subtle mb-4">
                <Image
                  src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/699e84b928d7357f5959780b_Screenshot%202026-02-24%20at%209.08.57%E2%80%AFPM.png"
                  alt="Competitive analysis screenshot"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image
                  src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/69977c54d9ad7fc84e1a1b1e_Business%20Process%20Roadmap%20Illustrative%20Blue%20Presentation.png"
                  alt="Business process roadmap"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="label-tag text-ink mb-4">The Recommendations</h3>
              <ul className="space-y-5 text-ink-muted">
                {[
                  { title: "Simplify the journey:", body: "Reorder Omada's application flow to front-load eligibility criteria before behavioral questions, and consolidate fields split across panels into a single welcome screen." },
                  { title: "Personalize to build confidence:", body: "Dynamically surface relevant outcomes, peer stats, and condition-specific messaging using inputs users had already provided — modeled after Noom Med and WW." },
                  { title: "Use branding to drive excitement:", body: "Add a lightweight product preview moment post-account creation to close the gap with WW, Noom, and MasterClass." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "var(--accent-light)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    </span>
                    <p>
                      <strong className="text-ink font-semibold">{title}</strong>{" "}{body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl px-8 py-6 border border-border" style={{ background: "var(--accent-light)" }}>
              <h3 className="label-tag mb-3" style={{ color: "var(--accent)" }}>The Result</h3>
              <p className="text-ink-muted leading-relaxed">
                Analysis was presented at internship close, delivering a prioritized
                framework for onboarding improvements organized by level of effort
                and potential impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container-portfolio"><div className="h-px bg-border" /></div>

      {/* Retrospective */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-8 max-w-3xl">
            From Insight to Roadmap, and Where I&apos;d Take It Next
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl text-[1.05rem]">
            This internship reinforced that the most impactful product decisions
            aren&apos;t always the most complex ones. A single form field was
            quietly eroding conversion at scale, and a competitive landscape
            untouched for three years was leaving clear opportunities on the
            table. What unlocked both was pairing strong product instincts with
            rigorous process — controlled experimentation on one side, firsthand
            research on the other. Equally important was learning how to make
            findings land. Building credibility with cross-functional stakeholders
            required grounding every insight in evidence and connecting it clearly
            to business outcomes. Good analysis doesn&apos;t speak for itself —
            it needs to be shaped for the audience it&apos;s meant to move.
          </p>
        </FadeIn>
      </div>

      <NextProject
        icon="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/6779e322afc0ef4f9d289ae5_MD%20FactFarm%20Icon.png"
        iconAlt="MD FactFarm icon"
        label="Check out MDFactFarm Next!"
        href="/mdfactfarm"
      />
    </>
  );
}
