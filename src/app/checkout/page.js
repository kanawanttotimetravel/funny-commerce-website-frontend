"use client";
import React, {useEffect, useState} from "react";
import "./style.css";
import Header from "@/components/headercomponent/HeaderComponent";
import FormInputCustom from "@/components/atomic/FormInputCustom";
import Footer from "@/components/footer/footer";
import axios from "axios";
import {initializeSession} from "@/apis/utils";

function CheckOutPage() {
  const [products, setProducts] = useState([])
  const updateProduct = async () => {
    const session = await initializeSession()
    const userId = session['userId']
    const request = await axios({
      url: (process.env.HOST && `${process.env.HOST}/cart/get`)
        || `http://localhost:5000/cart/get`,
      method: 'post',
      data: {
        user_id: userId
      },
    });
    setProducts(request.data.data)
    console.log(request.data.data)
  }
  useEffect(() => {
    updateProduct()
  }, []);

  products.forEach(item => {
    if (!products[item.name]) {
      // Nếu tên sản phẩm chưa tồn tại, khởi tạo số lượng là 1
      products[item.name] = {
        name: item.name,
        price: item.price,
        quantity: 1
      };
    } else {
      // Nếu tên sản phẩm đã tồn tại, tăng số lượng lên 1
      products[item.name].quantity++;
    }
  });

  const productList = products.map(product => (
    <div key={product.name} className="product-row">
      <p className="product-name">
        <span className="product-name-text" >{product.name}</span>
        {product.quantity > 1 && <span className="product-quantity"> x{product.quantity}</span>}
      </p>
      <p>{product.price * product.quantity} VND</p>
    </div>
  ));

  const totalPrice = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  const [selectedPayment, setSelectedPayment] = useState("");
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  return (
    <div>
      <Header/>
      <div className="box">
        <div className="billing-payment-container">
          <div className="billing-details-container">
            <p>Billing details</p>
            <div className="name-container">
              <FormInputCustom name={'First Name'} type={'text'} placeholder={''} width="12rem"/>
              <FormInputCustom name={'Last Name'} type={'text'} placeholder={''} width="12rem"/>
            </div>
            <div className="more-infomation-container">
              <FormInputCustom name={'Company Name (Optional)'} type={'text'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'Country / Region'} type={'text'} placeholder={'Sri Lanka'} width="25.25rem"/>
              <FormInputCustom name={'Street address'} type={'text'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'Town / City'} type={'text'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'Province'} type={'text'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'ZIP code'} type={'text'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'Phone'} type={'number'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={'Email address'} type={'email'} placeholder={''} width="25.25rem"/>
              <FormInputCustom name={''} type={'text'} placeholder={'Additional information'} width="25.25rem"/>
            </div>
          </div>
          <div className="payment-container">
            <div className="payment-details">
              <div className="product-subtotal">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <div className="productname-price">
                {productList}
              </div>
              <div className="total-price">
                <p id="total">Total</p>
                <p id="price"> {totalPrice}  VND</p>
              </div>
            </div>
            <div className="payment-methods">
              <div>
                <label>
                  <input
                    type="radio"
                    value="cash_on_delivery"
                    checked={selectedPayment === "cash_on_delivery"}
                    onChange={handlePaymentChange}
                  />
                  Cash on Delivery
                </label>
                {selectedPayment === "cash_on_delivery" && (
                  <p className="descript">Cash on Delivery (COD) is a financial transaction method where the recipient of goods pays for the products at the time of delivery, rather than in advance</p>
                )}
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="direct_bank_transfer"
                    checked={selectedPayment === "direct_bank_transfer"}
                    onChange={handlePaymentChange}
                  />
                  Direct Bank Transfer
                </label>
                {selectedPayment === "direct_bank_transfer" && (
                  <p className="descript">Make your payment directly into our bank account.</p>
                )}
              </div>
            </div>
            <div className="descript">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>
            </div>
            <div className="button-wrapper">
              <button>
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckOutPage;
