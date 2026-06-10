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
    <MotionSection id="servicos" className="bg-porcelain py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Procedimentos com indicação individual."
          text="A decisão estética não começa na aplicação. Começa na avaliação do rosto, da saúde, dos objetivos e dos limites que preservam naturalidade."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {treatments.map((treatment) => {
            const Icon = icons[treatment.icon as keyof typeof icons] ?? Sparkles;

            return (
              <article
                key={treatment.title}
                className="group rounded-[22px] border border-deep/8 bg-white p-6 shadow-[0_18px_55px_rgba(14,37,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(14,37,43,0.12)] lg:min-h-[310px] lg:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-champagne/16 text-champagne ring-1 ring-champagne/20 lg:h-16 lg:w-16">
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                  </span>
                  <a
                    href={getWhatsappUrl(`Olá, Dr. João. Gostaria de saber mais sobre ${treatment.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar sobre ${treatment.title}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-deep/10 text-petroleum opacity-70 transition group-hover:border-champagne group-hover:bg-champagne group-hover:text-white group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-ink lg:mt-8 lg:text-3xl">
                  {treatment.title}
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-ink/62">
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
