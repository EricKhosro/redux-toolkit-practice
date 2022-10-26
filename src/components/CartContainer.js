import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { openModal } from "../features/modalSlice";
const CartContainer = () => {
  const { cartItems, total, amount, isLoading } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  if (isLoading)
    return (
      <section className="cart">
        <header>
          <h2>Loading...</h2>
        </header>
      </section>
    );
  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </footer>
      ;
    </section>
  );
};

export default CartContainer;
