import { useState } from 'react';
import { PORTFOLIO_DATA, TESTIMONIALS_DATA } from '../data';
import { PortfolioProject, ReviewTestimonial } from '../types';
import { Star, MapPin, Calendar, ClipboardCheck, ArrowRight, X, MessageSquare } from 'lucide-react';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<'semua' | 'masjid' | 'kantor'>('semua');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = PORTFOLIO_DATA.filter((p) => {
    if (filter === 'semua') return true;
    return p.category === filter;
  });

  return (
    <section id="galeri" className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden border-t border-slate-900">
      
      {/* Decorative accent glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">HASIL REKREASI INTERIOR TERBARU</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeri Portofolio Pemasangan di Bekasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Mulai dari proyek masjid agung megah hingga perkantoran privat, tim Furqona Karpet selalu bekerja dengan teliti, rapi, dan tepat waktu untuk menjamin standar kualitas tertinggi harian.
          </p>

          {/* Custom Filters navigation */}
          <div className="flex justify-center pt-6">
            <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl" id="portfolio-filter-container">
              <button
                id="filter-portfolio-semua"
                onClick={() => setFilter('semua')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                  filter === 'semua'
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Semua Proyek
              </button>
              <button
                id="filter-portfolio-masjid"
                onClick={() => setFilter('masjid')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                  filter === 'masjid'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Karpet Masjid
              </button>
              <button
                id="filter-portfolio-kantor"
                onClick={() => setFilter('kantor')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                  filter === 'kantor'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Karpet Kantor
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              id={`portfolio-card-${p.id}`}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all flex flex-col justify-between text-left"
            >
              <div>
                {/* Visual Graphic Representation of Project */}
                <div className={`h-48 p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br ${
                  p.category === 'masjid' ? 'from-emerald-950/70 to-teal-900/60' : 'from-slate-900 to-indigo-950/80'
                }`}>
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded w-fit relative z-10 ${
                    p.category === 'masjid' ? 'bg-emerald-800/80 text-emerald-200' : 'bg-slate-800 text-cyan-300'
                  }`}>
                    {p.category === 'masjid' ? '🕌 Karpet Masjid' : '🏢 Karpet Kantor'}
                  </span>

                  <div className="relative z-10 pb-2">
                    <p className="text-[11px] text-amber-400 font-mono font-bold uppercase tracking-wider">{p.amount}</p>
                    <h3 className="text-lg font-bold text-white tracking-tight mt-1 line-clamp-1">{p.title}</h3>
                  </div>

                  {/* Absolute backdrop pattern */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-900/70 opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5 text-9xl font-semibold select-none pointer-events-none">
                    {p.category === 'masjid' ? '🕌' : '🏢'}
                  </div>
                </div>

                {/* Details layout block */}
                <div className="p-5 space-y-4">
                  <div className="flex flex-col gap-2.5 text-xs text-slate-350">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{p.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Selesai: {p.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="line-clamp-1">{p.amount} terpasang</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-850 pt-3 line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Action layout */}
              <div className="p-5 pt-0">
                <button
                  id={`btn-portfolio-detail-${p.id}`}
                  onClick={() => setSelectedProject(p)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-950 text-xs font-bold text-slate-300 group-hover:text-amber-400 group-hover:bg-slate-850 transition-all border border-slate-850"
                >
                  <span>Buka Detail Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Customer Testimonial Slider Panel (Built-in social proof) */}
        <div id="testimoni" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 text-left max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            
            {/* Left title card */}
            <div className="md:max-w-xs space-y-3 shrink-0">
              <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest leading-none">TESTIMONI ASLI</p>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Kisah Kepuasan Pelanggan Kami</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Simak kepuasan pengurus Dewan Kemakmuran Masjid (DKM) & perwakilan perusahaan yang telah memakai layanan Furqona.</p>
              
              {/* Star items display */}
              <div className="flex gap-1 pt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Right slider testimonials body */}
            <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 relative flex flex-col justify-between flex-1 min-h-[220px]">
              
              {/* Quote marks background */}
              <div className="absolute top-3 right-6 text-slate-900/80 font-serif text-8xl pointer-events-none select-none select-all-none">”</div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed relative z-10">
                  "{TESTIMONIALS_DATA[activeTestimonial].quote}"
                </p>

                <div className="border-t border-slate-900 pt-4 text-left">
                  <p className="text-xs sm:text-sm font-black text-white">{TESTIMONIALS_DATA[activeTestimonial].name}</p>
                  <p className="text-[10px] sm:text-xs text-slate-450 mt-0.5">{TESTIMONIALS_DATA[activeTestimonial].role}</p>
                  <p className="text-[9px] text-emerald-400 font-mono tracking-wider items-center gap-1 inline-flex uppercase">
                    <MapPin className="w-2.5 h-2.5" />
                    <span>{TESTIMONIALS_DATA[activeTestimonial].location}</span>
                  </p>
                </div>
              </div>

              {/* Slide controls layout */}
              <div className="flex gap-2 justify-end pt-4 mt-4 border-t border-slate-900">
                {TESTIMONIALS_DATA.map((item, idx) => (
                  <button
                    id={`btn-testimonial-dot-${idx}`}
                    key={item.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                      activeTestimonial === idx ? 'bg-amber-400 w-6' : 'bg-slate-800'
                    }`}
                    aria-label={`Slide testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Dynamic Project Details Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left relative space-y-6 max-h-[90vh] overflow-y-auto">
              
              {/* Top header close */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono tracking-widest font-bold uppercase px-2 py-0.5 rounded ${
                    selectedProject.category === 'masjid' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20' : 'bg-slate-950 text-cyan-400'
                  }`}>
                    {selectedProject.category === 'masjid' ? 'MASJID' : 'OFFICE'}
                  </span>
                  <span className="text-xs text-slate-500 font-bold font-mono">{selectedProject.date}</span>
                </div>
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">{selectedProject.amount}</p>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{selectedProject.title}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{selectedProject.location}</span>
                </p>
                
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.category === 'masjid' ? (
                    <div className="text-[11px] text-slate-400 bg-slate-900 border border-slate-850 p-3 rounded-lg flex items-start gap-2 leading-relaxed">
                      <span>💡</span>
                      <span><strong>Metode Potong & Obras:</strong> Pada pemasangan ini, tim Furqona melakukan pemotongan melingkar tiang bulat dan obras ulang keliling pilar tepat di depan DKM agar pemasangan rata tanpa kerutan lipat.</span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-400 bg-slate-900 border border-slate-850 p-3 rounded-lg flex items-start gap-2 leading-relaxed">
                      <span>💡</span>
                      <span><strong>Metode Modular Tile:</strong> Pemasangan dikerjakan pada hari Sabtu-Minggu demi menjaga kelancaran aktivitas harian perkantoran. Seluruh sisa potongan kami rapikan dan buang bersih.</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <button
                  id="modal-btn-close"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-200 transition-colors"
                >
                  TUTUP JENDELA
                </button>
                <a
                  id="modal-btn-wa"
                  href={`https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20melihat%20portofolio%20pemasangan%20di%20*${encodeURIComponent(selectedProject.title)}*.*${encodeURIComponent(selectedProject.location)}*.%20Boleh%20tanya%20mengenai%20layanan%20survei%20gratis%20untuk%20lokasi%2520saya?`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-xl bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>KONSULTASI MODEL INI</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
