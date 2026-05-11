import { Outlet, NavLink } from 'react-router-dom';
import { Map, Ticket } from 'lucide-react';
import clsx from 'clsx';

export default function UserLayout() {
  return (
    <div className="flex flex-col h-screen bg-surface">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 flex justify-around p-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)] relative z-50">
        <NavLink 
          to="/user/explore"
          className={({ isActive }) => clsx("flex flex-col items-center py-2 px-4 rounded-xl transition", 
            isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <Map size={24} />
          <span className="text-xs font-medium mt-1">Explorar</span>
        </NavLink>
        <NavLink 
          to="/user/ticket"
          className={({ isActive }) => clsx("flex flex-col items-center py-2 px-4 rounded-xl transition", 
            isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
          )}
        >
          <Ticket size={24} />
          <span className="text-xs font-medium mt-1">Mi Ticket</span>
        </NavLink>
      </nav>
    </div>
  );
}
