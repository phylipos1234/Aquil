
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Hero from './pages/home/Hero';
import ProfessionalsPage from './pages/professinals';
import WebinarPage from './pages/webinar/Index';

function App() {
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
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
