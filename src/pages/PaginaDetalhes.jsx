import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Share2 } from 'lucide-react';

function PaginaDetalhes({ imoveis }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca o imóvel pelo ID que veio na URL
  const imovel = imoveis.find(i => i.id === parseInt(id));

  if (!imovel) return <div>Imóvel não encontrado.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Botão Voltar */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-black">
        <ArrowLeft size={20} /> Voltar para a lista
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Galeria de Imagem */}
        <div className="rounded-[3rem] overflow-hidden shadow-xl h-[500px]">
          <img src={imovel.imagem} className="w-full h-full object-cover" alt="Foto do Imóvel" />
        </div>

        {/* Informações */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">R$ {imovel.preco.toLocaleString()}</h1>
          <p className="text-xl text-gray-500">{imovel.endereco}</p>
          
          <div className="flex gap-6 py-6 border-y border-gray-200">
             <div className="text-center">
                <span className="block font-bold text-2xl">{imovel.quartos}</span>
                <span className="text-gray-400">Quartos</span>
             </div>
             <div className="text-center">
                <span className="block font-bold text-2xl">{imovel.area}m²</span>
                <span className="text-gray-400">Área Útil</span>
             </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Localizado em uma das melhores regiões de Mirassol d'Oeste, este imóvel oferece 
            conforto e praticidade para sua família... (descrição completa aqui)
          </p>

          <div className="flex gap-4 pt-4">
             <a 
               href={`https://wa.me/556599999999?text=Olá, vi o imóvel em ${imovel.endereco} e gostaria de mais informações!`}
               target="_blank"
               className="flex-1 bg-green-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
             >
                <MessageCircle /> Falar com Consultor
             </a>
             <button className="p-4 bg-gray-200 rounded-2xl hover:bg-gray-300">
                <Share2 />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDetalhes;