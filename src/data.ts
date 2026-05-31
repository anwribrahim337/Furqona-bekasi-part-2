import { CarpetMasjid, CarpetKantor, PortfolioProject, ReviewTestimonial } from './types';

export const CARPET_MASJID_DATA: CarpetMasjid[] = [
  {
    id: 'm1',
    name: 'Turki Kingdom Royal Edition (Grade Super)',
    origin: 'Turki',
    grade: 'Grade Super Premium',
    thickness: 22,
    density: 'Sangat Padat (Extra High Density)',
    material: 'Super Soft Heatset Bulu Wool Acrylic',
    specs: [
      'Ketebalan super mewah 22mm, paling empuk untuk lutut & dahi',
      'Serat bulu sangat padat dan halus, tidak gampang kempes',
      'Desain pilar & mihrab klasik timur tengah berkelas',
      'Anti-statis, anti-bakteri, dan mudah divakum'
    ],
    pricePerMeter: 850000,
    pricePerRoll: 5100000, // For 6m
    rollSize: '1.2m x 6m (Tersedia hingga 12m/30m)',
    colors: [
      { name: 'Hijau Emerald Gold', hex: '#0B5E3C', class: 'bg-[#0B5E3C]' },
      { name: 'Merah Sajadah Gold', hex: '#8B0000', class: 'bg-[#8B0000]' },
      { name: 'Biru Safir Gold', hex: '#002B5B', class: 'bg-[#002B5B]' }
    ],
    isBestSeller: true,
    imageAlt: 'Karpet Turki Kingdom Royal Edition Grade Super Premium',
    gradientFrom: 'from-emerald-950',
    gradientTo: 'to-emerald-800'
  },
  {
    id: 'm2',
    name: 'Turki Sultan Raudhah (Grade A)',
    origin: 'Turki',
    grade: 'Grade A Premium',
    thickness: 16,
    density: 'Padat Tinggi (High Density)',
    material: 'Premium Heatset Soft thread',
    specs: [
      'Ketebalan nyaman 16mm, sangat pas untuk sholat berjamaah harian',
      'Pintalan bulu rapat & kokoh, tidak menimbulkan alergi debu',
      'Tersedia corak pilar kharismatik atau motif minimalis modern',
      'Cocok untuk Masjid Agung atau Masjid Perumahan Elite di Bekasi'
    ],
    pricePerMeter: 600000,
    pricePerRoll: 3600000, // For 6m
    rollSize: '1.2m x 6m (Atau custom potongan shaf)',
    colors: [
      { name: 'Hijau Al-Rawda', hex: '#115E59', class: 'bg-[#115E59]' },
      { name: 'Merah Raudhah', hex: '#991B1B', class: 'bg-[#991B1B]' }
    ],
    isBestSeller: false,
    imageAlt: 'Karpet Turki Sultan Raudhah Grade A Premium',
    gradientFrom: 'from-amber-950',
    gradientTo: 'to-amber-900'
  },
  {
    id: 'm3',
    name: 'Furqona Minimalist Turkey (Grade B)',
    origin: 'Lokal',
    grade: 'Grade B Standar',
    thickness: 12,
    density: 'Standar Rapat',
    material: 'Polypropylene BCF Soft',
    specs: [
      'Ketebalan 12mm, standar mushola berkualitas dan hemat',
      'Motif garis saf/minimalis modern (merapikan barisan sholat)',
      'Perawatan sangat praktis, tidak gampang menyerap bau kotor',
      'Best Value untuk masjid komplek atau mushola kantor di Bekasi'
    ],
    pricePerMeter: 350000,
    pricePerRoll: 2100000,
    rollSize: '1.2m x 6m atau 1.2m x 12m',
    colors: [
      { name: 'Hijau Minimalis', hex: '#166534', class: 'bg-[#166534]' },
      { name: 'Merah Minimalis', hex: '#7F1D1D', class: 'bg-[#7F1D1D]' }
    ],
    isBestSeller: true,
    imageAlt: 'Karpet Furqona Minimalist Turkey Grade B Standar',
    gradientFrom: 'from-teal-950',
    gradientTo: 'to-teal-900'
  },
  {
    id: 'm4',
    name: 'Lokal Mushola Hemat (Grade C)',
    origin: 'Lokal',
    grade: 'Grade C Ekonomis',
    thickness: 10,
    density: 'Sedang',
    material: 'Polypropylene Standard',
    specs: [
      'Ketebalan hemat 10mm, harga pengerjaan super ekonomis',
      'Pilihan terbaik untuk mushola RT/RW, sekolah, atau pabrik',
      'Tahan lama untuk penggunaan frekuensi tinggi harian',
      'Pengerjaan obras pinggir keliling rapi gratis dari tim Furqona'
    ],
    pricePerMeter: 200000,
    pricePerRoll: 1200000,
    rollSize: '1.2m x 6m / Roll pas',
    colors: [
      { name: 'Hijau Polos Klasik', hex: '#15803D', class: 'bg-[#15803D]' },
      { name: 'Merah Polos Klasik', hex: '#B91C1C', class: 'bg-[#B91C1C]' }
    ],
    isBestSeller: false,
    imageAlt: 'Karpet Lokal Mushola Hemat Grade C Ekonomis',
    gradientFrom: 'from-slate-900',
    gradientTo: 'to-slate-800'
  }
];

