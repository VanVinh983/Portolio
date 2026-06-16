'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';
import SkillField from "./SkillField";

const Skill = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white p-4 sm:p-8 md:p-16">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{ visible: { opacity: 1, y: 0 } }}
            >
                <p className="cosmic-label mb-3">03 — tech stack</p>
                <h2 className="cosmic-heading text-3xl md:text-4xl">
                    Skill <span className="text-gradient">constellation</span>
                </h2>
                <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
                    Frontend &amp; backend technologies drifting through space — hover the field
                    to pull them into formation.
                </p>
            </motion.div>

            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.6, delay: 0.3 }}
                variants={{ visible: { opacity: 1 } }}
            >
                <SkillField />
            </motion.div>
        </div>
    );
};

export default Skill;
