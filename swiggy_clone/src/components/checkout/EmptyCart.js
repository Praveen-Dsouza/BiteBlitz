import ErrorPages from "../common/ErrorPages";
import { EMPTY_CART_URL } from "../../utils/constants";

const EmptyCart = () => {
  const errText = "Your cart is empty";
  const errDescription = "You can go to home page to view more restaurants";
  const btnText = "See restaurants near you";

  return (
    <ErrorPages
      imagesUrl={EMPTY_CART_URL}
      errText={errText}
      errDescription={errDescription}
      btnText={btnText}
    />
  );
};

export default EmptyCart;
