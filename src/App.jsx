import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      {/* Navbar diletakkan di sini agar muncul di semua halaman */}
      <ParticleBackground />
      <Navbar /> 
      
      <Routes>
        {/* Halaman Utama (Hero, About, Skills, List Project, Contact) */}
        <Route path="/" element={<Home />} />
        
        {/* Halaman Detail Project (Menerima ID project) */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Footer diletakkan di sini agar muncul di semua halaman */}
      <Footer />
    </Router>
  );
}

export default App;