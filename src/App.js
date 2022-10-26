import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
import { closeModal } from "./features/modalSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calculateTotal());
    if (cartItems.length < 1) dispatch(closeModal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
