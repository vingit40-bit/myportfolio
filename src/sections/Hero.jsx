import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const nameParts = [portfolioData.hero.firstName, portfolioData.hero.lastName];

  return (
    <section id="hero" className="studio-bg relative min-h-screen overflow-hidden bg-background pt-24 scanline">
      <div className="container-custom grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="z-10 order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-secondary lg:mx-0"
          >
            <Sparkles size={15} />
            Portfolio 2026
          </motion.div>

          <h1 className="font-sans text-5xl font-black uppercase md:text-7xl xl:text-8xl">
            <span className="block text-white/95">Creative</span>
            {nameParts.map((part, index) => (
              <motion.span
                key={part}
                className="headline-name block"
                initial={{ opacity: 0, x: index === 0 ? -34 : 34 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.22 + index * 0.12 }}
              >
                {part}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/[0.08]2 md:text-2xl lg:mx-0"
          >
            {portfolioData.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base lg:mx-0"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <button onClick={() => scrollToSection('#projects')} className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm md:text-base">
              <ArrowDown size={18} />
              See Work
            </button>
            <a href={portfolioData.hero.resume} download className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-sm md:text-base">
              <Download size={18} />
              {portfolioData.hero.cta.resume}
            </a>
            <button onClick={() => scrollToSection('#contact')} className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-sm md:text-base">
              <Mail size={18} />
              Contact
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
          className="relative order-1 flex min-h-[430px] items-end justify-center lg:order-2 lg:min-h-[650px]"
        >
          <motion.div
            className="absolute bottom-14 h-[62%] w-[72%] max-w-[420px] border border-primary/40 bg-primary/10 tilt-panel"
            animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-8 top-20 hidden h-24 w-24 border border-secondary/60 md:block"
            animate={{ rotate: [0, 180, 360], scale: [1, 1.08, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
          <img
            src={portfolioData.hero.photo}
            alt={portfolioData.hero.name}
            className="float-slow relative z-10 h-[430px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_26px_42px_rgba(0,0,0,0.55)] md:h-[560px] lg:h-[670px]"
          />
          <div className="absolute bottom-10 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

