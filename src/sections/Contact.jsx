import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const cards = [
    { label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}`, icon: Mail },
    { label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}`, icon: Phone },
    { label: 'Location', value: portfolioData.contact.address, href: null, icon: MapPin },
  ];

  return (
    <section id="contact" className="section-padding studio-bg bg-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl space-y-10 text-center"
        >
          <motion.div variants={fadeInUp}>
            <p className="section-kicker">Next Step</p>
            <h2 className="section-title">Build Something</h2>
            <p className="mx-auto mt-7 max-w-2xl text-white">
              Open for web development work, internships, collaborations, and practical systems that need clean execution.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-5 text-left md:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const content = (
                <motion.div className="resume-card h-full p-6" whileHover={{ y: -6, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}>
                  <Icon className="text-white" size={30} />
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-white/70">{card.label}</p>
                  <p className="mt-2 break-words text-sm font-bold text-white">{card.value}</p>
                </motion.div>
              );

              return card.href ? (
                <a key={card.label} href={card.href}>{content}</a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button onClick={copyEmail} className="btn-secondary inline-flex items-center gap-2 px-8 py-3">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied' : 'Copy Email'}
            </button>
            <a href={`mailto:${portfolioData.contact.email}`} className="btn-primary inline-flex items-center gap-2 px-8 py-3">
              <Send size={18} />
              Start a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
