import React from "react";
import { Link } from "react-router-dom";
const Stockshow = (props) => {
  console.log(props.stock);
 return (
    <>
     <section>
     <div className="App">
{props.stock?.map((item, index) => (
  <div className="intro">
    <ul>
    <li>
    <Link to={`/stocks/${item.symbol}`}>
        <h3>{item.name}</h3>
</Link>
    </li>
    </ul>
  </div>
  
))}
</div>
     </section>
    </>)
}
export default Stockshow;