export const CARPET_KANTOR_DATA: CarpetKantor[] = [
  {
    id: 'k1',
    name: 'Office Tile Diamond Premium Series',
    type: 'Tile',
    thickness: 7,
    material: 'Nylon Space Dyed Heavy Duty',
    backing: 'Eco-PVC dengan Fiberglass Reforced (Tahan Lembab)',
    specs: [
      'Ukuran modular presisi 50cm x 50cm, gampang dipasang/diganti individu',
      'Sangat tahan digilas roda kursi kerja berulang-ulang tanpa rontok',
      'Desain modern stripes minimalist memberi kesan ruang kerja dinamis & luas',
      'Sertifikasi Anti-Static dan meredam suara ruangan hingga 25 desibel'
    ],
    pricePerSqm: 220000,
    isBestSeller: true,
    colors: ['Charcoal Striped', 'Modern Grey Accent', 'Ocean Navy', 'Beige Corporate'],
    imageAlt: 'Karpet Tile Kantor Premium Diamond Series',
    gradientFrom: 'from-slate-950',
    gradientTo: 'to-slate-800'
  },
  {
    id: 'k2',
    name: 'Furqona Commercial Roll Loop-Pile',
    type: 'Roll',
    thickness: 6,
    material: 'Premium Polypropylene BCF Fiber',
    backing: 'Woven Action Back heavy duty',
    specs: [
      'Lebar roll standar 4 meter untuk cakupan luas tanpa banyak sambungan',
      'Loop pile rapat mencegah debu masuk ke serat dalam, mudah divakum',
      'Pilihan hemat untuk koridor hotel, aula meeting, dan ruko operasional Bekasi',
      'Pilihan warna solid elegan untuk nuansa formal profesional'
    ],
    pricePerSqm: 140000,
    isBestSeller: false,
    colors: ['Steel Grey', 'Haze Blue', 'Muted Crimson', 'Corporate Green'],
    imageAlt: 'Karpet Roll Kantor Loop Pile Commercial',
    gradientFrom: 'from-blue-950',
    gradientTo: 'to-indigo-900'
  },
  {
    id: 'k3',
    name: 'Platinum Heavy-Duty Acoustic Tile',
    type: 'Tile',
    thickness: 8,
    material: '100% Solution Dyed Nylon (SDA Premium)',
    backing: 'Bitumen Advanced Shock-Absorber Cushion',
    specs: [
      'Ukuran 50cm x 50cm dengan ketebalan 8mm - performa akustik paling senyap',
      'Pilihan utama untuk ruang meeting direksi, studio, dan kantor eksekutif',
      'Tahan noda kopi/saus (Stain-resistant liquid shield technology)',
      'Cocok untuk standar kelas gedung perkantoran mewah di Summarecon Bekasi'
    ],
    pricePerSqm: 290000,
    isBestSeller: false,
    colors: ['Premium Charcoal Black', 'Executive Granite Blue', 'Warm Copper Bronze'],
    imageAlt: 'Karpet Tile Acoustic Platinum Kantor',
    gradientFrom: 'from-zinc-950',
    gradientTo: 'to-zinc-800'
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Mesjid Jamie Al-Azhar',
    location: 'Grand Galaxy, Bekasi Barat, Kota Bekasi',
    category: 'masjid',
    date: 'Maret 2026',
    amount: '240 Meter Pemasangan',
    image: 'Grand Galaxy - Bekasi Kota',
    description: 'Pemasangan Karpet Turki Kingdom Royal Edition Grade Super Hijau Emerald. Obras langsung di tempat untuk menyesuaikan lekukan tiang pilar bundar masjid agar shaf sholat terbentang lurus & rapat tanpa cela.'
  },
  {
    id: 'p2',
    title: 'Masjid Raya Al-Barokah',
    location: 'Cikarang Selatan, Kabupaten Bekasi',
    category: 'masjid',
    date: 'April 2026',
    amount: '180 Meter Pemasangan',
    image: 'Cikarang - Kab. Bekasi',
    description: 'Instalasi Karpet Turki Sultan Raudhah Grade A Merah Sajadah. Menghasilkan tampilan interior masjid yang sangat megah, bersih, dan harum dengan pengerjaan keliling tiang masjid yang super presisi.'
  },
  {
    id: 'p3',
    title: 'Gedung R&D Kantor PT Suzuki Motor',
    location: 'Cikarang Industrial Estate, Bekasi',
    category: 'kantor',
    date: 'Februari 2026',
    amount: '450 m² Pemasangan',
    image: 'Kawasan Industri Cikarang',
    description: 'Pemasangan Karpet Tile Premium Diamond Series motif Charcoal Stripe. Memberikan nuansa workspace yang modern, antistatik, dan minim bising, sangat meningkatkan konsentrasi pekerja.'
  },
  {
    id: 'p4',
    title: 'Mushola Al-Huda Perumahan',
    location: 'Tambun Selatan, Bekasi Timur',
    category: 'masjid',
    date: 'Mei 2026',
    amount: '60 Meter Pemasangan',
    image: 'Tambun - Bekasi Timur',
    description: 'Penyediaan dan pemasangan Karpet Furqona Minimalist Turkey Grade B Merah Minimalis untuk kebutuhan shalat jamaah komplek perumahan. Selesai dalam 1 hari kerja, rapi, wangi, siap pakai.'
  },
  {
    id: 'p5',
    title: 'Ruang Meeting & Co-Working Space Grand Galaxy',
    location: 'Galaxy Business Center, Bekasi Selatan',
    category: 'kantor',
    date: 'Januari 2026',
    amount: '120 m² Pemasangan',
    image: 'Galaxy Business City',
    description: 'Pemasangan Karpet Tile Acoustic Platinum Premium warna Executive Granite Blue. Area meeting menjadi sangat kedap, elegan, nyaman digunakan berjam-jam, serta tahan gesekan roda kursi berputar.'
  }
];

