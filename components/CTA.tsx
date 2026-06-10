export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-3xl p-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Pronto para organizar<br />seu escritório?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            4 dias grátis, sem cartão de crédito. Comece agora.
          </p>
          <a
            href="/cadastro"
            className="inline-flex items-center bg-[#C9A84C] hover:bg-[#B8973B] text-black font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Criar minha conta grátis
          </a>
        </div>
      </div>
    </section>
  );
}
