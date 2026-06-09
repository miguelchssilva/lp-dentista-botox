import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { proofPoints, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-deep text-white">
      <Image
        src={site.heroImage}
        alt="Imagem ilustrativa de profissional em clínica estética premium"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,41,47,0.94)_0%,rgba(6,41,47,0.82)_34%,rgba(6,41,47,0.42)_58%,rgba(6,41,47,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.28))]" />

      <div className="relative min-h-screen">
        <div className="flex min-h-screen items-center px-5 pb-12 pt-24 sm:px-8 lg:px-[clamp(3rem,6vw,7rem)] lg:pb-10 lg:pt-24">
          <div className="w-full max-w-[680px]">
            <p className="inline-flex rounded-full border border-white/75 bg-white/8 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Especialista em estética facial
            </p>
            <h1 className="mt-6 font-display text-[3.35rem] leading-[0.92] text-white sm:text-[5rem] lg:text-[3.75rem] xl:text-[4.05rem]">
              Harmonia facial com{" "}
              <span className="italic text-champagne">naturalidade</span> e
              sofisticação.
            </h1>
            <p className="mt-5 max-w-[560px] text-base font-medium leading-8 text-white/82 sm:text-lg">
              Botox, harmonização orofacial e peeling químico com planejamento
              individualizado para realçar sua beleza de forma elegante,
              equilibrada e segura.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton variant="gold" className="min-h-14 px-7">
                Agendar Avaliação
              </WhatsAppButton>
              <a
                href="#servicos"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 px-7 text-sm font-bold text-white transition hover:bg-white/12"
              >
                Conhecer Tratamentos
              </a>
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-white/45 pt-5 text-sm font-medium text-white/86 sm:flex-row sm:flex-wrap sm:gap-x-7">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-champagne" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 max-w-[440px] rounded-[24px] border border-white/32 bg-white/18 p-6 text-white shadow-[0_24px_90px_rgba(0,0,0,0.20)] backdrop-blur-[20px] lg:bottom-10 lg:left-[52%] lg:right-auto">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">
            {site.cro}
          </p>
          <p className="mt-3 font-display text-4xl leading-tight text-white">
            Dr. João Henrique Nagildo
          </p>
          <p className="mt-4 text-sm font-medium leading-7 text-white/84">
            Planejamento facial individualizado, com foco em segurança,
            proporção e resultado natural.
          </p>
        </div>
      </div>
    </section>
  );
}
