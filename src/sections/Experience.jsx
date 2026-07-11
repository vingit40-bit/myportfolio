import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp}>
            <p className="section-kicker">Resume</p>
            <h2 className="section-title">Experience Trail</h2>
            <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-text-secondary md:text-base">
              {portfolioData.about.objective}
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-white/20 to-secondary md:block" />
            <div className="grid gap-7">
              {portfolioData.experience.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  variants={fadeInUp}
                  className="resume-card p-6 md:ml-14 md:grid md:grid-cols-[170px_1fr] md:gap-8 md:p-8"
                  whileHover={{ x: 8 }}
                >
                  <div>
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white">
                      {exp.period}
                    </span>
                    <p className="mt-5 hidden font-display text-6xl font-black leading-none text-white/25 md:block">0{index + 1}</p>
                  </div>
                  <div>
                    <h3 className="mt-5 text-2xl font-black leading-tight text-white md:mt-0">{exp.title}</h3>
                    <p className="mt-2 text-sm font-bold text-white">{exp.company}</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-text-secondary md:grid-cols-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <ArrowRight size={16} className="mt-1 flex-shrink-0 text-white" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;


