import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="bg-porcelain py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experiências"
          title="O que dizem os pacientes"
          text="Relatos sobre uma experiência conduzida com calma, clareza e cuidado."
          align="center"
        />
        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-14 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-w-[82%] snap-center rounded-[22px] border border-deep/8 bg-white p-6 shadow-[0_18px_55px_rgba(14,37,43,0.06)] sm:min-w-[46%] lg:min-w-0 lg:p-8"
            >
              <div className="flex gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-[15px] italic leading-8 text-ink/72 lg:mt-7 lg:min-h-[170px] lg:text-[16px]">
                "{item.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-deep/8 pt-5 lg:mt-8 lg:pt-6">
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
