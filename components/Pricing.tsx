"use client";

const plans = [
  {
    name: "Básico",
    price: "97",
    period: "/mês · cobrado mensalmente",
    trial: "7 dias grátis · sem cartão de crédito",
    hasTrial: true,
    features: [
      "1 admin + até 2 usuários",
      "Até 100 processos cadastrados",
      "Controle Processual completo",
      "Calculadora Jurídica e de Prazos",
      "Export em PDF",
    ],
    disabled: ["Financeiro, Publicações e Kanban", "Export Word e Excel"],
    cta: "Testar grátis por 7 dias",
    ctaStyle: "outline",
    highlight: false,
  },
  {
    name: "Pro",
    price: "197",
    period: "/mês · cobrado mensalmente",
    trial: "Sem período de teste · cobrança imediata",
    hasTrial: false,
    features: [
      "1 admin + até 6 usuários",
      "Até 400 processos cadastrados",
      "Todos os módulos (Financeiro, Publicações, Kanban)",
      "Calculadora Jurídica e de Prazos",
      "Export PDF, Word e Excel",
      "Suporte por e-mail",
    ],
    disabled: [],
    cta: "Assinar agora",
    ctaStyle: "gold",
    highlight: true,
  },
  {
    name: "Profissional",
    price: "347",
    period: "/mês · cobrado mensalmente",
    trial: "Sem período de teste · cobrança imediata",
    hasTrial: false,
    features: [
      "1 admin + até 20 usuários",
      "Até 3.000 processos cadastrados",
      "Todos os módulos + Indicadores e Auditoria",
      "Export PDF, Word e Excel",
      "Suporte prioritário",
      "Onboarding incluso",
    ],
    disabled: [],
    cta: "Assinar agora",
    ctaStyle: "outline",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Planos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Simples e transparente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border flex flex-col relative ${
                p.highlight
                  ? "bg-[#1E1A0E] border-[#C9A84C]/50"
                  : "bg-[#1A1A1A] border-white/5"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                  MAIS POPULAR
                </div>
              )}

              <p className={`text-xs tracking-widest uppercase mb-4 ${p.highlight ? "text-[#C9A84C]" : "text-gray-500"}`}>
                {p.name}
              </p>

              <div className="mb-1">
                <span className={`text-4xl font-bold ${p.highlight ? "text-[#C9A84C]" : "text-white"}`}>
                  R$ {p.price}
                </span>
              </div>
              <p className="text-gray-500 text-xs mb-2">{p.period}</p>
              <p className={`text-xs mb-8 ${p.hasTrial ? "text-[#C9A84C]" : "text-gray-600"}`}>
                {p.hasTrial ? `✦ ${p.trial}` : p.trial}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.highlight ? "bg-[#C9A84C]" : "bg-[#C9A84C]"}`} />
                    {f}
                  </li>
                ))}
                {p.disabled.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 line-through">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-700" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.hasTrial ? "https://app.legarium.app.br/cadastro/gratis" : "https://app.legarium.app.br/cadastro"}
                className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  p.ctaStyle === "gold"
                    ? "bg-[#C9A84C] hover:bg-[#B8973B] text-black"
                    : "border border-white/15 hover:border-white/30 text-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
