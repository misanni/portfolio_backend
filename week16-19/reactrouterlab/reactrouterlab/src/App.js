import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './component/Home';
import Stock from './component/Stock';
import About from './component/About';
import Dashboard from './component/Dashboard';

import './App.css'
function App() {
 
  return (
    <div className='containner'>
      <Router>
        <Home/>
        <Routes>
         
          <Route exact path="/about" element={<About />} />
          <Route exact path="/stock" element={<Stock />} />
          <Route exact path="/stocks/:id" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
