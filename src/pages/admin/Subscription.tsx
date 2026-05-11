import { CheckCircle2, Star } from 'lucide-react';
import clsx from 'clsx';

const PLANES = [
  {
    name: "Básico",
    price: "$30.000",
    features: ["Hasta 50 espacios", "Panel essentials", "Reportes básicos", "Soporte por email"],
    active: false,
    color: "bg-gray-100 text-gray-800"
  },
  {
    name: "Profesional",
    price: "$80.000",
    features: ["Hasta 200 espacios", "API de integración", "Reportes avanzados BI", "Soporte prioritario"],
    active: true,
    color: "bg-secondary text-white",
    popular: true
  },
  {
    name: "Empresarial",
    price: "$150.000",
    features: ["Espacios ilimitados", "Cuenta de gestor dedicado", "Capacitaciones", "SLA de 99.5% uptime"],
    active: false,
    color: "bg-dark text-white"
  }
];

export default function Subscription() {
  return (
    <div className="p-6 bg-surface min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Mi Suscripción</h1>
        <p className="text-sm text-gray-500 mt-1">SaaS REDPARK B2B</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-8 mt-2 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-gray-400">PLAN ACTUAL</h2>
          <p className="text-xl font-black text-primary">Profesional</p>
        </div>
        <div className="bg-green-100 text-success px-3 py-1 rounded-full text-xs font-bold border border-green-200">
          ACTIVO
        </div>
      </div>

      <h3 className="font-bold text-gray-800 mb-4 px-2">Mejora tu plan</h3>
      
      <div className="flex overflow-x-auto gap-4 pb-6 snap-x">
        {PLANES.map((plan, idx) => (
          <div key={idx} className={clsx("min-w-[280px] snap-center rounded-3xl p-6 relative shadow-md", plan.color)}>
            {plan.popular && (
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg border-2 border-white">
                <Star size={12} className="mr-1" /> MÁS ELEJIDO
              </div>
            )}
            <h4 className="text-xl font-bold mb-1 opacity-90">{plan.name}</h4>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-black leading-none">{plan.price}</span>
              <span className="text-sm opacity-80 mb-1 ml-1">/mes</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start text-sm">
                  <CheckCircle2 size={18} className="mr-2 opacity-80 shrink-0 mt-0.5" />
                  <span className="opacity-90 leading-tight">{feat}</span>
                </li>
              ))}
            </ul>

            <button 
              className={clsx(
                "w-full py-3 rounded-xl font-bold transition",
                plan.active 
                  ? "bg-white/20 text-white cursor-default"
                  : "bg-primary text-white hover:bg-red-700 shadow-md"
              )}
            >
              {plan.active ? 'Plan Actual' : 'Hacer Upgrade'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
