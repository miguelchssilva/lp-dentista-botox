import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { proofPoints, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-deep pt-[72px] text-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#06292F_0%,#082D33_50%,#0B3840_100%)]" />
      <div className="absolute left-0 top-[72px] hidden h-[calc(100%-72px)] w-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(199,167,122,0.20),transparent_28%)] lg:block" />

      <div className="grid min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative z-10 flex items-center px-5 py-14 sm:px-8 sm:py-20 lg:px-0 lg:py-0">
          <div className="mx-auto w-full max-w-7xl lg:pl-8">
            <div className="max-w-[690px]">
              <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/72">
                Especialista em estética facial
              </p>
              <h1 className="mt-6 font-display text-[3.7rem] leading-[0.9] text-white sm:text-[5.2rem] lg:text-[4.9rem] xl:text-[5rem]">
                Harmonia facial com{" "}
                <span className="italic text-champagne">naturalidade</span> e
                sofisticação.
              </h1>
              <p className="mt-5 max-w-[560px] text-base leading-8 text-white/74 sm:text-lg">
                Botox, harmonização orofacial e peeling químico com planejamento
                individualizado para realçar sua beleza de forma elegante,
                equilibrada e segura.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton variant="gold" className="min-h-14 px-7">
                  Agendar Avaliação
                </WhatsAppButton>
                <a
                  href="#servicos"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/28 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Conhecer Tratamentos
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-5 text-sm text-white/64 sm:flex-row sm:flex-wrap sm:gap-x-7">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-champagne" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[calc(100svh-72px)]">
          <Image
            src={site.heroImage}
            alt="Dr. João Henrique Nagildo em atendimento clínico"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,41,47,0.64)_0%,rgba(6,41,47,0.16)_38%,rgba(6,41,47,0.04)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep/58 to-transparent" />
          <div className="absolute bottom-8 left-6 right-6 max-w-[360px] rounded-[22px] border border-white/14 bg-deep/68 p-5 shadow-soft backdrop-blur-md lg:left-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
              {site.cro}
            </p>
            <p className="mt-2 font-display text-3xl text-white">
              Dr. João Henrique Nagildo
            </p>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Planejamento facial individualizado, com foco em segurança,
              proporção e resultado natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
