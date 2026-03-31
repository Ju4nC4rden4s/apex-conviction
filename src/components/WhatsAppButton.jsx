function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573024221645?text=Hola%2C%20quiero%20entrenar%20en%20APEX%20CONVICTION"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2 px-5 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      {/* ICONO */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-white"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.646.862 5.094 2.32 7.078L4 29l7.13-2.26A11.94 11.94 0 0016.001 27C22.627 27 28 21.627 28 15S22.627 3 16.001 3zm0 21.8c-2.04 0-3.96-.63-5.55-1.71l-.4-.25-4.23 1.34 1.38-4.13-.26-.42A9.75 9.75 0 016.2 15c0-5.41 4.39-9.8 9.8-9.8s9.8 4.39 9.8 9.8-4.39 9.8-9.8 9.8zm5.37-7.36c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.51.07-.78.36-.26.29-1.03 1.01-1.03 2.47s1.06 2.86 1.21 3.06c.15.19 2.08 3.17 5.05 4.44.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.34z" />
      </svg>

      <span>Escríbenos</span>
    </a>
  );
}

export default WhatsAppButton;