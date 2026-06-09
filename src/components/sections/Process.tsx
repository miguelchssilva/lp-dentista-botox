import { processSteps } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <MotionSection id="processo" className="bg-porcelain py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Consulta"
          title="Uma experiência conduzida com clareza."
          text="Você entende o que será feito, por que está sendo indicado e quais cuidados fazem parte do processo."
        />
        <div className="mt-9 space-y-0 border-l border-deep/12 pl-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative pb-7 last:pb-0">
              <span className="absolute -left-[29px] top-1 grid h-4 w-4 place-items-center rounded-full bg-petroleum ring-4 ring-porcelain" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne">
                0{index + 1}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink">
                {step.title}
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-7 text-ink/66">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
