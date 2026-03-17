import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        absolute top-10 left-1/2 -translate-x-1/2
    w-[90%] md:w-[40%]
    backdrop-blur-sm bg-white/40
    border border-white/40
    shadow-lg
    rounded-4xl md:rounded-full
    z-40
    px-8 py-3
  "
    >
      <div className="flex items-center justify-between px-6 py-4">
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`
              block h-0.5 w-7 bg-[#800020] rounded transition-transform duration-300
              ${open ? "rotate-45 translate-y-2" : ""}
            `}
          ></span>
          <span
            className={`
              block h-0.5 w-7 bg-[#800020] rounded transition-opacity duration-300
              ${open ? "opacity-0" : "opacity-100"}
            `}
          ></span>
          <span
            className={`
              block h-0.5 w-7 bg-[#800020] rounded transition-transform duration-300
              ${open ? "-rotate-45 -translate-y-2" : ""}
            `}
          ></span>
        </button>

        <nav className="hidden md:flex gap-10 text-gray-800 text-xl mx-auto">
          <a
            href="#projects"
            className="relative hover:text-[#800020] transition duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800020] after:transition-all after:duration-300 hover:after:w-full"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="relative hover:text-[#800020] transition duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800020] after:transition-all after:duration-300 hover:after:w-full"
          >
            Experiencia
          </a>
          <a
            href="#stack"
            className="relative hover:text-[#800020] transition duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800020] after:transition-all after:duration-300 hover:after:w-full"
          >
            Stack
          </a>
          <a
            href="#sobre-mi"
            className="relative hover:text-[#800020] transition duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#800020] after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre Mi
          </a>
        </nav>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-800 font-medium">
          <a href="#inicio" className="hover:text-[#800020] transition">
            Inicio
          </a>
          <a href="#sobre-mi" className="hover:text-[#800020] transition">
            Sobre mí
          </a>
          <a href="#proyectos" className="hover:text-[#800020] transition">
            Proyectos
          </a>
          <a href="#stack" className="hover:text-[#800020] transition">
            Stack
          </a>
          <a href="#contacto" className="hover:text-[#800020] transition">
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
