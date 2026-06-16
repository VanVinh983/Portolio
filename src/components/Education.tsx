'use client';

import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

export default function Education() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white p-4 sm:p-8 md:p-16">
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <p className="cosmic-label mb-3">06 — origin</p>
                <h2 className="cosmic-heading text-3xl md:text-4xl">
                    Home <span className="text-gradient">planet</span>
                </h2>
            </motion.div>
            <div className="flex justify-center mt-8">
                <motion.div 
                    className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 max-w-4xl w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                        <motion.img
                            src="https://tqa.iuh.edu.vn/wp-content/uploads/2022/12/H%C3%ACnh-1_Campus-IUH.png"
                            alt="IUH Campus"
                            className="rounded-lg w-full lg:w-1/2 h-auto shadow-lg cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            variants={{
                                visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setShowModal(true)}
                        />
                        <div className="text-center lg:text-left">
                            <motion.h2 
                                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                                initial={{ opacity: 0 }}
                                animate={controls}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                variants={{
                                    visible: { opacity: 1 }
                                }}
                            >
                                Industrial University of Ho Chi Minh City
                            </motion.h2>
                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0 }}
                                animate={controls}
                                transition={{ duration: 0.5, delay: 1.3 }}
                                variants={{
                                    visible: { opacity: 1 }
                                }}
                            >
                                <p className="text-gray-300">Bachelor of Software Engineering</p>
                                <p className="text-gray-300">2018 — 2023 · Ho Chi Minh City</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button 
                            className="absolute top-4 right-4 text-white text-2xl z-50"
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>
                        <TransformWrapper>
                            <TransformComponent>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://tqa.iuh.edu.vn/wp-content/uploads/2022/12/H%C3%ACnh-1_Campus-IUH.png"
                                    alt="IUH Campus"
                                    className="w-full h-auto"
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
            )}
            <br/>
            <hr/>
            <br/>
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <p className="cosmic-label mb-3">07 — credentials</p>
                <h2 className="cosmic-heading text-3xl md:text-4xl">
                    Star <span className="text-gradient">charts</span>
                </h2>
            </motion.div>
            <div className="flex justify-center mt-8">
                <motion.div
                    className="text-center relative cursor-pointer bg-white/5 rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{
                        boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                    }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <Image 
                            src="/iig.jpg" 
                            alt="IIG Vietnam Logo"
                            className="h-16 w-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-wider">TOEIC Certificate</h3>
                    <div className="flex justify-center mb-4">
                        <motion.img 
                            src="https://www.smartcom.vn/wp-content/uploads/2024/05/toeic-smartcom-english_optimized.jpg"
                            alt="TOEIC Certificate" 
                            className="h-32 w-auto rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-300 text-sm sm:text-md md:text-lg">TOEIC · IIG Vietnam</p>
                        <p className="text-gray-300 text-sm sm:text-md md:text-lg">Issued: December 2022</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
