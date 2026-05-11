import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-screen bg-surface">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-secondary border-t border-[#2A3492] flex justify-around p-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.1)] relative z-50">
        <NavLink 
          to="/admin/dashboard"
          className={({ isActive }) => clsx("flex flex-col items-center py-2 px-4 transition", 
            isActive ? "text-white" : "text-indigo-300 hover:text-white"
          )}
        >
          <LayoutDashboard size={24} />
          <span className="text-xs font-medium mt-1">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/admin/subscription"
          className={({ isActive }) => clsx("flex flex-col items-center py-2 px-4 transition", 
            isActive ? "text-white" : "text-indigo-300 hover:text-white"
          )}
        >
          <CreditCard size={24} />
          <span className="text-xs font-medium mt-1">Suscripción</span>
        </NavLink>
        <NavLink 
          end
          to="/"
          className="flex flex-col items-center py-2 px-4 transition text-indigo-300 hover:text-white"
        >
          <ChevronLeft size={24} />
          <span className="text-xs font-medium mt-1">Salir</span>
        </NavLink>
      </nav>
    </div>
  );
}
