import { motion } from "framer-motion";
import { useState } from "react";

const grupos = [
  { id: "individual", label: "Individual" },
  { id: "parejas", label: "Parejas" },
  { id: "grupal", label: "Grupal" },
];

const planes = [
  {
    nombre: "Básico",
    precio: "12 clases",
    descripcion: "Empieza tu transformación física",
    detalles: [
      "MMA, boxeo y acondicionamiento",
      "Nivel principiante",
      "Acceso a clases grupales",
    ],
    whatsapp: "Hola, quiero empezar con el plan básico en APEX CONVICTION",
  },
  {
    nombre: "Intermedio",
    precio: "16 clases",
    descripcion: "Mejora tu técnica y rendimiento",
    detalles: [
      "Mayor intensidad de entrenamiento",
      "Seguimiento de progreso",
      "Clases más exigentes",
    ],
    whatsapp: "Hola, quiero información del plan intermedio en APEX CONVICTION",
  },
  {
    nombre: "Avanzado",
    precio: "20 clases",
    descripcion: "Entrena como un atleta competitivo",
    detalles: [
      "Técnicas avanzadas",
      "Sparring supervisado",
      "Preparación para torneos",
    ],
    whatsapp: "Hola, quiero el plan avanzado en APEX CONVICTION",
    destacado: true,
  },
];

const ordenarPlanes = () => {
  const destacado = planes.find((p) => p.destacado);
  const otros = planes.filter((p) => !p.destacado);
  return [destacado, ...otros];
};

function Planes() {
  const planesOrdenados = ordenarPlanes();
  const [grupoActivo, setGrupoActivo] = useState("individual");
  const grupoLabel = grupos.find((g) => g.id === grupoActivo)?.label;

  return (
    <section
      id="planes"
      className="py-20 md:py-32 bg-black text-white px-5 md:px-6"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-16 text-center"
      >
        <span className="text-xs md:text-sm tracking-[0.3em] text-gray-500">
          PLANES
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold mt-3 md:mt-4 tracking-tight">
          Elige tu nivel de compromiso
        </h2>
        <p className="text-gray-400 max-w-md md:max-w-xl mx-auto mt-3 md:mt-4 text-xs md:text-base">
          No es solo entrenar. Es convertirte en alguien más fuerte.
        </p>
      </motion.div>

      {/* TABS TIPO DE GRUPO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-10 md:mb-14"
      >
        <div className="flex gap-2 bg-white/5 border border-white/10 rounded-full p-1">
          {grupos.map((g) => (
            <button
              key={g.id}
              onClick={() => setGrupoActivo(g.id)}
              className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                grupoActivo === g.id
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* MOBILE */}
      <div className="flex flex-col gap-6 md:hidden max-w-md mx-auto">
        {planesOrdenados.map((plan, i) => (
          <motion.div
            key={`${plan.nombre}-${grupoActivo}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-6 ${
              plan.destacado
                ? "bg-gradient-to-b from-gray-300 to-gray-500 text-black shadow-lg"
                : "bg-white/5 border border-white/10"
            }`}
          >
            {plan.destacado && (
              <span className="absolute top-3 right-3 text-[10px] bg-black text-white px-2 py-1 rounded-full">
                Más popular
              </span>
            )}
            <span className={`text-[10px] tracking-widest uppercase mb-2 block ${plan.destacado ? "text-black/50" : "text-gray-500"}`}>
              {grupoLabel}
            </span>
            <h3 className="text-lg font-semibold mb-1">{plan.nombre}</h3>
            <p className="text-2xl font-bold mb-2">{plan.precio}</p>
            <p className={`mb-4 text-xs ${plan.destacado ? "text-black/80" : "text-gray-300"}`}>
              {plan.descripcion}
            </p>
            <ul className="text-xs space-y-2 mb-5">
              {plan.detalles.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-gray-300">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/573024221645?text=${encodeURIComponent(
                `${plan.whatsapp} (${grupoLabel})`
              )}`}
              className={`block text-center py-2 rounded-full text-sm font-semibold transition ${
                plan.destacado ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Empezar
            </a>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {planesOrdenados.map((plan, i) => (
          <motion.div
            key={`${plan.nombre}-${grupoActivo}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 transition-transform duration-300 ${
              plan.destacado
                ? "bg-gradient-to-b from-gray-300 to-gray-500 text-black shadow-xl"
                : "border border-white/10 bg-white/5"
            }`}
          >
            {plan.destacado && (
              <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
                Más popular
              </span>
            )}
            <span className={`text-xs tracking-widest uppercase mb-3 block ${plan.destacado ? "text-black/50" : "text-gray-500"}`}>
              {grupoLabel}
            </span>
            <h3 className="text-xl font-semibold mb-2">{plan.nombre}</h3>
            <p className="text-3xl font-bold mb-2">{plan.precio}</p>
            <p className={`mb-6 text-sm ${plan.destacado ? "text-black/80" : "text-gray-300"}`}>
              {plan.descripcion}
            </p>
            <ul className="text-sm space-y-3 mb-8">
              {plan.detalles.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-gray-300">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/573024221645?text=${encodeURIComponent(
                `${plan.whatsapp} (${grupoLabel})`
              )}`}
              className={`block text-center py-3 rounded-full font-semibold transition ${
                plan.destacado ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Empezar ahora
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Planes;