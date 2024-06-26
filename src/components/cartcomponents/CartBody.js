"use client";

import React, {useEffect, useState} from "react";
import "./cartcomponents-style.css";
import {DeleteFilled} from "@ant-design/icons";
import {useRouter} from 'next/navigation'
import axios from "axios";
import {initializeSession} from "@/apis/utils";

function randomId() {
  return Math.floor(Math.random() * 100000);
}

function convertMoney(num, toCurrency = "VND") {
  const conversionRates = {
    INR: 1,
    VND: 1, // Example conversion rate
  };

  let convertedAmount = num;
  if (toCurrency === "VND") {
    convertedAmount = num * conversionRates[toCurrency];
  }

  return convertedAmount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}

function Content() {
  const [products, setProducts] = useState([]);
  let userId = null;
  const getCart = async () => {
    const session = await initializeSession()
    userId = session['userId']
    const request = await axios({
      url: (process.env.HOST && `${process.env.HOST}/cart/get`)
        || `http://localhost:5000/cart/get`,
      method: 'post',
      data: {
        user_id: userId
      },
    })
    const productList = request.data.data;
    setProducts(productList)
  }
  useEffect(() => {
    getCart()
  }, [])

  const handleRemove = async (id) => {
    const session = await initializeSession()
    userId = session['userId']
    const request = await axios({
      url: (process.env.HOST && `${process.env.HOST}/cart/remove`)
        || `http://localhost:5000/cart/remove`,
      method: 'post',
      data: {
        user_id: userId,
        item_id: id,
      },
    })
    console.log(request.data)
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {...product, quantity: parseInt(quantity)}
          : product
      )
    );
  };

  const totalItems = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  function CartTotals({totalItems, totalPrice}) {
    const router = useRouter()
    const handleCheckout = async () => {
      const session = await initializeSession()
      userId = session['userId']
      const request = await axios({
        url: (process.env.HOST && `${process.env.HOST}/cart/update`)
          || `http://localhost:5000/cart/update`,
        method: 'post',
        data: {
          user_id: userId,
          item_list: products
        },
      })
      router.push('/checkout')
    }
    return (
      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>{convertMoney(totalPrice)}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{convertMoney(totalPrice)}</span>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>Check Out</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="block block-left">
        <ProductTable
          products={products}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="block block-right">
        <CartTotals totalItems={totalItems} totalPrice={totalPrice}/>
      </div>
    </div>
  );
}

function ProductTable({products, onRemove, onQuantityChange}) {
  return (
    <table className="product-table">
      <thead>
      <tr>
        <th className="image"></th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th className="trash"></th>
      </tr>
      </thead>
      <tbody>
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
        />
      ))}
      </tbody>
    </table>
  );
}

const ProductRow = ({product, onRemove, onQuantityChange}) => {
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value > 0) {
      onQuantityChange(product.id, value);
    }
  };

  return (
    <tr>
      <td className="image">
        <img src={product.img} alt={product.name}/>
      </td>
      <td>{product.name}</td>
      <td>{convertMoney(product.price)}</td>
      <td>
        <input
          type="number"
          className="quantity"
          value={product.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </td>
      <td>{convertMoney(product.price * product.quantity)}</td>
      <td className="trash">
        <DeleteFilled
          className="trash-icon"
          onClick={() => onRemove(product.id)}
        />
      </td>
    </tr>
  );
};



export default Content;
