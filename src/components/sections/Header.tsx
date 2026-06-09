"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWhatsappUrl, site } from "@/lib/site";

const navItems = [
  { label: "Tratamentos", href: "#servicos" },
  { label: "Formação", href: "#autoridade" },
  { label: "Resultados", href: "#resultados" },
  { label: "Processo", href: "#processo" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openFaq = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event("open-faq"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-deep/10 bg-porcelain/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="leading-none"
          aria-label="Ir para o início"
          onClick={() => setIsOpen(false)}
        >
          <span className="block font-display text-lg text-ink">Dr. João</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-petroleum">
            HOF | {site.cro}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <button type="button" onClick={openFaq} className="hover:text-ink">
            Dúvidas
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar avaliação pelo WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep text-white shadow-sm transition active:scale-95 lg:hidden"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
          </Link>
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram do Dr. João"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-petroleum/15 bg-white/70 text-petroleum transition hover:border-instagram hover:text-instagram sm:inline-flex"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <WhatsAppButton className="hidden px-4 lg:inline-flex">
            WhatsApp
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-deep/12 bg-white/70 text-ink lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-deep/10 bg-porcelain px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 text-base font-medium text-ink">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-3 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openFaq}
              className="rounded-2xl px-3 py-3 text-left hover:bg-white"
            >
              Dúvidas frequentes
            </button>
            <div className="pt-2">
              <WhatsAppButton className="w-full">WhatsApp</WhatsAppButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
