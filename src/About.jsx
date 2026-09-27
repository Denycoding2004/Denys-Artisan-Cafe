function About({ onReserveSpot }) {
  return (
    <>
      <section id="about" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500/582f0e/f6f4d2?text=Coffee+Craft";
                  }}
                  alt="Barista brewing single origin coffee"
                  className="rounded-3xl shadow-warm object-cover w-full h-64 hover:scale-[1.02] transition-transform duration-300"
                />

                <div className="p-6 rounded-3xl bg-brand-card border border-brand-caramel/20 flex flex-col justify-center">
                  <span className="font-serif text-3xl font-bold text-brand-dark">
                    Est. 2021
                  </span>

                  <span className="text-xs text-neutral-600 uppercase font-semibold tracking-wider mt-1">
                    Community First Hub
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-3xl bg-brand-bean text-white shadow-warm flex flex-col justify-center">
                  <span className="font-serif text-3xl font-bold text-brand-caramel">
                    100%
                  </span>

                  <span className="text-xs text-neutral-200 uppercase font-semibold tracking-wider mt-1">
                    Organic Specialty Roast
                  </span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500/582f0e/f6f4d2?text=Cozy+Ambiance";
                  }}
                  alt="Cozy interior aesthetic with wooden tables"
                  className="rounded-3xl shadow-warm object-cover w-full h-64 hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-amber font-bold">
                Our Philosophy
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
                A Warm Sanctuary for Genuine Coffee Lovers
              </h2>

              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  <strong>Deny’s Café</strong> is a warm and welcoming space
                  created for coffee lovers who appreciate freshness, comfort,
                  and unforgettable flavors. Every single cup we pour is crafted
                  with care, utilizing premium single-origin beans sourced
                  directly from responsible coffee growers.
                </p>

                <p>
                  Whether you're kickstarting your morning with an eye-opening
                  double espresso, taking a peaceful study break with high-speed
                  Wi-Fi, or sharing warm conversations with friends, our café
                  offers the ultimate escape.
                </p>

                <p>
                  Along with our handcrafted drinks, we take pride in our
                  freshly baked artisanal pastries, delicate treats, and light
                  bites prepared fresh every sunrise. At Deny’s Café, coffee is
                  an experience, a moment of joy, and a friendly bridge
                  connecting people.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-card flex items-center justify-center text-brand-bean">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-brand-dark">
                    Fast Wi-Fi
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-card flex items-center justify-center text-brand-bean">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-brand-dark">
                    Fresh Pastries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-card flex items-center justify-center text-brand-bean">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-brand-dark">
                    Cozy Seating
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onReserveSpot}
                  className="inline-flex items-center gap-3 bg-brand-bean hover:bg-brand-lightBean text-brand-cornsilk px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-warm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Reserve Your Spot
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
