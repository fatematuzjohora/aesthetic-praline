import React from 'react';
import './Watch.css'

const Watch = ({ addToCart, product }) => {
    const { img, name, price } = product;
    return (
       
            <div className="watch">
      <img src={img} alt="" />
      <div className="watch-info">
        <p className="watch-name">Name: {name}</p>
        <p className="watch-price">price: ${price}</p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
      </button>
    </div>
    
    );
};

export default Watch;