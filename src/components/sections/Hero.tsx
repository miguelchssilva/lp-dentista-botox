import Image from "next/image";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { MotionSection } from "@/components/ui/MotionSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-porcelain pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#F7F5F0_0%,#FFFDF8_58%,#EEEAE1_100%)]" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl content-center gap-7 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:px-8 lg:py-16">
        <MotionSection className="order-2 max-w-2xl lg:order-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-champagne">
            Harmonização orofacial em São Leopoldo
          </p>
          <h1 className="font-display text-[3.25rem] leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
            Naturalidade não é parecer diferente.
            <span className="block text-petroleum">É parecer melhor.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">
            Planejamento facial individualizado para valorizar seus traços com
            equilíbrio, segurança e discrição.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton className="w-full sm:w-auto">
              Agendar avaliação
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-deep/12 bg-white/60 px-5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Conhecer tratamentos
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/62">
            <span>Atendimento em São Leopoldo e Porto Alegre.</span>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-petroleum hover:text-instagram"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </MotionSection>

        <MotionSection className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] max-h-[52svh] w-full max-w-[430px] overflow-hidden rounded-[1.75rem] bg-bone shadow-soft sm:max-h-none lg:max-w-[520px]">
            <Image
              src={site.heroImage}
              alt="Retrato profissional do Dr. João Henrique Nagildo"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/78 via-ink/16 to-transparent p-5 text-white">
              <p className="font-display text-2xl">Dr. João Henrique Nagildo</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/76">
                Cirurgião-dentista | {site.cro}
              </p>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
