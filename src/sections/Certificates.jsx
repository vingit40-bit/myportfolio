import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer, cardHover } from '../animations/variants';

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding studio-bg bg-background">
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
            <p className="section-kicker">Credentials</p>
            <h2 className="section-title">Certificates</h2>
            <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-text-secondary md:text-base">
              Professional certifications and achievements
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                className="resume-card group"
                whileHover={cardHover.whileHover}
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl mb-4 overflow-hidden border border-primary/20">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <object
                      data={cert.file}
                      type="application/pdf"
                      className={`w-full h-full ${cert.blur ? 'blur-sm' : ''}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Award size={48} className="text-primary/40" />
                      </div>
                    </object>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-secondary font-medium text-sm">
                    {cert.issuer}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {cert.date}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors mt-4"
                  >
                    <Download size={16} />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
