'use client';

import React from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';
import { FaMobileAlt, FaGlobe, FaServer } from "react-icons/fa";

type Props = {
    showtitle?: boolean;
}

const capabilities = [
    {
        icon: FaMobileAlt,
        title: "Mobile Worlds",
        glow: "from-cyan-500/30 to-blue-500/10",
        ring: "border-cyan-400/40",
        text: "High-performance cross-platform apps with Flutter, React Native & Android Native — Clean Architecture and BLoC/MVVM. Shipped to the App Store and Google Play, wired to RESTful APIs, Firebase, payments and device sensors.",
    },
    {
        icon: FaGlobe,
        title: "Web Galaxies",
        glow: "from-violet-500/30 to-fuchsia-500/10",
        ring: "border-violet-400/40",
        text: "Responsive, scalable interfaces with Next.js, React.js, UmiJS & .NET Blazor — from real-time AI face-detection landing pages to full web CMS dashboards.",
    },
    {
        icon: FaServer,
        title: "Backend Systems",
        glow: "from-fuchsia-500/30 to-cyan-500/10",
        ring: "border-fuchsia-400/40",
        text: "Scalable services and CRUD/operational APIs with NestJS, .NET & Java Spring Boot, plus Python Flask microservices. Optimized PostgreSQL/MySQL and seamless third-party integrations.",
    },
];

const About = ({ showtitle = true }: Props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    React.useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white px-4 sm:px-8 md:px-16 py-12 md:py-20">
            {showtitle && (
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                    variants={{ visible: { opacity: 1, y: 0 } }}
                >
                    <p className="cosmic-label mb-3">02 — capabilities</p>
                    <h2 className="cosmic-heading text-3xl md:text-4xl">
                        Systems I <span className="text-gradient">command</span>
                    </h2>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {capabilities.map((cap, i) => (
                    <motion.div
                        key={cap.title}
                        className={`cosmic-panel p-6 md:p-8 group`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                        variants={{ visible: { opacity: 1, y: 0 } }}
                        whileHover={{ y: -8 }}
                    >
                        <div className={`relative w-16 h-16 mb-5 rounded-full bg-gradient-to-br ${cap.glow} border ${cap.ring} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <cap.icon className="w-7 h-7 text-white" />
                            <span className="absolute inset-0 rounded-full blur-md bg-white/5 group-hover:bg-white/10 transition-colors" />
                        </div>
                        <h3 className="cosmic-heading text-xl md:text-2xl mb-3">{cap.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{cap.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default About;
