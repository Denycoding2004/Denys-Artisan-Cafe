function Popup({ show, message }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-brand-bean text-white px-5 py-3.5 rounded-2xl shadow-warm-lg flex items-center space-x-3 transition-all duration-300 border border-brand-caramel/40 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-7 h-7 rounded-full bg-brand-amber/30 text-brand-amber flex items-center justify-center flex-shrink-0">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <span className="text-sm font-medium">{message}</span>
    </div>  
  );
}

export default Popup;
