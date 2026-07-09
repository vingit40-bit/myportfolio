import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Education = () => {
  return (
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

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {portfolioData.education.map((edu, index) => (
              <motion.article
                key={edu.id}
                variants={fadeInUp}
                className="resume-card p-6 md:p-7"
                whileHover={{ y: -6, rotate: index === 0 ? -1 : 1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-3">
                    <GraduationCap className="text-white" size={30} />
                  </div>
                  <p className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white">{edu.period}</p>
                </div>
                <h3 className="mt-6 text-xl font-black leading-snug text-white md:text-2xl">{edu.degree}</h3>
                <p className="mt-1 font-bold text-white">{edu.major}</p>
                <p className="mt-5 text-sm font-bold text-white/85">{edu.institution}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{edu.description}</p>
                <p className="mt-5 flex items-start gap-2 text-sm text-text-secondary">
                  <MapPin size={17} className="mt-0.5 flex-shrink-0 text-white" />
                  {edu.location}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
