import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-cta transition hover:scale-105 hover:bg-[#1EBE5D] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-petroleum lg:bottom-5 lg:right-5"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
