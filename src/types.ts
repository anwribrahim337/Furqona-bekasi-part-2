export interface CarpetMasjid {
  id: string;
  name: string;
  origin: 'Turki' | 'Lokal' | 'Custom';
  grade: 'Grade Super Premium' | 'Grade A Premium' | 'Grade B Standar' | 'Grade C Ekonomis';
  thickness: number; // in mm
  density: string; // e.g. "Rapat Plus" or "Ekstra Rapat"
  material: string; // e.g., "Heatset Wool, Acrylic" or "Polypropylene"
  specs: string[];
  pricePerMeter: number; // in Rupiah (e.g., 350000)
  pricePerRoll: number; // in Rupiah (for 1.2m x 6m or 1.2m x 12m)
  rollSize: string; // e.g., "1.2m x 6m" or "1.2m x 12m"
  colors: { name: string; hex: string; class: string }[];
  isBestSeller?: boolean;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface CarpetKantor {
  id: string;
  name: string;
  type: 'Tile' | 'Roll' | 'Custom Desk';
  specs: string[];
  thickness: number; // in mm
  material: string; // e.g., "Nylon Premium" or "Polypropylene BCF"
  backing: string; // e.g., "PVC with Fiberglass" or "Action Back"
  pricePerSqm: number; // in Rupiah (e.g., 185000)
  isBestSeller?: boolean;
  colors: string[];
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  category: 'masjid' | 'kantor';
  date: string;
  amount: string; // e.g., "300 Meter" or "150 Box Tile"
  image: string; // Visual icon or color card with details
  description: string;
}

export interface ReviewTestimonial {
  id: string;
  name: string;
  role: string; // e.g., "Ketua DKM Masjid Agung Bekasi"
  location: string;
  quote: string;
  rating: number;
}
