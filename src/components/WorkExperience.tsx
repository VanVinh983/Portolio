'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const WorkExperience = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const router = useRouter();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="text-white p-4 sm:p-8 md:p-16">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <p className="cosmic-label mb-3">05 — mission log</p>
                <h2 className="cosmic-heading text-3xl md:text-4xl">
                    Career <span className="text-gradient">trajectory</span>
                </h2>
            </motion.div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work hover:scale-105 transition-transform duration-400"
                    date="May 2025 - Now"
                    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.1)' }}
                    contentStyle={{ background: 'rgba(255,255,255,0.04)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '1rem' }}
                    iconStyle={{ background: 'linear-gradient(135deg,#22d3ee,#8b5cf6)', color: 'white', boxShadow: '0 0 0 4px rgba(34,211,238,0.2)' }}
                    icon={<FaRocket />}
                    onTimelineElementClick={() => router.push('/projects')}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}>FULLSTACK / MOBILE DEVELOPER</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>LIA Beauty JSC, HCM</h4>
                    <p>
                        I build admin web settings and data configurations for mobile apps and landing pages, and implement core backend CRUD APIs with NestJS over PostgreSQL. I integrate RESTful APIs, Firebase, payment gateways, and third-party call services, collaborate across teams, and run code reviews&mdash;leveraging AI tools (Cursor, Figma MCP) to accelerate delivery. <span className="text-cyan-300">Read More</span>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work hover:scale-105 transition-transform duration-400"
                    contentStyle={{ background: 'rgba(255,255,255,0.04)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.1)' }}
                    date="Jul 2021 - May 2025"
                    iconStyle={{ background: 'linear-gradient(135deg,#22d3ee,#8b5cf6)', color: 'white', boxShadow: '0 0 0 4px rgba(34,211,238,0.2)' }}
                    icon={<FaRocket />}
                    onTimelineElementClick={() => router.push('/projects')}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}>FULLSTACK / MOBILE DEVELOPER</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Digitech Solutions, HCM</h4>
                    <p>
                        I developed high-performance mobile apps with Flutter, React Native, and Android Native, and web interfaces with UmiJS, React.js, Next.js, and .NET Blazor. I built backend services and CRUD APIs using NestJS and .NET, created Python Flask chatbot microservices, applied Clean Architecture and MVVM, and acted as a Data Analyst to prepare datasets for AI model training while mentoring new team members. <span className="text-cyan-300">Read More</span>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(255,255,255,0.04)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.1)' }}
                    date="Apr 2021 - Jul 2021"
                    iconStyle={{ background: 'linear-gradient(135deg,#22d3ee,#8b5cf6)', color: 'white', boxShadow: '0 0 0 4px rgba(34,211,238,0.2)' }}
                    icon={<FaRocket />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}>MOBILE INTERN</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Digitech Solutions, HCM</h4>
                    <p>
                        I developed an eCommerce mobile application using Flutter, and collaborated with senior developers to optimize performance and resolve technical issues while advancing my mobile development expertise.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default WorkExperience;