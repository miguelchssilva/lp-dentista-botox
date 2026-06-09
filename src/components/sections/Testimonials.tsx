import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="bg-porcelain py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experiências"
          title="O que dizem os pacientes"
          text="Relatos sobre uma experiência conduzida com calma, clareza e cuidado."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[22px] border border-deep/8 bg-white p-8 shadow-[0_18px_55px_rgba(14,37,43,0.06)]"
            >
              <div className="flex gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-7 min-h-[170px] text-[16px] italic leading-8 text-ink/72">
                "{item.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-deep/8 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-deep font-semibold text-champagne">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-ink/42">
                    {item.procedure}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
