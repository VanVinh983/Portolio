import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollowLayout from "@/components/MouseFollowLayout";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SpaceBackground from "@/components/SpaceBackground";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://doanvanvinh.dev"),
  title: "Doan Van Vinh — Fullstack & Mobile Developer",
  description:
    "Product-minded Fullstack Developer with 4+ years building high-performance Web and Mobile apps with Next.js, React Native, Flutter, NestJS and more.",
  keywords: [
    "Doan Van Vinh", "Fullstack Developer", "Mobile Developer", "React Native",
    "Flutter", "Next.js", "NestJS", "Portfolio",
  ],
  authors: [{ name: "Doan Van Vinh" }],
  openGraph: {
    title: "Doan Van Vinh — Fullstack & Mobile Developer",
    description:
      "Product-minded Fullstack Developer with 4+ years building high-performance Web and Mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans overflow-x-hidden`}>
        <SpaceBackground />
        <ScrollProgress />
        <CustomCursor />
        <MouseFollowLayout>
          <Navbar />
          <main className="relative z-10 min-h-screen w-full p-4 md:p-8">
            {children}
          </main>
          <Footer />
        </MouseFollowLayout>
      </body>
    </html>
  );
}