import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Rocket, User, Code2, Mail } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.setTimeout(handleHashScroll, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Design Engineer</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-1.5 hover:bg-white/90 transition">
              <Code2 size={16} />
              <span>View Projects</span>
            </a>
          </nav>
          <a href="#contact" className="md:hidden inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-1.5 hover:bg-white/90 transition">
            <Mail size={16} />
            <span>Hire me</span>
          </a>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="work" className="scroll-mt-24">
          <Work />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Design Engineer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition flex items-center gap-2"><User size={16} /> About</a>
            <a href="#work" className="hover:text-white transition flex items-center gap-2"><Code2 size={16} /> Work</a>
            <a href="#contact" className="hover:text-white transition flex items-center gap-2"><Mail size={16} /> Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
