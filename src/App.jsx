
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Hero from './pages/home/Hero';
import ProfessionalsPage from './pages/professinals';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Hero/>} />
          <Route path="/professionals" element={<ProfessionalsPage/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    
    </>
  )
}

export default App
