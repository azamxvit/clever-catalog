import { getTranslations } from "next-intl/server";
import { ArrowDown } from "lucide-react";

export async function HeroBanner() {
  const t = await getTranslations("home");

  return (
    <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-cream px-4 py-20 dark:bg-navy-dark sm:px-6 lg:px-8">
      
      <div 
        className="absolute -top-24 right-1/4 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/10 blur-[100px] dark:bg-gold/5" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 left-1/4 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-clover/10 blur-[100px] dark:bg-clover/5" 
        aria-hidden="true" 
      />

      {/* Основной контент */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Бейдж над заголовком */}
        <span className="mb-6 rounded-full border border-navy/10 bg-white/50 px-4 py-1.5 text-sm font-medium tracking-widest text-navy backdrop-blur-sm dark:border-white/10 dark:bg-navy/50 dark:text-cream">
          {t("hero.badge", { default: "Атырау • Прямые поставки" })}
        </span>

        {/* Заголовок (Cormorant Garamond) */}
        <h1 className="font-display text-5xl font-semibold leading-tight text-navy dark:text-cream sm:text-6xl lg:text-7xl">
          {t("hero.title", { default: "Идеальный пол для вашего дома" })}
        </h1>

        {/* Описание (Inter) */}
        <p className="mt-6 max-w-2xl text-lg text-text-muted dark:text-stone sm:text-xl">
          {t("hero.description", { default: "Премиальный ламинат и керамогранит в наличии. Выберите дизайн онлайн и узнайте цену напрямую у менеджера." })}
        </p>

        {/* CTA Кнопка */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href="#catalog"
            className="hover-scale inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-medium text-white shadow-card transition-colors hover:bg-navy-light dark:bg-clover dark:hover:bg-clover-light"
          >
            {t("hero.cta", { default: "Смотреть каталог" })}
          </a>
        </div>
      </div>

      {/* Иконка скролла вниз */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-navy/40 dark:text-white/40">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
}