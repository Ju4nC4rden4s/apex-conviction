import { motion } from "framer-motion";

const horarios = [
  {
    dia: "Lunes",
    manana: ["5:00", "6:00", "7:00", "8:00", "9:00"],
    tarde: ["16:00 MMA", "17:00 MMA", "18:00", "19:00"],
  },
  {
    dia: "Martes",
    manana: ["5:00", "6:00", "7:00", "8:00", "9:00"],
    tarde: ["16:00 MMA", "17:00 MMA", "18:00", "19:00"],
  },
  {
    dia: "Miércoles",
    manana: ["5:00", "6:00", "7:00", "8:00", "9:00"],
    tarde: ["16:00 MMA", "17:00 MMA", "18:00", "19:00"],
  },
  {
    dia: "Jueves",
    manana: ["5:00", "6:00", "7:00", "8:00", "9:00"],
    tarde: ["16:00 MMA", "17:00 MMA", "18:00", "19:00"],
  },
  {
    dia: "Viernes",
    manana: ["5:00", "6:00", "7:00", "8:00", "9:00"],
    tarde: ["16:00 MMA", "17:00 MMA", "18:00", "19:00"],
  },
  {
    dia: "Sábado",
    manana: ["7:00", "8:00", "9:00", "10:00", "12:00"],
    tarde: ["Entrenamiento MMA"],
  },
];

const generarLink = (dia, hora) => {
  const mensaje = `Hola, quiero reservar el ${dia} a las ${hora} en APEX CONVICTION`;
  return `https://wa.me/573024221645?text=${encodeURIComponent(mensaje)}`;
};

function Horarios() {
  return (
    <section id="horarios" className="py-20 md:py-32 bg-white text-black px-5 md:px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400">
          HORARIOS
        </span>

        <h2 className="text-3xl md:text-5xl font-semibold mt-3 md:mt-4 tracking-tight">
          Entrena cuando quieras
        </h2>

        <p className="text-gray-500 max-w-md md:max-w-xl mx-auto mt-3 md:mt-4 text-xs md:text-base">
          Clases disponibles durante todo el día.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {horarios.map((item, i) => (
          <motion.div
            key={item.dia}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-gray-200 p-5 md:p-6 bg-white shadow-sm"
          >

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {item.dia}
            </h3>

            {/* MAÑANA */}
            <div className="mb-3">
              <p className="text-[10px] md:text-xs text-gray-400 mb-2 tracking-wider">
                MAÑANA
              </p>

              <div className="flex flex-wrap gap-2">
                {item.manana.map((hora, idx) => (
                  <a
                    key={idx}
                    href={generarLink(item.dia, hora)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs md:text-sm bg-gray-100 hover:bg-black hover:text-white transition active:scale-95"
                  >
                    {hora}
                  </a>
                ))}
              </div>
            </div>

            {/* TARDE */}
            {item.tarde && (
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 mb-2 tracking-wider">
                  TARDE
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tarde.map((hora, idx) => (
                    <a
                      key={idx}
                      href={generarLink(item.dia, hora)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full text-xs md:text-sm transition active:scale-95 ${
                        hora.includes("MMA")
                          ? "bg-gray-300 text-black hover:bg-black hover:text-white"
                          : "bg-gray-100 hover:bg-black hover:text-white"
                      }`}
                    >
                      {hora}
                    </a>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 md:mt-16">
        <a
          href="https://wa.me/573024221645?text=Hola%2C%20quiero%20reservar%20una%20clase%20en%20APEX%20CONVICTION"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition"
        >
          Reservar clase
        </a>
      </div>

    </section>
  );
}

export default Horarios;