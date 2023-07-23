import { Link, Outlet } from "react-router-dom";
import {
  CART_URL,
  LOGO_URL,
  OFFERS_URL,
  SEARCH_URL,
  SIGNIN_URL,
  SUPPORT_URL,
} from "../utils/constants";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between font-default shadow-md px-5 h-20 font-medium text-[#3d4152] text-base">
        <div className="col-6/12">
          <Link to="/">
            <img
              className="w-[34px] h-[49px] m-4 cursor-pointer hover:scale-110 transform transition duration-500 hover:subpixel-antialiased "
              src={LOGO_URL}
              alt="logo"
            />
          </Link>
        </div>
        <div className="col-6/12 py-6">
          <ul className="flex">
            <li className="flex mr-[60px] cursor-pointer">
              <img
                className="w-[19px] h-[19px] mr-4 my-1"
                src={SEARCH_URL}
                alt="search-icon"
              />
              <span className="my-1">Search</span>
            </li>
            <li className="flex mr-[60px] cursor-pointer">
              <Link className="flex" to="/offers-near-me">
                <img
                  className="w-[19px] h-[19px] mr-2 my-1"
                  src={OFFERS_URL}
                  alt="offers-icon"
                />
                <span className="my-1">Offers</span>
              </Link>
            </li>
            <li className="flex mr-[60px] cursor-pointer">
              <Link className="flex" to="/support">
                <img
                  className="w-[22px] h-[22px] mr-2 my-1"
                  src={SUPPORT_URL}
                  alt="help-icon"
                />
                <span className="my-1">Help</span>
              </Link>
            </li>
            <li className="flex mr-[60px] cursor-pointer">
              <img
                className="w-[17px] h-[17px] mr-2 my-1"
                src={SIGNIN_URL}
                alt="signin-icon"
              />
              <span className="my-1">Sign In</span>
            </li>
            <li className="flex mr-[60px] cursor-pointer">
              <Link className="flex" to="checkout">
                <img
                  className="w-[17px] h-[17px] mr-2 my-1"
                  src={CART_URL}
                  alt="cart-icon"
                />
                <span className="my-1">Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-[calc(10%+36px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
