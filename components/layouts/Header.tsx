"use client";

// components/layouts/Header.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { LangSwitcher }  from "@/components/widgets/index";
import { ThemeSwitcher } from "@/components/widgets/index";
import { CleverLogo }    from "@/components/shared/CleverLogo";
import { cn } from "@/lib/utils";
import {
  PHONE_DISPLAY, WHATSAPP_NUMBER, ADDRESS, MAP_2GIS,
} from "@/lib/constants";

export function Header() {
  const t  = useTranslations("nav");
  const tc = useTranslations("common");

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_LINKS = [
    { label: t("catalog"),   href: "/catalog" },
    { label: t("laminate"),  href: "/laminat" },
    { label: t("porcelain"), href: "/ceramogranit" },
    { label: t("tile"),      href: "/kafel" },
    { label: t("about"),     href: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-shadow duration-300 bg-navy",
      scrolled && "shadow-[0_4px_20px_rgba(5,33,80,0.4)]"
    )}>

      {/* Top bar — только desktop */}
      <div className="bg-navy-dark hidden sm:block">
        <div className="container-clever flex items-center justify-between py-1.5">
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors"
          >
            <Phone className="h-3 w-3" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={MAP_2GIS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors"
          >
            <MapPin className="h-3 w-3" />
            {ADDRESS}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-clever flex h-16 items-center justify-between gap-4">

        {/* Логотип */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <CleverLogo size="md" />
        </Link>

        {/* Desktop nav  */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-flex py-1 text-[13px] font-medium tracking-wide text-white/80 hover:text-white transition-colors"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#3a8a3f] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop: LangSwitcher + ThemeSwitcher */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <LangSwitcher />
          <ThemeSwitcher />
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2
                       text-[13px] font-medium text-white hover:bg-white hover:text-[#052150] transition-all duration-200"
          >
            <Phone className="h-3.5 w-3.5" />
            {tc("callUs")}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Меню"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-navy",
        menuOpen ? "max-h-screen border-t border-white/10" : "max-h-0"
      )}>
        <nav className="container-clever flex flex-col py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-4 px-1">
              <LangSwitcher variant="mobile" />
              <div className="h-4 w-px bg-white/15" />
              <ThemeSwitcher variant="mobile" />
            </div>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 mx-3 px-4 py-2.5 rounded-lg bg-white/10 text-white text-[14px]"
            >
              <Phone className="h-4 w-4 text-clover" />
              {PHONE_DISPLAY}
            </a>
            {/* Адрес в мобильном — ссылка на 2GIS */}
            <a
              href={MAP_2GIS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-3 px-4 py-2.5 rounded-lg bg-white/10 text-white text-[14px]"
            >
              <MapPin className="h-4 w-4 text-clover" />
              {ADDRESS}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}