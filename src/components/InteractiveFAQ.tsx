import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { Plus, Minus, MessageSquare, ShieldCheck, Mail, PhoneCall } from 'lucide-react';

export default function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="bg-slate-900 border-y border-slate-800/80 py-20 lg:py-28 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">AKSES JAWABAN CEPAT</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tanya Jawab & Atasi Keraguan Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Menjawab segala pertanyaan paling umum seputar pemesanan, survei gratis, pengerjaan obras pilar, garansi kerapian shaf, pembayaran COD, hingga jangkauan pengiriman kami.
          </p>
        </div>

        {/* FAQ Accordion layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden hover:border-slate-750/85 transition-all"
              >
                <button
                  id={`btn-faq-toggle-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-205 leading-snug tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-850 shrink-0 text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4 text-amber-400" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Smooth Expandable Body */}
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-slate-900 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-slate-900/40 text-xs sm:text-sm text-slate-400 leading-relaxed text-left">
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct Objection Handler Bottom Callout Support CARD */}
        <div className="mt-16 max-w-2xl mx-auto bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 text-left shrink-0">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shrink-0 inline-flex text-emerald-400">
            <ShieldCheck className="w-10 h-10" />
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">Kekhawatiran Lain? Konsultasi Langsung dengan Owner!</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Tim kami responsif 24 jam untuk menjawab keberatan Anda yang lainnya secara ramah & mengupayakan solusi harga terbaik.</p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                id="faq-btn-wa-direct"
                href="https://wa.me/6281297976189?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20ingin%20konsultasi%20mengenai%20katalog%20dan%20alamat%20pemasangan."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
                <span>Konsultasi WA</span>
              </a>
              <a
                id="faq-btn-phone"
                href="tel:081297976189"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-800 hover:border-slate-600 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Center (0812-9797-6189)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
