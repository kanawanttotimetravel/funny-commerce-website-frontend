import React from "react";
import "./cart-style.css";
import Content from "@/components/cartcomponents/CartBody";
import Slider from "@/components/cartcomponents/CartSlider";
import Footer from "@/components/footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Slider></Slider>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
