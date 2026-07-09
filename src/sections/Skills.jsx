import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  FileText,
  Goal,
  LayoutTemplate,
  Plug,
  ServerCog,
  Smartphone,
  Users,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const iconMap = {
  Code2,
  Database,
  FileText,
  Goal,
  LayoutTemplate,
  Plug,
  ServerCog,
  Smartphone,
  Users,
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding studio-bg bg-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp}>
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title">Skill System</h2>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.skills.featured.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code2;
              return (
                <motion.article
                  key={skill.name}
                  variants={fadeInUp}
                  className="resume-card group min-h-[168px] p-6"
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-3 transition duration-300 group-hover:border-white/40 group-hover:bg-white/15">
                      <Icon size={34} strokeWidth={1.8} className="text-white transition duration-300" />
                    </div>
                    <span className="text-3xl font-black text-white/10">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-7 text-lg font-black text-white">{skill.name}</h3>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${78 + (index % 3) * 7}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.04 }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
