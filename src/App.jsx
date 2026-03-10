import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Background />
      <Navbar/>

      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h3 className="font-sans mb-10 text-2xl sm:text-2xl md:text-3xl tracking-tightest">
            Since 2025
          </h3>

          <h2 className="font-script text-6xl sm:text-6xl md:text-8xl lg:text-9xl text-[#800020] leading-tight">
            Fátima Belakdar Navas
          </h2>

          <h3 className="font-display text-4xl sm:text-3xl md:text-5xl lg:text-6xl mt-5 tracking-tightest">
            Desarrolladora Frontend
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/f%C3%A1tima-belakdar-navas-47874427b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white 
             hover:bg-[#800020] hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hecatxe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white 
             hover:bg-[#800020] hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <button className="px-10 py-2 rounded-full border border-[#800020] text-[#800020] bg-white hover:bg-[#800020] hover:text-white transition-colors duration-300">
              Descargar CV
            </button>
          </div>
        </section>

        <section id="projects" className="py-20 px-6">
          <h2 className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12">
            <span className="font-script text-9xl">P</span>royectos
          </h2>

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
                  <a
                    href="https://plathery-1.onrender.com/"
                    target="_blank"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/hecatxe/Plathery"
                    target="_blank"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Código
                  </a>
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
                  Quiz interactivo inspirado en el universo Pokémon donde,
                  mediante una serie de preguntas de personalidad, el usuario
                  descubre qué Pokémon de la quinta generación encaja mejor con
                  su forma de ser.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/react.svg')] mask-no-repeat mask-center mask-contain"></div>
                  <div className="w-8 h-8 bg-[#800020] mask-[url('/img/tailwindcss.svg')] mask-no-repeat mask-center mask-contain"></div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://pokemon-quiz-beryl.vercel.app/"
                    target="_blank"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Link
                  </a>
                  <a
                    href="https://github.com/hecatxe/pokemon-quiz"
                    target="_blank"
                    className="px-6 py-2 rounded-full border border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white transition-colors"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experiencia" className="py-20 px-6 lg:px-50">
          <h2 className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12">
            <span className="font-script text-9xl">E</span>xperiencia
          </h2>
        </section>
        <section id="stack" className="py-20 px-6 lg:px-50">
          <h2 className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-8">
            <span className="font-script text-9xl">S</span>tack{" "}
            <span className="font-script text-9xl">T</span>ecnológico
          </h2>
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
        <section id="sobre-mi" className="py-20 px-6 lg:px-50">
          <h2 className="tracking-tightest text-7xl font-display text-center text-[#800020] mb-12">
            <span className="font-script text-9xl">S</span>obre{" "}
            <span className="font-script text-9xl">M</span>i
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;
