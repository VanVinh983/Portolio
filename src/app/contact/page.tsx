export default function Contact() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 animate-fade-in">Contact Information</h1>
                <div className="bg-white/5 rounded-lg p-8 shadow-lg">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                            <span className="font-medium w-24">Name:</span>
                            <span className="text-gray-300">Đoàn Văn Vĩnh</span>
                        </div>
                        <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                            <span className="font-medium w-24">Phone:</span>
                            <a href="tel:0834696982" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">0834696983</a>
                        </div>
                        <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                            <span className="font-medium w-24">Email:</span>
                            <a href="mailto:doanvinh983@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">doanvinh983@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                            <span className="font-medium w-24">Zalo:</span>
                            <a href="https://zalo.me/0834696983" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">0834696983 (Văn Vĩnh)</a>
                        </div>
                        <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                            <span className="font-medium w-24">Telegram:</span>
                            <a href="https://t.me/0834696983" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">0834696983 (Văn Vĩnh)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
