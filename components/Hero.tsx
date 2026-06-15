export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 text-xs text-[#C9A84C] mb-8">
          <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
          Sistema de gestão para a rotina real da advocacia cível e consumerista
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
          Gestão completa para{" "}
          <span className="text-[#C9A84C]">seu escritório</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Controle processos, honorários e prazos em um único lugar.
          Automatize o que é repetitivo e foque no que importa: seus clientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.legallis.app.br/cadastro/gratis"
            className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#B8973B] text-black font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Começar grátis — sem cartão
          </a>
          <a
            href="#modulos"
            className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-base transition-colors gap-2"
          >
            Ver como funciona
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          {["Controle processual completo", "Gestão financeira integrada", "Calculadora jurídica", "Multi-usuário por escritório"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
