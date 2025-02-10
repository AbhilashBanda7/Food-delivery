import React, { useContext, useState } from "react";
import { assets } from "../../frontend_assets/assets";
import "./Fooditem.css";
import { StoreContext } from "../../context/StoreContext";
function Fooditem({ id, name, description, image, price }) {
  const { cartitem, setCartitem, addToCart, removeFromCart } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-con">
        <img src={image} alt="" className="food-item-img" />
        {!cartitem[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt=""
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-count">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
              className="in"
            />
            <p>{cartitem[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
              className="in"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">Rs {price * 5}</p>
      </div>
    </div>
  );
}

export default Fooditem;
