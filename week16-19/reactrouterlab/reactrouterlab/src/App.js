import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import Home from './component/Home';
import Stock from './component/Stock';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Stockshow from './component/Stockshow';


import './App.css'
function Navbar () {
  return (
<div className="App">
<div className="container">
<span className="istocks"><NavLink exact to={"/"}>istocks</NavLink></span>&ensp; &ensp;
<span><NavLink exact to={"/stocks/"}>Stocks</NavLink></span>&ensp; &ensp;
<NavLink exact to={"/about"}>About</NavLink>
</div>
</div>
);}
function App() {
 
  return (
    <div className='containner'>
     <Router>
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/stocks/:symbol"  element={<Stock />} />
          <Route exact path="/stocks" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
