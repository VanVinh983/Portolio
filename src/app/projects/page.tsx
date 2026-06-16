'use client'

import TiltCard from "@/components/TiltCard";

type Project = {
    title: string;
    period: string;
    role: string;
    team?: string;
    intro: string;
    tech: string;
    responsibilities: string[];
};

export default function Projects() {
    const projects: Project[] = [
        {
            title: "LIA Beauty Operations & Booking Platform",
            period: "May 2025 - Now",
            role: "Fullstack Developer",
            team: "6",
            tech: "React Native Expo, Next.js, ReactJS, NestJS, PostgreSQL",
            intro: "An end-to-end management and booking platform for beauty salons, integrated with AI-driven capabilities.",
            responsibilities: [
                "Led core development of both Business and Customer mobile apps with React Native Expo",
                "Built responsive landing pages with real-time AI Face Detection using Next.js",
                "Developed a comprehensive Web CMS for data configuration",
                "Developed backend CRUD and operational APIs with NestJS",
                "Published and maintained production apps on both App Store and Google Play",
            ],
        },
        {
            title: "Gas Station Management System",
            period: "Oct 2024 - Jun 2025",
            role: "Mobile Developer",
            tech: "Flutter, Clean Architecture, BLoC, Firebase (FCM)",
            intro: "An enterprise gas station management system to streamline fueling operations, fuel monitoring, and financial tracking.",
            responsibilities: [
                "Built the mobile app with Clean Architecture and the BLoC pattern for scalability",
                "Integrated RESTful APIs for station/staff management, fuel-tank monitoring, suppliers and debt tracking",
                "Implemented Firebase Cloud Messaging for real-time push notifications",
                "Collaborated with backend devs to design secure financial-transaction data flows",
            ],
        },
        {
            title: "Feng Shui Mobile Application",
            period: "Jul 2024 - May 2025",
            role: "Mobile Developer",
            team: "6",
            tech: "React Native, ReactJS, Next.js, NestJS, PostgreSQL",
            intro: "A mobile app for Feng Shui and horoscope lookup, helping users track destiny insights and optimize orientation elements.",
            responsibilities: [
                "Led mobile development with React Native, crafting intuitive cross-platform UI/UX",
                "Used device compass sensors for accurate Feng Shui direction and alignment tracking",
                "Built Feng Shui lookup, daily horoscope and fortune-prediction features",
                "Integrated NestJS + PostgreSQL RESTful APIs for reliable data sync",
                "Published and maintained production apps on App Store and Google Play",
            ],
        },
        {
            title: "Beauty Salon Operations & Booking Platform",
            period: "May 2023 - Jun 2024",
            role: "Fullstack Developer",
            team: "8",
            tech: "React Native, ReactJS, Next.js, Python, NestJS, PostgreSQL · AI: YOLOv8, OpenCV, MediaPipe",
            intro: "An end-to-end management and booking platform for beauty salons, integrated with AI-driven facial analysis.",
            responsibilities: [
                "Led core development of Business and Customer mobile apps with React Native",
                "Built responsive landing pages with real-time AI Face Detection using Next.js",
                "Engaged in the full AI lifecycle: data prep, model training and image-processing APIs",
                "Developed backend CRUD and operational APIs with NestJS",
                "Published and maintained production apps on App Store and Google Play",
            ],
        },
        {
            title: "BK Golf Member",
            period: "Dec 2022 - May 2023",
            role: "Sole Mobile Developer",
            team: "4",
            tech: "Flutter, NestJS, PostgreSQL",
            intro: "A membership and event management platform for a golf club.",
            responsibilities: [
                "Built the entire mobile application single-handedly with Flutter",
                "Implemented membership management and QR Code check-in",
                "Developed event creation and seamless member registration modules",
                "Integrated RESTful APIs with the NestJS + PostgreSQL backend",
                "Published and maintained production apps on App Store and Google Play",
            ],
        },
        {
            title: "RDOS — Tân Hiệp Phát",
            period: "Dec 2021 - Oct 2022",
            role: "Frontend Developer",
            team: "10",
            tech: "Blazor, Flutter, .NET, PostgreSQL",
            intro: "A Retail Distributor Operation System for Tan Hiep Phat Group to digitize distribution networks and manage sales operations.",
            responsibilities: [
                "Developed enterprise modules across Web (Blazor) and Mobile (Flutter): inventory, sales route, attendance and sales order",
                "Implemented Clean Architecture and BLoC on mobile for scalable, robust state management",
                "Built an attendance module with GPS geolocation, Google Maps and metadata-embedded photo capture",
                "Engineered an offline-first sync mechanism to auto-sync logs on reconnect",
                "Handled complex client-side logic and transactional integration with the .NET backend",
            ],
        },
    ];

    return (
        <div className="pt-16 pb-16">
            <div className="max-w-5xl mx-auto px-4">
                <p className="cosmic-label mb-3">✦ expeditions</p>
                <h1 className="cosmic-heading text-3xl sm:text-5xl mb-2">
                    Worlds I&apos;ve <span className="text-gradient">built</span>
                </h1>
                <p className="text-gray-400 mb-10">A logbook of explored planets — web, mobile and AI-driven systems.</p>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:border-blue-400/40 hover:bg-white/[0.07] transition-colors duration-300"
                        >
                            <div style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400/40 to-violet-500/30 border border-white/20 shadow-[0_0_16px_rgba(34,211,238,0.35)]" />
                                    <h2 className="cosmic-heading text-xl sm:text-2xl text-white">{project.title}</h2>
                                </div>
                                <span className="cosmic-label whitespace-nowrap pt-1">★ {project.period}</span>
                            </div>
                            <p className="text-gray-300 mb-4">{project.intro}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                    {project.role}
                                </span>
                                {project.team && (
                                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                        Team of {project.team}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-400 mb-4">
                                <span className="font-semibold text-gray-200">Tech:</span> {project.tech}
                            </p>
                            <ul className="list-disc list-inside space-y-1.5 text-gray-300 text-sm">
                                {project.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="hover:text-gray-100 transition-colors">{resp}</li>
                                ))}
                            </ul>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
