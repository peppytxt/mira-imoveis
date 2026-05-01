import { Bed, Bath, Maximize, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Recebemos os dados do imóvel via "props" (desestruturadas aqui)
function CardImovel({id, imagem, preco, quartos, banheiros, area, endereco, status }) {
  return (
    <Link to={`/imovel/${id}`} className="block">
    <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
      {/* Container da Imagem */}
      <div className="relative h-48 w-full">
        <img 
          src={imagem} 
          alt="Imóvel" 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-700 hover:text-red-500 transition-colors">
          <Heart size={20} />
        </button>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          {status || "Disponível"}
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          R$ {preco.toLocaleString('pt-BR')}
        </h2>

        {/* Ícones de Detalhes */}
        <div className="flex items-center gap-4 text-gray-500 text-sm py-2">
          <div className="flex items-center gap-1">
            <Bed size={18} /> <span>{quartos}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} /> <span>{banheiros}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={18} /> <span>{area}m²</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm truncate">
          {endereco}
        </p>
      </div>
    </div>
    </Link>
  );
}

export default CardImovel;