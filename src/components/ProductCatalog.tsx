import { useState } from 'react';
import { CARPET_MASJID_DATA, CARPET_KANTOR_DATA } from '../data';
import { CarpetMasjid, CarpetKantor } from '../types';
import { Check, MessageSquare, Info, Calculator, Percent, ShieldCheck, Ruler, ArrowRight } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<'masjid' | 'kantor'>('masjid');
  const [selectedMasjidGrade, setSelectedMasjidGrade] = useState<string>('m1');
  const [selectedOfficeType, setSelectedOfficeType] = useState<string>('k1');

  // Calculator State
  const [masjidLength, setMasjidLength] = useState<number>(12);
  const [masjidSaf, setMasjidSaf] = useState<number>(5);
  
  const [officeLength, setOfficeLength] = useState<number>(10);
  const [officeWidth, setOfficeWidth] = useState<number>(8);

  const formatRupiah = (num: number) => {
    return 'Rp' + num.toLocaleString('id-ID');
  };

  // Mosque calculation
  const totalMasjidMeters = masjidLength * masjidSaf;
  const masjidRollsNeeded6m = Math.ceil(totalMasjidMeters / 6);
  
  const getSelectedMasjidPrice = () => {
    const item = CARPET_MASJID_DATA.find(x => x.id === selectedMasjidGrade);
    return item ? item.pricePerMeter : 0;
  };
  const selectedMasjidName = CARPET_MASJID_DATA.find(x => x.id === selectedMasjidGrade)?.name || '';
  const totalMasjidPrice = totalMasjidMeters * getSelectedMasjidPrice();

  // Office calculation
  const totalOfficeSqm = officeLength * officeWidth;
  const officeTilesNeededBox = Math.ceil(totalOfficeSqm / 5); // 1 box = 5 sqm standard
  
  const getSelectedOfficePrice = () => {
    const item = CARPET_KANTOR_DATA.find(x => x.id === selectedOfficeType);
    return item ? item.pricePerSqm : 0;
  };
  const selectedOfficeName = CARPET_KANTOR_DATA.find(x => x.id === selectedOfficeType)?.name || '';
  const totalOfficePrice = totalOfficeSqm * getSelectedOfficePrice();

  // Custom prefilled WhatsApp links based on inputs
  const whatsappMasjidText = `Halo Furqona Karpet Bekasi,%20saya%20pengurus%20DKM.%20Saya%20tertarik%20mencari%2520Karpet%20Masjid%20tipe%20*${encodeURIComponent(selectedMasjidName)}*.%20%0A%0A*ESTIMASI%20KEBUTUHAN%20MESSAGES%3A*%0A-%20Panjang%20Shaf%3A%20${masjidLength}%20meter%0A-%20Jumlah%20Shaf%3A%20${masjidSaf}%20shaf%0A-%20Total%20Kebutuhan%3A%20${totalMasjidMeters}%20meter%20(Est.%20${masjidRollsNeeded6m}%20Roll%20ukuran%206m)%0A-%20Estimasi%20Harga%3A%20*${encodeURIComponent(formatRupiah(totalMasjidPrice))}*%20(Belum%20termasuk%20diskon%20DKM).%0A%0AMohon%20bantu%20jadwalkan%20survei%20lokasi%20dan%20bawa%20sampel%20fisiknya%20ke%20masjid%20kami%20di%20Bekasi.%20Terima%20kasih!`;

  const whatsappOfficeText = `Halo Furqona Karpet Bekasi,%20saya%20ingin%20meminta%20penawaran%20harga%2520(quotation)%20dan%20sampel%20karpet%20kantor.%20%0A%0A*ESTIMASI%20KEBUTUHAN%20WORKSPACE%3A*%0A-%20Tipe%20Karpet%3A%20*${encodeURIComponent(selectedOfficeName)}*%0A-%20Panjang%20Ruangan%3A%20${officeLength}%20meter%0A-%20Lebar%20Ruangan%3A%20${officeWidth}%20meter%0A-%20Total%20Luas%20Lantai%3A%20${totalOfficeSqm}%2520m%C2%B2%20(Est.%20${officeTilesNeededBox}%20Box/Dus%20Modular)%0A-%20Estimasi%20Total%20Harga%3A%20*${encodeURIComponent(formatRupiah(totalOfficePrice))}*.%0A%0AMohon%20infokan%20diskon%20proyek%20dan%20kirimkan%20sampel%20fisiknya.%20Terima%20kasih!`;

  return (
    <section id="katalog-produk" className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      
      {/* Absolute Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
            ETALASE UTAMA DISTRIBUTOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Koleksi Karpet Berkualitas Tinggi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Pilih kategori yang sesuai dengan kebutuhan Anda. Kami menyediakan karpet masjid kualitas impor Turki & lokal ekonomis, serta berbagai model karpet ubin (tile) & karpet gulung (roll) untuk kantor.
          </p>

          {/* Tab Button Toggles */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl" id="katalog-tab-container">
              <button
                id="tab-katalog-masjid"
                onClick={() => setActiveTab('masjid')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all uppercase cursor-pointer ${
                  activeTab === 'masjid'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
                    : 'text-slate-450 hover:text-white'
                }`}
              >
                <span>🕌 KARPET MASJID</span>
              </button>
              <button
                id="tab-katalog-kantor"
                onClick={() => setActiveTab('kantor')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all uppercase cursor-pointer ${
                  activeTab === 'kantor'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-950'
                    : 'text-slate-450 hover:text-white'
                }`}
              >
                <span>🏢 KARPET KANTOR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Catalog Grid for Mosque Carpet */}
        {activeTab === 'masjid' && (
          <div id="karpet-masjid" className="space-y-12 animate-fadeIn transition-opacity duration-300">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CARPET_MASJID_DATA.map((item) => (
                <div
                  key={item.id}
                  id={`masjid-card-${item.id}`}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-600/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Upper and Badge */}
                    <div className={`relative h-48 bg-gradient-to-tr ${item.gradientFrom} ${item.gradientTo} flex flex-col justify-between p-4`}>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] bg-slate-950/80 text-emerald-400 font-bold border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                          Import {item.origin}
                        </span>
                        {item.isBestSeller && (
                          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                            Bestseller
                          </span>
                        )}
                      </div>
                      
                      {/* Artistic preview outline */}
                      <div className="border-t border-dashed border-white/20 pt-3 relative z-10">
                        <p className="text-[10px] text-amber-400 uppercase font-bold tracking-widest leading-none font-mono">{item.grade}</p>
                        <p className="text-lg font-black text-white tracking-tight mt-1 truncate">{item.name.split(' (')[0]}</p>
                      </div>
                      
                      {/* Geometric grid design visualizer effect */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900 to-transparent"></div>
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/5 font-bold text-7xl font-mono pointer-events-none select-none">
                        🕌
                      </div>
                    </div>

                    {/* Specifications detail text */}
                    <div className="p-5 space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-slate-400 border-b border-slate-850 pb-2">
                          <span>Ketebalan:</span>
                          <span className="font-bold text-slate-200 font-mono">{item.thickness} mm (Ekstra Empuk)</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 border-b border-slate-850 pb-2">
                          <span>Rapat Kerapatan:</span>
                          <span className="font-bold text-slate-200">{item.density}</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 border-b border-slate-850 pb-2">
                          <span>Bahan Serat:</span>
                          <span className="font-bold text-slate-200">{item.material}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-bold">KEUNGGULAN FISIK:</p>
                        <ul className="space-y-1.5">
                          {item.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Display available colors */}
                      <div className="pt-2">
                        <p className="text-[10px] font-mono text-slate-450 tracking-wider uppercase mb-2">Pilihan Warna Masjid Raya:</p>
                        <div className="flex gap-2">
                          {item.colors.map((color, i) => (
                            <span 
                              key={i} 
                              className={`w-5 h-5 rounded-full ${color.class} border border-white/20`}
                              title={color.name}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action button */}
                  <div className="p-5 border-t border-slate-850 bg-slate-900/60 text-left space-y-4">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-450 uppercase tracking-widest font-mono">Daftar Harga Distributor:</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-emerald-400 font-mono">{formatRupiah(item.pricePerMeter)}</span>
                        <span className="text-xs text-slate-400 font-medium">/ meter lari</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Harga roll pas (6m): <strong className="text-slate-200 font-mono">{formatRupiah(item.pricePerRoll)}</strong></p>
                    </div>

                    <a 
                      id={`btn-order-masjid-${item.id}`}
                      href={`https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20pengurus%20DKM%20Masjid.%20Boleh%20tanya%20mengenai%20katalog,%20harga%20grosir,%20dan%20survei%20gratis%20untuk%20karpet%3A%20*${encodeURIComponent(item.name)}*?`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-md transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>AMBIL HARGA GROSIR WA</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 max-w-2xl mx-auto text-left shrink-0">
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-slate-300">
                <strong>Informasi Donatur/DKM Masjid:</strong> Kami menyediakan faktur pembelian resmi, kwitansi bertanda tangan basah stempel toko, serta laporan penawaran harga pengerjaan yang transparan untuk mempermudah pelaporan dana umat.
              </p>
            </div>
          </div>
        )}

        {/* Catalog Grid for Office Carpet */}
        {activeTab === 'kantor' && (
          <div id="karpet-kantor" className="space-y-12 animate-fadeIn transition-opacity duration-300">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARPET_KANTOR_DATA.map((item) => (
                <div
                  key={item.id}
                  id={`office-card-${item.id}`}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-600/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Upper and Badge */}
                    <div className={`relative h-48 bg-gradient-to-tr ${item.gradientFrom} ${item.gradientTo} flex flex-col justify-between p-4`}>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] bg-slate-950/80 text-blue-400 font-bold border border-blue-500/25 px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                          Format {item.type} (Modular)
                        </span>
                        {item.isBestSeller && (
                          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                            Bestseller
                          </span>
                        )}
                      </div>
                      
                      <div className="border-t border-dashed border-white/20 pt-3 relative z-10">
                        <p className="text-[10px] text-amber-400 uppercase font-bold tracking-widest leading-none font-mono">Ketebalan: {item.thickness}mm</p>
                        <p className="text-lg font-black text-white tracking-tight mt-1 truncate">{item.name}</p>
                      </div>
                      
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900 to-transparent"></div>
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/5 font-bold text-7xl font-mono pointer-events-none select-none">
                        🏢
                      </div>
                    </div>

                    {/* Specifications detail text */}
                    <div className="p-5 space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-slate-400 border-b border-slate-850 pb-2">
                          <span>Material Serat:</span>
                          <span className="font-bold text-slate-200">{item.material}</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 border-b border-slate-850 pb-2">
                          <span>Bahan Lapisan Backing:</span>
                          <span className="font-bold text-slate-200 text-right text-xs max-w-[180px] truncate">{item.backing}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[10px] font-mono text-blue-400 tracking-wider uppercase font-bold">UJI PERFORMANSI RUANGAN:</p>
                        <ul className="space-y-1.5">
                          {item.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* colors layout description */}
                      <div className="pt-2">
                        <p className="text-[10px] font-mono text-slate-450 tracking-wider uppercase mb-1">Pilihan Warna Professional:</p>
                        <p className="text-xs text-slate-300 font-medium">{item.colors.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action button */}
                  <div className="p-5 border-t border-slate-850 bg-slate-900/60 text-left space-y-4">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-slate-450 uppercase tracking-widest font-mono">Quotation Harga Mulai:</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-blue-400 font-mono">{formatRupiah(item.pricePerSqm)}</span>
                        <span className="text-xs text-slate-400 font-medium">/ m² terpasang</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Pemesanan Box / Volume Besar Mendapatkan Diskon Proyek</p>
                    </div>

                    <a 
                      id={`btn-order-office-${item.id}`}
                      href={`https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(item.name)}*.%20Boleh%20minta%20info%20penawaran%20harga%20(quotation)%20dan%20bawa%20sampelnya%3F`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold text-slate-950 bg-blue-500 hover:bg-blue-400 shadow-md transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>REQUST PENAWARAN (WA)</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Pricing and Estimator Calculator (CRO High-Converting Magic Widget) */}
        <div id="kalkulator-kebutuhan" className="mt-20 border border-slate-800 bg-slate-900/50 rounded-3xl p-6 sm:p-10 text-left relative overflow-hidden max-w-4xl mx-auto">
          
          {/* Back glows */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 inline-flex">
                    <Calculator className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      Kalkulator Estimasi Kebutuhan & Harga Karpet
                    </h3>
                    <p className="text-xs text-slate-400">Bantu pengurus masjid & admin perusahaan mengkalkulasi kebutuhan anggaran secara transparan.</p>
                  </div>
                </div>
                
                {/* Instant Badge discount */}
                <div className="bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-xl text-amber-400 text-xs font-bold h-fit w-fit flex items-center gap-1">
                  <Percent className="w-3.5 h-3.5" />
                  <span>Ada Diskon Khusus DKM & Volume</span>
                </div>
              </div>
            </div>

            {/* Split Masjid vs Office Calculator Toggle UI */}
            <div className="grid md:grid-cols-12 gap-8">
              
              {/* Left Side Inputs (depends on ActiveTab) */}
              <div className="md:col-span-6 space-y-6">
                <div className="flex gap-2">
                  <button
                    id="calc-toggle-masjid"
                    onClick={() => setActiveTab('masjid')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center border cursor-pointer transition-all ${
                      activeTab === 'masjid' 
                        ? 'bg-emerald-600/10 border-emerald-500/40 text-emerald-400' 
                        : 'bg-slate-950/60 border-slate-850 text-slate-500 hover:text-white'
                    }`}
                  >
                    ESTIMASI KARPET MASJID
                  </button>
                  <button
                    id="calc-toggle-office"
                    onClick={() => setActiveTab('kantor')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center border cursor-pointer transition-all ${
                      activeTab === 'kantor' 
                        ? 'bg-blue-600/10 border-blue-500/40 text-blue-400' 
                        : 'bg-slate-950/60 border-slate-850 text-slate-500 hover:text-white'
                    }`}
                  >
                    ESTIMASI KARPET KANTOR
                  </button>
                </div>

                {activeTab === 'masjid' ? (
                  /* Mosque Calculator Inputs */
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 block">Pilih Kualitas Karpet Masjid:</label>
                      <select
                        id="masjid-calc-select"
                        value={selectedMasjidGrade}
                        onChange={(e) => setSelectedMasjidGrade(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                      >
                        {CARPET_MASJID_DATA.map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.name} - ({formatRupiah(x.pricePerMeter)} / meter)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 block">Panjang Masjid (m):</label>
                        <div className="relative">
                          <input
                            id="masjid-calc-length-input"
                            type="number"
                            min="1"
                            value={masjidLength}
                            onChange={(e) => setMasjidLength(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-250 focus:outline-none focus:border-emerald-500 font-mono font-bold"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium">Meter</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 block">Jumlah Saf (Baris):</label>
                        <div className="relative">
                          <input
                            id="masjid-calc-saf-input"
                            type="number"
                            min="1"
                            value={masjidSaf}
                            onChange={(e) => setMasjidSaf(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-250 focus:outline-none focus:border-emerald-500 font-mono font-bold"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium">Shaf</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950/85 p-3 rounded-xl border border-slate-850 space-y-1 text-xs">
                      <p className="font-bold text-slate-200">Keterangan:</p>
                      <p className="text-slate-400">Sajadah lari masjid memiliki lebar standard industri *1.2 meter/baris*. Mengukur dengan format panjang per shaf adalah cara yang paling akurat.</p>
                    </div>
                  </div>
                ) : (
                  /* Office Calculator Inputs */
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 block">Pilih Model Karpet Kantor:</label>
                      <select
                        id="office-calc-select"
                        value={selectedOfficeType}
                        onChange={(e) => setSelectedOfficeType(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      >
                        {CARPET_KANTOR_DATA.map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.name} - ({formatRupiah(x.pricePerSqm)} / m²)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 block">Panjang Ruangan (m):</label>
                        <div className="relative">
                          <input
                            id="office-calc-length-input"
                            type="number"
                            min="1"
                            value={officeLength}
                            onChange={(e) => setOfficeLength(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-250 focus:outline-none focus:border-cyan-500 font-mono font-bold"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium">Meter</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 block">Lebar Ruangan (m):</label>
                        <div className="relative">
                          <input
                            id="office-calc-width-input"
                            type="number"
                            min="1"
                            value={officeWidth}
                            onChange={(e) => setOfficeWidth(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-250 focus:outline-none focus:border-cyan-500 font-mono font-bold"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium font-mono">Meter</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950/85 p-3 rounded-xl border border-slate-850 space-y-1 text-xs">
                      <p className="font-bold text-slate-200">Keterangan:</p>
                      <p className="text-slate-400">Untuk karpet tipe *Tile modular 50x50 cm*, disarankan menambah est. 5-7% spare cadangan pembuangan (cutting waste) untuk potongan di siku tembok rumit.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side Instant Calculation Output Results (CRO conversion panel) */}
              <div className="md:col-span-6 bg-slate-950 border border-slate-850 rounded-2xl p-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <p className="text-xs font-mono font-black text-amber-400 tracking-wider uppercase">ESTIMASI BILL OF MATERIALS (BOM):</p>
                  
                  {activeTab === 'masjid' ? (
                    /* Mosque calculation results show */
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Kualitas Dipilih:</span>
                        <span className="text-white font-bold max-w-[180px] truncate text-right">{selectedMasjidName}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Total Panjang Karpet:</span>
                        <span className="text-white font-bold font-mono">{totalMasjidMeters} meter lari</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Kebutuhan Roll (Est 6m):</span>
                        <span className="text-white font-bold font-mono">{masjidRollsNeeded6m} Roll Shalat</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-450">Gratis Layanan Tambahan:</span>
                        <span className="text-emerald-400 font-bold">Survei, Obras & Pengiriman Bekasi</span>
                      </div>
                      <div className="pt-2 text-left">
                        <p className="text-[10px] text-slate-455 uppercase leading-none font-mono">ESTIMASI TOTAL INVESTASI:</p>
                        <p className="text-3xl font-black text-emerald-400 font-mono mt-1">{formatRupiah(totalMasjidPrice)}</p>
                        <p className="text-[10px] text-slate-450 mt-1 leading-normal">*Belum termasuk diskon khusus donatur/panitia DKM (Chat Admin untuk klaim diskon tambahan)</p>
                      </div>
                    </div>
                  ) : (
                    /* Office calculation results show */
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Model Dipilih:</span>
                        <span className="text-white font-bold max-w-[180px] truncate text-right">{selectedOfficeName}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Total Luas Lantai:</span>
                        <span className="text-white font-bold font-mono">{totalOfficeSqm} m² (Sqm)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-400">Estimasi Kebutuhan Dus (Est 5 m²):</span>
                        <span className="text-white font-bold font-mono">{officeTilesNeededBox} Box Moduler</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-900">
                        <span className="text-slate-450 font-medium">Layanan Instalasi:</span>
                        <span className="text-blue-400 font-bold">Tersedia Tim Pasang Profesional</span>
                      </div>
                      <div className="pt-2 text-left">
                        <p className="text-[10px] text-slate-455 uppercase leading-none font-mono">ESTIMASI HARGA PROYEK:</p>
                        <p className="text-3xl font-black text-blue-400 font-mono mt-1">{formatRupiah(totalOfficePrice)}</p>
                        <p className="text-[10px] text-slate-450 mt-1 leading-normal">*Tersedia harga grosir khusus kuantitas proyek gedung atau pemesanan di atas 100 meter persegi.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Conversion Send to WA Button */}
                <div className="pt-6 border-t border-slate-900 mt-6 md:mt-0">
                  <a
                    id="calc-submit-wa"
                    href={activeTab === 'masjid' ? `https://wa.me/6281297976189?text=${whatsappMasjidText}` : `https://wa.me/6281297976189?text=${whatsappOfficeText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 px-4 rounded-xl font-bold text-slate-950 text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                    <span>AJUKAN PENAWARAN & SURVEI SEKARANG</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
