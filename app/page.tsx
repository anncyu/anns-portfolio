import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Ann Yu — Product Manager & Designer",
  description:
    "Former healthcare professional applying systems thinking to Product Management. UC Berkeley grad student.",
};

const projects = [
  {
    label: "Omada Health",
    headline: "Product Management — Driving Frictionless Program Onboarding",
    image:
      "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/69965c85bf25e0f8b31de1cb_Omada%20Health%20Homepage%20Snippet.png",
    imageAlt: "Omada Health project cover",
    tags: ["Product Management", "Onboarding", "Competitive Analysis"],
    href: "/omada-health",
    isGif: false,
  },
  {
    label: "MD FactFarm",
    headline: "Empowering Confident Digital Navigation",
    image:
      "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/683f4d3788e042914c5177e6_MD%20FactFarm%20Homepage.png",
    imageAlt: "MD FactFarm project cover",
    tags: [
      "🏆 Hackathon Winner",
      "Agentic AI",
      "Product Management",
      "Chrome Extension",
    ],
    href: "/mdfactfarm",
    isGif: false,
  },
  {
    label: "Coach AI",
    headline: "Transforming Onboarding to Drive Career Success",
    image:
      "https://cdn.prod.website-files.com/6761f26ded0a1cfff8c53376/683f645be318fa05f74dba5a_Coach%20AI%20Homepage%20(1).gif",
    imageAlt: "Coach AI project cover",
    tags: ["Client Project", "AI Chatbot", "Mobile Onboarding"],
    href: "/coach-ai",
    isGif: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — client component for mouse tracking */}
      <HeroSection />

      {/* Selected Works */}
      <section id="selected-works" className="container-portfolio pb-32">
        <FadeIn>
          <SectionHeader label="Selected Works" showArrow />
        </FadeIn>

        {/* Vertical stacked cards */}
        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              label={project.label}
              headline={project.headline}
              image={project.image}
              imageAlt={project.imageAlt}
              tags={project.tags}
              href={project.href}
              isGif={project.isGif}
            />
          ))}
        </div>
      </section>
    </>
  );
}
