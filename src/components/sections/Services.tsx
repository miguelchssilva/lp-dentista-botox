"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getWhatsappUrl, treatments } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <MotionSection id="servicos" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Tratamentos para realçar seus traços com naturalidade."
          text="Cada indicação depende de uma avaliação individual, respeitando proporções, objetivos e limites clínicos."
        />
        <div className="mt-8 divide-y divide-deep/10 border-y border-deep/10">
          {treatments.map((treatment, index) => {
            const isOpen = open === index;
            return (
              <article key={treatment.title} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="block font-display text-2xl text-ink">
                      {treatment.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-ink/62">
                      {treatment.summary}
                    </span>
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-porcelain text-petroleum">
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                {isOpen ? (
                  <div className="max-w-2xl pt-4">
                    <p className="text-sm leading-7 text-ink/68">
                      {treatment.detail}
                    </p>
                    <a
                      href={getWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-petroleum/20 px-4 text-xs font-bold uppercase tracking-[0.12em] text-petroleum transition hover:bg-porcelain"
                    >
                      Conversar sobre este tratamento
                    </a>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
