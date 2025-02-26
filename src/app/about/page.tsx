'use client';
import AboutComponents from "@/components/About";
import { motion } from "motion/react";

export default function About () {
    return (
        <div className="pt-24 pb-16">
            <motion.div 
                className="text-white p-8 bg-gray-800 rounded-lg mx-16 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundImage: "url('https://ik.imagekit.io/tvlk/blog/2023/04/go-and-share-kinh-nghiem-du-lich-an-giang-13.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Add an overlay to improve text readability */}
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                
                <motion.h2 
                    className="text-2xl font-bold mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Personal Information
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Name:</span>
                            <span>DOAN VAN VINH</span>
                        </motion.div>
                        
                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Date of Birth:</span>
                            <span>07/12/2000</span>
                        </motion.div>

                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Place of Birth:</span>
                            <span>An Giang</span>
                        </motion.div>

                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Phone:</span>
                            <a href="tel:0834696983" className="text-blue-400 hover:text-blue-300">0834696983</a>
                        </motion.div>

                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Email:</span>
                            <a href="mailto:doanvinh983@gmail.com" className="text-blue-400 hover:text-blue-300">doanvinh983@gmail.com</a>
                        </motion.div>

                        <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-semibold">Address:</span>
                            <span>958/3 Au Co Street, Ward 14, Tan Binh District, Ho Chi Minh City</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-full h-64 rounded-lg overflow-hidden"
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0695116171706!2d106.63827597480567!3d10.806631089344377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be8f7a77b3f%3A0x9e1d75799ce13d6d!2zOTU4LzMgw4J1IEPGoSwgUGjGsOG7nW5nIDE0LCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702828546089!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </motion.div>
            <AboutComponents showtitle={false} />
        </div>
    )
}
