import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem, decrease, increase } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (amount === 0) dispatch(removeItem(id));
  }, [amount]);
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => dispatch(decrease(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
