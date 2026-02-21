export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Выберите покрытие",
      desc: "Просмотрите каталог, отфильтруйте по категории и цене, найдите нужный вариант.",
    },
    {
      step: "02",
      title: "Напишите менеджеру",
      desc: "Нажмите «Узнать цену» — откроется WhatsApp с готовым сообщением о товаре.",
    },
    {
      step: "03",
      title: "Получите расчёт",
      desc: "Менеджер уточнит площадь, рассчитает количество упаковок и назовёт итоговую цену.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#052150]/40 mb-3">Процесс</p>
          <h2
            className="text-[38px] sm:text-[48px] font-semibold text-[#052150] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Как это работает
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative p-7 rounded-2xl border border-[#e8e4de] hover:border-[#052150]/15 transition-colors">
              <span
                className="block text-[64px] font-semibold leading-none text-[#052150]/6 mb-4 select-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.step}
              </span>
              <h3
                className="text-[20px] font-semibold text-[#052150] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p className="text-[14px] text-[#052150]/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}