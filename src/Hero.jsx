function Hero({ onReserveTable }) {
  return (
    <section
      id="home"
      className="relative min-h-[680px] sm:min-h-[620px] md:min-h-[650px] lg:min-h-[585px] flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(56, 29, 9, 0.94) 0%,
            rgba(56, 29, 9, 0.82) 50%,
            rgba(56, 29, 9, 0.55) 100%
          ),
          url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80")
        `,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-caramel/20 border border-brand-caramel/40 text-brand-cornsilk text-[10px] sm:text-xs tracking-wider uppercase font-semibold mb-5 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse shrink-0"></span>
            <span>Freshly Roasted Daily In-House</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-5 sm:mb-6">
            Sip. Smile.
            <br />
            <span className="text-brand-caramel italic">Repeat.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed font-light mb-7 sm:mb-8 max-w-xl">
            At Deny’s Café, we believe coffee is more than a drink — it’s an
            emotion. From bold espressos to velvety creamy lattes, every single
            cup is hand-poured using ethically sourced beans.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-cornsilk hover:bg-white text-brand-bean font-bold rounded-full transition-all duration-300 shadow-warm hover:shadow-warm-lg transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider"
            >
              Explore Menu
            </a>

            <button
              type="button"
              onClick={onReserveTable}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-bean/80 hover:bg-brand-bean text-brand-cream border border-brand-caramel/50 font-bold rounded-full transition-all duration-300 hover:shadow-warm transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider"
            >
              Reserve a Table
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-10 sm:mt-12 lg:mt-14 pt-5 sm:pt-6 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-6 text-neutral-300">
            <div>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                100%
              </p>
              <p className="text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-neutral-300 mt-1">
                Arabica Beans
              </p>
            </div>

            <div>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                15+
              </p>
              <p className="text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-neutral-300 mt-1">
                Coffee Blends
              </p>
            </div>

            <div>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                4.9★
              </p>
              <p className="text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-neutral-300 mt-1">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
