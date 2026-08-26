import React, { useState } from "react";

// mock de dados - TODO: puxar de uma API depois
const categorias = [
  { id: 1, nome: "Onde Ficar", icone: "🛖" },
  { id: 2, nome: "Comer & Beber", icone: "🍤" },
  { id: 3, nome: "Pé na Areia", icone: "🏖️" },
  { id: 4, nome: "Passeios", icone: "🚤" },
];

const locais = [
  {
    id: 1,
    nome: "Pousada Brisa do Mar",
    local: "Praia de Palmas",
    tag: "Mais amado",
    preco: "R$ 350",
    complemento: "diária",
    imagem:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    avaliacao: "4.9",
    reviews: 128,
  },
  {
    id: 2,
    nome: "Restaurante O Pescador",
    local: "Baía dos Golfinhos",
    tag: "Muito procurado",
    preco: "R$ 120",
    complemento: "p/ pessoa",
    imagem:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    avaliacao: "4.8",
    reviews: 85,
  },
  {
    id: 3,
    nome: "Escuna Pirata Celso Ramos",
    local: "Saída de Calheiros",
    tag: "Ideal p/ família",
    preco: "R$ 80",
    complemento: "ingresso",
    imagem:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    avaliacao: "5.0",
    reviews: 312,
  },
  {
    id: 4,
    nome: "Cabana Rústica Vista Mar",
    local: "Praia da Armação",
    tag: "Novo",
    preco: "R$ 450",
    complemento: "diária",
    imagem:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    avaliacao: "4.9",
    reviews: 24,
  },
];

