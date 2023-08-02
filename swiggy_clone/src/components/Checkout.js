import { useDispatch, useSelector } from "react-redux";
import ItemList from "./restaurant/restaurantMenu/ItemList";
import { clearCart } from "../utils/storeSlices/cart";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 text-left">
        <button onClick={handleClearCart}>Clear</button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Checkout;
