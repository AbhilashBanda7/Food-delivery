import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { assets } from "../../frontend_assets/assets";
function Cart() {
  const { food_list, addToCart, cartitem, removeFromCart,cartTotal, setCartitem } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs {item.price}</p>
                  <div className="cart-item-count">
                    <img
                      src={assets.remove_icon_red}
                      alt=""
                      onClick={() => removeFromCart(item._id)}
                      className="in"
                    />
                    <p>{cartitem[item._id]}</p>
                    <img
                      src={assets.add_icon_green}
                      alt=""
                      onClick={() => addToCart(item._id)}
                      className="in"
                    />
                  </div>
                  <p>Rs {item.price * cartitem[item._id]}</p>
                  <p className="cross" onClick={() => setCartitem({...cartitem,[item._id]:0})}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{cartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{cartTotal()+20}</b>
            </div>
          </div>
          <button>Proceed to check out</button>
        </div>
        <div className="cart-promo">
          <div>
            <p>If you have a promo-code,Enter it here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder="promo-code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
