import {
  ArrowUpRight,
  Diamond,
  Droplets,
  Gem,
  Smile,
  Sparkles,
  Syringe
} from "lucide-react";
import { getWhatsappUrl, treatments } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = {
  spark: Sparkles,
  needle: Syringe,
  drop: Droplets,
  smile: Smile,
  shine: Gem,
  diamond: Diamond
};

export function Services() {
  return (
    <MotionSection id="servicos" className="bg-porcelain py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Procedimentos com indicação individual."
          text="A decisão estética não começa na aplicação. Começa na avaliação do rosto, da saúde, dos objetivos e dos limites que preservam naturalidade."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => {
            const Icon = icons[treatment.icon as keyof typeof icons] ?? Sparkles;

            return (
              <article
                key={treatment.title}
                className="group rounded-lg border border-deep/8 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-champagne/18 text-champagne">
                    <Icon className="h-5 w-5" />
                  </span>
                  <a
                    href={getWhatsappUrl(`Olá, Dr. João. Gostaria de saber mais sobre ${treatment.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar sobre ${treatment.title}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-deep/10 text-petroleum opacity-80 transition group-hover:border-champagne group-hover:bg-champagne group-hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {treatment.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">
                  {treatment.summary}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
