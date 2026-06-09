import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="bg-porcelain py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experiências"
          title="O que dizem os pacientes"
          text="Relatos sobre uma experiência conduzida com calma, clareza e cuidado."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-deep/8 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm italic leading-7 text-ink/72">
                "{item.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-bone font-semibold text-petroleum">
                  {item.initials}
                </span>
                <span className="text-sm font-semibold text-ink">
                  {item.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
