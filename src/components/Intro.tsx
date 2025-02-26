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
    <div ref={ref} className='text-justify text-white text-xl px-16 bg-gray-900 py-16 relative overflow-hidden'>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full flex justify-end items-center"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 }
          }}
        >
            <div className='p-8 border-8 border-black rounded-xl transform rotate-45'>
                <h1 style={{fontSize: '100px', fontWeight: 'bold', color: 'black'}}>VINH IT</h1>
            </div>
        </motion.div>
        <div className="z-10 relative">
            <motion.h1 
              className='text-2xl font-bold'
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
              className='text-justify text-white text-xl w-3/4'
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.7 }}
              variants={{
                visible: { opacity: 1 }
              }}
            >
              I am a Mobile Developer with over 3 years of experience. I am proficient in Flutter, React Native, Android native (Java), and applying AI in computer vision, and I also have experience with web frameworks such as Blazor, Next.js, React.js, and UmiJS. I am seeking a dynamic and professional work environment to further develop my skills and contribute to the company&apos;s success. 
            </motion.p>
        </div>
    </div>
  );
};

export default Intro;
