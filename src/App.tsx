import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductCatalog from './components/ProductCatalog';
import ValueProposition from './components/ValueProposition';
import ProjectGallery from './components/ProjectGallery';
import InteractiveFAQ from './components/InteractiveFAQ';
import ShowroomMap from './components/ShowroomMap';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProductCatalog />
        <ValueProposition />
        <ProjectGallery />
        <InteractiveFAQ />
        <ShowroomMap />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
