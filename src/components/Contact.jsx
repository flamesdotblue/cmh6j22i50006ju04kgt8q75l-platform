import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Let’s build something exceptional</h2>
              <p className="mt-3 text-white/70 max-w-xl">Open to roles and collaborations where design and engineering converge. I love tackling complex UX, building robust systems, and shipping polished interfaces.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="mailto:hello@designengineer.dev" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">
                <Mail size={18} /> hello@designengineer.dev
              </a>
              <div className="flex items-center gap-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-white/90 hover:bg-white/10 transition">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-white/90 hover:bg-white/10 transition">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
