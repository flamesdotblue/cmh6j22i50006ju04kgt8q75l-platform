import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Atlas Design System',
    desc: 'A token-driven, accessible design system powering 12+ products with theming and dark mode.',
    tags: ['React', 'TypeScript', 'Radix', 'Tailwind'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics UI with 60fps interactions, charts, and complex filtering.',
    tags: ['React', 'WebSockets', 'Vite', 'D3'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Prototyping Toolkit',
    desc: 'A library of motion patterns and components for rapid concept validation.',
    tags: ['Framer Motion', 'Storybook', 'Jest'],
    live: '#',
    repo: '#'
  },
  {
    title: '3D Product Teaser',
    desc: 'Interactive hero with 3D assets and lighting, optimized for mobile and desktop.',
    tags: ['Spline', 'Canvas', 'Performance'],
    live: '#',
    repo: '#'
  }
];

export default function Work() {
  return (
    <section className="relative py-24">
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A mix of system-level thinking, interaction craft, and production-grade engineering.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 font-medium text-white hover:bg-white/10 transition">Request case study</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="p-5">
                <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-emerald-400/20 via-cyan-500/10 to-blue-500/10 border border-white/10" />
                <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-full border border-white/15 bg-black/40 px-2 py-1 text-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a href={p.live} className="inline-flex items-center gap-1 text-sm text-white hover:text-emerald-300 transition">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
