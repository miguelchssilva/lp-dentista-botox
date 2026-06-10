import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { authorityPoints, site } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Authority() {
  return (
    <MotionSection id="sobre" className="bg-porcelain py-16 sm:py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:px-8">
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[24px] bg-bone shadow-[0_28px_90px_rgba(14,37,43,0.14)] lg:max-w-[560px]">
            <Image
              src={site.profileImage}
              alt="Dr. João Henrique Nagildo"
              fill
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/40 to-transparent" />
          </div>
          <div className="absolute bottom-5 right-5 rounded-[18px] bg-champagne px-5 py-4 text-center text-white shadow-[0_24px_60px_rgba(14,37,43,0.18)] lg:bottom-7 lg:right-7 lg:rounded-[20px] lg:px-7 lg:py-6">
            <p className="font-display text-3xl leading-none lg:text-4xl">CRO</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]">
              RS 31162
            </p>
          </div>
        </div>

        <div className="lg:pl-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-champagne">
            O profissional
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:mt-5 lg:text-[4.7rem]">
            Dr. João Henrique Nagildo
          </h2>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-ink/44">
            {site.cro}
          </p>
          <p className="mt-6 max-w-2xl font-display text-2xl italic leading-[1.35] text-ink/78 lg:mt-8 lg:text-3xl">
            "Minha missão é elevar a autoestima com resultados que valorizam a
            essência, sem exageros ou transformações artificiais."
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-ink/62 lg:mt-7 lg:text-[17px] lg:leading-9">
            A estética facial conduzida pelo Dr. João parte de avaliação,
            embasamento anatômico e planejamento individualizado. O foco é
            indicar apenas o que faz sentido para cada paciente, com clareza,
            segurança e naturalidade.
          </p>
          <div className="mt-9 grid gap-4">
            {authorityPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 text-[15px] font-medium text-ink/70"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-champagne/14 text-champagne">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton variant="gold" className="mt-10 min-h-14 px-8">
            Conversar Comigo
          </WhatsAppButton>
        </div>
      </div>
    </MotionSection>
  );
}
