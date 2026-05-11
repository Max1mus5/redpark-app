import { Link } from 'react-router-dom';

export default function RoleSelector() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-10 flex flex-col items-center" >
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-4">
          <span className="text-white text-3xl font-bold">RP</span>
        </div>
        <h1 className="text-3xl font-bold text-dark">REDPARK</h1>
        <p className="text-secondary opacity-80 mt-2">Plataforma Inteligente de Parqueaderos</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <Link 
          to="/user/explore" 
          className="block w-full py-4 px-6 bg-secondary text-white rounded-xl shadow-md hover:opacity-90 transition font-medium text-lg"
        >
          Ingresar como Conductor
        </Link>
        <Link 
          to="/admin/dashboard" 
          className="block w-full py-4 px-6 bg-white text-primary border-2 border-primary rounded-xl shadow-sm hover:bg-red-50 transition font-medium text-lg"
        >
          Ingresar como Administrador
        </Link>
      </div>
    </div>
  );
}
