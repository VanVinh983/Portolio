'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='text-justify text-white px-4 md:px-16 bg-gray-900 py-8 md:py-16 relative overflow-hidden'>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full flex justify-end items-center"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 }
          }}
        >
            <div className='p-4 md:p-8 border-4 md:border-8 border-black rounded-xl transform rotate-45'>
                <h1 style={{fontSize: '48px', fontWeight: 'bold', color: 'black'}}>VINH IT</h1>
            </div>
        </motion.div>
        <div className="z-10 relative">
            <motion.h1 
              className='text-xl md:text-2xl font-bold'
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                visible: { opacity: 1 }
              }}
            >
              Introduction
            </motion.h1>
            <motion.hr 
              className='border-gray-700'
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.7 }}
              variants={{
                visible: { opacity: 1 }
              }}
            />
            <br/>
            <motion.p 
              className='text-justify text-white text-base md:text-xl w-full md:w-3/4'
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.7 }}
              variants={{
                visible: { opacity: 1 }
              }}
            >
              I am a product-minded Fullstack Developer with over 4 years of experience building high-performance Web and Mobile applications. I combine a sharp expertise in modern frontend development (Next.js, React.js, React Native, Flutter) with a solid foundation in backend architectures (NestJS, Java Spring Boot, Python Flask) and databases (PostgreSQL, MySQL). I am seeking a role where I can take end-to-end ownership of features&mdash;from responsive client interfaces to scalable APIs&mdash;to deliver robust, production-ready systems.
            </motion.p>
        </div>
    </div>
  );
};

export default Intro;
