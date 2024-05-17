import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Module from './components/Module';
import ParticlesComponent from './components/particles';

const App = () => {
  return (
    <>
   <div className='App'>
    {/* <ParticlesComponent id="particles"/> */}
   <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Module" element={<Module />}  />
      </Routes>
      
    </Router>
   </div>
    </>
  );
}

export default App;