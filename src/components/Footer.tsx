import { Landmark, Building2, MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-left relative overflow-hidden">
      
      {/* Decorative vector grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1.5px,transparent_1.5px),linear-gradient(to_bottom,#1e293b_1.5px,transparent_1.5px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_60%,transparent_100%)] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Grid: 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: About the brand (4 cols wide) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleScrollTo('hero')}
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0">
                <span>F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-white leading-none">FURQONA</span>
                <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold leading-none mt-1">KARPET BEKASI</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Distributor utama penyedia berbagai kebutuhan karpet masjid mewah asli Turki, karpet masjid lokal ekonomis, serta karpet ubin (tile) dan roll modern khusus perkantoran & korporasi di seluruh Bekasi Raya.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <span className="font-bold text-white block">Tanggung Jawab Syar'i & Profesional:</span>
              <p className="leading-relaxed">Kami memastikan seluruh pengerjaan pemotongan arah kiblat presisi agar shalat jamaah sah, lurus, rapat, dan barisan rapi sempurna tanpa cacat pengerjaan.</p>
            </div>
          </div>

          {/* Col 2: Kategori Produk (2 cols wide) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-slate-900 pb-2">Produk Furqona</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => handleScrollTo('karpet-masjid')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Karpet Masjid Turki</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('karpet-masjid')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Karpet Masjid Custom</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('karpet-masjid')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Sajadah Shaf Lokal</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('karpet-kantor')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Karpet Tile Kantor</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('karpet-kantor')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Karpet Roll Kantor</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Jangkauan Wilayah (3 cols wide) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest border-b border-slate-900 pb-2">Area Bekasi Raya</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-medium">
              <span className="hover:text-white leading-none">Bekasi Timur</span>
              <span className="hover:text-white leading-none">Bekasi Barat</span>
              <span className="hover:text-white leading-none">Bekasi Selatan</span>
              <span className="hover:text-white leading-none">Bekasi Utara</span>
              <span className="hover:text-white leading-none">Cikarang Pusat</span>
              <span className="hover:text-white leading-none">Cibitung Indah</span>
              <span className="hover:text-white leading-none">Tambun Selatan</span>
              <span className="hover:text-white leading-none">Grand Galaxy</span>
              <span className="hover:text-white leading-none">Summarecon</span>
              <span className="hover:text-white leading-none">Kawasan MM2100</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal border-t border-slate-900 pt-2">
              *Kami mengantarkan pesanan dan melayani survei gratis langsung ke puluhan kelurahan di seluruh Kabupaten & Kota Bekasi sekitarnya.
            </p>
          </div>

          {/* Col 4: Hubungi & Alamat Same details (3 cols wide) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-900 pb-2">Kontak Resmi Toko</h4>
            <ul className="space-y-3 text-[11px] sm:text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Jl. Perumahan Taman Kota No.9 Blok D1, RT.009/RW.016, Bekasi Jaya, Kec. Bekasi Timur, Kota Bekasi, Jawa Barat 17112
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:081297976189" className="hover:text-white hover:underline transition-colors">0812-9797-6189</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:furqonakarpet@gmail.com" className="hover:text-white transition-colors">furqonakarpet@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="text-left flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-850 gap-2 sm:gap-4">
            <span className="pb-1 sm:pb-0">© 2026 Furqona Karpet Bekasi. All rights reserved.</span>
            <span className="pt-1 sm:pt-0 sm:pl-4">Showroom & Gudang Resmi Bekasi Timur</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>untuk DKM & Korporasi Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
