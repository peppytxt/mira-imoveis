import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, BedDouble, Bath, Maximize, Car, 
  CheckCircle2, MessageCircle, ChevronLeft, ChevronRight 
} from 'lucide-react';

function PaginaDetalhes({ imoveis }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const imovel = imoveis.find(i => i.id === parseInt(id));

  if (!imovel) return <div className="p-10 text-center">Imóvel não encontrado.</div>;

  return (
    <div className="min-h-screen bg-[#D1D1D1] p-4 md:p-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* COLUNA ESQUERDA: GALERIA */}
        <div className="space-y-4">
          <div className="relative aspect-video bg-white rounded-[2.5rem] overflow-hidden shadow-lg">
            <img src={imovel.imagem} className="w-full h-full object-cover" alt="Principal" />
            
            {/* Setas de Navegação */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-between gap-2 px-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="w-1/4 aspect-video bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-transparent hover:border-yellow-500 cursor-pointer">
                <img src={imovel.imagem} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
          
          {/* Indicadores (Bolinhas) */}
          <div className="flex justify-center gap-1 mt-4">
            {[1,2,3,4,5,6].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black' : 'border border-black'}`} />
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA: INFORMAÇÕES */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Observações:</h2>
            
            {/* Ícones Principais */}
            <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
              <div className="flex items-center gap-2"><BedDouble size={20}/> 4 Quartos</div>
              <div className="flex items-center gap-2"><Bath size={20}/> 2 Banheiros</div>
              <div className="flex items-center gap-2"><Maximize size={20}/> 200m²</div>
              <div className="flex items-center gap-2"><Car size={20}/> 2 garagens</div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Extra:</strong> {imovel.descricao || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}
            </p>
          </div>

          {/* Listas de Comodidades */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-bold mb-3">Cômodos</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Área de Serviço</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Cozinha</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Proximidades</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Bares e Restaurantes</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Escola</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Supermercado</li>
              </ul>
            </div>
          </div>

          {/* Preço e Botão */}
          <div className="text-center space-y-4 pt-4">
            <div className="leading-tight">
              <span className="text-4xl md:text-5xl font-black text-[#FF4444]">
                R$ {imovel.preco.toLocaleString('pt-BR')}
              </span>
              <span className="block text-gray-500 text-xs font-bold">À vista</span>
            </div>
            
            <p className="text-gray-500 text-sm">{imovel.endereco}</p>

            <button className="w-full bg-[#00D321] hover:bg-[#00bc1d] text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg transition-all transform hover:scale-[1.02]">
              <MessageCircle fill="white" />
              Contatar Via Whatsapp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PaginaDetalhes;