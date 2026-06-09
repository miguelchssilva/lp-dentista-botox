"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-deep/[0.08] bg-white/[0.94] shadow-[0_1px_0_rgba(6,41,47,0.04)] backdrop-blur-2xl">
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[auto_auto] items-center justify-between px-5 sm:px-6 lg:grid-cols-[220px_1fr_220px] lg:px-8">
        <Link
          href="#"
          className="leading-none"
          aria-label="Ir para o início"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-display text-[22px] text-ink">
            <span className="italic text-champagne">Dr.</span> João Nagildo
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/42">
            {site.cro}
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-9 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/68 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <WhatsAppButton variant="gold" className="hidden min-h-11 px-6 lg:inline-flex">
            Agendar Avaliação
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-deep/10 bg-white text-ink lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-deep/8 bg-white px-5 py-5 shadow-soft lg:hidden">
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
            <WhatsAppButton variant="gold" className="mt-3 w-full">
              Agendar Avaliação
            </WhatsAppButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
