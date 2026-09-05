import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fadeInUp } from '../animations/variants';

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [infoOpacity, setInfoOpacity] = useState(1);
  const carouselRef = useRef(null);
  const touchStartRef = useRef(0);
  const certificates = portfolioData.certificates;

  const getCardPosition = (index) => {
    const total = certificates.length;
    const diff = (index - activeIndex + total) % total;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(total - 1)) return 'right-1';
    if (diff === 2 || diff === -(total - 2)) return 'right-2';
    if (diff === total - 1 || diff === -1) return 'left-1';
    if (diff === total - 2 || diff === -2) return 'left-2';
    return 'hidden';
  };

  const getCardStyle = (position) => {
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 140 : 200;
    const spacing2 = isMobile ? 280 : 400;

    switch (position) {
      case 'center':
        return {
          transform: 'scale(1.1) translateZ(0)',
          zIndex: 10,
          opacity: 1,
          filter: 'grayscale(0%)',
        };
      case 'left-1':
        return {
          transform: `translateX(-${spacing}px) scale(0.9) translateZ(-100px)`,
          zIndex: 5,
          opacity: 0.9,
          filter: 'grayscale(100%)',
        };
      case 'left-2':
        return {
          transform: `translateX(-${spacing2}px) scale(0.8) translateZ(-300px)`,
          zIndex: 1,
          opacity: 0.7,
          filter: 'grayscale(100%)',
        };
      case 'right-1':
        return {
          transform: `translateX(${spacing}px) scale(0.9) translateZ(-100px)`,
          zIndex: 5,
          opacity: 0.9,
          filter: 'grayscale(100%)',
        };
      case 'right-2':
        return {
          transform: `translateX(${spacing2}px) scale(0.8) translateZ(-300px)`,
          zIndex: 1,
          opacity: 0.7,
          filter: 'grayscale(100%)',
        };
      default:
        return {
          opacity: 0,
          pointerEvents: 'none',
          transform: 'scale(0.5)',
        };
    }
  };

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setInfoOpacity(0);
    
    setTimeout(() => {
      setActiveIndex(newIndex);
      setTimeout(() => {
        setInfoOpacity(1);
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 100);
    }, 300);
  };

  const handlePrevious = () => {
    const newIndex = (activeIndex - 1 + certificates.length) % certificates.length;
    updateCarousel(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % certificates.length;
    updateCarousel(newIndex);
  };

  const handleDotClick = (index) => {
    if (index !== activeIndex) {
      updateCarousel(index);
    }
  };

  const handleCardClick = (index) => {
    const position = getCardPosition(index);
    if (position !== 'center' && position !== 'hidden') {
      updateCarousel(index);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    const threshold = 50;

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const activeCert = certificates[activeIndex];

  return (
    <section id="certificates" className="section-padding studio-bg bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <p className="section-kicker">Credentials</p>
            <h2 className="section-title">Certificates</h2>
            <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-text-secondary md:text-base">
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="relative mx-auto"
              style={{ 
                perspective: '1000px',
                height: window.innerWidth < 768 ? '320px' : '420px',
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {certificates.map((cert, index) => {
                  const position = getCardPosition(index);
                  const style = getCardStyle(position);
                  const isMobile = window.innerWidth < 768;
                  const cardWidth = isMobile ? '220px' : '280px';
                  const cardHeight = isMobile ? '300px' : '380px';

                  return (
                    <div
                      key={cert.id}
                      onClick={() => handleCardClick(index)}
                      className="absolute cursor-pointer"
                      style={{
                        width: cardWidth,
                        height: cardHeight,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        ...style,
                      }}
                    >
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                          style={{ transition: 'filter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-200">
                          <Award size={48} className="text-gray-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[rgba(8,42,123,0.7)] hover:bg-[rgba(8,42,123,0.9)] text-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
              aria-label="Previous certificate"
            >
              <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[rgba(8,42,123,0.7)] hover:bg-[rgba(8,42,123,0.9)] text-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
              aria-label="Next certificate"
            >
              <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>
          </div>

          <div className="text-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: infoOpacity }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gradient-to-r from-transparent to-[#082a7b] w-16 md:w-24" />
                  <h3 className="text-xl md:text-3xl font-bold text-[#082a7b] text-center">
                    {activeCert.title}
                  </h3>
                  <div className="h-px bg-gradient-to-l from-transparent to-[#082a7b] w-16 md:w-24" />
                </div>
                <p className="text-sm md:text-base text-gray-500 uppercase tracking-wider text-center">
                  {activeCert.issuer}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 flex-wrap">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    index === activeIndex
                      ? 'bg-[rgb(8,42,123)] scale-125'
                      : 'bg-[rgba(8,42,123,0.2)] hover:bg-[rgba(8,42,123,0.4)]'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: infoOpacity }}
              className="max-w-md mx-auto space-y-4"
            >
              <p className="text-sm text-text-secondary text-center leading-relaxed">
                {activeCert.description}
              </p>

              <p className="text-secondary font-medium text-sm text-center">
                {activeCert.date}
              </p>

              <a
                href={activeCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors mx-auto"
              >
                <Download size={16} />
                View Certificate
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
