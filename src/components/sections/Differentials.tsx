import { Check } from "lucide-react";
import { differentiators } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Differentials() {
  return (
    <MotionSection id="diferenciais" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Excelência"
          title="Por que escolher o Dr. João?"
          text="Uma experiência de alto padrão desde o primeiro contato até o acompanhamento."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-deep/8 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAF8_100%)] p-8 shadow-[0_18px_55px_rgba(14,37,43,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(14,37,43,0.11)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-deep text-champagne ring-1 ring-champagne/22">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-7 font-display text-3xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-ink/62">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
