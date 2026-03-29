import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Inicio", link: "#hero" },
  { name: "Entrenamiento", link: "#servicios" },
  { name: "Planes", link: "#planes" },
  { name: "Horarios", link: "#horarios" },
  { name: "Contacto", link: "#contacto" },
];

function Navbar() {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detectar sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">

          {/* LOGO */}
          <h1 className="font-semibold tracking-[0.25em] text-xs md:text-sm">
            APEX CONVICTION
          </h1>

          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex gap-10 text-sm font-medium relative">
            {links.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.link}
                  className={`relative px-1 py-1 transition-colors duration-300 ${
                    active === item.link
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}

                  {active === item.link && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/573024221645?text=Hola%2C%20quiero%20entrenar%20en%20APEX%20CONVICTION"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-red-600 text-sm font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Entrenar
            </a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span
              className={`w-6 h-[2px] bg-white transition ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>

        </div>
      </motion.nav>

      {/* MENU MOBILE FULLSCREEN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 text-white text-2xl"
          >
            {links.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-red-500 transition"
              >
                {item.name}
              </a>
            ))}

            {/* CTA MOBILE */}
            <a
              href="https://wa.me/573024221645?text=Hola%2C%20quiero%20entrenar%20en%20APEX%20CONVICTION"
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 rounded-full bg-red-600 text-lg font-semibold"
            >
              Entrenar ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;