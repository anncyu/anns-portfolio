import Image from "next/image";

interface CaseHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

export default function CaseHero({
  image,
  imageAlt,
  title,
  subtitle,
}: CaseHeroProps) {
  return (
    <section>
      {/* Banner */}
      <div className="relative w-full aspect-[21/8] md:aspect-[21/7] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      {/* Title block */}
      <div className="container-portfolio pt-14 pb-10 border-b border-border">
        <p className="label-tag text-ink-faint mb-4">{title}</p>
        <h1 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] text-ink leading-tight max-w-3xl">
          {subtitle}
        </h1>
      </div>
    </section>
  );
}
