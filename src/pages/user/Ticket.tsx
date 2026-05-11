import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CheckCircle2, ChevronRight, CreditCard } from 'lucide-react';
import clsx from 'clsx';

export default function Ticket() {
  const [status, setStatus] = useState<'en_camino' | 'parqueado' | 'salida'>('en_camino');
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  // Simulación de cronómetro
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => {
        if (s === 0) {
          setMinutes(m => m > 0 ? m - 1 : 0);
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateArrival = () => setStatus('parqueado');
  const handleSimulatePayment = () => setStatus('salida');

  return (
    <div className="h-full w-full bg-surface p-6 flex flex-col relative">
      
      {/* HEADER */}
      <div className="text-center mb-6 pt-4">
        <h2 className="text-sm font-bold text-gray-500 tracking-wider">
          {status === 'en_camino' ? 'RESERVA ACTIVA' : status === 'parqueado' ? 'ESTACIONAMIENTO ACTIVO' : 'TICKET COMPLETADO'}
        </h2>
        <h1 className="text-xl font-extrabold text-dark mt-1">REDPARK Centro Comercial</h1>
      </div>

      {/* CARD PRINCIPAL */}
      <div className="bg-white rounded-3xl shadow-xl flex-1 max-h-[500px] p-6 flex flex-col items-center justify-between relative overflow-hidden">
        
        {/* EN CAMINO */}
        {status === 'en_camino' && (
          <div className="w-full flex flex-col items-center justify-center h-full">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-secondary flex flex-col items-center justify-center mb-6">
              <span className="text-3xl font-bold text-secondary">{minutes}:{seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs text-gray-500">para llegar</span>
            </div>
            <p className="text-center text-gray-600 px-4">Conduce al parqueadero. Tu espacio está garantizado.</p>
            <button onClick={handleSimulateArrival} className="mt-8 px-6 py-2 bg-gray-100 text-dark rounded-lg font-medium">
              (Simular Llegada)
            </button>
          </div>
        )}

        {/* PARQUEADO */}
        {status === 'parqueado' && (
          <div className="w-full flex flex-col items-center justify-between h-full">
            <div className="mb-2">
              <p className="text-center text-4xl font-black tracking-widest bg-gray-100 px-6 py-2 rounded-xl text-gray-800 border-2 border-gray-200">
                ABC-123
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100">
              <QRCodeSVG 
                value={`redpark://ticket/ABC123_${Date.now()}`} 
                size={200}
                fgColor="#D32F2F" 
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">Muestra este código en la salida</p>

            <div className="w-full mt-4 flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total acumulado</p>
                <p className="text-2xl font-bold text-primary">$8.500 <span className="text-sm font-normal">COP</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Tiempo</p>
                <p className="text-lg font-semibold text-gray-800">1h 45m</p>
              </div>
            </div>
          </div>
        )}

        {/* SALIDA */}
        {status === 'salida' && (
          <div className="w-full flex flex-col items-center justify-center h-full text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-success mb-6">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Pago Exitoso!</h2>
            <p className="text-gray-500 mb-8">La talanquera se ha levantado. Tienes 15 minutos para salir del establecimiento.</p>
            
            <div className="w-full bg-gray-50 p-4 rounded-xl text-left">
              <p className="text-sm text-gray-500 mb-1">Pagado con</p>
              <div className="flex items-center">
                <CreditCard className="text-gray-400 mr-2" />
                <span className="font-semibold text-gray-700">Visa terminada en 4521</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SWIPE TO PAY (PARQUEADO) */}
      {status === 'parqueado' && (
        <div className="mt-8 bg-white h-16 rounded-full relative shadow-md overflow-hidden flex items-center p-1 cursor-pointer" onClick={handleSimulatePayment}>
          <div className="absolute inset-0 bg-primary opacity-10"></div>
          <div className="h-14 w-20 bg-primary rounded-full shadow-md flex items-center justify-center z-10 animate-pulse">
            <ChevronRight className="text-white" size={32} />
          </div>
          <div className="flex-1 text-center font-bold text-primary tracking-wide relative z-0">
            DESLIZAR PARA PAGAR
          </div>
        </div>
      )}

      {status === 'salida' && (
        <button onClick={() => setStatus('en_camino')} className="mt-8 w-full py-4 text-center font-bold text-gray-500 underline">
          Volver al inicio
        </button>
      )}
    </div>
  );
}
