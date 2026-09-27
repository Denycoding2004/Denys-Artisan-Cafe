import { useState } from "react";

function Header({ onBookTable }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-caramel/20 bg-brand-cream/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-brand-dark hover:text-brand-amber font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Home
            </a>

            <a
              href="#menu"
              className="text-brand-dark/80 hover:text-brand-amber font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Our Menu
            </a>

            <a
              href="#about"
              className="text-brand-dark/80 hover:text-brand-amber font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              About Us
            </a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center gap-2 group"
              onClick={closeMobileMenu}
            >
              <div className="w-11 h-11 rounded-full bg-brand-bean text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-brand-caramel"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0,0,0 8,17H14A4,4 0,0,0 18,13V10H20A2,2 0,0 0 22,8V5C22,3.89 21.1,3 20,3Z" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark leading-none">
                  Deny's
                </span>

                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-amber">
                  Artisan Café
                </span>
              </div>
            </a>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#reviews"
              className="text-brand-dark/80 hover:text-brand-amber font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Reviews
            </a>

            <a
              href="#contact"
              className="text-brand-dark/80 hover:text-brand-amber font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Contact
            </a>

            {/* Desktop Book Table */}
            <button
              type="button"
              onClick={onBookTable}
              className="bg-brand-bean hover:bg-brand-lightBean text-brand-cornsilk px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-card focus:outline-none focus:ring-2 focus:ring-brand-amber transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-brand-caramel/20 bg-brand-cream/95 backdrop-blur-md px-6 pt-4 pb-6 space-y-3 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="block py-2 text-base font-medium text-brand-dark hover:text-brand-amber transition-colors"
        >
          Home
        </a>

        <a
          href="#menu"
          onClick={closeMobileMenu}
          className="block py-2 text-base font-medium text-brand-dark hover:text-brand-amber transition-colors"
        >
          Our Menu
        </a>

        <a
          href="#about"
          onClick={closeMobileMenu}
          className="block py-2 text-base font-medium text-brand-dark hover:text-brand-amber transition-colors"
        >
          About Us
        </a>

        <a
          href="#reviews"
          onClick={closeMobileMenu}
          className="block py-2 text-base font-medium text-brand-dark hover:text-brand-amber transition-colors"
        >
          Reviews
        </a>

        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="block py-2 text-base font-medium text-brand-dark hover:text-brand-amber transition-colors"
        >
          Contact Us
        </a>

        {/* Mobile Book Table */}
        <div className="pt-3">
          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              onBookTable();
            }}
            className="w-full text-center bg-brand-bean hover:bg-brand-lightBean text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md hover:shadow-lg transition-all duration-300"
          >
            Book a Table
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
