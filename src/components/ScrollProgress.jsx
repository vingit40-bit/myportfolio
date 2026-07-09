import { motion } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';

const ScrollProgress = () => {
  const { scrollProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]"
      initial={{ scaleX: 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-highlight"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
