import type { Metadata } from "next";
import CaseHero from "@/components/CaseHero";
import MetaTable from "@/components/MetaTable";
import TagPill from "@/components/TagPill";
import NextProject from "@/components/NextProject";
import FadeIn from "@/components/FadeIn";
import ScrolisFeatureTabs from "@/components/ScrolisFeatureTabs";
import ScrolisAppTabs from "@/components/ScrolisAppTabs";

export const metadata: Metadata = {
  title: "Scrolis — UC Berkeley MIMS Capstone 2026",
  description:
    "A mobile app that turns your timeline into a bounded, perspective-aware digest — balanced, finite, and free from the algorithm.",
};

export default function Scrolis() {
  return (
    <>
      <CaseHero
        image="/Background - Scrolis.png"
        imageAlt="Scrolis app hero"
        title="SCROLIS — UC BERKELEY MIMS CAPSTONE 2026"
        subtitle="Replacing the infinite scroll with a daily digest worth finishing."
      />

      {/* Intro */}
      <div className="container-portfolio py-14">
        <FadeIn>
          <div className="max-w-3xl mb-10">
            <p className="text-ink-muted leading-relaxed text-[1.05rem]">
              A mobile app that turns your timeline into a bounded,
              perspective-aware digest — balanced, finite, and free from the
              algorithm.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <MetaTable
            items={[
              { label: "My Role", value: "Product Manager" },
              {
                label: "Team",
                value: "5 people (1 Designer, 1 Full-Stack, 2 Data/ML)",
              },
              { label: "Timeline", value: "6 months (January – May 2026)" },
              {
                label: "Tools",
                value:
                  "Figma, React Native, BERTopic/NLP, OpenAI/Claude, X/Reddit APIs",
              },
            ]}
          />
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* A Quick Look */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">A QUICK LOOK</p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-8">
            Scroll less. See more.
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="max-w-3xl space-y-5 text-ink-muted leading-relaxed">
            <p>
              For our MIMS capstone, my team built Scrolis — a mobile app that
              replaces algorithmic doomscrolling with a finite, curated daily
              digest. Each day you get up to five topics pulled from accounts
              you already follow, organized by theme, and enriched with
              perspectives outside your usual bubble. When you reach the end,
              the feed ends. No algorithm pulling you back in.
            </p>
            <p>
              As PM, I led product strategy, user research, and two rounds of
              vibe-coded prototype testing that shaped our core design
              decisions. I also co-authored the PRD and managed scope across a
              team spanning product, design, full-stack, and ML.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* The Problem */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            <TagPill label="User Research" />
            <TagPill label="14 Participants" />
          </div>
          <p className="label-tag text-ink-faint mb-4">THE PROBLEM</p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-8">
            We scroll for hours and feel less informed.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-12">
            Social media platforms are engineered to maximize time-on-platform,
            not informational value. The result is a reinforcing loop:
            algorithmic feeds surface what you already agree with, sessions end
            from exhaustion rather than satisfaction, and users gradually lose
            awareness of how much they aren&apos;t seeing.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 max-w-4xl">
            {[
              {
                stat: "100%",
                desc: "of our interview participants said they stop scrolling from exhaustion — never because they feel finished",
              },
              {
                stat: "14",
                desc: "participants across two rounds of vibe-coded prototype testing",
              },
              {
                stat: "2",
                desc: "core problems: infinite scroll driving overload, and echo chambers narrowing perspective without users noticing",
              },
            ].map(({ stat, desc }) => (
              <div
                key={stat}
                className="rounded-2xl p-8 border border-border bg-bg-subtle"
              >
                <p
                  className="font-display font-black text-[4rem] leading-none mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {stat}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Pull quotes */}
        <FadeIn>
          <div className="max-w-3xl space-y-4 mb-10">
            <blockquote
              className="pl-4 italic text-ink-muted leading-relaxed"
              style={{ borderLeft: "2px solid var(--accent)" }}
            >
              &ldquo;I feel pretty drained after… I wasn&apos;t going in with a
              specific goal. Once I eventually close the app, I feel pretty
              unfulfilled.&rdquo;
            </blockquote>
            <blockquote
              className="pl-4 italic text-ink-muted leading-relaxed"
              style={{ borderLeft: "2px solid var(--accent)" }}
            >
              &ldquo;None of the content I see really disagrees with my core
              beliefs. It tends to just reinforce them.&rdquo;
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-ink-muted leading-relaxed max-w-3xl">
            Screen time apps address how long you scroll. News aggregators
            address what you read. Neither addresses whether you&apos;re getting
            a complete picture. Scrolis was built for that gap.
          </p>
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* The Process */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">THE PROCESS</p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Two rounds of prototype testing before we built anything real.
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            We used vibe-coding as a research methodology — rapidly scaffolding
            lo-fi prototypes to test features in isolation before committing to
            any design direction.
          </p>
        </FadeIn>

        <FadeIn>
          <ol className="max-w-3xl space-y-6">
            {[
              {
                title: "User interviews",
                body: "Seven semi-structured interviews with heavy social media users (22–29), covering overload, echo chamber awareness, and coping strategies.",
              },
              {
                title: "Feature-level testing (Iteration 1)",
                body: "Isolated four features: content validation, echo chamber awareness, topic clustering, and finite digest. Key signal: users want ambient structure, not scores or surveillance.",
              },
              {
                title: "Prototype consolidation (Iteration 2)",
                body: "Collapsed strongest features into two unified prototypes. Insights embedded inside the content experience landed; abstract dashboards on the home screen created confusion before value could land.",
              },
              {
                title: "Final usability testing",
                body: "Six participants across onboarding, home feed, and the three perspective tabs on a single topic.",
              },
            ].map(({ title, body }, i) => (
              <li key={title} className="flex gap-5">
                <span
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold mt-0.5"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-ink-muted leading-relaxed">
                  <strong className="text-ink font-semibold">{title} —</strong>{" "}
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>

      {/* The Final Product */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">THE FINAL PRODUCT</p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            A digest you can actually finish.
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-12">
            Every design decision in Scrolis is downstream of one principle:
            calm as a feature. The home screen opens on a date-anchored digest
            of five curated topics — numbered, scannable, and completable. When
            you&apos;ve read them, the feed ends.
          </p>
        </FadeIn>
        {/* THE APP — three core screens */}
        <FadeIn>
          <p className="label-tag text-ink-faint mb-6">THE APP</p>
          <ScrolisAppTabs />
        </FadeIn>

        {/* THE PERSPECTIVES — feed tabs, flipped layout */}
        <FadeIn>
          <p className="label-tag text-ink-faint mb-6 mt-14">THE PERSPECTIVES</p>
          <ScrolisFeatureTabs />
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* Under the Hood */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">UNDER THE HOOD</p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            How three steps turn your timeline into a balanced digest.
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-12">
            The pipeline runs nightly, pulling from connected X/Twitter and
            Reddit accounts and transforming raw posts into structured,
            LLM-summarized topic clusters.
          </p>
        </FadeIn>

        {/* Diagram 1 — Building "For You" */}
        <FadeIn>
          <p className="label-tag text-ink-faint mb-5">
            Step 1 — Building &ldquo;For You&rdquo;
          </p>
          <div className="flex items-start gap-1.5 sm:gap-2 w-full">
              {/* Node 1 — Your Account */}
              <div
                className="flex-1 min-w-0 rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 border border-border"
                style={{ background: "var(--bg-secondary)" }}
              >
                <p className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.1em] font-semibold text-ink-faint mb-0.5 leading-tight">Your Account</p>
                <p className="font-semibold text-ink text-[0.6rem] sm:text-xs leading-tight">X / Twitter · Reddit</p>
              </div>
              <span className="font-bold text-xs sm:text-sm flex-shrink-0 mt-2" style={{ color: "var(--accent)" }}>→</span>
              {/* Node 2 — Your Feed (accent-light bg + accent border) */}
              <div
                className="flex-1 min-w-0 rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 border"
                style={{ background: "var(--accent-light)", borderColor: "var(--accent)" }}
              >
                <p className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.1em] font-semibold mb-0.5 leading-tight" style={{ color: "var(--accent)" }}>Your Feed</p>
                <p className="font-semibold text-ink text-[0.6rem] sm:text-xs leading-tight">Gathered via API</p>
                <p className="text-[0.5rem] sm:text-[0.6rem] text-ink-faint mt-0.5 leading-tight">≤200 posts/source</p>
              </div>
              <span className="font-bold text-xs sm:text-sm flex-shrink-0 mt-2" style={{ color: "var(--accent)" }}>→</span>
              {/* Node 3 — Topic Clustering */}
              <div
                className="flex-1 min-w-0 rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 border border-border"
                style={{ background: "var(--bg-secondary)" }}
              >
                <p className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.1em] font-semibold text-ink-faint mb-0.5 leading-tight">Topic Clustering</p>
                <p className="font-semibold text-ink text-[0.6rem] sm:text-xs leading-tight">BERTopic</p>
                <p className="text-[0.5rem] sm:text-[0.6rem] text-ink-faint mt-0.5 leading-tight">Top 5 topics</p>
              </div>
              <span className="font-bold text-xs sm:text-sm flex-shrink-0 mt-2" style={{ color: "var(--accent)" }}>→</span>
              {/* Node 4 — LLM Summary */}
              <div
                className="flex-1 min-w-0 rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 border border-border"
                style={{ background: "var(--bg-secondary)" }}
              >
                <p className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.1em] font-semibold text-ink-faint mb-0.5 leading-tight">LLM Summary</p>
                <p className="font-semibold text-ink text-[0.6rem] sm:text-xs leading-tight">OpenAI / Claude</p>
                <p className="text-[0.5rem] sm:text-[0.6rem] text-ink-faint mt-0.5 leading-tight">Headline + take</p>
              </div>
              <span className="font-bold text-xs sm:text-sm flex-shrink-0 mt-2" style={{ color: "var(--accent)" }}>→</span>
              {/* Node 5 — For You tab (solid accent) */}
              <div
                className="flex-1 min-w-0 rounded-lg px-2 py-2 sm:px-3 sm:py-2.5"
                style={{ background: "var(--accent)" }}
              >
                <p className="text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.1em] font-semibold mb-0.5 leading-tight" style={{ color: "rgba(255,255,255,0.65)" }}>TAB · BASELINE</p>
                <p className="font-bold text-white text-[0.6rem] sm:text-xs leading-tight">For You</p>
                <p className="text-[0.5rem] sm:text-[0.6rem] mt-0.5 leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>your feed&apos;s take</p>
              </div>
          </div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-3xl mt-5">
            Posts from your connected accounts are fetched via OAuth, cleaned
            and clustered by BERTopic into the top five topics, then summarized
            by an LLM into a headline and a synthesized &ldquo;take.&rdquo; This
            powers the <strong className="text-ink font-semibold">For You</strong> tab.
          </p>
        </FadeIn>

        {/* Diagram 2 — Breaking the Echo Chamber */}
        <FadeIn>
          <p className="label-tag text-ink-faint mb-5 mt-12">
            Steps 2 &amp; 3 — Breaking the Echo Chamber
          </p>
          <div>
            <div className="flex flex-wrap items-start gap-3">
              {/* Node 1 — For You baseline (solid accent) */}
              <div
                className="rounded-xl px-4 py-3 w-40"
                style={{ background: "var(--accent)" }}
              >
                <p className="label-tag mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>TAB · BASELINE</p>
                <p className="font-bold text-white text-sm">For You</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>topics + keywords</p>
              </div>
              {/* Dashed arrow */}
              <span
                className="font-mono text-sm tracking-widest flex-shrink-0 mt-3"
                style={{ color: "var(--accent)" }}
              >
                - - →
              </span>
              {/* Node 2 — Echo-Breaking (accent border, surface bg) */}
              <div
                className="rounded-xl px-4 py-3 border w-40"
                style={{ borderColor: "var(--accent)", background: "var(--surface)" }}
              >
                <p className="label-tag mb-0.5" style={{ color: "var(--accent)" }}>ECHO-BREAKING</p>
                <p className="font-semibold text-ink text-sm">Search Queries</p>
                <p className="text-xs text-ink-faint mt-0.5">
                  5 stance variants/topic · critical · emotional · neutral…
                </p>
              </div>
              <span className="font-bold text-xl flex-shrink-0 mt-3" style={{ color: "var(--accent)" }}>→</span>
              {/* Node 3 — Diversity Filter */}
              <div
                className="rounded-xl px-4 py-3 border border-border w-40"
                style={{ background: "var(--bg-secondary)" }}
              >
                <p className="label-tag text-ink-faint mb-0.5">DIVERSITY FILTER</p>
                <p className="font-semibold text-ink text-sm">Score &amp; Split</p>
                <p className="text-xs text-ink-faint mt-0.5">
                  relevance + divergence + recency → threshold
                </p>
              </div>
              <span className="font-bold text-xl flex-shrink-0 mt-3" style={{ color: "var(--accent)" }}>→</span>
              {/* Branching output — Wandering ↗ / Uncharted ↘ */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold flex-shrink-0" style={{ color: "var(--accent)" }}>↗</span>
                  <div className="rounded-xl px-4 py-3 w-40" style={{ background: "var(--accent)" }}>
                    <p className="label-tag mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>TAB · ADJACENT</p>
                    <p className="font-bold text-white text-sm">Wandering</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold flex-shrink-0" style={{ color: "var(--accent)" }}>↘</span>
                  <div className="rounded-xl px-4 py-3 w-40" style={{ background: "var(--accent)" }}>
                    <p className="label-tag mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>TAB · OUTSIDE</p>
                    <p className="font-bold text-white text-sm">Uncharted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-3xl mt-5">
            The echo-breaking layer uses the For You topics to generate five
            stance-based search queries per topic — critical, emotional,
            supportive, neutral, and industry-oriented — then fetches posts from
            outside your follow graph. A diversity scorer weighing relevance,
            divergence, and recency splits results: higher-divergence posts go to{" "}
            <strong className="text-ink font-semibold">Uncharted</strong>,
            moderate-divergence to{" "}
            <strong className="text-ink font-semibold">Wandering</strong>, which
            is re-run through Step 1&apos;s clustering and summarization pipeline.
          </p>
        </FadeIn>

        {/* Storage callout */}
        <FadeIn>
          <div
            className="max-w-3xl rounded-2xl px-8 py-6 border border-border mt-10"
            style={{ background: "var(--accent-light)" }}
          >
            <p className="text-ink-muted leading-relaxed">
              <strong className="text-ink font-semibold">Storage:</strong>{" "}
              PostgreSQL handles structured user and auth data. MongoDB stores
              the daily topic digests, historical archives, activity logs, and
              topic preferences — all the dynamic analytical data that powers
              the feed and profile screens.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* What Worked / What Didn't */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">
            USABILITY TESTING — KEY FINDINGS
          </p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-10">
            What landed, and what still needs work.
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-border bg-bg-subtle">
              <h3 className="font-semibold text-ink mb-4">&#10003; What worked</h3>
              <ul className="space-y-3 text-sm text-ink-muted">
                {[
                  "Finite structure felt real — users treated the digest like a checklist",
                  "Uncharted was the standout tab: expanded awareness without feeling pushy",
                  "Participants articulated Scrolis's value unprompted, in their own words",
                  '"We only read, never post" — the onboarding transparency signal built immediate trust',
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span
                      className="flex-shrink-0 font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-border bg-bg-subtle">
              <h3 className="font-semibold text-ink mb-4">&#10007; What didn&apos;t</h3>
              <ul className="space-y-3 text-sm text-ink-muted">
                {[
                  '"Wandering" confused nearly every participant — the label didn\'t communicate a clear promise',
                  "Topic summaries and topic cards repeated the same information twice",
                  "Every outbound link was a potential exit — cross-platform friction disrupted flow",
                  "Streak counter added anxiety for some users in an otherwise calmer experience",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="flex-shrink-0 font-bold text-ink-faint">
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="container-portfolio">
        <div className="h-px bg-border" />
      </div>

      {/* Impact & Retrospective */}
      <div className="container-portfolio py-16">
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">
            IMPACT &amp; RETROSPECTIVE
          </p>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-10">
            What I&apos;d carry forward.
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "On product strategy",
                body: "The hardest calls weren't feature decisions — they were scope decisions. Choosing not to build the analytics dashboard, based on research signal that abstract metrics added friction, was one of the most important things we did.",
              },
              {
                title: "On PM in a research context",
                body: "Vibe-coding as a research method genuinely changed how fast we could move. Putting something interactive in front of users on day two of a sprint — not wireframes, not decks — gave us qualitatively richer signal.",
              },
              {
                title: "On the echo chamber problem",
                body: "Usability testing taught me that the goal isn't to change users' minds — it's to make visible what they're missing. Participants didn't shift positions; they became more aware. That's the right bar for a product like this.",
              },
              {
                title: "What I'd do differently",
                body: "Recruit outside our immediate networks earlier. Every participant shared a similar educational background, which likely suppressed friction points we'd see in the broader Mindful Scroller population.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-border bg-bg-subtle"
              >
                <h4 className="font-semibold text-ink mb-2">{title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <p className="label-tag text-ink-faint mb-4">RESOURCES</p>
          <div className="flex flex-col gap-2 mb-4">
            <a
              href="https://www.youtube.com/shorts/RPoTM7hz8ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Demo
            </a>
            <a
              href="https://www.figma.com/deck/Y8YofT07Vx4qOT9oIMYG7L/Capstone--Final-Presentation?node-id=8-1837&t=aowYifAxkdc7RyCF-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Presentation
            </a>
            <a
              href="https://drive.google.com/file/d/1-ehZiEF4WfiFciPvzPR-CaiVYgb7wy4_H/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Final Report
            </a>
          </div>
          <p className="text-sm italic text-ink-faint">
            Scrolis was considered for the Sarukkai Social Impact Award.
          </p>
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
