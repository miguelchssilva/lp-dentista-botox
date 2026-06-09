import { trustNotes } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ClinicalTrust() {
  return (
    <MotionSection className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Método de cuidado"
          title="O que aumenta a segurança da sua avaliação."
          text="Confiança não vem de prometer mais. Vem de explicar melhor, indicar com critério e acompanhar o que foi planejado."
        />
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {trustNotes.map((note, index) => (
            <article
              key={note.quote}
              className="rounded-[1.25rem] border border-deep/8 bg-porcelain/70 p-5"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-champagne">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink">
                {note.quote}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/66">{note.name}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
