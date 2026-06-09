import Image from "next/image";
import { results } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Results() {
  return (
    <MotionSection id="resultados" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Resultados"
            title="Resultados discretos, percebidos nos detalhes."
            text="O objetivo não é mudar a sua expressão, mas valorizar o que já existe com planejamento e proporção."
          />
          <p className="text-sm leading-7 text-ink/58 lg:text-right">
            Resultados variam conforme avaliação individual, anatomia, indicação
            e resposta de cada paciente.
          </p>
        </div>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible">
          {results.map((result) => (
            <article
              key={result.label}
              className="min-w-[82%] snap-center overflow-hidden rounded-[1.4rem] border border-deep/10 bg-porcelain sm:min-w-[360px] lg:min-w-0"
            >
              <div className="relative grid aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src={result.image}
                  alt={`${result.title} - imagem ilustrativa de antes e depois`}
                  fill
                  sizes="(min-width: 1024px) 31vw, 82vw"
                  className="object-cover"
                />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/24 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/54">
                  Antes
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-white/78 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/54">
                  Depois
                </div>
                <div className="absolute inset-x-5 bottom-5 border-t border-champagne/40 pt-4">
                  <p className="font-display text-3xl text-white drop-shadow">
                    {result.title}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-ink">
                  {result.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/58">
                  {result.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
