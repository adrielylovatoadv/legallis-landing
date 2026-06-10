const features = [
  {
    icon: "⚡",
    title: "Rápido e confiável",
    desc: "Interface ágil que não trava. Acesse de qualquer dispositivo, sem instalação.",
  },
  {
    icon: "🔐",
    title: "Dados seguros",
    desc: "Cada escritório tem seus dados isolados. Acesso por senha com controle de permissões.",
  },
  {
    icon: "📊",
    title: "Visão do escritório",
    desc: "Dashboards de processos, honorários e fluxo de caixa em tempo real.",
  },
  {
    icon: "🤝",
    title: "Multi-usuário",
    desc: "Convide sócios e colaboradores. Cada um acessa só o que precisa.",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Por que o Legallis</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Sistema de gestão para a rotina real<br />da advocacia cível e consumerista
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-[#C9A84C]/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
