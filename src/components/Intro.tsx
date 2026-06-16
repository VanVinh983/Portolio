'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <div ref={ref} className="px-4 md:px-16 py-12 md:py-24 relative">
      <motion.div
        className="cosmic-panel max-w-4xl mx-auto p-6 md:p-10 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        variants={{ visible: { opacity: 1, y: 0 } }}
      >
        {/* faint planet watermark */}
        <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl pointer-events-none" />

        <p className="cosmic-label mb-3">01 — incoming transmission</p>
        <h2 className="cosmic-heading text-2xl md:text-4xl text-white mb-4">
          About the <span className="text-gradient">navigator</span>
        </h2>
        <div className="cosmic-divider w-24 mb-6" />
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          I am a product-minded{' '}
          <span className="text-cyan-300 font-medium">Fullstack Developer</span> with
          over 4 years charting high-performance Web &amp; Mobile systems. I pilot
          modern frontend galaxies — Next.js, React.js, React Native, Flutter — with
          a solid foundation in backend constellations (NestJS, Java Spring Boot,
          Python Flask) and data stores (PostgreSQL, MySQL). My mission: take
          end-to-end ownership of features, from responsive interfaces to scalable
          APIs, and launch robust, production-ready worlds.
        </p>
      </motion.div>
    </div>
  );
};

export default Intro;
