import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#800020] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-white text-sm tracking-wide">
              Fátima Belakdar Navas
            </p>
            <p className="font-display text-xs text-rose-200 mt-0.5">Frontend Developer</p>
          </div>

          <div className="hidden md:block h-8 w-px bg-rose-300 opacity-40" />

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/hecatxe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-rose-100 hover:text-white transition-colors group"
            >
              <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/f%C3%A1tima-belakdar-navas-47874427b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-rose-100 hover:text-white transition-colors group"
            >
              <FaLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-rose-300 border-opacity-20 mt-6 pt-4">
          <p className="text-center text-sm text-rose-200 opacity-70">
            © {new Date().getFullYear()} Hecho con <span className="font-display">(c)alma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
