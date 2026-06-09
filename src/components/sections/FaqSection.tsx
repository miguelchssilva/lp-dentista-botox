"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <MotionSection id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title="O que os pacientes mais perguntam"
          align="center"
        />
        <div className="mt-10 divide-y divide-deep/10 border-y border-deep/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <article key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-ink"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-petroleum transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <p className="pt-3 text-sm leading-7 text-ink/64">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
