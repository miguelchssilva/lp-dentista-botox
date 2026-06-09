import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { MotionSection } from "@/components/ui/MotionSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { proofPoints, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-deep pt-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(90deg,#06292F_0%,#082D33_52%,#0E3940_100%)]" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
        <MotionSection className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-semibold text-white/76">
            <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            Especialista em estética facial
          </div>
          <h1 className="mt-6 max-w-[680px] font-display text-[3rem] leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Harmonia facial com{" "}
            <span className="italic text-champagne">naturalidade</span> e
            sofisticação.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
            Botox, harmonização orofacial e peeling químico com planejamento
            individualizado para realçar sua beleza de forma elegante,
            equilibrada e segura.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="gold" className="w-full sm:w-auto">
              Agendar Avaliação
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conhecer Tratamentos
            </a>
          </div>

          <div className="mt-9 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-champagne" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/74 transition hover:text-white"
          >
            <InstagramIcon className="h-4 w-4 text-instagram" />
            {site.instagramHandle}
          </a>
        </MotionSection>

        <MotionSection className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-white/8 shadow-soft ring-1 ring-white/12 sm:min-h-[560px] lg:min-h-[calc(100svh-8rem)] lg:rounded-none lg:ring-0">
          <Image
            src={site.heroImage}
            alt="Dr. João Henrique Nagildo em atendimento clínico"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 92vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/45 via-deep/8 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/14 bg-deep/72 p-4 backdrop-blur sm:left-auto sm:w-[320px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
              {site.cro}
            </p>
            <p className="mt-2 font-display text-2xl text-white">
              Dr. João Henrique Nagildo
            </p>
            <p className="mt-1 text-sm leading-6 text-white/68">
              Planejamento facial individualizado, com foco em segurança,
              proporção e resultado natural.
            </p>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
