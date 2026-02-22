// components/ui/CleverLogo.tsx
// Логотип воспроизводит оригинал: CLEVE + клевер позади R

interface CleverLogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { text: "text-[20px]", clover: 14, sub: "text-[8px]" },
  md: { text: "text-[26px]", clover: 18, sub: "text-[9px]" },
  lg: { text: "text-[36px]", clover: 24, sub: "text-[11px]" },
};

export function CleverLogo({ size = "md" }: CleverLogoProps) {
  const s = sizes[size];

  return (
    <div className="flex flex-col leading-none select-none">
      {/* CLEVER с клевером за R */}
      <div className={`relative flex items-baseline font-bold tracking-[0.18em] uppercase text-white ${s.text}`}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

        {/* CLEVE */}
        <span>CLEVE</span>

        {/* R + клевер за ним */}
        <span className="relative inline-block">
          {/* Клевер — позади R через z-index */}
          <CloverSVG size={s.clover} className="absolute -top-[40%] -right-[35%] z-0 opacity-90" />
          {/* Буква R поверх */}
          <span className="relative z-10">R</span>
        </span>
      </div>

      {/* Подпись */}
      <span className={`tracking-[0.28em] text-white/50 uppercase font-light mt-0.5 ${s.sub}`}>
        Удачные приобретения
      </span>
    </div>
  );
}

// ─── SVG клевер ──────────────────────────────────────────────────────────────
function CloverSVG({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* 4 лепестка клевера */}
      <circle cx="12" cy="7"  r="5" fill="#3a8a3f" />
      <circle cx="12" cy="17" r="5" fill="#3a8a3f" />
      <circle cx="7"  cy="12" r="5" fill="#3a8a3f" />
      <circle cx="17" cy="12" r="5" fill="#3a8a3f" />
      {/* Центр */}
      <circle cx="12" cy="12" r="3.5" fill="#4daa54" />
      {/* Стебель */}
      <rect x="11.2" y="19" width="1.6" height="4" rx="0.8" fill="#3a8a3f" />
    </svg>
  );
}