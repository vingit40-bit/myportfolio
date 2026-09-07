import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp } from '../animations/variants';
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

const Technologies = () => {
  const skills = portfolioData.skills.featured;
  
  // Duplicate the skills array for seamless infinite scrolling
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <>
      <style jsx>{`
        .tech-slider-container {
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
          height: 120px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-slider-container::before,
        .tech-slider-container::after {
          background: linear-gradient(to right, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0) 100%);
          content: "";
          height: 120px;
          position: absolute;
          width: 100px;
          z-index: 2;
        }

        .tech-slider-container::after {
          right: 0;
          top: 0;
          transform: rotateZ(180deg);
        }

        .tech-slider-container::before {
          left: 0;
          top: 0;
        }

        .tech-slide-track {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(200px * ${duplicatedSkills.length});
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * ${skills.length})); }
        }

        .tech-slide {
          height: 120px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .tech-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.3s ease;
        }

        .tech-slide:hover .tech-icon-wrapper {
          transform: scale(1.1);
        }

        .tech-icon {
          width: 48px;
          height: 48px;
          color: rgba(255, 255, 255, 0.8);
        }

        .tech-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        @media (min-width: 768px) {
          .tech-slider-container {
            height: 140px;
          }

          .tech-slider-container::before,
          .tech-slider-container::after {
            height: 140px;
            width: 150px;
          }

          .tech-slide {
            height: 140px;
            width: 220px;
          }

          .tech-slide-track {
            width: calc(220px * ${duplicatedSkills.length});
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-220px * ${skills.length})); }
          }

          .tech-icon {
            width: 56px;
            height: 56px;
          }

          .tech-name {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <section id="technologies" className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <p className="section-kicker">Tech Stack</p>
              <h2 className="section-title">Technologies</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                The tools and technologies I use to bring ideas to life
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="tech-slider-container">
              <div className="tech-slide-track">
                {duplicatedSkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div key={`${skill.name}-${index}`} className="tech-slide">
                      <div className="tech-icon-wrapper">
                        <Icon className="tech-icon" strokeWidth={1.5} />
                        <span className="tech-name">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
