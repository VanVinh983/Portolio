"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4">
      <div
        onAnimationEnd={() => setAnimationDone(true)}
        className="animated-navbar-container border border-white rounded-full bg-white bg-opacity-10 backdrop-blur-sm overflow-hidden relative"
      >
        <ul
          className="flex w-full justify-center items-center space-x-6 transition-opacity duration-500"
          style={{ opacity: animationDone ? 1 : 0 }}
        >
          <li>
            <Link
              href="/"
              className={`flex items-center transition transform duration-300 hover:scale-110 ${pathname === "/" ? "text-blue-400" : "text-white"} hover:text-blue-400`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
          </li>

          <li className="flex items-center">
            <div className="h-4 border-l border-white mx-2"></div>
          </li>

          <li>
            <Link
              href="/about"
              className={`flex items-center transition transform duration-300 hover:scale-110 ${pathname === "/about" ? "text-blue-400" : "text-white"} hover:text-blue-400`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`flex items-center transition transform duration-300 hover:scale-110 ${pathname === "/contact" ? "text-blue-400" : "text-white"} hover:text-blue-400`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.94 6.94A2 2 0 014.83 6h10.34a2 2 0 011.89 1.06l-7 4.67-7-4.67z" />
                <path d="M18 8.33l-7 4.67-7-4.67V14a2 2 0 002 2h10a2 2 0 002-2V8.33z" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>

        {
            !animationDone && (
                <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                    style={{ opacity: animationDone ? 0 : 1 }}
                >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            )
        }
      </div>
      <style jsx>{`
        .animated-navbar-container {
          width: 10px;
          height: 10px;
          padding: 0;
          animation: navbarEntrance 1s ease-out forwards;
        }
        @keyframes navbarEntrance {
          0% {
            width: 10px;
            height: 10px;
            padding: 0;
            transform: translateY(-20px);
          }
          30% {
            width: 10px;
            height: 10px;
            padding: 0;
            transform: translateY(0);
          }
          60% {
            width: 50px;
            height: 50px;
            padding: 0;
            transform: translateY(0);
          }
          100% {
            width: 350px;
            height: 50px;
            padding: 0.75rem 1.5rem;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;