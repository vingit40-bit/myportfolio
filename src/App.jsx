import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import NotFound from './pages/NotFound';
import { pageTransition } from './animations/variants';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.main
                variants={pageTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-background"
              >
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
              </motion.main>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;
