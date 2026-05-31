import { Building2, Landmark, Users, Ruler, ShieldAlert } from 'lucide-react';

export default function Stats() {
  const statsList = [
    {
      id: 's1',
      icon: <Landmark className="w-6 h-6 text-emerald-400" />,
      value: '350+',
      label: 'Masjid & Mushola se-Bekasi',
      desc: 'Telah terpasang rapi, dari mushola instansi kecil hingga masjid agung komplek'
    },
    {
      id: 's2',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      value: '180+',
      label: 'Korporat & Kantor Cabang',
      desc: 'Mulai dari ruko di Harapan Indah hingga pabrik besar di MM2100 & Jababeka Cikarang'
    },
    {
      id: 's3',
      icon: <Ruler className="w-6 h-6 text-cyan-400" />,
      value: '75.000+',
      label: 'Meter Karpet Terpasang',
      desc: 'Potongan murni presisi di atas lantai masjid dan lantai ruangan kantor secara profesional'
    },
    {
      id: 's4',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      value: '10.000+',
      label: 'Jamaah & Pekerja Nyaman',
      desc: 'Merasa nyaman beribadah khusyuk serta bekerja lebih produktif berkat karpet Furqona'
    }
  ];

  const partners = [
    'Masjid Al-Azhar Grand Galaxy',
    'PT Suzuki R&D Indonesia',
    'Masjid Raya Al-Barkah Alun-Alun',
    'PT Cikarang Industrial Estate',
    'Masjid Raya Al-Barokah Cikarang',
    'Mushola Al-Huda Indah Tambun',
    'Gedung PEMDA Kota Bekasi',
    'PT Delta Silicon Office Park'
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid Social Proof / Brand Trust Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">DIREKOMENDASIKAN DI BEKASI RAYA</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Kredibilitas Nyata & Hasil Pemasangan Presisi
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Kami tidak sekadar menjual karpet fisik, kami memberikan kepuasan bergaransi melalui kualitas bahan terbaik dan standar pemasangan premium tingkat tinggi.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat) => (
            <div 
              key={stat.id} 
              id={`stat-card-${stat.id}`}
              className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 text-left hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-900 w-fit rounded-xl border border-slate-800">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-white font-mono tracking-tight">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-200">{stat.label}</p>
                </div>
              </div>
              <p className="text-xs text-slate-450 leading-relaxed mt-3 pt-3 border-t border-slate-900">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Rolling trust ticker of local names */}
        <div className="mt-16 pt-10 border-t border-slate-850">
          <p className="text-center text-xs font-semibold text-slate-500 tracking-wide mb-6 uppercase">
            Telah Mempercayakan Kebutuhan Karpet Mereka Kepada Kami:
          </p>
          <div className="relative overflow-hidden w-full py-4 bg-slate-950/30 rounded-xl border border-slate-850/50">
            <div className="flex animate-marquee whitespace-nowrap gap-12 text-slate-400 text-xs font-bold font-mono">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Styled animation logic in absolute inline element to support keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
