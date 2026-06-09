import { Check } from "lucide-react";
import { differentiators } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Differentials() {
  return (
    <MotionSection id="diferenciais" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Excelência"
          title="Por que escolher o Dr. João?"
          text="Uma experiência de alto padrão desde o primeiro contato até o acompanhamento."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-deep/8 bg-porcelain/55 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-white">
                <Check className="h-4 w-4" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/64">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
