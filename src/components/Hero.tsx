import { MessageSquare, ShieldCheck, MapPin, Award, Check } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 bg-slate-950 overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-emerald-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Geometric pattern grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Teks / Copywriting (AIDA: Attention & Interest) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>DISTRIBUTOR UTAMA BEKASI — SEJAK 2018</span>
            </div>

            {/* Headline H1 (CRO Hypnotic Copywriting) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Karpet Masjid Mewah <span className="text-emerald-400">Turki</span> & Karpet Kantor Premium di <span className="text-amber-400 underline decoration-wavy decoration-emerald-500">Bekasi</span>
            </h1>

            {/* Sub-headline (Desire / Solving problem) */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Hadirkan kenyamanan ibadah maksimal & nuansa ruang kerja berkelas dengan karpet berkualitas tinggi langsung dari distributor tangan pertama. <span className="text-white font-semibold">Khusus area Bekasi</span>, kami bawa contoh sampel fisik langsung ke lokasi Anda agar Anda bebas memilih tanpa khawatir!
            </p>

            {/* Key benefits list layout */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">Survei & Ukur Lokasi <strong className="text-white">GRATIS</strong> se-Bekasi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">Bisa COD — <strong className="text-white">Bayar Setelah Terpasang Rapi</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">Potong Pilar Presisi & <strong className="text-white">Obras di Tempat</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-300">Ongkos Kirim <strong className="text-white">GRATIS</strong> Area Bekasi & Cikarang</span>
              </div>
            </div>

            {/* Call To Action Buttons (AIDA: Action) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                id="hero-cta-wa"
                href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20kebutuhan%20karpet.%20Boleh%20minta%20info%20selengkapnya?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3.5 px-7 py-4 rounded-xl text-slate-950 font-bold bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all transform hover:-translate-y-1 text-center"
              >
                <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black leading-tight">BUAT JADWAL KUNJUNGAN</span>
                  <span className="text-[10px] font-medium leading-none text-slate-800">Bawa Sampel & Ukur Gratis ke Bekasi</span>
                </div>
              </a>
              
              <button 
                id="hero-cta-catalog"
                onClick={() => handleScrollTo('karpet-masjid')}
                className="flex items-center justify-center px-6 py-4 rounded-xl text-sm font-bold text-white border border-slate-700 hover:border-slate-400 hover:bg-slate-900 transition-all text-center"
              >
                LIHAT KATALOG PRODUK
              </button>
            </div>

            {/* Social signals under CTA */}
            <div className="flex items-center gap-4 pt-4 text-xs text-slate-400 border-t border-slate-900">
              <div className="flex -space-x-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-[9px] text-white ring-2 ring-slate-950">M1</span>
                <span className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center font-bold text-[9px] text-white ring-2 ring-slate-950">M2</span>
                <span className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center font-bold text-[9px] text-white ring-2 ring-slate-950">K1</span>
              </div>
              <span>Digunakan di <strong>320+ Masjid</strong> dan <strong>185+ Perusahaan</strong> se-Bekasi</span>
            </div>

          </div>

          {/* Column Visual / Premium Card Mockups */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative light ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-amber-500 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
              
              {/* Main premium graphic display */}
              <div className="relative border border-slate-800/80 bg-slate-900/60 p-6 rounded-3xl shadow-2xl backdrop-blur-sm space-y-6">
                
                {/* Badge layout banner */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-850">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-mono tracking-wider text-emerald-400 font-bold uppercase">LIVE DEMO KARPET</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">BEKASI ONLINE SHOWROOM</span>
                </div>

                {/* Simulated split design layout showing luxurious textures of Masjid and Office */}
                <div className="space-y-4">
                  {/* Mosque card display */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 to-emerald-900 border border-emerald-500/20 p-4 transition-transform hover:scale-[1.02]">
                    <div className="absolute right-[-15px] bottom-[-15px] opacity-10 font-bold text-6xl text-white">TURKI</div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-amber-400 tracking-wider">PREMIUM MASJID</span>
                      <span className="text-[10px] bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded font-bold font-mono">Tebal 22mm</span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">Turki Al-Aqsa Royal</p>
                    <p className="text-xs text-slate-300">Serat rapat, sangat halus, & empuk luar biasa untuk kelancaran ibadah jamaah.</p>
                  </div>

                  {/* Office card display */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-750 p-4 transition-transform hover:scale-[1.02]">
                    <div className="absolute right-[-15px] bottom-[-15px] opacity-15 font-bold text-6xl text-slate-400">TILE</div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-cyan-400 tracking-wider">MODERN KANTOR</span>
                      <span className="text-[10px] bg-slate-700 text-slate-200 px-2 py-0.5 rounded font-bold font-mono">Bitumen Backing</span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">Heavy Duty Nylon Tile</p>
                    <p className="text-xs text-slate-400">Format modular 50x50, tahan roda kursi kerja, meredam bising ruang kerja.</p>
                  </div>
                </div>

                {/* Instant interactive badge trust */}
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-850 flex items-center justify-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-100 leading-none">Garansi 100% Pemasangan Rapi</p>
                    <p className="text-[10px] text-slate-450 mt-1">Jika hasil pemasangan mengkerut atau cacat obras, kami ganti baru gratis!</p>
                  </div>
                </div>

              </div>

              {/* Float decor badge (showing custom map focus) */}
              <div className="absolute bottom-[-15px] left-[-15px] bg-slate-900 border border-slate-800 shadow-xl px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 shrink-0 max-w-[200px]">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] font-bold text-white">Showroom Bekasi</p>
                  <p className="text-[9px] text-slate-400">Bekasi Timur (Dekat Taman Kota)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
