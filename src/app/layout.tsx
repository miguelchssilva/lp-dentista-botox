import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "Botox São Leopoldo",
    "Harmonização Facial São Leopoldo",
    "Peeling Químico São Leopoldo",
    "Harmonização Orofacial São Leopoldo",
    "Dentista Estético São Leopoldo",
    "Botox Porto Alegre",
    "Harmonização Facial Porto Alegre"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.heroImage,
        width: 1200,
        height: 1500,
        alt: "Dr. João Henrique Nagildo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.heroImage]
  },
  alternates: {
    canonical: site.url
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#285C5A"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
