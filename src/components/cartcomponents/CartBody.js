"use client";

import React, {useEffect, useState} from "react";
import "./cartcomponents-style.css";
import { DeleteFilled } from "@ant-design/icons";
import { useRouter } from 'next/navigation'
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


const initialProducts = [
  {
    id: randomId(),
    name: "Marceline",
    price: 250000,
    img: "https://i.pinimg.com/564x/b5/30/87/b530872823fe3bd8e3b44fe2276813cd.jpg",
    quantity: 1,
  },
  {
    id: randomId(),
    name: "Marceline ver2",
    price: 350000,
    img: "https://i.pinimg.com/736x/dc/f7/7f/dcf77f294341e4a910575435e464dd2c.jpg",
    quantity: 1,
  },
  {
    id: randomId(),
    name: "Marceline ver3",
    price: 290000,
    img: "https://i.pinimg.com/564x/02/89/04/02890480b8306ac1731eacefe1e28325.jpg",
    quantity: 1,
  },
];


function Content() {
  const [products, setProducts] = useState([]);
  const getCart = async () => {
    const session = await initializeSession()
    const userId = session['userId']
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
  },[])
  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: parseInt(quantity) }
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
        <CartTotals totalItems={totalItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

function ProductTable({ products, onRemove, onQuantityChange }) {
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

const ProductRow = ({ product, onRemove, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value > 0) {
      onQuantityChange(product.id, value);
    }
  };

  return (
    <tr>
      <td className="image">
        <img src={product.img} alt={product.name} />
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

function CartTotals({ totalItems, totalPrice }) {
  const router = useRouter()
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
      <button className="checkout-btn" onClick={() => router.push('/checkout')}>Check Out</button>
    </div>
  );
}

export default Content;
