import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inputs from './pages/Inputs'
import Edo from './pages/Edo'
import SrFe from './pages/SrFe'
import SrBe from './pages/SrBe'
import Ide from './pages/Ide'
import APIEndpoint from './pages/APIEndpoint'
import JavaScript from './pages/JavaScript'

function App() {
  
  return (
    
    <div>
      {/* Define routes inside Router */}
      <Router basename="/mjPlayground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/javascript" element={<JavaScript />}/>
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/edo" element={<Edo />} />
          <Route path="/sr-fe" element={<SrFe />} />
          <Route path="/sr-be" element={<SrBe />} />
          <Route path="/ide" element={<Ide />} />
          <Route path="/apiendpoint" element={<APIEndpoint />} />
        </Routes>
      </Router>
      
    </div>
      
  );
}

export default App;
