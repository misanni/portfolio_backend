import React from "react"
import { NavLink } from 'react-router-dom';
function Home () {
    return (
<div className="App">
<div className="container">
<span className="istocks"><NavLink exact to={"/"}>istocks</NavLink></span>&ensp; &ensp;
<span><NavLink exact to={"/stocks/"}>Stocks</NavLink></span>&ensp; &ensp;
<NavLink exact to={"/about"}>About</NavLink>
</div>
Welcome to home page
</div>
);}
export default Home;