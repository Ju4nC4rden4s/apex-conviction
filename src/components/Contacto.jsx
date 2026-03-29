import { motion } from "framer-motion";
import { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    objetivo: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const objetivos = [
    "Perder grasa",
    "Ganar músculo",
    "Aprender MMA",
    "Mejorar condición física",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    setLoading(true);

    const texto = encodeURIComponent(
      `Hola, soy ${form.nombre}. Quiero comenzar en APEX CONVICTION.\nObjetivo: ${form.objetivo || "No especificado"}.\n${form.mensaje}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/573024221645?text=${texto}`, "_blank");
      setLoading(false);
    }, 400);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-black text-white px-5 md:px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] text-gray-500">
            CONTACTO
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold mt-3 md:mt-4 mb-4 md:mb-6 tracking-tight">
            Empieza hoy
          </h2>

          <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
            Cambia tu cuerpo, tu disciplina y tu mentalidad.
          </p>

          <p className="text-xs md:text-sm text-green-400">
            Respuesta rápida por WhatsApp ⚡
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={enviarWhatsApp}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl space-y-6"
        >

          {/* NOMBRE */}
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full p-4 text-base rounded-xl bg-black border border-white/10 focus:border-red-500 focus:outline-none transition"
          />

          {/* OBJETIVO */}
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-3">
              ¿Cuál es tu objetivo?
            </p>

            <div className="grid grid-cols-2 gap-2">
              {objetivos.map((obj) => (
                <button
                  type="button"
                  key={obj}
                  onClick={() => setForm({ ...form, objetivo: obj })}
                  className={`py-2 rounded-full text-xs md:text-sm transition ${
                    form.objetivo === obj
                      ? "bg-red-600"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {obj}
                </button>
              ))}
            </div>
          </div>

          {/* MENSAJE */}
          <textarea
            name="mensaje"
            placeholder="Cuéntanos un poco más (opcional)"
            value={form.mensaje}
            onChange={handleChange}
            rows="3"
            className="w-full p-4 text-base rounded-xl bg-black border border-white/10 focus:border-red-500 focus:outline-none transition"
          ></textarea>

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 py-3 rounded-full font-semibold text-base hover:bg-red-700 transition active:scale-95"
          >
            {loading ? "Enviando..." : "Hablar por WhatsApp"}
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contacto;