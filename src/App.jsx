import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Layers, 
  Milestone,
  ExternalLink,
  ShieldAlert,
  Zap
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const slides = [
    {
      title: "Optimización de Ingresos: Protección de Envío",
      subtitle: "Executive Summary / Resumen Ejecutivo",
      icon: <ShieldCheck className="w-12 h-12 text-indigo-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <AlertCircle className="text-red-600 mb-3" />
            <h3 className="font-bold text-red-900">El Problema</h3>
            <p className="text-sm text-red-800">2% de envíos con incidencias externas generan fricción y costes de soporte.</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
            <Zap className="text-indigo-600 mb-3" />
            <h3 className="font-bold text-indigo-900">La Solución</h3>
            <p className="text-sm text-indigo-800">Seguro interno opcional por $10.00. Protección de 1 año.</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <TrendingUp className="text-emerald-600 mb-3" />
            <h3 className="font-bold text-emerald-900">Impacto</h3>
            <p className="text-sm text-emerald-800">+5-8% incremento proyectado en el margen neto por pedido.</p>
          </div>
        </div>
      ),
      notes: "Enfoque: Convertir un centro de coste (soporte por pérdidas) en un generador de revenue puro."
    },
    {
      title: "Rentabilidad: Servicio Interno vs. Externo",
      subtitle: "Business Logic / Modelo de Negocio",
      icon: <Layers className="w-12 h-12 text-indigo-600" />,
      content: (
        <div className="flex flex-col space-y-8 mt-4">
          <div className="flex items-center justify-between p-6 bg-white border-2 border-indigo-500 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full"><CheckCircle2 className="text-indigo-600" /></div>
              <div>
                <h4 className="font-bold text-gray-900">100% Internal Service</h4>
                <p className="text-gray-500 text-sm">Sin intermediarios ni comisiones externas.</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-indigo-600">100%</span>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Ingreso Bruto</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Eficiencia</p>
              <p className="text-sm text-gray-700 font-medium">El riesgo se cubre por el volumen total del pool de usuarios.</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Validación</p>
              <p className="text-sm text-gray-700 font-medium">Fase 1: Lanzamiento en 'Standard' para medir el Attach Rate.</p>
            </div>
          </div>
        </div>
      ),
      notes: "Diferenciador clave: No hay 'leakage' de dinero hacia aseguradoras externas. Todo el beneficio queda en casa."
    },
    {
      title: "Experiencia de Usuario y Operaciones",
      subtitle: "User Journey & Flow",
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      content: (
        <div className="relative mt-8">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: "01", label: "Checkout", desc: "Checkbox desglosado en el resumen de pago." },
              { step: "02", label: "Post-Venta", desc: "Confirmación legal de cobertura en el recibo." },
              { step: "03", label: "Soporte", desc: "Re-envío automatizado en 'un solo clic'." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative z-10">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-indigo-200">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      notes: "UX fluida: La opción aparece justo cuando el usuario siente el miedo a perder su trámite (sesgo de aversión a la pérdida)."
    },
    {
      title: "Visión 2026: Roadmap Estratégico",
      subtitle: "Scalability / Escalabilidad",
      icon: <Milestone className="w-12 h-12 text-indigo-600" />,
      content: (
        <div className="mt-8 space-y-4">
          <div className="relative pl-8 border-l-4 border-indigo-600 pb-6">
            <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
            <h4 className="font-bold text-indigo-900">Q2 2026: Apertura Total</h4>
            <p className="text-sm text-gray-600">Eliminación de filtros. Disponible para Express y Premium.</p>
          </div>
          <div className="relative pl-8 border-l-4 border-gray-200 pb-6">
            <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-gray-300"></div>
            <h4 className="font-bold text-gray-900">Fase Premium: Reapply Coverage</h4>
            <p className="text-sm text-gray-600">Cobertura de Tasas Gubernamentales (Gov Fees) para tickets de alto valor.</p>
          </div>
          <div className="relative pl-8 border-l-4 border-gray-200">
            <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-gray-300"></div>
            <h4 className="font-bold text-gray-900">Dynamic Pricing</h4>
            <p className="text-sm text-gray-600">Precios basados en el riesgo del destino o valor del documento.</p>
          </div>
        </div>
      ),
      notes: "El objetivo es pasar de un seguro de $10 a una protección premium de $20+ que cubra trámites completos."
    },
    {
      title: "KPIs de Éxito",
      subtitle: "Success Metrics / Métricas",
      icon: <BarChart3 className="w-12 h-12 text-indigo-600" />,
      content: (
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-indigo-600">20%</span>
            <span className="text-xs font-bold text-gray-400 uppercase mt-2">Attach Rate Target</span>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-emerald-500">&lt;5%</span>
            <span className="text-xs font-bold text-gray-400 uppercase mt-2">Loss Ratio Limit</span>
          </div>
          <div className="col-span-2 bg-indigo-900 p-6 rounded-3xl text-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Revenue Impact</span>
              <TrendingUp className="text-emerald-400" />
            </div>
            <p className="text-lg leading-tight">Reducción directa de reembolsos totales y aumento del LTV por cliente asegurado.</p>
          </div>
        </div>
      ),
      notes: "Métrica estrella: Attach Rate. Si llegamos al 20%, el impacto en el bottom-line será masivo."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-gray-900">
      <div className="w-full max-w-5xl aspect-video bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border border-white">
        <div className="px-10 pt-10 pb-6 flex justify-between items-start">
          <div className="flex gap-5">
            <div className="bg-indigo-50 p-3 rounded-2xl shadow-inner border border-indigo-100">
              {slides[currentSlide].icon}
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-indigo-950 uppercase">
                {slides[currentSlide].title}
              </h2>
              <p className="text-indigo-600 font-bold text-lg opacity-80">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
          <div className="bg-slate-100 px-4 py-2 rounded-full text-xs font-black text-slate-500">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
        <div className="flex-grow px-12 py-4">
          {slides[currentSlide].content}
        </div>
        <div className="px-10 py-8 flex justify-between items-center bg-gray-50/50">
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className="text-xs font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all border border-indigo-100 flex items-center gap-2"
          >
            <ShieldAlert size={14} />
            {showNotes ? "Ocultar Notas" : "Mostrar Notas de Orador"}
          </button>
          <div className="flex gap-3">
            <button onClick={prevSlide} className="p-3 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all shadow-sm"><ArrowLeft className="text-gray-600" /></button>
            <button onClick={nextSlide} className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg flex items-center gap-2">Siguiente <ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 bg-indigo-100 w-full">
          <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
        </div>
      </div>
      {showNotes && (
        <div className="mt-6 w-full max-w-5xl bg-amber-50 border-l-4 border-amber-400 p-6 rounded-2xl shadow-lg">
          <h5 className="text-amber-900 font-black uppercase text-xs tracking-widest mb-2 flex items-center gap-2"><ExternalLink size={14} /> Notas para tu Pitch</h5>
          <p className="text-amber-900 font-medium italic">"{slides[currentSlide].notes}"</p>
        </div>
      )}
    </div>
  );
};

// --- LÍNEAS DE RENDERIZADO (INDISPENSABLES) ---
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
