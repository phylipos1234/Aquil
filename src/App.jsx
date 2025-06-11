import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Hero from "./pages/home/Hero";
import Header from "./components/Header";
import ProfessionalsPage from "./pages/professinals";
import WebinarPage from "./pages/webinar";
import { FaAngleUp } from "react-icons/fa";
import About from "./pages/About";
import Accessible from "./pages/Accessible";
import Sustainability from "./pages/home/Sustainability";
import Wedding from "./pages/Wedding";
import Explorer from "./pages/Explorer";
import Footer from "./components/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessible" element={<Accessible />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>

      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-10 rounded-lg bg-black/70 text-white flex items-center justify-center shadow-md hover:bg-black/90 transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaAngleUp
            size={20}
            className="transition-transform duration-500 hover:scale-125"
          />
        </button>
      )}
    </Router>
  );
}

export default App;
