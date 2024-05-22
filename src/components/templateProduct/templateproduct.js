import React from "react";
import "./template-style.css"; // Import your CSS file
import BoxProduct from "@/components/templateProduct/BoxItemProduct";
import SubButton from "@/components/adminComponents/SubButton";

function TemplateProduct() {
  return (
    <div className="container">
      <div className="grid-box">
        <div className="grid-left">
          <BoxProduct nameProduct="NAME:" />
          <BoxProduct nameProduct="PRICE:" />
          <BoxProduct nameProduct="AMOUNT:" />
        </div>
        <div className="grid-right">
          <p>Image:</p>
          <div className="image-upload">
            <input type="text" className="image-input" />
            <div className="upload">
              <a href="#" className="upload-image">
                upload image
              </a>
            </div>
          </div>
          <p>Product Description:</p>
          <input type="text" className="description-input" />
        </div>
      </div>
      <SubButton buttonText="INSERT" />
    </div>
  );
}

export default TemplateProduct;
