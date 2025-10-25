import { motion } from 'framer-motion';
import { Palette, Code2, Layers, Zap } from 'lucide-react';

const skills = [
  { icon: Palette, title: 'Design Systems', desc: 'Token-driven, accessible, scalable UI libraries.' },
  { icon: Code2, title: 'Frontend Engineering', desc: 'React, TypeScript, Tailwind, performance-first.' },
  { icon: Layers, title: 'Prototyping', desc: 'Hi-fi interactive prototypes and rapid iteration.' },
  { icon: Zap, title: 'Workflow & Ops', desc: 'CI/CD, testing, docs, and design-to-dev pipelines.' }
];

export default function About() {
  return (
    <section className="relative py-24 bg-black">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Design Engineer focused on clarity and craft</h2>
            <p className="mt-4 text-white/70">
              I bridge product design and software engineering to build interfaces that are as intentional as they are performant. My process is systems-first: define tokens, codify patterns, ship components, and empower teams.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 p-4">
                <div className="text-3xl font-semibold">8+<span className="text-base font-normal text-white/60"> yrs</span></div>
                <div className="text-white/60 text-sm">Design & engineering experience</div>
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <div className="text-3xl font-semibold">40+<span className="text-base font-normal text-white/60"> shipped</span></div>
                <div className="text-white/60 text-sm">Projects and product features</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 text-black flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-medium">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
