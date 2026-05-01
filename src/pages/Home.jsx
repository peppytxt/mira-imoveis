
import { useState } from "react";
import 'leaflet/dist/leaflet.css';
import CardImovel from "../components/CardImovel";
import Mapa from "../components/Mapa";

function Home({ imoveis }) {
  
    const [tipoBusca,setTipoBusca] = useState('Todos');
    const [cidadeBusca, setCidadeBusca] = useState('Todos')
  
    const [viewMode, setViewMode] = useState('split');

    const imoveisFiltrados = imoveis.filter(imovel => {
    const filtroTipo = tipoBusca === 'Todos' || imovel.status === tipoBusca;
    const filtroCidade = cidadeBusca === 'Todos' || imovel.cidade === cidadeBusca;

    return filtroTipo && filtroCidade;
  })

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header (Topo) */}
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div> {/* Logo temporário */}
          <h1 className="font-bold text-xl">Mira Imóveis</h1>
        </div>

        {/* Botões entre Casas e Lotes */}
        <div className="bg-gray-200 p-1 rounded-full flex gap-1">
          <button className="bg-white px-6 py-1 rounded-full shadow-sm font-medium">Casas</button>
          <button className="px-6 py-1 rounded-full text-gray-600">Lotes</button>
        </div>

        <div className="flex itens-center gap-4">
          <span className="font-medium text-gray-700">Usuário</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="avatar" />
          </div>
        </div>
      </header>

      {/* Alternância entre Grade ou com o Mapa */}
      <div className="flex justify-end px-8 py-2 gap-2 bg-gray-100">
        <button onClick={() => setViewMode('split')} className={`px-4 py-1 rounded-lg transition-all ${viewMode === 'split' ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}>Mapa</button>
        <button onClick={() => setViewMode('grid')} className={`px-4 py-1 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm font-bold' : 'text-gray-500'}`}>Grade</button>
      </div>

      <main className="flex flex-1 overflow-hidden">
        <section className={`${viewMode === 'grid' ? 'w-full px-10' : 'w-1/2'} overflow-y-auto p-6 transition-all duration-300`}>
          <div className="flex gap-3 py-3 h-20">
            <select className="bg-white border p-2 rounded-lg flex-1" onChange={(e) => setTipoBusca(e.target.value)}>
              <option value="Alugar">Alugar</option>
              <option value="Comprar">Comprar</option>
              <option value="Todos">Todas</option>
            </select>
            <select className="bg-white border p-2 rounded-lg flex-1">
              <option>Cidade</option>
              <option>Mirassol D'Oeste</option>
            </select>
            <select className="bg-white border p-2 rounded-lg flex-1">
              <option>Bairro</option>
              <option>Jardim das Flores I</option>
              <option>Jardim das Flores II</option>
            </select>
            <textarea name="Valor Máximo" id="maxvalue" className="bg-white border p-2 rounded-lg flex-1"></textarea>
            <button className="bg-gray-800 text-white p-2 rounded-lg px-4">🔍</button>
          </div>

          <div className="grid grid-cols-1 gap-4">
             {/* Componentes de Card :3 */}
             <div className={`grid gap-6 transition-all ${viewMode === 'grid' ? 'grid-cols-4' : 'grid-cols-2'}`}>
              {imoveisFiltrados.length > 0 ? (
                imoveisFiltrados.map((imovel) => (
                  <CardImovel 
                    id={imovel.id}
                    preco={imovel.preco}
                    quartos={imovel.quartos}
                    banheiros={imovel.banheiros}
                    area={imovel.area}
                    endereco={imovel.endereco}
                    imagem={imovel.imagem}
                    status={imovel.status}
                />
              ))
            ) : (
              <p className="col-span-full">Não foi encontrado nenhum imóvel nesses critérios.</p>
          )}
          </div>
          </div>
        </section>

        {viewMode === 'split' && (
          <section className="w-1/2 bg-gray-200 relative animate-in fade-in slide-in-from-right duration-300">
            <div className="absolute inset-4 bg-white rounded-3xl shadow-inner flex items-center justify-center"><Mapa imoveis={imoveisFiltrados}/></div>
          </section>
        )}
      </main>
    </div>
  )
}

export default Home;