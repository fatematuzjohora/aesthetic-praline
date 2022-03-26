import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import Cart from '../Cart/Cart'
import BONUS from '../Q&A/BONUS.JS';

const Watchs = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then (response => response.json())
        .then (data => setProducts(data))
    },[])
    const addToCart = (product) => {
        const matchetProduct = cart.find((item) => item.id === product.id);
        if (matchetProduct) {
          alert("This Item has been already added");
        } else if (cart.length >= 4) {
          alert("You can not add more then 4 items");
        } else {
          const newCart = [...cart, product];
          setCart(newCart);
        }
      };
      const randomOne = () => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        const newCarts = [random];
        setCart(newCarts);
      };
      const resetButton = () => {
        const reset = [];
        setCart(reset);
      };
    return (
        <div className="watch-container">
          <div className="product-container">
        {products.map((product) => (
          <Watch key={product.id} product={product} addToCart={addToCart}></Watch>
        ))}
      </div>
           <div className="cart-container">
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <div className="choose-btn">
        <button onClick={randomOne}>
          <p>Choose one</p>
        </button>
        <button onClick={resetButton}>
          <p>Choose Again</p>
        </button>
        </div>
      </div>
      <BONUS></BONUS>
        </div>
    );
};

export default Watchs;