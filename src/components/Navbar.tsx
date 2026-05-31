import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, CheckCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Promo Bar (AIDA: Attention grabber) */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 text-center font-medium border-b border-emerald-900 flex justify-center items-center gap-2 overflow-hidden sm:text-xs">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span className="font-bold text-amber-300">PROMO KHUSUS AREA BEKASI & CIKARANG:</span>
        <span>Gratis Ukur, Gratis Kirim, Gratis Obras & Sampel Fisik Dibawa ke Rumah/Masjid Anda!</span>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleScrollTo('hero')}
              id="nav-logo"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md shadow-emerald-900/40 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <span className="text-xl font-bold tracking-tight">F</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white leading-none tracking-tight group-hover:text-emerald-400 transition-colors">
                  FURQONA
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-amber-400 font-semibold leading-none mt-1">
                  KARPET BEKASI
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                id="dekstop-nav-home"
                onClick={() => handleScrollTo('hero')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Beranda
              </button>
              <button 
                id="dekstop-nav-masjid"
                onClick={() => handleScrollTo('karpet-masjid')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Karpet Masjid
              </button>
              <button 
                id="dekstop-nav-kantor"
                onClick={() => handleScrollTo('karpet-kantor')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Karpet Kantor
              </button>
              <button 
                id="dekstop-nav-kalkulator"
                onClick={() => handleScrollTo('kalkulator-kebutuhan')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Kalkulator Harga
              </button>
              <button 
                id="dekstop-nav-keunggulan"
                onClick={() => handleScrollTo('keunggulan')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Mengapa Kami
              </button>
              <button 
                id="dekstop-nav-galeri"
                onClick={() => handleScrollTo('galeri')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Portofolio
              </button>
              <button 
                id="dekstop-nav-faq"
                onClick={() => handleScrollTo('faq')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Tanya Jawab
              </button>
            </div>

            {/* Desktop Contact CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                id="desktop-nav-phone"
                href="tel:081297976189"
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0812-9797-6189</span>
              </a>
              <a 
                id="desktop-nav-wa"
                href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20kebutuhan%20karpet.%20Boleh%20minta%20info%20selengkapnya?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md hover:shadow-lg rounded-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-900" />
                <span>HUBUNGI SEKARANG</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <a 
                id="mobile-rapid-wa"
                href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20kebutuhan%20karpet.%20Boleh%20minta%20info%20selengkapnya?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
                title="Hubungi WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <button
                id="mobile-hamburger-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-slate-900 border-t border-slate-800`}>
          <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
            <button
              id="mobile-nav-home"
              onClick={() => handleScrollTo('hero')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Beranda
            </button>
            <button
              id="mobile-nav-masjid"
              onClick={() => handleScrollTo('karpet-masjid')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Karpet Masjid
            </button>
            <button
              id="mobile-nav-kantor"
              onClick={() => handleScrollTo('karpet-kantor')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Karpet Kantor
            </button>
            <button
              id="mobile-nav-kalkulator"
              onClick={() => handleScrollTo('kalkulator-kebutuhan')}
              className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-amber-400 hover:bg-slate-800 flex items-center gap-2"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Kalkulator Harga Toko
            </button>
            <button
              id="mobile-nav-keunggulan"
              onClick={() => handleScrollTo('keunggulan')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Mengapa Memilih Kami
            </button>
            <button
              id="mobile-nav-galeri"
              onClick={() => handleScrollTo('galeri')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Portofolio Pemasangan
            </button>
            <button
              id="mobile-nav-faq"
              onClick={() => handleScrollTo('faq')}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              Tanya Jawab (FAQ)
            </button>
            
            <div className="border-t border-slate-800 pt-4 mt-2 space-y-3">
              <a
                id="mobile-nav-phone"
                href="tel:081297976189"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-white bg-slate-800 hover:bg-slate-750 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Telepon: 0812-9797-6189</span>
              </a>
              <a
                id="mobile-nav-wa-cta"
                href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20kebutuhan%20karpet.%20Boleh%20minta%20info%20selengkapnya?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>KONSULTASI GRATIS (WA)</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
