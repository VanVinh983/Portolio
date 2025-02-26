import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollowLayout from "@/components/MouseFollowLayout";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MouseFollowLayout>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          {/* <Footer /> */}
        </MouseFollowLayout>
      </body>
    </html>
  );
}