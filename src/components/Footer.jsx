import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-white text-black px-5 md:px-6 py-20 md:py-24 border-t border-gray-200">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl md:max-w-2xl mx-auto"
      >

        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 md:mb-4">
          Empieza hoy tu transformación
        </h2>

        {/* TEXTO */}
        <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
          Tu mejor versión comienza con una decisión.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/573024221645?text=Hola%2C%20quiero%20empezar%20a%20entrenar%20en%20APEX%20CONVICTION"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 md:px-8 py-3 rounded-full bg-red-600 text-white font-semibold text-sm md:text-base 
          hover:bg-red-700 transition shadow-md hover:shadow-xl 
          active:scale-95"
        >
          Entrenar ahora
        </a>

        {/* MICRO DETALLE (MUY PRO) */}
        <p className="text-[10px] md:text-xs text-gray-400 mt-6">
          Respuesta rápida por WhatsApp ⚡
        </p>

      </motion.div>

    </footer>
  );
}

export default Footer;