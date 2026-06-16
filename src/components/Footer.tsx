import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-16 py-8 px-4 text-center text-gray-400">
      <div className="cosmic-divider w-full max-w-md mx-auto mb-6" />
      <p className="cosmic-label mb-4">✦ end of transmission</p>
      <div className="flex justify-center gap-5 mb-4">
        <a
          href="https://github.com/VanVinh983"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/%C4%91o%C3%A0n-v%C4%83n-v%C4%A9nh-459952278/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:doanvinh983@gmail.com"
          aria-label="Email"
          className="hover:text-blue-400 transition-colors"
        >
          <FaEnvelope className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm font-display">© {year} Doan Van Vinh · navigating the dev-verse</p>
      <p className="text-xs mt-1 text-gray-500">Built with Next.js, Tailwind CSS &amp; Three.js</p>
    </footer>
  );
}
