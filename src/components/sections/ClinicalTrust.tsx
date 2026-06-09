import { trustNotes } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ClinicalTrust() {
  return (
    <MotionSection className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Confiança clínica"
          title="Cuidado percebido em cada detalhe."
          text="A segurança do paciente começa na clareza da avaliação e continua no acompanhamento."
        />
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {trustNotes.map((note) => (
            <article
              key={note.name}
              className="rounded-[1.25rem] border border-deep/8 bg-porcelain/70 p-5"
            >
              <p className="text-base leading-7 text-ink/76">“{note.quote}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-petroleum">
                {note.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
