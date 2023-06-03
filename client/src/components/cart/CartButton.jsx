import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
// import { cartAction } from "../../store/cart-slice";
import { useSelector } from "react-redux";
import React from "react";
import { toggle } from "../../slices/cartSlice";

const CartButton = (props) => {
  const cartitemsquantity = useSelector((state) => state.cart.totalQuantity);
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={buttonClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartitemsquantity}</span>
    </button>
  );
};

export default CartButton;
