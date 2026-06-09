import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { authorityPoints, site } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Authority() {
  return (
    <MotionSection id="sobre" className="bg-porcelain py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-lg bg-bone shadow-soft">
            <Image
              src={site.heroImage}
              alt="Dr. João Henrique Nagildo"
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 rounded-lg bg-champagne px-5 py-4 text-center text-white shadow-soft">
            <p className="text-2xl font-bold leading-none">CRO</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em]">
              RS 31162
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            O profissional
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Dr. João Henrique Nagildo
          </h2>
          <p className="mt-2 text-sm font-semibold text-ink/52">{site.cro}</p>
          <p className="mt-6 max-w-2xl font-display text-2xl italic leading-9 text-ink/78">
            "Minha missão é elevar a autoestima com resultados que valorizam a
            essência, sem exageros ou transformações artificiais."
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/66">
            A estética facial conduzida pelo Dr. João parte de avaliação,
            embasamento anatômico e planejamento individualizado. O foco é
            indicar apenas o que faz sentido para cada paciente, com clareza,
            segurança e naturalidade.
          </p>
          <div className="mt-7 grid gap-3">
            {authorityPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm text-ink/72">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-champagne" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton variant="gold" className="mt-8">
            Conversar Comigo
          </WhatsAppButton>
        </div>
      </div>
    </MotionSection>
  );
}
