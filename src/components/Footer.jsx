import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-white text-black px-5 md:px-6 py-20 md:py-24 border-t border-gray-200">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl md:max-w-2xl mx-auto"
      >

        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 md:mb-4 text-black">
          Empieza hoy tu transformación
        </h2>

        {/* TEXTO */}
        <p className="mb-6 md:mb-8 text-sm md:text-base text-black/80">
          Tu mejor versión comienza con una decisión.
        </p>

        {/* CTA PRINCIPAL */}
        <a
          href="https://wa.me/573024221645?text=Hola%2C%20quiero%20empezar%20a%20entrenar%20en%20APEX%20CONVICTION"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 md:px-8 py-3 rounded-full bg-black text-white font-semibold text-sm md:text-base 
          transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Entrenar ahora
        </a>

        {/* PDF */}
        <div className="mt-6 flex flex-col items-center gap-3">

          <a
            href="/CONTRATO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full font-medium text-black bg-gray-100 text-sm transition hover:bg-gray-200"
          >
            Normas del club
          </a>

          <span className="text-xs text-black/60">
            Ver o descargar documento oficial
          </span>

        </div>

        {/* MICRO DETALLE */}
        <p className="text-[10px] md:text-xs text-black/60 mt-6">
          Respuesta rápida por WhatsApp ⚡
        </p>

      </motion.div>

    </footer>
  );
}

export default Footer;