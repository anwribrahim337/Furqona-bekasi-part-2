import { 
  Compass, 
  Scissors, 
  Cpu, 
  TrendingDown, 
  RotateCcw, 
  Gift, 
  CheckCircle,
  Truck
} from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      id: 'v1',
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: 'Free Survei & Pengukuran Presisi',
      desc: 'Tidak perlu ragu mengukur sendiri. Tim surveyor kami akan datang ke lokasi Anda se-Bekasi Raya untuk mengukur luas ruangan secara milimeter-presisi sekaligus membawakan puluhan contoh sampel karpet asli.'
    },
    {
      id: 'v2',
      icon: <Scissors className="w-6 h-6 text-amber-400" />,
      title: 'Pemotongan Pilar & Obras di Tempat',
      desc: 'Setiap masjid memiliki rintangan tiang pilar besar atau sudut arah kiblat miring. Tim ahli kami memotong karpet langsung menyesuaikan pilar dan langsung meng-obras di tempat menggunakan mesin obras portable khusus.'
    },
    {
      id: 'v3',
      icon: <TrendingDown className="w-6 h-6 text-cyan-400" />,
      title: 'Harga Distributor Tangan Pertama',
      desc: 'Kami menyalurkan karpet murni secara langsung dari importir utama Turki dan pabrik lokal tanpa melalui rantai distribusi berbelit-belit. Harga dijamin lebih murah serta jaminan mutu original.'
    },
    {
      id: 'v4',
      icon: <RotateCcw className="w-6 h-6 text-purple-400" />,
      title: 'Garansi Instalasi Rapi Sempurna',
      desc: 'Kepuasan DKM & Manajemen Kantor adalah nomor satu. Jika setelah dipasang terdapat lekukan gelembung atau jahitan obras pinggir terlepas, kami akan kembali ke tempat untuk memperbaikinya gratis tanpa dipungut biaya.'
    },
    {
      id: 'v5',
      icon: <Truck className="w-6 h-6 text-pink-400" />,
      title: 'Gratis Ongkos Kirim se-Bekasi',
      desc: 'Khusus pesanan yang dikirim ke wilayah Bekasi Timur, Barat, Selatan, Utara, Cikarang, Cibitung, Tambun, hingga Babelan, kami gratiskan biaya pengantaran barang menggunakan akomodasi kurir toko sendiri.'
    },
    {
      id: 'v6',
      icon: <Gift className="w-6 h-6 text-blue-400" />,
      title: 'Bonus Sajadah Imam & Parfum Turki',
      desc: 'Setiap pemesanan karpet masjid minimal 4 roll, kami berikan bonus 1 lembar Sajadah Imam premium super tebal seharga Rp 500rb, serta botol parfum aroma khas Masjid Nabawi Turki orisinal harum tahan lama.'
    }
  ];

  return (
    <section id="keunggulan" className="bg-slate-900 border-t border-slate-800 py-20 lg:py-28 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">PELAYANAN TERBAIK DI BEKASI</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Furqona Karpet Bekasi Menjadi Pilihan Utama?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Didukung oleh tim teknisi bersertifikasi dan suplai produk terjamin langsung dari pabrik, kami memberikan kemudahan penuh tanpa merepotkan Anda.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div 
              key={v.id} 
              id={`value-card-${v.id}`}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-900 w-fit rounded-xl border border-slate-800 group-hover:bg-slate-850/80 group-hover:border-slate-700 transition-colors">
                  {v.icon}
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-slate-900 text-[10px] sm:text-xs font-bold text-emerald-400 font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>TERSEDIA UNTUK BEKASI & SEKITARNYA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callouts Bottom CTA (Focus to trigger actions easily) */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/20 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 text-left shrink-0">
          <div className="space-y-1.5 md:max-w-2xl">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Ingin melihat dan meraba langsung bahan karpet kami?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tim kami siap membawakan buku sampel fisik berisi potongan asli karpet masjid Turki & piringan karpet tile kantor langsung ke rumah, kantor, atau masjid Anda secara GRATIS!
            </p>
          </div>
          
          <a
            id="value-cta-survey-wa"
            href="https://wa.me/6281297976189?text=Halo%2520Furqona%20Karpet%20Bekasi,%20saya%20ingin%20minta%20jadwal%20survei%20pengukuran%20dan%20pembawaan%20sampel%20karpet%20langsung%20ke%20lokasi%2520saya."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-colors duration-150 relative overflow-hidden"
          >
            <span>JADWALKAN SURVEI GRATIS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
