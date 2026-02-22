// components/layouts/Footer.tsx
import Link from "next/link";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CleverLogo } from "@/components/shared/CleverLogo";
import {
  PHONE_DISPLAY, WHATSAPP_NUMBER, ADDRESS,
  HOURS, INSTAGRAM, WA_GENERAL, MAP_2GIS,
} from "@/lib/constants";

export async function Footer() {
  const t  = await getTranslations("pages.footer");
  const tn = await getTranslations("nav");

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">

      {/* Main */}
      <div className="container-clever py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <CleverLogo size="md" />
          </div>
          <p className="text-[14px] text-white/60 leading-relaxed max-w-xs mt-2">
            {t("description")}
          </p>
        </div>

        {/* Catalog */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
            {t("catalog")}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: t("allProducts"),  href: "/catalog" },
              { label: tn("laminate"),    href: "/catalog?category=laminate" },
              { label: tn("porcelain"),   href: "/catalog?category=porcelain" },
              { label: tn("tile"),        href: "/kafel" },
              { label: tn("about"),       href: "/about" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
            {t("contacts")}
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-start gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-clover shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={MAP_2GIS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 text-clover shrink-0" />
                {ADDRESS}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-white/70">
              <Clock className="h-4 w-4 mt-0.5 text-clover shrink-0" />
              {HOURS}
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 text-clover" />
                @clever_atyrau
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-clever flex flex-col sm:flex-row items-center justify-between py-4 gap-2">
          <p className="text-[12px] text-white/30">
            © {year} Clever. {t("rights")} <br />
            CREATED BY → TODAY.DEVELOPMENT
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/40 hover:text-clover transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}