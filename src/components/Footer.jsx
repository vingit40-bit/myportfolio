import { motion } from 'framer-motion';
import { ArrowUp, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-background px-4 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-4 text-xs font-bold text-white/70">
          <a href="#contact" className="hover:text-primary">Terms & Support</a>
          <a href="#contact" className="hover:text-primary">Privacy Policy</a>
        </div>

        <p className="text-sm font-bold text-white/80">
          Copyright ©{new Date().getFullYear()} <span className="text-primary">{portfolioData.hero.name}</span> | All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a href={portfolioData.hero.social.github} target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-primary" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={portfolioData.hero.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-primary" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={portfolioData.hero.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-primary" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href={`mailto:${portfolioData.hero.social.email}`} className="text-white/65 hover:text-primary" aria-label="Email">
            <Mail size={18} />
          </a>
          <motion.button
            onClick={scrollToTop}
            className="glass ml-2 rounded-full p-2 text-white/75 hover:text-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
