import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Inputs from './pages/Inputs'
import Edo from './pages/Edo';
import SrFe from './pages/SrFe'
import SrBe from './pages/SrBe'
import BoxPage from './pages/BoxPage'
import { Animation } from './pages/Animation';

function App() {
  
  return (
    
    <div>
      {/* Define routes inside Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/edo" element={<Edo />} />
          <Route path="/sr-fe" element={<SrFe />} />
          <Route path="/sr-be" element={<SrBe />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/boxpage" element={<BoxPage />} />
        </Routes>
      </Router>
      
    </div>
      
  );
}

export default App;
