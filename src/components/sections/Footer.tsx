import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsappUrl, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-24 pt-8 text-sm text-white/62 sm:px-6 lg:px-8 lg:pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>
            {"©"} {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Botox, Harmonização Facial e Peeling Químico em São Leopoldo.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:border-instagram hover:text-instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-whatsapp transition hover:border-whatsapp"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
