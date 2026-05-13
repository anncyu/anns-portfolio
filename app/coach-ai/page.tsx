import type { Metadata } from "next";
import Image from "next/image";
import CaseHero from "@/components/CaseHero";
import MetaTable from "@/components/MetaTable";
import NextProject from "@/components/NextProject";
import FadeIn from "@/components/FadeIn";
import TagPill from "@/components/TagPill";

export const metadata: Metadata = {
  title: "Coach AI — Redesigning Onboarding",
  description:
    "Redesigning CareerVillage's Coach AI onboarding for a fun, engaging experience that increased user satisfaction by 22%.",
};

interface QuoteCardProps {
  quote: string;
  avatar: string;
  avatarAlt: string;
}

function QuoteCard({ quote, avatar, avatarAlt }: QuoteCardProps) {
  return (
    <div className="rounded-2xl p-6 border border-border flex gap-4 items-start bg-bg-subtle">
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image src={avatar} alt={avatarAlt} width={40} height={40} className="w-full h-full object-cover" unoptimized />
      </div>
      <p className="text-sm text-ink-muted leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default function CoachAI() {
  return (
    <>
      <CaseHero
        image="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676dd1b7df366a17df0a9cbb_CoachAiBackground.png"
        imageAlt="Coach AI background"
        title="CAREERVILLAGE'S COACH AI — MOBILE"
        subtitle="Redesigning Onboarding for AI-Driven Career Guidance"
      />

      {/* Intro */}
      <div className="container-portfolio py-14">
        <FadeIn>
          <p className="text-ink-muted leading-relaxed text-[1.05rem] max-w-3xl">
            Coach, CareerVillage&apos;s AI career advising chatbot, suffers from
            a disjointed onboarding process split into sign-in, survey, and
            chatbot sections. This redesign transformed Coach into a cohesive,
            engaging presence, boosting user satisfaction by{" "}
            <strong className="text-ink font-semibold">22%</strong> as more
            users completed the onboarding process.
          </p>
        </FadeIn>
        <FadeIn>
          <MetaTable
            items={[
              { label: "My Role", value: "UX Designer" },
              { label: "The Team", value: "Xingchen Cao / Cody Mak / Wendi Zheng" },
              { label: "Timeline", value: "5 weeks" },
              { label: "Tools", value: "Figma / Google Drive / Slack" },
            ]}
          />
        </FadeIn>
      </div>

      {/* The Problem */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-4">
            <TagPill label="Client Project" />
            <TagPill label="Mobile Onboarding" />
          </div>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            3.5% Conversion Rate: Overhauling Coach AI&apos;s Disjointed Onboarding Process
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            In 2024, Coach launched an AI chatbot designed to deliver personalized
            career guidance based on user preferences from onboarding. However,
            the current onboarding process was underperforming, with a dismal{" "}
            <strong className="text-ink font-semibold">3.5% conversion rate</strong>.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676ee759fd61aac6015b710b_CareerVillageChatbotBefore.png", alt: "Coach AI chatbot before" },
              { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676ee759d62ea7c6d0950688_CareerVillageSurveyBefore.png", alt: "Coach AI survey before" },
            ].map(({ src, alt }) => (
              <div key={alt} className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image src={src} alt={alt} width={600} height={900} className="w-full h-auto" unoptimized />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* The Goal */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Revitalizing Coach&apos;s Onboarding for a Fun, Engaging Experience
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-8">
            The goal is to revitalize Coach&apos;s onboarding experience, making
            it more fun, engaging, and user-friendly. This includes streamlining
            and unifying the three disjointed sections into a seamless, cohesive
            flow. Our constraints included WCAG 2.0 AA color compliance and
            maintaining the original survey question wording.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Increase conversion rate of 3.5%", "Increase user satisfaction", "Increase user completion"].map((g) => (
              <span key={g} className="pill">{g}</span>
            ))}
          </div>
          <div className="max-w-3xl rounded-2xl px-8 py-6 border border-border bg-bg-subtle">
            <p className="label-tag text-ink-faint mb-3">HMW Question</p>
            <p className="text-ink leading-relaxed font-medium">
              &ldquo;How might we make Coach AI fun and engaging to cater towards
              career professionals, pivoters, and students to support their
              professional development?&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Research */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Uncovering Pain Points: Insights from Comparative Analysis &amp; User Interviews
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            We conducted a comparative analysis of onboarding processes from
            leading platforms like Duolingo, Stoic, Grammarly, Wysa, and Handshake.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {[
              { platform: "Duolingo", insight: "Inspired the use of a character/persona", img: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676ef124d62ea7c6d09d7d67_Duolingo.png", alt: "Duolingo onboarding" },
              { platform: "Wysa", insight: "Concise, highly engaging chatbot messages", img: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676ef12b7fb6aeb4ce245ae8_Wysa.png", alt: "Wysa onboarding" },
              { platform: "Stoic", insight: "Personalized loading page", img: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676ef12ec33fbdd3a9447fc1_Stoic.png", alt: "Stoic onboarding" },
            ].map(({ platform, insight, img, alt }) => (
              <div key={platform} className="rounded-2xl overflow-hidden border border-border">
                <div className="bg-bg-subtle aspect-[4/5] overflow-hidden">
                  <Image src={img} alt={alt} width={400} height={500} className="w-full h-full object-cover" unoptimized />
                </div>
                <div className="p-4">
                  <p className="label-tag text-ink mb-1">{platform}</p>
                  <p className="text-sm text-ink-muted">{insight}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <p className="label-tag text-ink-faint mb-5">User Interview Insights</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuoteCard quote="The survey sliders were challenging to use and frustrating to interact with." avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f15698108263f225eabc5_v4_avatar-162.webp" avatarAlt="User 1" />
            <QuoteCard quote="The onboarding process felt unnecessarily lengthy and drawn out." avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f15a10730ffbc934a540e_v4_avatar-24.webp" avatarAlt="User 2" />
            <QuoteCard quote="I'm curious about what sets Coach AI apart from other generative AI platforms like ChatGPT." avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f15696c4f59b9bfd29e4c_v4_avatar-143.webp" avatarAlt="User 3" />
          </div>
        </FadeIn>
      </div>

      {/* Process Flow */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Restructuring Onboarding: Survey First, Chatbot Last for Better Engagement
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            We kept the overall user flow the same but shifted the chatbot to the
            end of the onboarding process. Based on user feedback, we decided to
            prioritize the survey at the start to better engage users, while still
            giving them a preview of the chatbot&apos;s functionality later on.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl overflow-hidden bg-bg-subtle">
            <Image src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f0110a45a5247bf236176_CoachAIProcessFlow.png" alt="Coach AI process flow" width={1200} height={700} className="w-full h-auto" unoptimized />
          </div>
        </FadeIn>
      </div>

      {/* Prototype Iterations */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Streamlining Onboarding: Rapid Wireframing for a Fresher Approach
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            For the lo-fi wireframes, we began by sectioning off the onboarding
            process flow. Given the tight timeline, we jumped straight into
            wireframing and brainstorming new approaches.
          </p>
        </FadeIn>
        <div className="space-y-10">
          {[
            { label: "Character Iteration", src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f041c55099d6b231b2962_Character%20Iteration.png", alt: "Character iteration wireframes", note: "" },
            { label: "Survey Scale Iteration", src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/67b581101a431339b0106457_Survery%20Iteration.png", alt: "Survey scale iterations", note: "The original survey scale was challenging to interact with, so we created several iterations to make it more fun and compelling." },
            { label: "Chatbot Iteration", src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f05ecbfe6696ca92bffb8_Chatbot%20Iteration.png", alt: "Chatbot iterations", note: "We shortened the chatbot to align with the tutorial, allowing users to familiarize themselves with the tool before completing the onboarding." },
          ].map(({ label, src, alt, note }) => (
            <FadeIn key={label}>
              <p className="label-tag text-ink-faint mb-3">{label}</p>
              {note && <p className="text-sm text-ink-muted max-w-2xl mb-5">{note}</p>}
              <div className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image src={src} alt={alt} width={1200} height={700} className="w-full h-auto" unoptimized />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* The Product */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Coach AI Transformation: Characters, Emojis, Personalization, and Simplified Chatbot Flow
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-10">
            We completely transformed Coach AI&apos;s onboarding process by
            introducing characters to personalize the experience.
          </p>
        </FadeIn>
        <div className="space-y-4">
          {[
            { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/67b62de3c84d931a1ebd189f_CoachAItop3designs.png", alt: "Coach AI top 3 designs" },
            { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/67b65b6398569280cc7d3942_Before%20vs.%20After%20Survey%20Flow.png", alt: "Before vs after survey flow" },
            { src: "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/67b65cbb3e9e6eede1f625c8_Before%20vs.%20After%20Chatbot%20Flow.png", alt: "Before vs after chatbot flow" },
          ].map(({ src, alt }) => (
            <FadeIn key={alt}>
              <div className="rounded-2xl overflow-hidden bg-bg-subtle">
                <Image src={src} alt={alt} width={1200} height={700} className="w-full h-auto" unoptimized />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Usability Testing */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-ink mb-6">
            Ensuring Universal Appeal: Testing Coach AI&apos;s Character and Survey with Adult Users
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-8">
            We interviewed adults (ages 20–40) in the workforce or pursuing
            Master&apos;s/PhD programs. Key insights: users appreciated the
            character for giving the AI a distinct personality, but were unclear
            about the purpose of the survey.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuoteCard quote="I enjoyed the survey, but I'm curious how Coach uses my answers to personalize the onboarding process." avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676efa68d81441d305b50a44_v4_avatar-27.webp" avatarAlt="User 1" />
            <QuoteCard quote="I really liked the emoji scales in the survey because they made me want to answer the questions." avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f1522658b0cbe5e7ce756_v4_avatar-118.webp" avatarAlt="User 2" />
            <QuoteCard quote="I liked the bear; it made the AI feel personal and gave it a real personality, not just 'nothingness technology.'" avatar="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f14a426faba4ab3fa0d08_v4_avatar-129.webp" avatarAlt="User 3" />
          </div>
        </FadeIn>
      </div>

      {/* Impact */}
      <div className="container-portfolio py-16 border-t border-border">
        <FadeIn>
          <div className="flex items-end gap-4 mb-6">
            <p className="font-display font-black text-[5rem] md:text-[7rem] leading-none" style={{ color: "var(--accent)" }}>
              22%
            </p>
            <p className="text-ink-muted mb-2 text-lg font-medium leading-snug max-w-xs">
              increase in user satisfaction
            </p>
          </div>
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.4rem)] text-ink mb-6 max-w-3xl">
            User Satisfaction Increased by 22%: Client to Launch Redesigned Onboarding in Q2 2025
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-3xl mb-8">
            Based on participant interviews and testing, we increased user
            satisfaction rate by 22%, as users expressed more willingness to
            complete the onboarding process with our redesign. The client plans to
            ship the product in Q2 2025 after reviewing the prototype with her
            team and executive leadership.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mb-10">
            <div className="rounded-2xl p-6 border border-border bg-bg-subtle">
              <p className="label-tag text-ink mb-3">Challenges</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Working with our client was a great experience, though we faced
                challenges balancing scope and timeline to create a fun, engaging
                onboarding design. Incorporating a persona without overshadowing the
                survey was tricky, and designing a measurable survey scale required
                careful adjustments.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-border bg-bg-subtle">
              <p className="label-tag text-ink mb-3">If We Had More Time</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                We would add more actions and emotional states to the character,
                include a message before the survey to clarify its purpose and
                benefits, and conduct further user testing for consistency.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl overflow-hidden">
            <Image src="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/676f171726faba4ab3fc0b87_IMG_8201.jpg" alt="Team photo" width={1200} height={800} className="w-full h-auto max-h-[500px] object-cover" unoptimized />
          </div>
        </FadeIn>
      </div>

      <NextProject
        icon="https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/699e86925cf33d715f8a8ab8_omada%20logo.png"
        iconAlt="Omada Health icon"
        label="Check out OMADA Next!"
        href="/omada-health"
      />
    </>
  );
}
