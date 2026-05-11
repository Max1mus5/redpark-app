import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { Search, MapPin, Bell, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PARKING_LOTS = [
  { id: 1, name: "Parqueadero Central", address: "Cra 7 #45-20, Bogota", lat: 4.6097, lng: -74.0817, free: 17, total: 100, price: "$5.000 / hora", distance: "350m" },
  { id: 2, name: "Parking Norte Express", address: "Av. 19 #100-15", lat: 4.6547, lng: -74.0567, free: 3, total: 50, price: "$6.000 / hora", distance: "780m" },
  { id: 3, name: "REDPARK Occidente", address: "Calle 13 # 68", lat: 4.6347, lng: -74.0967, free: 0, total: 80, price: "$4.500 / hora", distance: "1.2km" },
];

function createStatusIcon(freeSpaces: number) {
  const isFull = freeSpaces === 0;
  const bgColor = isFull ? "bg-[#D32F2F]" : (freeSpaces > 5 ? "bg-[#4CAF50]" : "bg-[#FFC107]");
  const text = isFull ? "Lleno" : freeSpaces + " libres";
  
  const html = `
    <div class="${bgColor} text-white px-3 py-1 rounded-xl text-xs font-bold shadow-md whitespace-nowrap border-2 border-white transform -translate-x-1/2 -translate-y-full">
      ${text}
      <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-current border-r-[6px] border-r-transparent ${isFull ? "text-[#D32F2F]" : (freeSpaces > 5 ? "text-[#4CAF50]" : "text-[#FFC107]")}"></div>
    </div>
  `;

  return divIcon({ html, className: "custom-leaflet-marker", iconSize: [0, 0] });
}

export default function Explore() {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate("/user/ticket");
  };

  return (
    <div className="h-full w-full relative flex flex-col bg-[#F5F5F6]">
      {/* Top Red Header */}
      <div className="bg-[#D32F2F] text-white p-4 shrink-0 relative z-20">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-8 flex items-center justify-center font-bold border-2 border-white">P</div>
             <span className="font-bold tracking-widest text-lg">REDPARK</span>
          </div>
          <div className="flex items-center space-x-4">
             <div className="flex items-center text-sm"><MapPin size={16} className="mr-1" /> Bogota, CO</div>
             <div className="relative">
               <Bell size={20} />
               <span className="absolute top-0 right-0 w-2 h-2 bg-[#FFC107] rounded-full"></span>
             </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-3 flex items-center mt-2">
          <Search className="text-gray-400 mr-3" size={20} />
          <input 
            type="text" 
            placeholder="¿A donde vas hoy?" 
            className="flex-1 outline-none text-gray-700 bg-transparent font-medium"
          />
          <button className="text-[#D32F2F] font-bold"><Compass size={18} /></button>
        </div>

        {/* Filter Pills */}
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2" style={{scrollbarWidth:"none"}}>
           <button className="bg-[#D32F2F] brightness-125 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">Todos</button>
           <button className="bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">Disponibles</button>
           <button className="bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">Reservados</button>
           <button className="bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">Cubiertos</button>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 z-0 relative h-[50vh]">
        <MapContainer center={[4.6097, -74.0817]} zoom={13} zoomControl={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          
          {PARKING_LOTS.map(lot => (
            <Marker key={lot.id} position={[lot.lat, lot.lng]} icon={createStatusIcon(lot.free)}>
            </Marker>
          ))}
        </MapContainer>
        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg z-[400] text-gray-700">
           <Compass size={24} />
        </button>
      </div>

      {/* Bottom Sheet style Parkings List */}
      <div className="bg-white rounded-t-3xl pt-2 px-4 pb-6 flex-1 max-h-[40vh] overflow-y-auto z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] relative border-t border-gray-100">
         <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
         <h3 className="font-bold text-lg mb-4 text-gray-800">Parqueaderos Cercanos</h3>
         
         <div className="space-y-3">
         {PARKING_LOTS.map(lot => (
            <div key={lot.id} className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
               <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-50 text-[#D32F2F] rounded-xl flex items-center justify-center font-bold border border-red-100">
                     P
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">{lot.name}</h4>
                     <p className="text-xs text-gray-500 mb-1">{lot.address}</p>
                     <div className="flex items-center text-xs">
                        <span className={`w-2 h-2 rounded-full mr-1 ${lot.free === 0 ? "bg-[#D32F2F]" : (lot.free > 5 ? "bg-[#4CAF50]" : "bg-[#FFC107]")}`}></span>
                        <span className={`font-semibold mr-2 ${lot.free === 0 ? "text-[#D32F2F]" : (lot.free > 5 ? "text-[#4CAF50]" : "text-[#FFC107]")}`}>{lot.free} espacios libres</span>
                        <span className="text-gray-400">&bull; {lot.distance}</span>
                     </div>
                  </div>
               </div>
               <button 
                  onClick={handleReserve}
                  disabled={lot.free === 0}
                  className="bg-[#D32F2F] disabled:bg-gray-300 disabled:text-gray-500 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors hover:bg-red-700"
               >
                  Reservar
               </button>
            </div>
         ))}
         </div>
      </div>
    </div>
  );
}
