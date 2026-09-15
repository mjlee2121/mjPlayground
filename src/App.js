import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './.bin/Home.js'
import Inputs from './pages/Inputs'
import Edo from './pages/Edo'
import SrFe from './pages/SrFe'
import SrBe from './pages/SrBe'
import Ide from './pages/Ide'
import APIEndpoint from './pages/APIEndpoint'
import JSES6 from './pages/JSES6.js'
import JSStaticMethods from './pages/JSStaticMethods.js';
import WPI from './pages/WPI.js';
import Ramp from './pages/Ramp.js';
import Portfolio from './pages/Portfolio.js';
import Hobby from './pages/Hobby.js';
import AboutMinji from './pages/MainHub/AboutMinji.js';

function App() {
  return (
      <Router basename="/mjPlayground">
      <div className='universal-bg app-layout'>
        <main className='main-content'>
          <Routes>
          <Route path="/" element={<AboutMinji />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/jses6" element={<JSES6 />}/>
          <Route path="/jsstaticmethods" element={<JSStaticMethods />}/>
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/edo" element={<Edo />} />
          <Route path="/sr-fe" element={<SrFe />} />
          <Route path="/sr-be" element={<SrBe />} />
          <Route path="/ide" element={<Ide />} />
          <Route path="/apiendpoint" element={<APIEndpoint />} />
          <Route path="/wpi" element={<WPI />} />
          <Route path="/ramp" element={<Ramp />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hobby" element={<Hobby />} />
        </Routes>
        </main>
        </div>

      </Router>
  );
}

export default App;
