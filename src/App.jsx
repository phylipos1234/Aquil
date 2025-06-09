import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Hero from "./pages/home/Hero";
import ProfessionalsPage from "./pages/professinals";
import About from "./pages/About/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
