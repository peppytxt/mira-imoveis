import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaDetalhes from './pages/PaginaDetalhes';

function App() {
// SIMULAÇÃO de lista de imóveis
  const imoveis = [
    {
      id: 1,
      preco: 99999.99,
      quartos: 2,
      banheiros: 1,
      area: 120,
      status: 'Alugar',
      lat: -15.6750,
      lng: -58.0650,
      endereco: "Rua das Flores, Centro - Mirassol d'Oeste",
      imagem: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500"
    },
    {
      id: 2,
      preco: 150000.99,
      quartos: 3,
      banheiros: 2,
      area: 250,
      status: 'Alugar',
      lat: -15.6850,
      lng: -58.0750,
      endereco: "Av. Brasil, 450 - Jardim Aeroporto",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500"
    },
    {
      id: 3,
      preco: 150000.99,
      quartos: 3,
      banheiros: 2,
      area: 250,
      status: 'Alugar',
      lat: -15.6733,
      lng: -58.0612,      
      endereco: "Av. Brasil, 450 - Jardim Aeroporto",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500"
    },
    {
      id: 4,
      preco: 150000.99,
      quartos: 3,
      banheiros: 2,
      area: 250,
      status: 'Alugar',
      lat: -15.5750,
      lng: -58.1650,
      endereco: "Av. Brasil, 450 - Jardim Aeroporto",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500"
    },
    {
      id: 5,
      preco: 150000.99,
      quartos: 3,
      banheiros: 2,
      area: 250,
      status: 'Alugar',
      lat: -15.6740,
      lng: -58.0990,
      endereco: "Av. Brasil, 450 - Jardim Aeroporto",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500"
    },
    {
      id: 6,
      preco: 150000.99,
      quartos: 3,
      banheiros: 2,
      area: 250,
      status: 'Alugar',
      lat: -15.6899,
      lng: -58.1000,
      endereco: "Av. Brasil, 450 - Jardim Aeroporto",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500"
    }
    
  ];
  return (
    <Routes>
      <Route path="/" element={<Home imoveis={imoveis} />} />
      
      <Route path="/imovel/:id" element={<PaginaDetalhes imoveis={imoveis} />} />
    </Routes>
  );
}

export default App;