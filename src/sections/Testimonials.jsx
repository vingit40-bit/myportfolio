import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp, staggerContainer, cardHover } from '../animations/variants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
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
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card relative"
                whileHover={cardHover.whileHover}
              >
                <Quote className="absolute top-4 right-4 text-accent/20" size={40} />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-text-secondary mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div>
                  <h4 className="font-bold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
