'use client'
export default function Projects() {
    const projects = [
        {
            title: "DigiEcard",
            intro: "A name card management application that allows users to quickly share information via QR Code, easily store contact details, and build a social network for communication through features such as chat, an AI chatbot assistant, and many other functionalities.",
            tech: "Flutter",
            role: "Mobile Leader",
            responsibilities: [
                "Build the source code base following the MVVM architecture, using Provider for state management",
                "Set up middleware for API calls via HTTP",
                "Configure development environments (Dev, Staging, Alpha, Production)", 
                "Establish CI/CD pipeline",
                "Set up store and submit to CHPlay/Appstore",
                "Collaborate with Backend team on RESTful APIs",
                "Integrate Firebase services",
                "Integrate OCR with Google ML Kit",
                "Implement QR Code scanning",
                "Develop chat and AI chat features",
                "Lead team and review code"
            ]
        },
        {
            title: "BkGolf",
            intro: "A golf club management application featuring member management and the ability to quickly verify member information through QR Code scanning.",
            tech: "Flutter",
            role: "Mobile Leader", 
            responsibilities: [
                "Build source code base similar to DigiEcard",
                "Develop features based on BA requirements",
                "Delegate tasks to team members",
                "Code review and pull request management",
                "Propose technical solutions",
                "Handle store submission process"
            ]
        },
        {
            title: "DigiIman",
            intro: "An application designed for maintenance staff to manage machinery upkeep. It includes functionalities such as checking maintenance orders, reporting conditions, verifying products and spare parts, quoting prices, creating orders, and verifying product information through QR Code scanning.",
            tech: "Flutter",
            role: "Mobile Developer",
            responsibilities: [
                "Build MVVM architecture with Provider",
                "Set up HTTP middleware",
                "Configure multiple environments",
                "Establish CI/CD pipeline",
                "Handle store submissions",
                "Integrate RESTful APIs",
                "Implement QR scanning",
                "Optimize performance"
            ]
        },
        {
            title: "DigiEcommerce",
            intro: "An e-commerce application that encompasses all the functionalities of an online marketplace—including browsing product listings, favoriting products, adding items to the shopping cart, placing orders, processing payments, and completing purchases.",
            tech: "Flutter",
            role: "Mobile Developer",
            responsibilities: [
                "Maintain Clear Architecture codebase with BloC",
                "Bug fixing and issue resolution",
                "SaaS system integration",
                "Implement social login",
                "Handle store submissions"
            ]
        },
        {
            title: "Beauty Salon Platform",
            intro: "A comprehensive customer management and care system for beauty salons, featuring a CMS for customer management and a customer-facing application with advanced functionalities such as AI-based facial flaw detection, chat with doctors, and appointment tracking.",
            tech: "React Native",
            role: "Mobile Developer",
            responsibilities: [
                "Maintain and develop features using Redux",
                "Complex business logic implementation",
                "Interactive chat system development",
                "Store submission handling",
                "AI model training for facial detection",
                "Web platform development for facial recognition",
                "CMS deployment"
            ]
        },
        {
            title: "Web CMS DigiIman",
            intro: "A CMS platform for machinery maintenance management that includes functionalities such as managing staff, maintenance orders, devices, spare parts replacements, reporting, and more.",
            tech: "Umijs",
            role: "Frontend Leader",
            responsibilities: [
                "Feature development with Umijs and Redux",
                "Configure hooks and components",
                "Code review and branch management",
                "Handle deployments"
            ]
        },
        {
            title: "Web Omnichannel",
            intro: "A customer care system integrated with popular communication channels such as Facebook, Zalo, and websites. It features an AI chatbot that automatically responds to pre-trained customer queries, along with an AI-powered content creation system integrated into the platform.",
            tech: "UmiJS, ReactJS, NestJS, Python",
            role: "Leader Frontend, Fullstack Developer",
            responsibilities: [
                "Feature development with UmiJS and Redux",
                "JavaScript SDK development",
                "Code review and branch management",
                "Server deployment",
                "WebSocket chat system",
                "ZNS and email integration",
                "AI chatbot development",
                "Public API development"
            ]
        }
    ];

    return (
        <div className="pt-16 pb-16">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 animate-fade-in">Projects I&apos;ve Worked On</h1>
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
                            style={{
                                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-400 transition-colors">{project.title}</h2>
                            <p className="text-gray-300 mb-4 hover:text-gray-200 transition-colors">{project.intro}</p>
                            <div className="mb-4 hover:translate-x-2 transition-transform">
                                <span className="font-medium" style={{ fontWeight: 'bold' }}>Technology:</span> {project.tech}
                            </div>
                            <div className="mb-4 hover:translate-x-2 transition-transform">
                                <span className="font-medium" style={{ fontWeight: 'bold' }}>Role:</span> {project.role}
                            </div>
                            <div>
                                <h3 className="font-medium mb-2" style={{ fontWeight: 'bold' }}>Key Responsibilities:</h3>
                                <ul className="list-disc list-inside space-y-1 text-gray-300">
                                    {project.responsibilities.map((resp, idx) => (
                                        <li 
                                            key={idx} 
                                            className="hover:translate-x-2 transition-transform hover:text-gray-200"
                                            style={{
                                                animation: `fadeInLeft 0.3s ease-out ${idx * 0.05}s both`
                                            }}
                                        >
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}
