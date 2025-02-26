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
        <div ref={ref} className="text-white p-16">
            <motion.h1
                className="text-2xl font-bold text-center border-4 border-white p-4 w-2/6 mx-auto"
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
                <div className="grid grid-cols-5 gap-4">
                    {[
                        { src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", alt: "React Native", label: "React Native" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYAfz-KmOiY-JQEDNDF2brVLmDSxJG5To-A&s", alt: "Flutter", label: "Flutter" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgbwlSWNP4jJAvm6loMFDq6PmGvzfvqrlLg&s", alt: "Dart", label: "Dart" },
                        { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML", label: "HTML" },
                        { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", alt: "CSS", label: "CSS" },
                        { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "JavaScript", label: "JavaScript" },
                        { src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", alt: "React", label: "React" },
                        { src: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", alt: "C#", label: "C#" },
                        { src: "https://w7.pngwing.com/pngs/854/971/png-transparent-blazor-hd-logo.png", alt: "Blazor", label: "Blazor" },
                        { src: "https://avatars.githubusercontent.com/u/33895495?s=200&v=4", alt: "UmiJS", label: "UmiJS" },
                        { src: "https://cdn.creazilla.com/icons/3219990/nextjs-icon-md.png", alt: "Next.js", label: "Next.js" },
                        { src: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png", alt: "Git", label: "Git" }
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
                            <Image src={item.src} alt={item.alt} className="w-12 h-12 rounded-full object-cover object-center bg-white" />
                            <span>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />
            <motion.h1
                className="text-2xl font-bold text-center border-4 border-white p-4 w-2/6 mx-auto"
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
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-64"
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                        transition={{ delay: hasAnimated ? 0.1 : 0.3 + index * 0.2, duration: 0.4 }}
                        variants={{
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h3 className="text-xl font-bold text-white text-center">{skill.title}</h3>
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
                                    className="text-sm text-gray-300 text-center"
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