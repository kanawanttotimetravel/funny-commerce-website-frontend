import React from "react";
import "./box-item.css"; // Import your CSS file

function BoxProduct({ nameProduct }) {
  return (
    <div className="box-item">
      <p>{nameProduct}</p>
      <input type="text" className="boxitem-input" />
    </div>
  );
}

export default BoxProduct;
