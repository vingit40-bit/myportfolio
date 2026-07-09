import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp } from '../animations/variants';

const icons = [Mail, Phone, MapPin];

const About = () => {
  const quickDetails = portfolioData.about.details.filter((item) => ['Email', 'Phone', 'Address'].includes(item.label));

  return (
    <section id="about" className="section-padding studio-bg bg-background">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-kicker">Profile</p>
          <h2 className="section-title">About Alvin</h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, x: -36, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-4 border border-primary/30 tilt-panel" />
            <div className="resume-card tilt-panel p-4">
              <img
                src={portfolioData.hero.photo}
                alt={`${portfolioData.hero.name} portrait`}
                className="h-[420px] w-full object-contain object-bottom"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-7"
          >
            <div className="resume-card p-7 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-white">Builder mindset</p>
              <div className="mt-5 grid gap-5 text-base leading-relaxed text-text-secondary md:grid-cols-2">
                <p>{portfolioData.about.summary}</p>
                <p>{portfolioData.about.objective}</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {quickDetails.map((item, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={item.label}
                    className="resume-card p-5"
                    whileHover={{ y: -6, rotate: index === 1 ? 0 : index === 0 ? -1 : 1 }}
                  >
                    <Icon className="text-white" size={26} />
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-white/55">{item.label}</p>
                    <p className="mt-2 break-words text-sm font-bold text-white">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
