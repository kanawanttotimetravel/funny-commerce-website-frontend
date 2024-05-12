import React from "react";
import "./style.css";
import Header from "@/components/headercomponent/HeaderComponent";

function CheckOutPage() {
  return (
    <div>
      <Header />
      <div className="box">
        <div className="div">
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="text-wrapper">Billing details</div>
              <div className="group-2">
                <div className="text-wrapper-2">First Name</div>
                <input type="text" className="rectangle" />
              </div>
              <div className="text-wrapper-3">Last Name</div>
              <input type="text" className="rectangle-2" />
              <div className="text-wrapper-4">Company Name (Optional)</div>
              <input type="text" className="rectangle-3" />
              <div className="group-3">
                <div className="text-wrapper-2">Street address</div>
                <input type="text" className="div-2" />
              </div>
              <div className="group-4">
                <div className="text-wrapper-2">ZIP code</div>
                <input type="text" className="div-2" />
              </div>
              <div className="group-5">
                <div className="text-wrapper-2">Town / City</div>
                <input type="text" className="div-2" />
              </div>
              <div className="group-6">
                <div className="text-wrapper-2">Phone</div>
                <input type="number" className="div-2" />
              </div>
              <div className="group-7">
                <div className="text-wrapper-2">Email address</div>
                <input type="text" className="div-2" />
              </div>
              <div className="overlap-group-wrapper">
                <input placeholder="Additional information" className="overlap-group"/>
              </div>
              <div className="div-wrapper">
                <div className="overlap-2">
                    <div className="text-wrapper-2">Country / Region</div>
                    <input className="div-2" />
                </div>
              </div>
              <div className="group-9">
                <div className="overlap-3">
                  <div className="group-10">
                    <div className="text-wrapper-2">Province</div>
                    <input type="text" className="div-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-11">
            <div className="group-12">
              <button className="overlap-group-2">
                Place order
              </button>
            </div>
            <div className="text-wrapper-9">Product</div>
            <div className="text-wrapper-10">Subtotal</div>
            <div className="text-wrapper-11">Rs. 250,000.00</div>
            <div className="text-wrapper-12">Subtotal</div>
            <div className="text-wrapper-13">Total</div>
            <div className="text-wrapper-14">Asgaard sofa</div>
            <div className="text-wrapper-15">X</div>
            <div className="text-wrapper-16">1</div>
            <div className="text-wrapper-17">Rs. 250,000.00</div>
            <div className="text-wrapper-18">Rs. 250,000.00</div>
            <p className="your-personal-data">
              <span className="span">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
              </span>
              <span className="text-wrapper-19">privacy policy.</span>
            </p>
            <div className="group-14">
              <input type="radio" className="text-wrapper-21"/>
            </div>
            <div className="group-15">
            <input type="radio" className="text-wrapper-21"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
