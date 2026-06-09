"use client";

import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { faqs, getWhatsappUrl } from "@/lib/site";

type FaqSheetProps = {
  enableGlobalTrigger?: boolean;
  triggerClassName?: string;
  triggerLabel?: string;
};

export function FaqSheet({
  enableGlobalTrigger = false,
  triggerClassName = "",
  triggerLabel = "Dúvidas frequentes"
}: FaqSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    if (!enableGlobalTrigger) {
      return;
    }
    const open = () => setIsOpen(true);
    window.addEventListener("open-faq", open);
    return () => window.removeEventListener("open-faq", open);
  }, [enableGlobalTrigger]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>
      {isOpen ? (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Fechar dúvidas frequentes"
            className="absolute inset-0 bg-ink/46 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />
          <section className="absolute inset-x-0 bottom-0 max-h-[86svh] overflow-hidden rounded-t-[1.6rem] bg-porcelain shadow-soft sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-h-[78vh] sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.4rem]">
            <div className="flex items-center justify-between border-b border-deep/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
                  FAQ
                </p>
                <h2 className="font-display text-2xl text-ink">
                  Dúvidas frequentes antes da avaliação
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[calc(86svh-88px)] overflow-y-auto px-5 py-3 sm:max-h-[calc(78vh-88px)]">
              {faqs.map((faq, index) => {
                const open = openQuestion === index;
                return (
                  <div key={faq.question} className="border-b border-deep/10 py-3">
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(open ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 text-left font-semibold text-ink"
                      aria-expanded={open}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-petroleum transition ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open ? (
                      <p className="pt-3 text-sm leading-7 text-ink/66">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
              <div className="py-5">
                <p className="text-sm font-semibold text-ink">
                  Ainda tem dúvidas?
                </p>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-deep px-5 text-sm font-semibold text-white shadow-cta transition hover:bg-petroleum"
                >
                  <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                  Conversar pelo WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
