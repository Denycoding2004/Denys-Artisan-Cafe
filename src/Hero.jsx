function Hero({ onReserveTable }) {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[440px] lg:min-h-[585px] flex items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: ` linear-gradient( to right, rgba(56, 29, 9, 0.92) 0%, rgba(56, 29, 9, 0.75) 50%, rgba(56, 29, 9, 0.45) 100% ), url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80") `,
        }}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="max-w-2xl ">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-caramel/20 border border-brand-caramel/40 text-brand-cornsilk text-xs tracking-wider uppercase font-semibold mb-3">
              <span class="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              Freshly Roasted Daily In-House
            </div>

            <h1 class="font-serif text-2xl sm:text-6xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Sip. Smile.
              <br />
              <span class="text-brand-caramel italic">Repeat.</span>
            </h1>

            <p class="text-sm sm:text-lg text-neutral-200 leading-relaxed font-light mb-8 max-w-xl">
              At Deny’s Café, we believe coffee is more than a drink — it’s an
              emotion. From bold espressos to velvety creamy lattes, every
              single cup is hand-poured using ethically sourced beans.
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                class="px-8 py-4 bg-brand-cornsilk hover:bg-white text-brand-bean font-bold rounded-full transition-all duration-300 shadow-warm hover:shadow-warm-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Explore Menu
              </a>
              <button
                type="button"
                onClick={onReserveTable}
                className="px-8 py-4 bg-brand-bean/80 hover:bg-brand-bean text-brand-cream border border-brand-caramel/50 font-bold rounded-full transition-all duration-300 hover:shadow-warm transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Reserve a Table
              </button>
            </div>

            <div class="mt-14 pt-5 border-t border-white/15 grid grid-cols-3 gap-6 text-neutral-300">
              <div>
                <p class="font-serif text-2xl lg:text-3xl font-bold text-white">
                  100%
                </p>
                <p class="text-xs uppercase tracking-wider text-neutral-300 mt-1">
                  Arabica Beans
                </p>
              </div>
              <div>
                <p class="font-serif text-2xl lg:text-3xl font-bold text-white">
                  15+
                </p>
                <p class="text-xs uppercase tracking-wider text-neutral-300 mt-1">
                  Coffee Blends
                </p>
              </div>
              <div>
                <p class="font-serif text-2xl lg:text-3xl font-bold text-white">
                  4.9★
                </p>
                <p class="text-xs uppercase tracking-wider text-neutral-300 mt-1">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
