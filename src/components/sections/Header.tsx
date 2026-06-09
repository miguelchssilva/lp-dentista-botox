"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWhatsappUrl, site } from "@/lib/site";

const navItems = [
  { label: "Tratamentos", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-deep/8 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="leading-none"
          aria-label="Ir para o início"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-display text-lg text-ink">
            <span className="italic text-champagne">Dr.</span> João Nagildo
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/48">
            {site.cro}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-ink/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram do Dr. João"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-deep/10 bg-white text-petroleum transition hover:border-instagram hover:text-instagram sm:inline-flex"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar avaliação pelo WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-whatsapp shadow-sm ring-1 ring-deep/10 transition active:scale-95 lg:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </Link>
          <WhatsAppButton variant="gold" className="hidden px-5 lg:inline-flex">
            Agendar Avaliação
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-deep/10 bg-white text-ink lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-deep/8 bg-white px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 text-base font-medium text-ink">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-3 hover:bg-porcelain"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-[1fr_auto] gap-2 pt-2">
              <WhatsAppButton variant="gold" className="w-full">
                Agendar Avaliação
              </WhatsAppButton>
              <Link
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-12 w-12 place-items-center rounded-full border border-deep/10 text-instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
