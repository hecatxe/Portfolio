import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/NavBar";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Background />
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Navbar />
      </motion.header>

      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h3 className="font-sans mb-10 text-2xl sm:text-2xl md:text-3xl tracking-tightest">
            Since 2025
          </h3>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-script text-6xl sm:text-6xl md:text-8xl lg:text-9xl text-[#800020] leading-tight"
          >
            Fátima Belakdar Navas
          </motion.h2>

          <h3 className="font-display text-4xl sm:text-3xl md:text-5xl lg:text-6xl mt-5 tracking-tightest">
            Desarrolladora Frontend
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/f%C3%A1tima-belakdar-navas-47874427b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white hover:bg-[#800020] hover:text-white transition-colors duration-300 inline-block"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/hecatxe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white hover:bg-[#800020] hover:text-white transition-colors duration-300 inline-block"
            >
              GitHub
            </motion.a>

            <motion.a
              href="cv/FatimaBelakdarNavas_DesarrolladoraFrontend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white hover:bg-[#800020] hover:text-white transition-colors duration-300"
            >
              Descargar CV
            </motion.a>
          </div>
        </section>

        <section id="projects" className="py-20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12"
          >
            <h2 className="">
              <span className="font-script text-9xl">P</span>royectos
            </h2>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Plathery */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="img/Plathery.png"
                alt="Proyecto 1"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#800020] mb-2">
                  Plathery
                </h3>
                <p className="text-gray-600 mb-4">
                  Plathery es una plataforma para descubrir libros, leer
                  artículos literarios y crear una comunidad en torno a la
                  lectura. Permite guardar favoritos, compartir recomendaciones
                  y conectar con otros lectores en un espacio pensado para
                  inspirar y organizar tus lecturas.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/react.svg')] mask-no-repeat mask-center mask-contain "></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/nodedotjs.svg')] mask-no-repeat mask-center mask-contain"></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/express.svg')] mask-no-repeat mask-center mask-contain"></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/bootstrap.svg')] mask-no-repeat mask-center mask-contain"></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/firebase.svg')] mask-no-repeat mask-center mask-contain"></div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://plathery-1.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Link
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://github.com/hecatxe/Plathery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Código
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Quiz de pokemon */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="img/Intro.gif"
                alt="Proyecto 1"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#800020] mb-2">
                  Quiz de Pokémon
                </h3>
                <p className="text-gray-600 mb-4">
                  Quiz interactivo inspirado en el universo Pokémon, mediante
                  una serie de preguntas de personalidad, el usuario descubre
                  qué Pokémon encaja mejor con su forma de ser. El proyecto
                  combina diseño, lógica y una experiencia dinámica pensada para
                  que cada usuario obtenga un resultado único y divertido.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/react.svg')] mask-no-repeat mask-center mask-contain"></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/tailwindcss.svg')] mask-no-repeat mask-center mask-contain"></div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://pokemon-quiz-beryl.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Link
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://github.com/hecatxe/pokemon-quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Código
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experiencia" className="py-50 px-6 lg:px-50">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12"
          >
            <span className="font-script text-9xl">E</span>xperiencia
          </motion.h2>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#800020]/40 -translate-x-1/2 rounded-full"></div>
            <div className="flex flex-col gap-20">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#800020] rounded-full border-4 border-white z-10"></div>
                <div
                  className="
          w-[90%] md:w-[45%]
          bg-white/10 backdrop-blur-md
          border border-white/30
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          ring-1 ring-white/20
          rounded-2xl
          p-6
          mt-10 md:mt-0
          md:ml-auto
        "
                >
                  <h3 className="text-2xl font-semibold text-[#800020]">
                    Desarrolladora Web - Wordpress
                  </h3>
                  <p className="text-[#800020]/80 font-medium mt-1">
                    Rodas Soluciones
                  </p>
                  <p className="text-gray-800 mt-2">
                    Desarrollo, mantengo y optimizo sitios web en{" "}
                    <b>WordPress</b>, incluyendo tiendas online con{" "}
                    <b>WooCommerce</b>.
                    <br />
                    <br />
                    Me encargo de la comunicación directa con los clientes,
                    asesorándolos durante todo el proceso de creación de la web
                    y manteniendo un contacto continuo para asegurar que el
                    proyecto avanza según sus necesidades. <br />
                    <br />
                    También realizo <b>SEO on-page</b>, soporte técnico y diseño
                    de material gráfico corporativo con <b>CorelDRAW</b>.
                  </p>
                  <span className="text-gray-600 text-sm mt-3 block">
                    ENE 2026 – Actualidad
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center">
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#800020] rounded-full border-4 border-white z-10"></div>
                <div
                  className="
          w-[90%] md:w-[45%]
          bg-white/10 backdrop-blur-md
          border border-white/30
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          ring-1 ring-white/20
          rounded-2xl
          p-6
          mt-10 md:mt-0
          md:mr-auto
        "
                >
                  <h3 className="text-2xl font-semibold text-[#800020]">
                    Soporte de base de datos - Prácticas
                  </h3>
                  <p className="text-[#800020]/80 font-medium mt-1">
                    NTT DATA Europe & Latam
                  </p>
                  <p className="text-gray-800 mt-2">
                    Gestioné y analicé datos mediante consultas avanzadas en{" "}
                    <b>SQL y PL/SQL</b>, optimizando macroconsultas con
                    herramientas como <b>DBeaver</b>. <br />
                    <br />
                    Apoyé la automatización de procesos utilizando{" "}
                    <b>Excel avanzado</b> y macros para agilizar tareas y
                    validar información. <br />
                    <br />
                    Motoricé y ejecuté procesos en <b>Control‑M</b>, asegurando
                    una correcta programación de tareas, y utilizaba{" "}
                    <b>MobaXTerm</b> y entornos <b>Unix</b> para la
                    administración, verificación de servicios y ejecución de
                    scripts. <br />
                    <br />
                    Registraba y documentaba incidencias y tareas en <b>Jira</b>
                    , facilitando la trazabilidad y la colaboración con el
                    equipo.
                  </p>
                  <span className="text-gray-600 text-sm mt-3 block">
                    OCT 2025 – DIC 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
            w-full
            border-l-4 border-[#800020]
           bg-white/60
            shadow-md
            rounded-xl
            p-4
            hover:shadow-xl transition-shadow
            mt-20
            "
          >
            <h3 className="text-2xl font-semibold text-[#800020]">
              Grado Superior - Desarrollo de Aplicaciones Web
            </h3>
            <p className="text-gray-700 mt-2">I.E.S Ribera de los Molinos</p>
            <p className="text-gray-500 mt-1">Mula, Región de Murcia</p>
            <span className="text-gray-500 text-sm mt-3 block">
              2023 – 2025
            </span>
          </div>
          <div
            className="
            w-full
            border-l-4 border-[#800020]
           bg-white/60 
            shadow-md
            rounded-xl
            p-4
            hover:shadow-xl transition-shadow
            mt-10
            "
          >
            <h3 className="text-2xl font-semibold text-[#800020]">
              Certificado de Finalización - UI and UX Design Novice to
              Professional
            </h3>
            <p className="text-gray-700 mt-2">NTT DATA Europe & Latam</p>
            <p className="text-gray-500 mt-1">Murcia, Región de Murcia</p>
            <span className="text-gray-500 text-sm mt-3 block">
              Nov 2025 – Dic 2025
            </span>
          </div>
        </section>
        <section id="stack" className="py-50 px-6 lg:px-50">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12"
          >
            <span className="font-script text-9xl">S</span>tack{" "}
            <span className="font-script text-9xl">T</span>ecnológico
          </motion.h2>
          <p className="text-gray-700 mb-10 text-center text-2xl">
            Tecnologías que han formado parte de mi crecimiento y experiencia en
            el desarrollo Frontend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl lg:text-4xl font-display text-[#800020] mb-4 text-center">
                Desarrollo Frontend / Web
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
                <div className="relative group">
                  <img
                    src="/img/react.svg"
                    alt="React"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    React
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/javascript.svg"
                    alt="JavaScript"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    JavaScript
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/html5.svg"
                    alt="HTML5"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    HTML5
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/css.svg"
                    alt="CSS3"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    CSS3
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/bootstrap.svg"
                    alt="Bootstrap"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Bootstrap
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/tailwindcss.svg"
                    alt="TailwindCSS"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    TailwindCSS
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/wordpress.svg"
                    alt="WordPress"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    WordPress
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/elementor.svg"
                    alt="Elementor"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Elementor
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/woocommerce.svg"
                    alt="WooCommerce"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    WooCommerce
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/figma.svg"
                    alt="Figma"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Figma
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl lg:text-4xl font-display text-[#800020] mb-4 text-center">
                Backend & Lógica de Servidor
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 justify-items-center">
                <div className="relative group">
                  <img
                    src="/img/spring.svg"
                    alt="Spring Boot"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Spring Boot
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/nodedotjs.svg"
                    alt="Node.js"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Node.js
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/laravel.svg"
                    alt="Laravel"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Laravel
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/typescript.svg"
                    alt="TypeScript"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl lg:text-4xl font-display text-[#800020] mb-4 text-center">
                Bases de Datos & Servicios
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 justify-items-center">
                <div className="relative group">
                  <img
                    src="/img/mysql.svg"
                    alt="MySQL"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    MySQL
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/firebase.svg"
                    alt="Firebase"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    Firebase
                  </span>
                </div>
                <div className="relative group">
                  <img
                    src="/img/mongodb.svg"
                    alt="MongoDB"
                    className="w-15 h-15 transition-all duration-400 hover:drop-shadow-[0_0_12px_#800020]"
                  />
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                   bg-[#800020] text-white text-xs px-3 py-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre-mi" className="py-50 px-6 lg:px-50">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12"
          >
            <span className="font-script text-9xl">S</span>obre{" "}
            <span className="font-script text-9xl">M</span>i
          </motion.h2>

          <div
            className="
            w-full md:w-[70%] lg:w-[65%] mx-auto
          bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.15)]
            rounded-3xl
            p-10 md:p-14
           text-left
          "
          >
            <img
              src="/img/pfp.jpg"
              alt="Foto de Perfil"
              className="w-40 h-40 rounded-full float-left mr-6 mb-3 object-cover"
              style={{ shapeOutside: "circle()" }}
            />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Soy{" "}
              <span className="text-[#800020] font-display">
                Desarrolladora Frontend
              </span>{" "}
              con más de un año de experiencia creando proyectos personales y
              académicos que me han permitido afianzar mis habilidades y
              entender a fondo el proceso de construcción de una interfaz.
              <br /> Sigo de forma estricta los principios de{" "}
              <span className="text-[#800020] font-display">UX / UI</span> para
              asegurar que cada diseño sea intuitivo, accesible y centrado en
              las personas.
              <br /> Me gusta trabajar con código limpio, bien estructurado y
              fácil de mantener, estoy en constante crecimiento, aprendiendo y
              explorando nuevas tecnologías para mejorar cada proyecto que
              desarrollo.{" "}
            </p>
          </div>
          <div className="w-24 h-1 bg-[#800020] mx-auto mt-12 rounded-full"></div>
        </section>
      </main>
    </>
  );
}

export default App;
