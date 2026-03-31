import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // 🔥 Animaciones suaves (sin romper render)
  const bgY = useTransform(scrollY, [0, 600], [0, isMobile ? 60 : 120]);
  const contentY = useTransform(scrollY, [0, 600], [0, isMobile ? -20 : -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] md:h-screen overflow-hidden bg-black pt-[65px]"
    >
      {/* BACKGROUND (SIN SCALE ❌) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

      {/* GLOW SUAVE (optimizado) */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.15),transparent_60%)]"
      />

      {/* CONTENIDO */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative flex flex-col justify-center items-center text-center px-5 min-h-[calc(100svh-65px)] md:h-full"
      >
        {/* TAG */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] md:text-xs tracking-[0.3em] text-gray-400 mb-4"
        >
          MMA · FITNESS · PERFORMANCE
        </motion.span>

        {/* 🔥 TITULO (FIX PRINCIPAL) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
        >
          <span className="text-white">APEX</span>{" "}
          <span className="text-gray-400">CONVICTION</span>
        </motion.h1>

        {/* LINEA */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isMobile ? "60px" : "100px" }}
          transition={{ delay: 0.4 }}
          className="h-[2px] bg-gray-300 mt-4"
        />

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-300 max-w-xs md:max-w-lg text-xs md:text-lg"
        >
          No es un gimnasio. Es una mentalidad.
        </motion.p>

        {/* BOTON (SIN manipular DOM ❌) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <a
            href="https://wa.me/573024221645?text=Hola%2C%20quiero%20entrenar%20en%20APEX%20CONVICTION"
            className="relative px-7 py-3 rounded-full font-semibold text-black bg-gray-200 overflow-hidden text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gray-400 opacity-20 blur-lg"></span>

            <span className="relative z-10">
              Entrenar ahora
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;