import React from "react"
import Stockshow from './Stockshow';
import stock from './Stock-data.js'
function Dashboard () {
  return (
    <div>
      <Stockshow stock={stock} />
    </div>
  );
}
export default Dashboard;