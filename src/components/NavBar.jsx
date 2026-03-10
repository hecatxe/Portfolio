import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        absolute top-4 left-1/2 -translate-x-1/2
    w-[90%] md:w-[30%]
    backdrop-blur-xl bg-white/40
    border border-white/40
    shadow-lg
    rounded-2xl
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

        <nav className="hidden md:flex gap-10 text-gray-800 font-medium mx-auto">
          <a href="#projects" className="hover:text-[#800020] transition">
            Proyectos
          </a>
          <a href="#experiencia" className="hover:text-[#800020] transition">
            Experiencia
          </a>
          <a href="#stack" className="hover:text-[#800020] transition">
            Stack
          </a>
          <a href="#sobre-mi" className="hover:text-[#800020] transition">
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
