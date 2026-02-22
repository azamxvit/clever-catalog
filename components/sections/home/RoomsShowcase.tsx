"use client";

// components/sections/home/RoomsShowcase.tsx
import { useTranslations } from "next-intl";
import { Link } from "@/lib/routing";
import {
  UtensilsCrossed, DoorOpen, Sofa, BedDouble,
  Baby, Warehouse, TreePine, Briefcase,
} from "lucide-react";

const ROOM_KEYS = ["kitchen", "hallway", "living", "bedroom", "kids", "basement", "dacha", "office"] as const;
type RoomKey = (typeof ROOM_KEYS)[number];

const ROOM_ICONS: Record<RoomKey, React.ElementType> = {
  kitchen:  UtensilsCrossed,
  hallway:  DoorOpen,
  living:   Sofa,
  bedroom:  BedDouble,
  kids:     Baby,
  basement: Warehouse,
  dacha:    TreePine,
  office:   Briefcase,
};

export function RoomsShowcase() {
  const t = useTranslations("home.rooms");

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center max-w-[540px] mx-auto mb-14">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-3">
            {t("sectionLabel")}
          </p>
          <h2
            className="text-[38px] sm:text-[48px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {ROOM_KEYS.map((key) => {
            const Icon = ROOM_ICONS[key];
            return (
              <Link
                key={key}
                href={`/catalog?room=${key}`}
                className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-[#e8e4de]
                           hover:border-[#052150]/20 hover:bg-[#052150]/[0.03] transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-[#052150]/6 flex items-center justify-center
                              group-hover:bg-[#052150]/10 group-hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-[#052150]/70" strokeWidth={1.5} />
                </div>
                <span className="text-[13px] font-medium text-[#052150]/75 group-hover:text-[#052150] transition-colors text-center leading-snug">
                  {t(key)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}