import { FaqSheet } from "@/components/sections/FaqSheet";
import { MotionSection } from "@/components/ui/MotionSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <MotionSection className="bg-deep py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
          Próximo passo
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Agende uma avaliação para entender o que faz sentido para o seu rosto.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          Converse pelo WhatsApp e entenda quais tratamentos fazem sentido para
          o seu rosto, seus objetivos e sua rotina.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton variant="light">
            Agendar avaliação pelo WhatsApp
          </WhatsAppButton>
          <FaqSheet
            triggerClassName="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-5 text-sm font-semibold text-white transition hover:bg-white/8"
            triggerLabel="Dúvidas frequentes"
          />
        </div>
        <p className="mt-5 text-sm text-white/58">
          Atendimento com hora marcada em São Leopoldo e Porto Alegre.
        </p>
      </div>
    </MotionSection>
  );
}
