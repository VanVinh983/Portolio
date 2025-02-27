'use client';

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const Skill = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [showDetail, setShowDetail] = useState<string[]>([]);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            setHasAnimated(true);
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white p-4 sm:p-8 md:p-16">
            <motion.h1
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center border-4 border-white p-4 w-3/4 sm:w-1/2 md:w-2/6 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span className="mr-4">T E C H N I C A L</span>
                <span>S K I L L S</span>
            </motion.h1>
            <div className="flex justify-center mt-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {[
                        { src: "/react.png", alt: "React Native", label: "React Native" },
                        { src: "/flutter.png", alt: "Flutter", label: "Flutter" },
                        { src: "/dart.png", alt: "Dart", label: "Dart" },
                        { src: "/html.png", alt: "HTML", label: "HTML" },
                        { src: "/css.png", alt: "CSS", label: "CSS" },
                        { src: "/js.png", alt: "JavaScript", label: "JavaScript" },
                        { src: "/react.png", alt: "React", label: "React" },
                        { src: "/csharp.png", alt: "C#", label: "C#" },
                        { src: "/blazor.png", alt: "Blazor", label: "Blazor" },
                        { src: "/umijs.png", alt: "UmiJS", label: "UmiJS" },
                        { src: "/nextjs.png", alt: "Next.js", label: "Next.js" },
                        { src: "/git.png", alt: "Git", label: "Git" }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            transition={{ delay: hasAnimated ? 0.1 : index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                            variants={{
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Image 
                                src={item.src} 
                                alt={item.alt} 
                                width={48}
                                height={48}
                                objectFit="fit"
                                className="rounded-full object-cover object-center bg-white" 
                            />
                            <span>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />
            <motion.h1
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center border-4 border-white p-4 w-3/4 sm:w-1/2 md:w-2/6 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span className="mr-4">S O F T</span>
                <span>S K I L L S</span>
            </motion.h1>
            <br />
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { title: "Collaboration & Teamwork", detail: "Working closely with Backend & BA teams" },
                    { title: "Mentorship & Leadership", detail: "Guiding and supporting new team members" },
                    { title: "Problem-Solving", detail: "Analyzing requirements, proposing solutions" },
                    { title: "Continuous Learning", detail: "Staying updated with new technologies" },
                    { title: "AI Applications", detail: "Leverage AI for code optimization, debugging, automation, and performance enhancement" },
                    { title: "Communication", detail: "Clear and effective communication with team members" },
                    { title: "Time Management", detail: "Efficiently managing time and resources" },
                    { title: "Adaptability", detail: "Quickly adapting to new technologies and environments" },
                    { title: "Innovative Thinking", detail: "Developing unique solutions to complex problems" },
                    { title: "Project Management", detail: "Enhancing project efficiency by refining, optimizing, and strictly adhering to project processes from conception to completion" },
                    { title: "Client Relations", detail: "Maintaining strong, professional relationships with clients" },
                    { title: "Technical Writing", detail: "Creating detailed documentation for software solutions" },
                ].map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-64"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                        transition={{ delay: hasAnimated ? 0.1 : 0.3 + index * 0.2, duration: 0.4 }}
                        variants={{
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">{skill.title}</h3>
                        <div className="flex justify-center my-2">
                            {!showDetail.includes(skill.title) ? (
                                <motion.button
                                    className="px-4 py-2 text-white border-4 border-white"
                                    onClick={() => setShowDetail([...showDetail, skill.title])}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Detail
                                </motion.button>
                            ) : (
                                <motion.p 
                                    className="text-sm sm:text-base md:text-lg text-gray-300 text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {skill.detail}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skill;