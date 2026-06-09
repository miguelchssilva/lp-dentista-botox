import Image from "next/image";
import { results } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Results() {
  return (
    <MotionSection id="resultados" className="bg-deep py-20 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfólio"
          title="Resultados que respeitam a individualidade."
          text="Imagens ilustrativas para demonstrar direção estética. Resultados variam conforme avaliação, anatomia, indicação e resposta de cada paciente."
          align="center"
          tone="dark"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <article key={result.title} className="group">
              <div className="relative h-[390px] overflow-hidden rounded-[20px] bg-petroleum shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:h-[430px] lg:h-[460px]">
                <Image
                  src={result.image}
                  alt={`${result.title} - imagem ilustrativa`}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/58 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink shadow-sm">
                  {result.title}
                </span>
              </div>
              <div className="px-1 pt-5">
                <h3 className="font-display text-2xl text-white">
                  {result.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/58">
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
