import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import React from "react";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <h2>Your Shopping Cart</h2>

      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalprice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      {cartItems.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        <button className={classes.btn}>Click for submission</button>
      )}
    </>
  );
};

export default Cart;
