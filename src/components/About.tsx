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
                    I build high-performance cross-platform mobile apps with Flutter, React Native, and Android Native, applying Clean Architecture and the BLoC/MVVM patterns. I have shipped and maintained production apps on both the App Store and Google Play, integrating RESTful APIs, Firebase, payment gateways, and device sensors.
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
                    Using Next.js, React.js, UmiJS, and .NET Blazor, I craft responsive, scalable web applications&mdash;from real-time AI face-detection landing pages to comprehensive web CMS dashboards&mdash;that are both performant and user-friendly.
                </p>
            </motion.div>
            <motion.div
                className="px-4 sm:px-20 md:px-36 py-4 sm:py-6 md:py-8"
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 1.1 }}
                variants={{
                    visible: { opacity: 1 }
                }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Backend Developer</h2>
                <p className="text-center">
                    I design and build scalable backend services and CRUD/operational APIs with NestJS, .NET, and Java Spring Boot, plus Python Flask microservices. I write and optimize PostgreSQL and MySQL queries, and integrate Firebase, payment gateways, and third-party services across the stack.
                </p>
            </motion.div>
            <hr/>
        </div>
    )
}

export default About;