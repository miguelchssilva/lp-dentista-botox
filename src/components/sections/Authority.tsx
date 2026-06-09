import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { authorityPoints, site } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";

export function Authority() {
  return (
    <MotionSection id="autoridade" className="bg-ink py-14 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
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
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            Credenciais
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Formação visível. Indicação com responsabilidade.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            O Dr. João Henrique Nagildo une formação acadêmica, atuação clínica
            e planejamento facial individualizado para conduzir tratamentos com
            naturalidade e segurança.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/78"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl border-l border-champagne pl-5 text-sm leading-7 text-white/62">
            Uma abordagem estética segura começa antes do procedimento: começa
            na escuta, na avaliação e na escolha do que realmente faz sentido
            para cada rosto.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
