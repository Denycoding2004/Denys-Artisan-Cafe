import About from "./About";

import Book from "./Book";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import Reviews from "./Reviews";
import { useState } from "react";
import Popup from "./Popup";
function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    message: "",
  });
  const showPopup = (message) => {
    setPopup({
      show: true,
      message,
    });

    setTimeout(() => {
      setPopup({
        show: false,
        message: "",
      });
    }, 3000);
  };
  return (
    <>
      <Header onBookTable={() => setIsBookingOpen(true)} />
      <Hero onReserveTable={() => setIsBookingOpen(true)} />
      <Menu onShowPopup={showPopup} />
      <About onReserveSpot={() => setIsBookingOpen(true)} />
      <Reviews />
      <Footer onReserveTable={() => setIsBookingOpen(true)} />
      <Book isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Popup show={popup.show} message={popup.message} />{" "}
    </>
  );
}

export default App;
