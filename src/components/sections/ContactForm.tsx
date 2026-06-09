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
    <MotionSection id="agendamento" className="bg-deep py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-6 shadow-soft sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            Dê o primeiro passo
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink">
            Agende sua avaliação
          </h2>
          <p className="mt-3 text-sm leading-7 text-ink/62">
            Preencha os dados e clique para iniciar o atendimento pelo WhatsApp.
          </p>
          <div className="mt-7 space-y-4">
            <label className="block text-sm font-semibold text-ink">
              Nome completo
              <input
                name="name"
                required
                placeholder="Seu nome"
                className="mt-2 h-12 w-full rounded-lg border border-deep/10 bg-porcelain px-4 text-sm outline-none focus:border-champagne"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              WhatsApp
              <input
                name="phone"
                required
                placeholder="(51) 99999-9999"
                className="mt-2 h-12 w-full rounded-lg border border-deep/10 bg-porcelain px-4 text-sm outline-none focus:border-champagne"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Procedimento de interesse
              <select
                name="treatment"
                className="mt-2 h-12 w-full rounded-lg border border-deep/10 bg-porcelain px-4 text-sm outline-none focus:border-champagne"
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
                className="mt-2 min-h-24 w-full rounded-lg border border-deep/10 bg-porcelain px-4 py-3 text-sm outline-none focus:border-champagne"
              />
            </label>
          </div>
          <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-champagne px-5 text-sm font-bold text-white transition hover:bg-[#B69565]">
            Enviar para WhatsApp
          </button>
        </form>

        <div className="flex flex-col justify-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            Atendimento
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Uma avaliação cuidadosa começa em uma conversa simples.
          </h2>
          <div className="mt-8 space-y-5 text-sm text-white/72">
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 text-champagne" />
              Rio Grande do Sul, RS. Atendimento com hora marcada.
            </p>
            <p className="flex gap-3">
              <Clock className="h-5 w-5 text-champagne" />
              Segunda a sexta, das 08:00 às 18:00.
            </p>
            <p className="flex gap-3">
              <MessageCircle className="h-5 w-5 text-champagne" />
              +55 51 9439-5273
            </p>
            <p className="flex gap-3">
              <Instagram className="h-5 w-5 text-champagne" />
              {site.instagramHandle}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <p className="text-sm leading-7 text-white/68">
              A localização exata é confirmada no agendamento. O foco é
              reservar tempo para escuta, análise facial e planejamento antes
              de qualquer procedimento.
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
