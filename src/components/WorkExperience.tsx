'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from "motion/react";
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
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
            <motion.h1
                className="text-xl sm:text-2xl md:text-3xl font-bold text-center border-4 border-white p-4 w-3/4 sm:w-1/2 md:w-2/6 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span className="mr-4">W O R K</span>
                <span>E X P E R I E N C E</span>
            </motion.h1>
            <br/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work hover:scale-105 transition-transform duration-400"
                    date="March 2022 - Now"
                    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.1)' }}
                    contentStyle={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
                    iconStyle={{ background: 'rgba(255,255,255)', color: 'black' }}
                    icon={<FaBriefcase />}
                    onTimelineElementClick={() => router.push('/projects')}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}>MOBILE DEVELOPER</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Digitech Solutions, HCM</h4>
                    <p>
                        As a mobile developer, ... <span className="text-blue-500">Read More</span>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255,0.1)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgba(255,255,255)', color: 'black' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: 'white'}}>INTERN MOBILE</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{color: 'white'}}>Digitech Solutions, HCM</h4>
                    <p>
                        As an intern, I focus on developing eCommerce mobile apps using Flutter, enhancing UI components, and API integration. I work alongside senior developers to refine app performance and resolve technical issues, while continually advancing my Flutter expertise and keeping abreast of new technologies.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default WorkExperience;