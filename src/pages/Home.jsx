import { useState } from "react";
import 'leaflet/dist/leaflet.css';
import CardImovel from "../components/CardImovel";
import Mapa from "../components/Mapa";

function Home({ imoveis }) {
  const [tipoBusca, setTipoBusca] = useState('Todos');
  const [cidadeBusca, setCidadeBusca] = useState('Todos');
  const [bairroBusca, setBairroBusca] = useState('Todos');
  const [valorMaximo, setValorMaximo] = useState('');
  const [viewMode, setViewMode] = useState('split');

  const imoveisFiltrados = imoveis.filter(imovel => {
    const filtroTipo = tipoBusca === 'Todos' || imovel.status === tipoBusca;
    const filtroCidade = cidadeBusca === 'Todos' || imovel.cidade === cidadeBusca;
    const filtroBairro = bairroBusca === 'Todos' || imovel.bairro === bairroBusca;
    const precoNumerico = parseFloat(valorMaximo);
    const filtroPreco = !valorMaximo || imovel.preco <= precoNumerico;
    return filtroTipo && filtroCidade && filtroBairro && filtroPreco;
  });

  return (
    <div className={`flex flex-col ${viewMode === 'split' ? 'h-screen overflow-hidden' : 'min-h-screen bg-gray-100'}`}>
      
      {/* Header */}
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 shrink-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <h1 className="font-bold text-xl text-gray-800 tracking-tight">Mira Imóveis</h1>
        </div>

        {/* Navegação Central */}
        <nav className="hidden md:flex items-center gap-6">
          <button className="text-sm font-bold text-yellow-600 border-b-2 border-yellow-600 px-1">Início</button>
          <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Sobre o Corretor</button>
          <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Anunciar</button>
        </nav>

        <div className="flex items-center gap-4">
          {/* Alternador de Visão (Mapa/Grade) */}
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button onClick={() => setViewMode('split')} className={`px-4 py-1.5 rounded-lg text-xs transition-all ${viewMode === 'split' ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}>Mapa</button>
            <button onClick={() => setViewMode('grid')} className={`px-4 py-1.5 rounded-lg text-xs transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}>Grade</button>
          </div>
          
          <div className="w-10 h-10 bg-gray-200 rounded-full border border-white shadow-sm overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Felix" />
          </div>
        </div>
      </header>

      <main className={`flex ${viewMode === 'split' ? 'flex-1 overflow-hidden' : 'block'}`}>
        <section className={`
          ${viewMode === 'grid' ? 'w-full px-10' : 'w-1/2 h-full overflow-y-auto overscroll-contain'} 
          p-6 transition-all duration-300
        `}>
          {/* Barra de Filtros */}
          <div className="flex flex-wrap gap-3 py-3 mb-4">
            <select className="bg-white border p-2 rounded-lg flex-1 min-w-[120px]" onChange={(e) => setTipoBusca(e.target.value)}>
              <option value="Alugar">Alugar</option>
              <option value="Comprar">Comprar</option>
            </select>
            <select className="bg-white border p-2 rounded-lg flex-1 min-w-[120px]" onChange={(e) => setCidadeBusca(e.target.value)}>
              <option value="Todos">Cidade</option>
              <option value="Mirassol D'Oeste">Mirassol D'Oeste</option>
            </select>
            <select className="bg-white border p-2 rounded-lg flex-1 min-w-[120px]" onChange={(e) => setBairroBusca(e.target.value)}>
              <option value="Todos">Bairro</option>
              <option value="Centro">Centro</option>
              <option value="Jardim">Jardim</option>
            </select>
            <input 
              type="number" 
              placeholder="Valor Máximo" 
              className="bg-white border p-2 rounded-lg flex-1 min-w-[120px]" 
              value={valorMaximo}
              onChange={(e) => setValorMaximo(e.target.value)}
            />
            <button className="bg-gray-800 text-white p-2 rounded-lg px-4 hover:bg-black transition-colors">🔍</button>
          </div>

          {/* Listagem de Imóveis */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-4' : 'grid-cols-2'}`}>
            {imoveisFiltrados.length > 0 ? (
              imoveisFiltrados.map((imovel) => (
                <CardImovel 
                  key={imovel.id}
                  id={imovel.id}
                  {...imovel} 
                />
              ))
            ) : (
              <p className="col-span-full text-center py-20 text-gray-500">Nenhum imóvel encontrado nesses critérios.</p>
            )}
          </div>

          {/* Paginação */}
          <div className="flex justify-center gap-2 py-12">
             {[1,2,3].map(n => <button key={n} className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">{n}</button>)}
          </div>
        </section>

        {/* Mapa - Só aparece no modo Split */}
        {viewMode === 'split' && (
          <section className="w-1/2 bg-gray-200 relative h-full animate-in fade-in slide-in-from-right duration-500">
            <div className="absolute inset-4 bg-white rounded-[2.5rem] shadow-lg overflow-hidden border-4 border-white">
               <Mapa imoveis={imoveisFiltrados}/>
            </div>
          </section>
        )}
      </main>

      {/* SEÇÕES INSTITUCIONAIS - IMPORTANTE: Só renderizam no modo GRADE */}
      {viewMode === 'grid' && (
        <>


          <section className="bg-gray-200 py-20 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-2">Fale Conosco</h2>
              <p className="text-gray-600 mb-12">Sempre estarei disposto a responder dúvidas, receber críticas ou melhorias e ajudá-lo no que precisar!</p>
              
              <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <input type="text" placeholder="Nome" className="p-4 rounded-2xl shadow-sm outline-none" />
                <input type="email" placeholder="Email" className="p-4 rounded-2xl shadow-sm outline-none" />
                <input type="tel" placeholder="Telefone" className="p-4 rounded-2xl shadow-sm outline-none" />
                <textarea placeholder="Sua mensagem..." rows="4" className="p-4 rounded-3xl shadow-sm outline-none md:col-span-3 resize-none"></textarea>
                <button className="md:col-start-3 bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Home;