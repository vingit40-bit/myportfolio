import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Education = () => {
  return (
    <>
      <style jsx>{`
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(8, 42, 123, 0.3), rgba(8, 42, 123, 0.6), rgba(8, 42, 123, 0.3));
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #082a7b;
          border: 4px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          z-index: 10;
          box-shadow: 0 0 0 4px rgba(8, 42, 123, 0.2);
        }

        .timeline-content {
          width: 45%;
          padding: 1.5rem;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 0;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
        }

        .timeline-item:nth-child(odd) .timeline-dot {
          top: 2rem;
        }

        .timeline-item:nth-child(even) .timeline-dot {
          top: 2rem;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px !important;
          }

          .timeline-item:nth-child(odd) .timeline-dot,
          .timeline-item:nth-child(even) .timeline-dot {
            top: 1.5rem;
          }
        }
      `}</style>

      <section id="education" className="section-padding bg-background pt-8">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp}>
              <p className="section-kicker">Academic Base</p>
              <h2 className="section-title">Education Track</h2>
            </motion.div>

            <div className="timeline-container">
              <div className="timeline-line"></div>
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  className="timeline-item"
                >
                  <div className="timeline-dot"></div>
                  <motion.div
                    className="timeline-content resume-card p-6"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-3">
                        <GraduationCap className="text-white" size={30} />
                      </div>
                      <p className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white">{edu.period}</p>
                    </div>
                    <h3 className="text-xl font-black leading-snug text-white md:text-2xl">{edu.degree}</h3>
                    <p className="mt-1 font-bold text-white">{edu.major}</p>
                    <p className="mt-4 text-sm font-bold text-white/85">{edu.institution}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{edu.description}</p>
                    <p className="mt-4 flex items-start gap-2 text-sm text-text-secondary">
                      <MapPin size={17} className="mt-0.5 flex-shrink-0 text-white" />
                      {edu.location}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Education;
