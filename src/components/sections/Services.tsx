import { ArrowUpRight } from "lucide-react";
import { getWhatsappUrl, treatments } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <MotionSection id="servicos" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Especialidades"
          title="Tratamentos com indicação, não com padrão."
          text="Cada procedimento é indicado após avaliação facial, análise clínica e conversa sobre o que você realmente busca."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className="group rounded-[1.25rem] border border-deep/10 bg-porcelain/70 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/66">
                    {treatment.summary}
                  </p>
                </div>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${treatment.title}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-petroleum/18 bg-white text-petroleum transition group-hover:border-petroleum"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 border-t border-deep/10 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-petroleum/80">
                Avaliação individual antes da indicação
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
