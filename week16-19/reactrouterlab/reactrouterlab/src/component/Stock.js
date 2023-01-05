import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Stock() {
    const { symbol} = useParams();
    return (
      <div >
        <h3>{symbol}</h3>
      </div>
    );
  }
export default Stock;