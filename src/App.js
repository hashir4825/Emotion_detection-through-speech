import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Module from './components/Module';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Module" element={<Module />}  />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
