import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { fadeInUp } from '../animations/variants';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8"
      >
        <motion.h1
          className="text-9xl font-bold text-gradient font-display"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          Page Not Found
        </h2>

        <p className="text-text-secondary max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <motion.button
          onClick={() => navigate('/')}
          className="btn-primary inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home size={18} />
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
