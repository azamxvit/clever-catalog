import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WA_GENERAL } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <section className="bg-[#f8f5f0] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#052150] min-h-[340px] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1574632652890-aa3b9e78c204?w=1400&q=70"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#052150] via-[#052150]/80 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full px-8 sm:px-12 py-12">
            <div className="max-w-lg">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a96e]/70 mb-3">Почему выбирают нас</p>
              <h2
                className="text-[34px] sm:text-[44px] font-semibold text-white leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Бесплатная консультация и подбор под ваш интерьер
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                Опишите вашу задачу в WhatsApp — менеджер подберёт материал,
                рассчитает количество и скажет точную цену без накруток.
              </p>
            </div>

            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white
                         text-[14px] font-semibold shadow-[0_4px_24px_rgba(37,211,102,0.4)]
                         hover:bg-[#1ebe5d] hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}