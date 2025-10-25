import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 h-full w-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/20 px-3 py-1 text-emerald-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for select collaborations
            </div>
            <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-6xl leading-tight">
              Where design systems meet robust code.
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              I’m a design engineer blending aesthetics and engineering to ship delightful, accessible, and scalable products. From pixels to production, I craft end-to-end experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">
                Explore Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 font-medium text-white hover:bg-white/10 transition">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
