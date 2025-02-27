import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollowLayout from "@/components/MouseFollowLayout";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Van Vinh - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col md:flex-row overflow-x-hidden`}>
        <MouseFollowLayout>
          <Navbar />
          <main className="min-h-screen flex-1 p-4 md:p-8">
            {children}
          </main>
          {/* <Footer /> */}
        </MouseFollowLayout>
      </body>
    </html>
  );
}