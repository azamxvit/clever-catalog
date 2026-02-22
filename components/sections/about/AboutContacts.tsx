"use client";

// src/components/sections/about/AboutContacts.tsx
import { useTranslations } from "next-intl";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WA_GENERAL, PHONE_DISPLAY, ADDRESS, HOURS } from "@/lib/constants";

export function AboutContacts() {
  const t = useTranslations("pages.about.contacts");

  return (
    <section className="bg-[#f8f5f0] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center max-w-[500px] mx-auto mb-14">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-3">
            {t("label")}
          </p>
          <h2 className="text-[38px] sm:text-[46px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Контактные карточки */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: t("phoneLabel"), value: PHONE_DISPLAY, href: `tel:${WHATSAPP_NUMBER}` },
              { icon: MapPin, label: t("addressLabel"), value: ADDRESS, href: "https://2gis.kz/atyrau/geo/70000001062424144" },
              { icon: Clock, label: t("hoursLabel"), value: HOURS, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e8e4de]">
                <div className="w-10 h-10 rounded-xl bg-[#052150]/6 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#052150]/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-wide uppercase text-[#052150]/40 mb-1">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-[15px] font-medium text-[#052150] hover:text-[#3a8a3f] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-[#052150]">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Соцсети */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a href="https://www.instagram.com/clever_atyrau" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#e8e4de] text-[14px] font-medium text-[#052150]/70 hover:text-[#052150] hover:border-[#052150]/20 transition-all">
                <Instagram className="w-4.5 h-4.5" />
                @clever_atyrau
              </a>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-[14px] font-medium text-white hover:bg-[#1ebe5d] transition-colors shadow-[0_2px_12px_rgba(37,211,102,0.3)]">
                <MessageCircle className="w-4.5 h-4.5" />
                Написать в WhatsApp
              </a>
            </div>
          </div>

          {/* Карта (2GIS embed) */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#e8e4de] bg-white relative">
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A47.122639%2C%22lon%22%3A51.866026%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22atyrau%22%7D%2C%22org%22%3A%2270000001062424144%22%7D"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              title="2GIS Map"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}