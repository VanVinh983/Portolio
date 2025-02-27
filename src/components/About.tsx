'use client';

import React from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';

type Props = {
    showtitle?: boolean;
}

const About = ({ showtitle = true }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white p-4 sm:p-8 md:p-16">
            {
                showtitle && (
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-center border-4 border-white p-4 w-2/3 sm:w-1/3 md:w-1/6 mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={{
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <span className="mr-4">A B O U T</span>
                        <span>M E</span>
                    </motion.h1>
                )
            }
            <br/>
            <hr/>
            <motion.div 
                className="px-4 sm:px-20 md:px-36 py-4 sm:py-6 md:py-8" 
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.7 }}
                variants={{
                    visible: { opacity: 1 }
                }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Mobile Developer</h2>
                <p className="text-center">
                    My extensive background in mobile application development includes proficiency with leading frameworks such as Flutter and React Native. This expertise has empowered me to construct robust, scalable applications that address a broad spectrum of user and business needs.
                </p>
            </motion.div>
            <motion.div 
                className="px-4 sm:px-20 md:px-36 py-4 sm:py-6 md:py-8" 
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.9 }}
                variants={{
                    visible: { opacity: 1 }
                }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Web Developer</h2>
                <p className="text-center">
                    Leveraging frameworks like ReactJS, UmiJS, Next.js, and Blazor, I have crafted web applications that are both scalable and user-friendly, fulfilling a variety of business objectives and user demands.
                </p>
            </motion.div>
            <hr/>
        </div>
    )
}

export default About;