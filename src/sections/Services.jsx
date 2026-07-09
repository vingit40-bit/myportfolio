import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer, cardHover } from '../animations/variants';

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Database,
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              What I can do for you
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card text-center group"
                  whileHover={cardHover.whileHover}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon size={32} className="text-accent" />
                  </div>

                  <h3 className="text-xl font-bold font-display mb-3 text-gradient">
                    {service.title}
                  </h3>

                  <p className="text-text-secondary text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
