"use client";

import { FormEvent } from "react";
import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import { getWhatsappUrl, site } from "@/lib/site";
import { MotionSection } from "@/components/ui/MotionSection";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const treatment = String(form.get("treatment") || "");
    const message = String(form.get("message") || "");
    const text = [
      "Olá, Dr. João. Gostaria de agendar uma avaliação.",
      name ? `Nome: ${name}` : "",
      phone ? `WhatsApp: ${phone}` : "",
      treatment ? `Interesse: ${treatment}` : "",
      message ? `Mensagem: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <MotionSection id="agendamento" className="bg-deep py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] bg-white p-7 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-champagne">
            Dê o primeiro passo
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[1.04] text-ink sm:text-6xl">
            Agende sua avaliação
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-ink/62">
            Preencha os dados e clique para iniciar o atendimento pelo WhatsApp.
            A confirmação do horário é feita pelo contato direto.
          </p>

          <div className="mt-9 space-y-5">
            <label className="block text-sm font-semibold text-ink">
              Nome completo
              <input
                name="name"
                required
                placeholder="Seu nome"
                className="mt-2 h-14 w-full rounded-2xl border border-deep/10 bg-porcelain px-5 text-sm outline-none transition focus:border-champagne focus:bg-white"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              WhatsApp
              <input
                name="phone"
                required
                placeholder="(51) 99999-9999"
                className="mt-2 h-14 w-full rounded-2xl border border-deep/10 bg-porcelain px-5 text-sm outline-none transition focus:border-champagne focus:bg-white"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Procedimento de interesse
              <select
                name="treatment"
                className="mt-2 h-14 w-full rounded-2xl border border-deep/10 bg-porcelain px-5 text-sm outline-none transition focus:border-champagne focus:bg-white"
              >
                <option>Harmonização Orofacial</option>
                <option>Botox</option>
                <option>Peeling Químico</option>
                <option>Odontologia Estética</option>
                <option>Outros / Não tenho certeza</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-ink">
              Mensagem
              <textarea
                name="message"
                placeholder="Conte brevemente o que você procura"
                className="mt-2 min-h-32 w-full rounded-2xl border border-deep/10 bg-porcelain px-5 py-4 text-sm outline-none transition focus:border-champagne focus:bg-white"
              />
            </label>
          </div>
          <button className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-champagne px-6 text-sm font-bold text-white shadow-[0_18px_45px_rgba(199,167,122,0.30)] transition hover:bg-[#B69565]">
            Enviar para WhatsApp
          </button>
        </form>

        <div className="text-white">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-champagne">
            Atendimento
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[1.04] sm:text-6xl">
            Uma avaliação cuidadosa começa em uma conversa simples.
          </h2>
          <div className="mt-10 grid gap-4 text-sm text-white/72 sm:grid-cols-2">
            <p className="flex gap-3 rounded-[18px] border border-white/10 bg-white/[0.05] p-5">
              <MapPin className="h-5 w-5 shrink-0 text-champagne" />
              Rio Grande do Sul, RS. Atendimento com hora marcada.
            </p>
            <p className="flex gap-3 rounded-[18px] border border-white/10 bg-white/[0.05] p-5">
              <Clock className="h-5 w-5 shrink-0 text-champagne" />
              Segunda a sexta, das 08:00 às 18:00.
            </p>
            <p className="flex gap-3 rounded-[18px] border border-white/10 bg-white/[0.05] p-5">
              <MessageCircle className="h-5 w-5 shrink-0 text-champagne" />
              +55 51 9439-5273
            </p>
            <p className="flex gap-3 rounded-[18px] border border-white/10 bg-white/[0.05] p-5">
              <Instagram className="h-5 w-5 shrink-0 text-champagne" />
              {site.instagramHandle}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.06] shadow-[0_30px_90px_rgba(0,0,0,0.20)]">
            <iframe
              title="Mapa de São Leopoldo, RS"
              src="https://www.google.com/maps?q=S%C3%A3o%20Leopoldo%20RS&output=embed"
              loading="lazy"
              className="h-[300px] w-full border-0 grayscale-[20%]"
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-white/58">
            A localização exata é confirmada no agendamento, preservando tempo
            para escuta, análise facial e planejamento antes de qualquer
            procedimento.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
