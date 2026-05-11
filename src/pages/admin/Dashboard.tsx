import { Bell, Car, DollarSign, Activity } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 bg-surface min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-dark">Hola, Parqueadero Norte</h1>
          <p className="text-sm text-gray-500">Resumen en tiempo real</p>
        </div>
        <button className="relative bg-white p-3 rounded-full shadow-sm">
          <Bell className="text-secondary" size={24} />
          <span className="absolute top-2 right-2 w-3 h-3 bg-warning rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* Hero Card: Ocupación */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6 border border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-gray-400 mb-1">OCUPACIÓN GLOBLAL</h2>
          <p className="text-4xl font-black text-dark">80<span className="text-2xl text-gray-400">%</span></p>
          <p className="text-sm text-success font-semibold mt-1">160/200 espacios ocupados</p>
        </div>
        
        {/* Donut Chart representation */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="12" fill="none" />
            <circle cx="48" cy="48" r="40" stroke="#D32F2F" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="50.24" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <DollarSign className="text-success mb-2" size={28} />
          <p className="text-2xl font-bold text-gray-800">$450k</p>
          <p className="text-xs text-gray-500 font-medium">Ingresos diarios</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <Car className="text-secondary mb-2" size={28} />
          <p className="text-2xl font-bold text-gray-800">342</p>
          <p className="text-xs text-gray-500 font-medium">Vehículos hoy</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <Activity className="text-green-500 mb-2" size={28} />
          <p className="text-2xl font-bold text-gray-800">100%</p>
          <p className="text-xs text-gray-500 font-medium">Hardware OK</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <Bell className="text-warning mb-2" size={28} />
          <p className="text-2xl font-bold text-gray-800">12</p>
          <p className="text-xs text-gray-500 font-medium">Reservas pend.</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="font-bold text-gray-800 mb-4 px-2">Actividad Reciente</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {[
             { placa: "XYZ-987", accion: "Salida", monto: "$12.000", hora: "Hace 2 min" },
             { placa: "ABC-123", accion: "Ingreso (Reserva)", monto: "-", hora: "Hace 5 min" },
             { placa: "QWE-456", accion: "Salida", monto: "$4.500", hora: "Hace 15 min" },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${item.accion.includes('Salida') ? 'bg-success' : 'bg-secondary'}`}>
                  {item.placa.split('-')[0]}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-sm text-gray-800">{item.placa}</p>
                  <p className="text-xs text-gray-500">{item.accion}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-dark">{item.monto}</p>
                <p className="text-xs text-gray-400">{item.hora}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
