'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      <div className="w-full text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {"Hi, I'm ".split("").map((char, index) => (
            <motion.span
              key={`intro-${index}`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              {char}
            </motion.span>
          ))}
          {"Doan Van Vinh".split("").map((char, index) => (
            <motion.span
              key={`name-${index}`}
              className="text-blue-600"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Web Developer | Mobile Developer
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='flex space-x-4 justify-center md:justify-start'
        >  
          <a href="https://github.com/VanVinh983" target="_blank" rel="noopener noreferrer"> 
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/%C4%91o%C3%A0n-v%C4%83n-v%C4%A9nh-459952278/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
      <div className='w-full flex justify-center mt-8 md:mt-0 h-[60vh] relative' style={{marginRight: '-200px',}}>
        <motion.div 
          initial={{ x: "100vw" }}
          animate={{ x: 0, transform: "skewX(-20deg)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center mt-8 md:mt-0 h-full bg-white bg-opacity-10 rounded-xl border-2 border-gray-300 relative"
        >
        </motion.div>
        <motion.img 
          src="/avatar_bear.png" 
          alt="Hero" 
          width={500} 
          className='absolute' 
          style={{ height: '100%', objectFit: 'contain', filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.7))" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;