const faqs = [
  {
    id: 1,
    pergunta: "O site cobra alguma taxa de reserva?",
    resposta:
      "Não! Nós somos um guia para conectar você diretamente aos melhores locais da Costa Esmeralda. Você fecha negócio direto com a pousada ou restaurante.",
  },
  {
    id: 2,
    pergunta: "Sou turista, preciso criar conta?",
    resposta:
      "Você pode navegar livremente, mas criando sua conta grátis você pode salvar seus locais favoritos e montar o roteiro perfeito para a sua viagem.",
  },
  {
    id: 3,
    pergunta: "Tenho um comércio local. Como apareço no guia?",
    resposta:
      "Nós fazemos uma curadoria para manter a qualidade do guia, mas aceitamos novos parceiros! Clique no botão 'Para Lojistas' no topo da página e solicite seu convite.",
  },
];

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(1);
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  const toggleFaq = (index) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-teal-200">
      {/* header principal */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* brand */}
            <div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
              <img
                src="/Logo.png"
                alt="Logo Costa Esmeralda"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
              <span className="text-2xl font-black tracking-tighter text-stone-800">
                Costa<span className="text-teal-700">Esmeralda</span>
              </span>
            </div>

            {/* menu desktop */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <button className="text-sm font-semibold text-stone-600 hover:text-teal-700 transition-colors">
                  Entrar
                </button>
                <button className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md">
                  Criar Conta
                </button>
              </div>

              <div className="w-px h-8 bg-stone-200" />

              <button className="text-sm font-bold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 border border-teal-100">
                🏢 Para Lojistas
              </button>
            </div>

            <button className="md:hidden text-stone-500 text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* banner intro */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Praia ensolarada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-50" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg leading-tight mb-4">
            Sinta a brisa de <br /> Governador Celso Ramos.
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-medium drop-shadow-md mb-10 max-w-2xl mx-auto">
            Fuja das armadilhas para turistas. Encontre as pousadas mais
            charmosas e a autêntica culinária local em um só lugar.
          </p>

          <div className="bg-white p-2 rounded-full shadow-2xl flex items-center max-w-2xl mx-auto border border-stone-100">
            <div className="flex-1 px-4 text-left border-r border-stone-200 cursor-text">
              <p className="text-[10px] font-bold text-stone-800 uppercase tracking-wide">
                Busca
              </p>
              <p className="text-stone-500 text-sm truncate">
                Praias, restaurantes, pousadas...
              </p>
            </div>
            <div className="hidden sm:block flex-1 px-4 text-left cursor-text">
              <p className="text-[10px] font-bold text-stone-800 uppercase tracking-wide">
                Datas
              </p>
              <p className="text-stone-500 text-sm">Quando vai?</p>
            </div>
            <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold h-12 w-12 sm:w-auto sm:px-8 rounded-full transition-all shadow-md flex items-center justify-center gap-2">
              <span className="sm:hidden">🔍</span>
              <span className="hidden sm:block">Buscar</span>
            </button>
          </div>
        </div>
      </section>

      {/* filtros */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-12">
        <div className="flex justify-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm transition-all duration-300 ${
                  categoriaAtiva === cat.id
                    ? "bg-amber-400 text-stone-900 scale-110 shadow-amber-400/40"
                    : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-100 group-hover:scale-105"
                }`}
              >
                {cat.icone}
              </div>
              <span
                className={`text-xs font-bold ${categoriaAtiva === cat.id ? "text-stone-900" : "text-stone-500"}`}
              >
                {cat.nome}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* grid de listings */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 tracking-tight">
            Experiências mais amadas
          </h2>
          <p className="text-stone-500 mt-1 font-medium">
            Os locais que os viajantes não param de elogiar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {locais.map((local) => (
            <div
              key={local.id}
              className="group cursor-pointer flex flex-col gap-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img
                  src={local.imagem}
                  alt={local.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-stone-800 text-[11px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {local.tag}
                  </span>
                </div>
                <button className="absolute top-4 right-4 text-2xl drop-shadow-md hover:scale-125 transition-transform active:scale-95 text-white">
                  ♡
                </button>
              </div>

              <div className="flex justify-between items-start px-2 mt-1">
                <div>
                  <h3 className="font-bold text-stone-900 text-lg leading-tight">
                    {local.nome}
                  </h3>
                  <p className="text-stone-500 text-sm mt-0.5">{local.local}</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-black text-stone-900">
                      {local.preco}
                    </span>
                    <span className="text-stone-400 text-xs font-medium">
                      /{local.complemento}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-sm font-bold text-stone-800">
                    <span className="text-amber-500">★</span>
                    {local.avaliacao}
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">
                    ({local.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* cta lojistas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-amber-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-amber-200/50">
          <div className="md:w-2/3 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-300 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                Comunidade Local
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-4">
              Você tem uma pousada, passeio ou restaurante por aqui?
            </h2>
            <p className="text-stone-700 text-lg mb-8 max-w-xl">
              Junte-se à rede oficial de parceiros do Costa Esmeralda. Mostre o
              seu negócio para milhares de viajantes e receba reservas diretas
              no seu WhatsApp, sem pagar comissões absurdas.
            </p>
            <button className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-1">
              Quero cadastrar meu negócio
            </button>
          </div>

          <div className="md:w-1/3 flex justify-center relative z-10">
            <div className="w-48 h-48 bg-amber-200 rounded-full flex items-center justify-center text-8xl shadow-inner">
              🤝
            </div>
          </div>
        </div>
      </section>

      {/* accordion faq */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-stone-900">
            Como podemos ajudar?
          </h2>
        </div>

        <div className="divide-y divide-stone-200">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left font-bold text-lg text-stone-800 hover:text-teal-700 transition-colors"
              >
                <span>{faq.pergunta}</span>
                <span
                  className={`transform transition-transform duration-300 text-teal-600 text-2xl font-light ${perguntaAberta === index ? "rotate-180" : ""}`}
                >
                  +
                </span>
              </button>
              {perguntaAberta === index && (
                <p className="mt-3 text-stone-600 leading-relaxed pr-8">
                  {faq.resposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="bg-white border-t border-stone-200 py-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/Logo.png"
              alt="Ícone Costa Esmeralda"
              className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <span className="font-black text-stone-900 text-lg tracking-tight">
              Costa Esmeralda
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-stone-500">
            <a href="#" className="hover:text-teal-700 transition-colors">
              Para Viajantes
            </a>
            <a href="#" className="hover:text-teal-700 transition-colors">
              Para Lojistas
            </a>
            <a href="#" className="hover:text-teal-700 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
