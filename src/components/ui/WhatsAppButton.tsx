import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  children?: string;
  className?: string;
  variant?: "primary" | "outline" | "light" | "gold";
};

export function WhatsAppButton({
  children = "Agendar avaliação",
  className = "",
  variant = "primary"
}: WhatsAppButtonProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2";
  const styles = {
    primary: "bg-deep text-white shadow-cta hover:bg-petroleum",
    outline:
      "border border-petroleum/25 bg-white/82 text-ink hover:border-petroleum hover:bg-white",
    light: "bg-white text-deep shadow-cta hover:bg-mist",
    gold: "bg-champagne text-white shadow-cta hover:bg-[#B69565]"
  }[variant];

  return (
    <Link
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
      <span className="leading-none">{children}</span>
      <ArrowRight
        className="h-4 w-4 transition group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
