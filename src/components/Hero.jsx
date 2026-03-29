import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const title = "APEX CONVICTION".split("");

function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const bgY = useTransform(scrollY, [0, 600], [0, isMobile ? 80 : 200]);
  const contentY = useTransform(scrollY, [0, 600], [0, isMobile ? -30 : -80]);
  const scale = useTransform(scrollY, [0, 600], [1, isMobile ? 1.1 : 1.25]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const btnRef = useRef();

  const handleMove = (e) => {
    if (isMobile) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

    btnRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  };

  const reset = () => {
    if (isMobile) return;
    btnRef.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] md:h-screen overflow-hidden bg-black pt-[65px]"
    >

      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

      {/* GLOW */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.2),transparent_60%)]"
      />

      {/* CONTENIDO */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative flex flex-col justify-center items-center text-center px-5 min-h-[calc(100svh-65px)] md:h-full"
      >

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] md:text-xs tracking-[0.3em] text-gray-400 mb-4"
        >
          MMA · FITNESS · PERFORMANCE
        </motion.span>

        <h1 className="text-2xl sm:text-3xl md:text-7xl font-semibold tracking-tight leading-[1.1] flex flex-wrap justify-center">
          {title.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: isMobile ? index * 0.02 : index * 0.04,
                duration: 0.5,
              }}
              className={`${
                letter === " " ? "mx-1 md:mx-2" : ""
              } ${letter === "C" ? "text-red-500" : ""}`}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isMobile ? "60px" : "100px" }}
          transition={{ delay: 0.6 }}
          className="h-[2px] bg-red-500 mt-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-gray-300 max-w-xs md:max-w-lg text-xs md:text-lg"
        >
          No es un gimnasio. Es una mentalidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6"
        >
          <a
            ref={btnRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            href="https://wa.me/573024221645?text=Hola%2C%20quiero%20entrenar%20en%20APEX%20CONVICTION"
            className="relative px-7 py-3 rounded-full font-semibold text-white bg-red-600 overflow-hidden group text-sm active:scale-95"
          >
            <span className="absolute inset-0 bg-red-500 blur-xl opacity-30 group-hover:opacity-60 transition"></span>

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