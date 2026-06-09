import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { authorityPoints, site } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Authority() {
  return (
    <MotionSection id="autoridade" className="bg-porcelain py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[310px] overflow-hidden rounded-[1.4rem] bg-bone shadow-soft lg:max-w-[360px]">
          <Image
            src={site.heroImage}
            alt="Dr. João Henrique Nagildo"
            fill
            sizes="(min-width: 1024px) 32vw, 78vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="Formação"
            title="Formação, critério e olhar clínico em cada indicação."
            text="O Dr. João Henrique Nagildo une formação acadêmica sólida, experiência em estética facial e planejamento individualizado para conduzir tratamentos com segurança e naturalidade."
          />
          <div className="mt-8 space-y-4">
            {authorityPoints.map((point) => (
              <div key={point} className="flex gap-3 text-base text-ink/76">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-petroleum" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl border-l border-champagne pl-5 text-sm leading-7 text-ink/64">
            Uma abordagem estética segura começa antes do procedimento: começa
            na escuta, na avaliação e na escolha do que realmente faz sentido
            para cada rosto.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
