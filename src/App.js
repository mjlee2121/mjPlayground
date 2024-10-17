import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Inputs from './pages/Inputs'
import Edo from './pages/Edo';
import SrFe from './pages/SrFe'
import SrBe from './pages/SrBe'
import BoxPage from './pages/BoxPage'
import Ide from './pages/Ide'
import Travel from './pages/Travel';
import { Animation } from './pages/Animation';
import APIEndpoint from './pages/APIEndpoint';

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
          <Route path="/ide" element={<Ide />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/apiendpoint" element={<APIEndpoint />} />

          
        </Routes>
      </Router>
      
    </div>
      
  );
}

export default App;
