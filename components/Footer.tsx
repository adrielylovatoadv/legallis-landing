export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg text-[#C9A84C] tracking-widest font-semibold">
          LEGARIUM
        </span>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Legarium · Software Jurídico & Financeiro
        </p>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/privacidade" className="hover:text-gray-400 transition-colors">Privacidade</a>
          <a href="/termos" className="hover:text-gray-400 transition-colors">Termos</a>
          <a href="/contato" className="hover:text-gray-400 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
