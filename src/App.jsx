import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Planes from "./components/Planes";
import Contacto from "./components/Contacto";
import Horarios from "./components/Horarios";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <main>
        <Hero />
        <Servicios />
        <Planes />
        <Horarios />
        <Contacto />
      </main>

      <Footer />

      {/* BOTÓN GLOBAL */}
      <WhatsAppButton />

    </div>
  );
}

export default App;