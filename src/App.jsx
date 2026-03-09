import "./App.css";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />

      <main className="relative z-10 ">
        <section className="flex flex-col items-center justify-center h-screen">
          <h3 className="font-sans mb-16 text-3xl">Since 2025</h3>
          <h2 className="font-script text-9xl text-red-900">Fátima Belakdar Navas</h2>
          <h3 className="font-display text-6xl mt-5 font">Desarrolladora Frontend</h3>
        </section>
      </main>
    </>
  );
}

export default App;
