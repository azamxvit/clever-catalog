import Link from "next/link";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const PHONE     = "+7 (778) 606-66-11";
const PHONE_RAW = "77786066611";
const WHATSAPP  = "77786066611";
const ADDRESS   = "ТД Anna, Сырым Датова 54, Атырау";
const HOURS     = "Ежедневно: 10:00 – 19:00";
const INSTAGRAM = "https://www.instagram.com/clever_atyrau";
const TWOGIS_LINK = "https://2gis.kz/atyrau/geo/70000001062424144";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* ── Main ── */}
      <div className="container-clever py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none mb-4">
            <span className="font-display text-[28px] font-bold tracking-[0.18em] uppercase">
              Clever<span className="text-clover">✦</span>
            </span>
            <span className="text-[10px] tracking-[0.28em] text-white/40 uppercase font-light mt-0.5">
              Удачные приобретения
            </span>
          </div>
          <p className="text-[14px] text-white/60 leading-relaxed max-w-xs">
            Магазин напольных покрытий в Атырау. Ламинат и керамогранит от ведущих производителей.
          </p>
        </div>

        {/* Catalog */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">Каталог</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "Все товары",      href: "/catalog" },
              { label: "Ламинат",         href: "/catalog?category=laminate" },
              { label: "Керамогранит",    href: "/catalog?category=porcelain" },
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
          <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">Контакты</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-start gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-clover shrink-0" />
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={TWOGIS_LINK}
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

      {/*  Bottom bar  */}
      <div className="border-t border-white/10">
        <div className="container-clever flex flex-col sm:flex-row items-center justify-between py-4 gap-2">
          <p className="text-[12px] text-white/30">
            © {year} Clever. Все права защищены. <br />
            CREATED BY → TODAY.DEVELOPMENT
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
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