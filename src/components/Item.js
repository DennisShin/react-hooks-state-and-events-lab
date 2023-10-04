import React, { useState } from "react";


function Item({ name, category }) {
  
  const [itemInCart, setItemInCart] = useState(false);
  const cartStatus = !itemInCart ? "Add to Cart" : "In Cart!"
  const cartItemClass = itemInCart ? "in-cart" : "add"

  function isItemInCart(){
    setItemInCart(prevBool => !prevBool);
    return cartItemClass;
  }


  return (
    <li className={cartItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={isItemInCart} className={cartItemClass}>{cartStatus}</button>
    </li>
  );
}

export default Item;
