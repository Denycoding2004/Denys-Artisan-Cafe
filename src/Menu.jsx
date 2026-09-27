function Menu({ onShowPopup }) {
  return (
    <>
      <section id="menu" className="py-24 bg-brand-cornsilk/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-amber font-bold mb-2">
              Crafted with Passion
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Signature Specialties
            </h2>

            <p className="text-neutral-600 text-base">
              Carefully curated beans, balanced roasts, and precise temperatures
              for the discerning coffee enthusiast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Espresso */}
            <div className="group bg-white rounded-3xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between border border-brand-caramel/15 hover:-translate-y-2">
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-brand-card">
                  <img
                    src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/400x400/582f0e/f6f4d2?text=Espresso";
                    }}
                    alt="Classic Espresso shot with golden crema"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 bg-brand-dark/90 text-brand-cornsilk text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    $3.50
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
                  Espresso
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-4">
                  Origin: Italy • 30ml
                </p>

                <ul className="text-sm text-neutral-600 space-y-2 mb-6 border-t border-neutral-100 pt-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Pure, intense concentrated coffee
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Rich golden crema layer
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Bold aroma & dark roast profile
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onShowPopup("Espresso added to your favorites!")}
                className="w-full py-2.5 rounded-xl border border-brand-bean/30 hover:border-brand-bean bg-brand-cream hover:bg-brand-bean hover:text-white text-brand-bean font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Order for Table
              </button>
            </div>

            {/* Caffè Latte */}
            <div className="group bg-white rounded-3xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between border border-brand-caramel/15 hover:-translate-y-2">
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-brand-card">
                  <img
                    src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/400x400/582f0e/f6f4d2?text=Caffe+Latte";
                    }}
                    alt="Creamy Caffe Latte with delicate foam art"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 bg-brand-dark/90 text-brand-cornsilk text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    $4.75
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
                  Caffè Latte
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-4">
                  Velvety • Light Body
                </p>

                <ul className="text-sm text-neutral-600 space-y-2 mb-6 border-t border-neutral-100 pt-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Smooth shot blended with steamed milk
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Silky micro-foam top layer
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Vanilla or Hazelnut syrup options
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onShowPopup("Caffè Latte added to your order!")}
                className="w-full py-2.5 rounded-xl border border-brand-bean/30 hover:border-brand-bean bg-brand-cream hover:bg-brand-bean hover:text-white text-brand-bean font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Order for Table
              </button>
            </div>

            {/* Cappuccino */}
            <div className="group bg-white rounded-3xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between border border-brand-caramel/15 hover:-translate-y-2">
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-brand-card">
                  <img
                    src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/400x400/582f0e/f6f4d2?text=Cappuccino";
                    }}
                    alt="Cappuccino topped with cocoa dusting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 bg-brand-dark/90 text-brand-cornsilk text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    $4.50
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
                  Cappuccino
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-4">
                  Equal Parts Balance
                </p>

                <ul className="text-sm text-neutral-600 space-y-2 mb-6 border-t border-neutral-100 pt-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    1:1:1 espresso, milk, and dense foam
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Dusted with Belgian cocoa powder
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Pleasantly bold with airy texture
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onShowPopup("Cappuccino added to your order!")}
                className="w-full py-2.5 rounded-xl border border-brand-bean/30 hover:border-brand-bean bg-brand-cream hover:bg-brand-bean hover:text-white text-brand-bean font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Order for Table
              </button>
            </div>

            {/* Caffè Mocha */}
            <div className="group bg-white rounded-3xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between border border-brand-caramel/15 hover:-translate-y-2">
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-brand-card">
                  <img
                    src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/400x400/582f0e/f6f4d2?text=Caffe+Mocha";
                    }}
                    alt="Rich Caffè Mocha with chocolate swirl"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 bg-brand-dark/90 text-brand-cornsilk text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    $5.20
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
                  Caffè Mocha
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-4">
                  Indulgent Chocolate
                </p>

                <ul className="text-sm text-neutral-600 space-y-2 mb-6 border-t border-neutral-100 pt-3">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Dark chocolate syrup meets espresso
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Rich creamy steamed milk
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber"></span>
                    Optional fluffy whipped cream crown
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onShowPopup("Caffè Mocha added to your order!")}
                className="w-full py-2.5 rounded-xl border border-brand-bean/30 hover:border-brand-bean bg-brand-cream hover:bg-brand-bean hover:text-white text-brand-bean font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Order for Table
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
