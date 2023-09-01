import React, { useContext } from "react";
import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { ModalCartContext } from "../../App";

const HeaderCartButton = (props) => {
  const modalContextCart = useContext(ModalCartContext);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 3);

  return (
    <button className={classes.button} onClick={modalContextCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;


