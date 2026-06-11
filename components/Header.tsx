"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#C9A84C]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/logo.png" alt="Legallis" width={220} height={66} className="object-contain" priority />

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#funcionalidades" className="hover:text-[#C9A84C] transition-colors">Funcionalidades</a>
          <a href="#modulos" className="hover:text-[#C9A84C] transition-colors">Módulos</a>
          <a href="#planos" className="hover:text-[#C9A84C] transition-colors">Planos</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.legallis.app.br/login" className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
            Entrar
          </a>
          <a href="https://app.legallis.app.br/login" className="text-sm bg-[#C9A84C] hover:bg-[#B8973B] text-black font-semibold px-5 py-2 rounded-lg transition-colors">
            Testar grátis
          </a>
        </div>

        <button
          className="md:hidden text-gray-400"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#141414] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          <a href="#funcionalidades" className="text-gray-400 text-sm">Funcionalidades</a>
          <a href="#modulos" className="text-gray-400 text-sm">Módulos</a>
          <a href="#planos" className="text-gray-400 text-sm">Planos</a>
          <a href="https://app.legallis.app.br/login" className="text-gray-400 text-sm">Entrar</a>
          <a href="https://app.legallis.app.br/login" className="bg-[#C9A84C] text-black text-sm font-semibold px-4 py-2 rounded-lg text-center">
            Testar grátis
          </a>
        </div>
      )}
    </header>
  );
}