export const TESTIMONIALS_DATA: ReviewTestimonial[] = [
  {
    id: 't1',
    name: 'H. Ahmad Syarifuddin',
    role: 'Ketua DKM Masjid Jamie Al-Azhar',
    location: 'Grand Galaxy, Bekasi',
    quote: 'Alhamdulillah, pelayanan dari Furqona Karpet Bekasi sangat luar biasa. Timnya datang tepat waktu untuk survei bawa contoh fisik karpet yang tebal-tebal. Saat pemasangan, potongan di sekeliling pilar masjid sangat rapi sekali, di-obras di tempat langsung jadi rapat tanpa kerutan. Jamaah sangat senang karena masjid sekarang super empuk & wangi!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ibu Widya Astuti',
    role: 'Procurement Specialist PT Cikarang Electronics',
    location: 'Kawasan Industri Cikarang, Bekasi',
    quote: 'Kami butuh karpet kantor modular tipe Tile sebanyak 350 meter persegi dalam waktu cepat. Furqona Karpet merespon dengan cepat, memberikan quotation profesional, dan membawakan sampel langsung untuk disetujui direksi kami. Pemasangan tuntas di hari libur sehingga hari kerja sudah beres. Sangat direkomendasikan untuk korporasi!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Ustadz Burhanuddin',
    role: 'Pengurus Yayasan Pesantren Al-Huda',
    location: 'Tambun Selatan, Bekasi',
    quote: 'Awalnya ragu beli karpet online takut tipis. Tapi agen Furqona Bekasi menjelaskan dengan detail dan menggratiskan survei ke Tambun. Kami memesan jenis minimalis lokal karena dana terbatas, tapi kualitasnya sangat bagus, tebalnya pas, dan obras pinggirannya rapi. Lebih murah dari toko biasa karena harga distributor langsung!',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    q: 'Apakah tim Furqona Karpet Bekasi bisa datang langsung ke lokasi untuk survei pengkuran?',
    a: 'Ya, 100% GRATIS! Tim profesional kami melayani survei lokasi, pengukuran presisi, sekaligus membawakan buku katalog sampel karpet fisik (Karpet Masjid & Kantor) langsung ke tempat Anda di seluruh wilayah Bekasi (Barat, Timur, Selatan, Utara, Cibitung, Tambun, Cikarang, dll) tanpa biaya sepeser pun.'
  },
  {
    q: 'Berapa minimal order untuk pemesanan karpet masjid maupun kantor?',
    a: 'Untuk area Bekasi dan sekitarnya, pemesanan karpet masjid mulai dari 1 roll (panjang 6 meter). Untuk karpet kantor tipe tile mulai dari 1 box / dus (ukuran 5 m²). Kami memberikan diskon grosir distributor khusus untuk pemesanan skala masjid sedang-besar dan proyek perkantoran.'
  },
  {
    q: 'Bagaimana pengerjaan obras karpet dan potongan jika masjid memiliki banyak tiang/pilar?',
    a: 'Kami memiliki tim instalasi spesialis masjid berpilar yang sangat berpengalaman. Karpet akan dipotong melingkari pilar atau sudut tembok secara milimeter-presisi di lokasi, lalu kami obras langsung di tempat menggunakan mesin obras portable khusus kami. Hasil akhir dijamin lurus, mengunci rapi, tidak berserabut, dan shaf sholat menjadi tersusun rapat tanpa kerutan.'
  },
  {
    q: 'Apakah bisa melakukan pembayaran di tempat (COD) setelah karpet terpasang?',
    a: 'Tentu bisa! Untuk jaminan rasa aman, kami menyediakan sistem pembayaran fleksibel bergaransi. Setelah survei dan kesepakatan harga, pembayaran tanda jadi (DP) bisa disepakati, lalu pelunasan sisa tagihan bisa dilakukan langsung setelah seluruh karpet terpasang rapi, di-obras, divakum bersih, dan disetujui oleh pengurus DKM atau manajemen kantor.'
  },
  {
    q: 'Apakah harga yang tercantum sudah termasuk ongkos pengiriman dan bonus pelengkap?',
    a: 'Khusus pemasangan di wilayah Bekasi, kami memberikan GRATIS ONGKOS KIRIM! Selain itu, untuk karpet masjid kami juga sering memberikan bonus tambahan berupa sajadah imam tebal premium, parfum karpet masjid khas Turki original wangi tahan lama, serta pembersihan vakum gratis sebelum penyerahan.'
  },
  {
    q: 'Bagaimana cara menghubungi Furqona Karpet Bekasi secara cepat?',
    a: 'Sangat mudah! Anda bisa mengklik tombol WhatsApp yang tersebar di halaman ini atau menghubungi Call Center kami langsung di nomor 0812-9797-6189. Admin kami aktif responsif selama 24 jam untuk membantu melayani konsultasi harga, request penawaran resmi, maupun penjadwalan survei gratis.'
  }
];
