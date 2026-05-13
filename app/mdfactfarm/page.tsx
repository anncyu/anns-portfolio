import type { Metadata } from "next";
import Image from "next/image";
import CaseHero from "@/components/CaseHero";
import MetaTable from "@/components/MetaTable";
import NextProject from "@/components/NextProject";
import FadeIn from "@/components/FadeIn";
import TagPill from "@/components/TagPill";

export const metadata: Metadata = {
  title: "MD FactFarm — Hackathon Winner",
  description:
    "AI-powered Chrome extension that fact-checks YouTube videos, advancing information literacy.",
};

export default function MDFactFarm() {
  return (
    <>
      <CaseHero
        image="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/679b0ab7f8906e951137758b_MD%20FactFarm_Background%202.png"
        imageAlt="MD FactFarm background"
        title="MD FACTFARM — WEBPAGE"
        subtitle="Advancing Information Literacy in Today's Digital World"
      />

      {/* Intro */}
      <div className="container-portfolio py-14">
        <FadeIn>
          <div className="max-w-3xl space-y-6">
            <p className="text-ink-muted leading-relaxed text-[1.05rem]">
              In a fast-paced digital world, we often consume and share
              information from YouTube, social media, and quick alerts without
              pausing to verify its accuracy. As first place winners, our Chrome
              extension leverages AI to fact-check YouTube videos, helping users
              navigate misinformation and make informed decisions.
            </p>
            <div
              className="rounded-2xl px-6 py-5 border border-border"
              style={{ background: "var(--accent-light)" }}
            >
              <p className="text-sm text-ink leading-relaxed">
                <span className="label-tag mr-2" style={{ color: "var(--accent)" }}>
                  PM Takeaway
                </span>
                As a product manager, my biggest takeaway was personal: this was
                my first time leading cross-functional collaboration with
                engineers and designers under real time pressure. Making fast,
                decisive product decisions while keeping the team aligned taught
                me that clarity and trust are just as important as the idea itself.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <MetaTable
            items={[
              { label: "My Role", value: "Product Manager & Co-designer" },
              { label: "The Team", value: "A 4-member team of engineers and designers" },
              { label: "Timeline", value: "36 hours" },
              { label: "Tools", value: "Figma / GitHub / Python / HTML" },
            ]}
          />
        </FadeIn>
      </div>

      {/* The Problem */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            <TagPill label="🏆 Hackathon Winner" />
            <TagPill label="Agentic AI" />
          </div>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-10">
            The Pen is Mightier Than the Sword
          </h2>
        </FadeIn>

        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-2xl">
            {[
              {
                stat: "48%",
                desc: "of young people see misleading content every day",
                cite: "(UK Safer Internet Cafe, 2021)",
              },
              {
                stat: "15%",
                desc: "of the most habitual news sharers were responsible for spreading 30–40% of fake news",
                cite: "(Ceylan, Anderson & Wood, 2022)",
              },
            ].map(({ stat, desc, cite }) => (
              <div key={stat} className="rounded-2xl p-8 border border-border bg-bg-subtle">
                <p
                  className="font-display font-black text-[4rem] leading-none mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {stat}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {desc}{" "}
                  <span className="text-ink-faint">{cite}</span>
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div
            className="max-w-3xl rounded-2xl px-8 py-6 border border-border"
            style={{ background: "var(--accent-light)" }}
          >
            <p className="label-tag text-ink-faint mb-3">HMW Question</p>
            <p className="text-ink leading-relaxed font-medium">
              &ldquo;How might we combat misinformation and promote truth in
              digital spaces to foster a more informed society?&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>

      {/* The Prompt */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Defining the AI Agent: Confidence Metrics &amp; Information Extraction
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            We provided the Fact Checker AI Agent with a clear prompt, defining
            its role, task, inputs, confidence intervals, and the methodology for
            calculating the confidence score. The AI calculates the score by
            assigning a binary confidence rating to each identified pain point,
            then averaging these scores to determine the overall confidence.
            Lastly, the AI evaluates accuracy and verifies sources by compiling a
            structured table mapping each claim to corresponding references.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-bg-subtle">
            <Image
              src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/67acea072d768c5e18930c4c_Prompt_v6.png"
              alt="AI prompt definition"
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </FadeIn>
      </div>

      {/* The Process */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Fetch.ai: Using Agentic AI to Collaborate and Synthesize Insights
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            The MD FactFarm browser extension streamlines data analysis by
            extracting video titles, transcripts, and user comments from a YouTube
            URL via API. Leveraging Fetch.ai&apos;s AI agents, one processes the
            gathered data alongside a user prompt and communicates with the Fact
            Checker AI Agent to efficiently consolidate and verify information.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-bg-subtle">
            <video controls preload="metadata" className="w-full rounded-2xl" aria-label="MD FactFarm process flow">
              <source
                src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376%2F676a21268a438226d6eb5ae3_processflow-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>
      </div>

      {/* The Product */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            MD FactFarm: Honesty Scores and Verified Insights
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            MD FactFarm assigns a color-coded Hippo-Honesty Score to give users
            an at-a-glance reliability rating for any YouTube video. The score is
            paired with a Harvest Summary: a concise AI-generated explanation of
            the rating that surfaces key inaccuracies without overwhelming the user.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/6994db086deb1d5775da03cf_Design%20Choice%20%231.png", alt: "Design choice 1" },
              { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/6994db081d26ff7ef3cf4ccc_Design%20Choice%20%232.png", alt: "Design choice 2" },
            ].map(({ src, alt }) => (
              <div key={alt} className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image src={src} alt={alt} width={600} height={500} className="w-full h-auto" unoptimized />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* The Pitch */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Empowering Critical Thinking Through AI-Driven Fact-Checking
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            Our pitch highlighted the issue of accepting information at face value
            and presented a solution addressing two key pain points:{" "}
            <strong className="text-ink font-semibold">Convenience</strong> — easy
            access to fact-checking via a Chrome extension, and{" "}
            <strong className="text-ink font-semibold">Empowerment</strong> —
            fostering critical thinking for confident navigation of the digital world.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-bg-subtle">
            <video controls preload="metadata" className="w-full rounded-2xl" aria-label="MD FactFarm pitch video">
              <source
                src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376%2F6769dc00d311f3cd70c2eb1d_MD%20FactFarm-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>
      </div>

      {/* Retrospective */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-8 max-w-3xl">
            Overcoming Communication and Scoring Challenges to Deliver Reliable AI Solutions
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            Reflecting on Judging Day, we&apos;re proud to have pitched our
            product and launched it successfully, earning first place in
            Fetch.ai&apos;s sponsorship prize. We tackled significant challenges
            such as refining agent interactions within the constraints of web
            architecture (latency, scalability, data consistency) and determining
            the best approach for calculating confidence scores using binary
            ratings. Given more time, we&apos;d focus on enhancing the precision
            of our scoring methodology.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676a378e8a438226d6f659d3_WhatsApp%20Image%202024-11-06%20at%2012.43.06.jpeg"
              alt="Team photo on judging day"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
              unoptimized
            />
          </div>
        </FadeIn>
      </div>

      <NextProject
        icon="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f5747c1ac0acbdfc6ffb6_CareerVillageCharacter.png"
        iconAlt="Coach AI icon"
        label="Check out Coach AI Next!"
        href="/coach-ai"
      />
    </>
  );
}
