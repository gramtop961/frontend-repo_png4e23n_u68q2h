import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchAreas from './components/ResearchAreas';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ResearchAreas />
        <Contact />
      </main>
    </div>
  );
}
