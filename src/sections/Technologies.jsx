import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp } from '../animations/variants';

const Technologies = () => {
  const technologies = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];
  
  // Duplicate the technologies array for seamless infinite scrolling
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];

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
          width: calc(200px * ${duplicatedTechnologies.length});
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * ${technologies.length})); }
        }

        .tech-slide {
          height: 120px;
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          gap: 0.5rem;
        }

        .tech-logo {
          width: 48px;
          height: 48px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .tech-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .tech-slide:hover .tech-logo {
          transform: scale(1.15);
        }

        .tech-slide:hover .tech-name {
          transform: scale(1.05);
          color: rgba(255, 255, 255, 1);
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
            width: calc(220px * ${duplicatedTechnologies.length});
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-220px * ${technologies.length})); }
          }

          .tech-logo {
            width: 64px;
            height: 64px;
          }

          .tech-name {
            font-size: 1rem;
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
                {duplicatedTechnologies.map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="tech-slide">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="tech-logo"
                    />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
