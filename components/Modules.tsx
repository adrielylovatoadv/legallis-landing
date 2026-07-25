const modules = [
  {
    icon: "⚖️",
    title: "Controle Processual",
    desc: "Cadastre e acompanhe todos os processos do escritório. Prazos, audiências, acordos e movimentações em um só lugar.",
    items: ["Cadastro de processos e partes", "Controle de prazos e audiências", "Registro de acordos e valores", "Histórico completo de movimentações"],
  },
  {
    icon: "💼",
    title: "Financeiro",
    desc: "Gerencie honorários, repasses e fluxo de caixa. Saiba exatamente quanto o escritório tem a receber e a pagar.",
    items: ["Controle de honorários por processo", "Repasses entre sócios", "Fluxo de caixa detalhado", "Relatórios financeiros"],
  },
  {
    icon: "🧮",
    title: "Calculadora Jurídica",
    desc: "Calcule correção monetária, juros e valores de acordos com as tabelas oficiais dos tribunais.",
    items: ["Índice TJMG (Tribunal de Justiça de MG)", "Índice TJSP (Tribunal de Justiça de SP)", "Juros simples e compostos", "Exportação dos cálculos"],
  },
  {
    icon: "📅",
    title: "Calculadora de Prazos",
    desc: "Calcule prazos processuais automaticamente considerando feriados e o recesso forense.",
    items: ["Cálculo automático de prazos processuais", "Feriados nacionais e forenses", "Recesso forense (20/dez a 20/jan)", "Exportação em PDF"],
  },
  {
    icon: "📰",
    title: "Publicações",
    desc: "Capture publicações e intimações automaticamente por OAB, direto da fonte oficial do CNJ.",
    items: ["Busca de publicações por OAB", "Vínculo automático a processos", "Marcação de tratada/pendente", "Fonte oficial DJEN/CNJ"],
  },
  {
    icon: "🗂️",
    title: "Kanban",
    desc: "Organize as tarefas do escritório em quadro visual, do planejamento à conclusão.",
    items: ["Quadro A Fazer · Fazendo · Concluído", "Atribuição de responsáveis", "Prazos por tarefa", "Arraste e solte entre colunas"],
  },
];

export default function Modules() {
  return (
    <section id="modulos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-3">Módulos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">
            Tudo que seu escritório precisa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m) => (
            <div
              key={m.title}
              className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all group"
            >
              <div className="text-4xl mb-5">{m.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-[#C9A84C] transition-colors">
                {m.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{m.desc}</p>
              <ul className="space-y-2">
                {m.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
