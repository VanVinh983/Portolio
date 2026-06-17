'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

// 3D scene is desktop-only and client-only to keep mobile fast and avoid SSR.
const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8">
      <div className="w-full text-center md:text-left">
        <motion.p
          className="cosmic-label mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          ✦ entering the dev-verse
        </motion.p>
        <motion.h1
          className="cosmic-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
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
              {char === " " ? " " : char}
            </motion.span>
          ))}
          {"Doan Van Vinh".split("").map((char, index) => (
            <motion.span
              key={`name-${index}`}
              className="text-gradient"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2 font-semibold font-display"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Fullstack &amp; Mobile Developer
        </motion.p>
        <motion.p
          className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I architect digital universes — turning ideas into production-ready
          worlds across Web &amp; Mobile. 4+ years navigating frontend galaxies
          and scalable backend systems.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='flex flex-wrap gap-4 items-center justify-center md:justify-start'
        >
          <a
            href="/Doan-Van-Vinh-CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-600/30"
          >
            <FaDownload className="w-4 h-4" /> Download CV
          </a>
          <a
            href="mailto:doanvinh983@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:border-blue-400 hover:text-blue-400 text-white font-medium transition-colors"
          >
            <FaEnvelope className="w-4 h-4" /> Contact
          </a>
          <div className="flex space-x-3">
            <a
              href="https://github.com/VanVinh983"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/%C4%91o%C3%A0n-v%C4%83n-v%C4%A9nh-459952278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center mt-8 md:mt-0 h-[50vh] md:h-[70vh] relative">
          <motion.div
            className="w-full h-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <Hero3D />
            <motion.span
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.5] }}
              transition={{ delay: 1.5, duration: 3, times: [0, 0.2, 0.8, 1] }}
            >
              ✦ drag to orbit the core
            </motion.span>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;
