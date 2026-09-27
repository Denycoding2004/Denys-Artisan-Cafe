import { useEffect, useState } from "react";

function Book({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-brand-cream w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-caramel/20 relative animate-in"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-brand-dark p-1.5 rounded-full hover:bg-neutral-200/50 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-amber font-bold">
            Book an Experience
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mt-1">
            Reserve Your Table
          </h3>

          <p className="text-neutral-600 text-xs sm:text-sm mt-1">
            Enjoy premium coffee with guaranteed seating at your preferred time.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                Your Name
              </label>

              <input
                type="text"
                required
                placeholder="e.g. Kaif Kazi"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                Phone Number
              </label>

              <input
                type="tel"
                required
                placeholder="e.g. 7984-2929-07"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
              />
            </div>
          </div>

          {/* Date + Time + Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                Date
              </label>

              <input
                type="date"
                required
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                Time
              </label>

              <input
                type="time"
                required
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                Guests
              </label>

              <select
                defaultValue="2"
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3-4">3 - 4 People</option>
                <option value="5+">5+ Group</option>
              </select>
            </div>
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
              Special Request (Optional)
            </label>

            <textarea
              rows="2"
              placeholder="e.g. Window seat, celebration, allergy notices..."
              className="w-full px-4 py-2 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-amber text-sm text-neutral-800"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition duration-200 shadow-md ${
                submitted
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-brand-bean hover:bg-brand-lightBean text-brand-cornsilk hover:shadow-lg"
              }`}
            >
              {submitted ? "Submitted ✓" : "Confirm Reservation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book;
