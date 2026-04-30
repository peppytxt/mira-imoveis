import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'

import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25,41],
    iconAnchor: [12,41] 
})

L.Marker.prototype.options.icon = DefaultIcon;

function Mapa ({ imoveis }) {
    const posicaoCentral = [-15.6781, -58.0935]
    
    return (
        <MapContainer center={posicaoCentral} zoom={14} className="h-full w-full rounded-3xl">
            <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            {imoveis.map(imovel => (
        imovel.lat && (
          <Marker key={imovel.id} position={[imovel.lat, imovel.lng]}>
            <Popup>
              <div className="font-sans">
                <strong className="block text-lg">R$ {imovel.preco}</strong>
                <span>{imovel.endereco}</span>
              </div>
            </Popup>
          </Marker>
        )
      ))}
        </MapContainer>
    )
}

export default Mapa