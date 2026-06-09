import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsappUrl } from "@/lib/site";

export function MobileWhatsAppBar() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-deep px-5 text-sm font-semibold text-white shadow-cta lg:hidden"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
      Agendar avaliação pelo WhatsApp
    </a>
  );
}
