import { useState, FormEvent } from 'react';
import { MapPin, Mail, Phone, Calendar, MessageSquare, ClipboardCheck } from 'lucide-react';

export default function ShowroomMap() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'masjid',
    address: '',
    sizeDetail: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Nama dan No. WhatsApp wajib diisi.');
      return;
    }

    // Format WA Message
    const formattedCategory = formData.category === 'masjid' ? 'Karpet Masjid (DKM)' : 'Karpet Kantor (Korporat)';
    const textMsg = `Halo Furqona Karpet Bekasi,%20saya%20mengirimkan%20formulir%20konsultasi%20dari%20website%3A%0A%0A-%20*Nama%20Lengkap*%3A%20${encodeURIComponent(formData.name)}%0A-%20*No.%20WhatsApp*%3A%20${encodeURIComponent(formData.phone)}%0A-%20*Layanan%20Kategori*%3A%20${encodeURIComponent(formattedCategory)}%0A-%20*Alamat%20Lokasi*%3A%20${encodeURIComponent(formData.address || 'Bekasi')}%0A-%20*Ukuran%20/%20Tebal*%3A%20${encodeURIComponent(formData.sizeDetail || 'Konsultasikan nanti')}%0A-%20*Pesan%20Tambahan*%3A%20${encodeURIComponent(formData.message || 'Ingin survei gratis')}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/6281297976189?text=${textMsg}`, '_blank');
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section id="kontak-showroom" className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">KUNJUNGI SHOWROOM KAMI</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lokasi Showroom & Formulir Konsultasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Kami mengundang pengurus DKM Masjid, panitia pembangunan, developer gedung, & tim procurement perusahaan untuk berkunjung ke toko kami, atau menghubungi kami langsung melalui formulir instan ini.
          </p>
        </div>

        {/* Layout Split: Form on left, Map & Address on right */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="kontak-grid-split">
          
          {/* Left: Interactive Conversion Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Kirim Permintaan Survei / Penawaran</h3>
                <p className="text-xs text-slate-400 mt-1">Isi formulir ringkas di bawah ini, tim kami akan merespon cepat dan meneruskan konsultasi via WhatsApp Anda secara personal.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-name">Nama Lengkap / Instansi:</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="Contoh: H. Ahmad Syarifuddin (DKM Galaxy)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-wa">No. WhatsApp / Telepon:</label>
                    <input
                      id="form-wa"
                      type="tel"
                      required
                      placeholder="Contoh: 0812XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-205 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-cat">Kategori Kebutuhan:</label>
                    <select
                      id="form-cat"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="masjid">🕌 Karpet Masjid</option>
                      <option value="kantor">🏢 Karpet Kantor</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-address">Alamat Pengiriman / Daerah Bekasi:</label>
                  <input
                    id="form-address"
                    type="text"
                    placeholder="Contoh: Perum Grand Galaxy Blok F, Bekasi Selatan"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-size">Estimasi Ukuran / Tebal Bahan:</label>
                  <input
                    id="form-size"
                    type="text"
                    placeholder="Contoh: 120 Meter / Ingin tebal Turki 22mm"
                    value={formData.sizeDetail}
                    onChange={(e) => setFormData({ ...formData, sizeDetail: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block uppercase" htmlFor="form-message">Spesifik Pesan Lain (Optional):</label>
                  <textarea
                    id="form-message"
                    rows={2}
                    placeholder="Tuliskan jika ada kendala tiang pilar bundar atau butuh jadwal survei mendadak harian..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
                  ></textarea>
                </div>

                <button
                  id="btn-form-submit"
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold tracking-wide uppercase text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                    submitted 
                      ? 'bg-emerald-600 text-slate-100 cursor-not-allowed' 
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>{submitted ? 'MENGHUBUNGKAN KE WHATSAPP...' : 'KIRIM FORM VIA WHATSAPP (KONVERSI)'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right: Map Integration & Contact details info */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Contact Specs Card (Mandatory Same Details) */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight">Furqona Karpet Bekasi</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-white leading-tight">Alamat Showroom / Gudang Utama (Google Maps):</p>
                    <p className="text-slate-400 mt-1 leading-relaxed text-xs">
                      Jl. Perumahan Taman Kota No.9 Blok D1, RT.009/RW.016, Bekasi Jaya, Kec. Bekasi Timur, Kota Bekasi, Jawa Barat 17112, Indonesia
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 border-t border-slate-850 pt-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase leading-none font-mono">NO. WHATSAPP / TELEPON:</p>
                      <a href="tel:081297976189" className="font-bold text-white tracking-wide mt-0.5 inline-block text-xs sm:text-sm">0812-9797-6189</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-slate-850 pt-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase leading-none font-mono">EMAIL RESMI TOKO:</p>
                      <a href="mailto:furqonakarpet@gmail.com" className="font-bold text-slate-200 mt-0.5 inline-block text-xs sm:text-sm">furqonakarpet@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-850 pt-3">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase leading-none font-mono">JAM OPERASIONAL LAYANAN:</p>
                    <p className="font-bold text-slate-300 mt-0.5 text-xs sm:text-sm">Senin - Minggu: 07.00 - 21.00 WIB (Admin Chat 24 Jam Non-Stop)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Leaflet/Google Map Widget iframe */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden h-[240px] relative shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.115858632616!2d107.00938499999999!3d-6.2484643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ef6e6129881%3A0xe51de956894c2598!2sJl.%20Taman%20Kota%2C%20Bekasi%20Jaya%2C%20Kec.%20Bekasi%20Tim.%2C%20Kota%20Bekasi%2C%20Jawa%20Barat%2017112!5e0!3m2!1sid!2sid!4v1703200000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Landmark Area Perumahan Taman Kota Bekasi Jaya"
                className="filter grayscale saturate-50 contrast-125 hover:grayscale-0 transition-all duration-300"
              ></iframe>
              <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] border border-slate-800 font-mono font-bold uppercase tracking-wider py-1 px-2.5 rounded-lg">
                📍 GOOGLE MAPS SHOWROOM
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
