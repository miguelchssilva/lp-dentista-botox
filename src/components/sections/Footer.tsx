import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { getWhatsappUrl, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deep px-4 py-10 text-sm text-white/62 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl text-white">
              <span className="italic text-champagne">Dr.</span> João Nagildo
            </p>
            <p className="mt-2 max-w-md">
              Harmonização facial com naturalidade e sofisticação.
            </p>
            <p className="mt-1">{site.cro}</p>
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
        <div className="border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
