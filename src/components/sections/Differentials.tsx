import { Check } from "lucide-react";
import { differentiators } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Differentials() {
  return (
    <MotionSection id="diferenciais" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Excelência"
          title="Por que escolher o Dr. João?"
          text="Uma experiência de alto padrão desde o primeiro contato até o acompanhamento."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-deep/8 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFAF8_100%)] p-6 shadow-[0_18px_55px_rgba(14,37,43,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(14,37,43,0.11)] lg:p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-deep text-champagne ring-1 ring-champagne/22 lg:h-14 lg:w-14">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl leading-tight text-ink lg:mt-7 lg:text-3xl">
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
