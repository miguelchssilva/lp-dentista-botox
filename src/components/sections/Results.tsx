import Image from "next/image";
import { results } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Results() {
  return (
    <MotionSection id="resultados" className="bg-deep py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfólio"
          title="Resultados que respeitam a individualidade."
          text="Imagens ilustrativas para demonstrar direção estética. Resultados variam conforme avaliação, anatomia, indicação e resposta de cada paciente."
          align="center"
          tone="dark"
        />
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible">
          {results.map((result) => (
            <article
              key={result.title}
              className="min-w-[78%] snap-center overflow-hidden rounded-lg bg-white/8 ring-1 ring-white/10 sm:min-w-[340px] lg:min-w-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-petroleum">
                <Image
                  src={result.image}
                  alt={`${result.title} - imagem ilustrativa`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
                  {result.title}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-white">
                  {result.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/64">
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
