import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "MMA",
    descripcion: "Combate, técnica y disciplina de alto nivel.",
    imagen: "/mma.jpg",
  },
  {
    titulo: "Acondicionamiento",
    descripcion: "Resistencia, agilidad y rendimiento físico total.",
    imagen: "/acondicionamiento.jpg",
  },
  {
    titulo: "Fuerza",
    descripcion: "Desarrolla potencia, músculo y control.",
    imagen: "/pesas.jpg",
  },
  {
    titulo: "Funcional",
    descripcion: "Movimientos reales para un cuerpo completo.",
    imagen: "/funcional.jpg",
  },
];

function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-32 bg-white text-black px-5 md:px-6"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // 🔥 evita re-render innecesario
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-20 text-center"
      >
        <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400">
          ENTRENAMIENTO
        </span>

        <h2 className="text-3xl md:text-5xl font-semibold mt-3 md:mt-4 tracking-tight">
          Lleva tu cuerpo al siguiente nivel
        </h2>
      </motion.div>

      {/* MOBILE */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scroll-smooth">

        {servicios.map((item, i) => (
          <motion.div
            key={item.titulo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // 🔥 importante
            transition={{ delay: i * 0.1 }}
            className="min-w-[75%] h-80 snap-center relative rounded-3xl overflow-hidden flex-shrink-0"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-full object-cover"
              loading="lazy" // 🔥 mejora rendimiento
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-lg font-semibold">
                {item.titulo}
              </h3>

              <p className="text-xs text-gray-300 mt-1">
                {item.descripcion}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {servicios.map((item, i) => (
          <motion.div
            key={item.titulo}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative h-96 rounded-3xl overflow-hidden"
          >
            {/* 🔥 SIN scale exagerado */}
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

              <h3 className="text-xl font-semibold tracking-tight">
                {item.titulo}
              </h3>

              <p className="text-sm text-gray-300 mt-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                {item.descripcion}
              </p>

              <div className="w-0 h-[2px] bg-gray-300 mt-4 group-hover:w-10 transition-all duration-300"></div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Servicios;