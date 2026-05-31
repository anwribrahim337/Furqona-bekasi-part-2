import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative group flex items-center justify-end">
        {/* Micro-copy bubble label */}
        <div className="bg-slate-900 text-white font-bold text-xs py-2 px-3.5 rounded-xl mr-3 shadow-xl border border-slate-800 tracking-wide text-right hidden sm:block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="leading-none text-emerald-400">Tanya Stok & Harga Spesifik?</p>
          <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Konsultasi Live 24 Jam</p>
        </div>

        {/* Pulse beacon decor */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping scale-110"></span>
        
        {/* Floating WA core button */}
        <a
          id="btn-floating-wa"
          href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20kebutuhan%20karpet.%20Boleh%20minta%20info%20selengkapnya?"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full shadow-2xl flex items-center justify-center text-slate-950 hover:scale-105 transition-transform shrink-0 border border-emerald-400/20"
          title="Konsultasi WhatsApp Sekarang (Klik)"
        >
          {/* Notification Badge indicator inside WA icon */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-emerald-500 rounded-full flex items-center justify-center font-bold text-[8px] text-white">
            1
          </span>
          <MessageSquare className="w-6 h-6 fill-slate-950 text-slate-950" />
        </a>
      </div>
    </div>
  );
}
