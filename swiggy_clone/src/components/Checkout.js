import { useDispatch, useSelector } from "react-redux";
import ItemList from "./restaurant/restaurantMenu/restaurantAccordian/ItemList";
import { clearCart, removeItem } from "../utils/storeSlices/cart";
import { LOGIN_CHECKOUT_URL } from "../utils/constants";
import account from "../utils/images/account.png";
import checkout_location from "../utils/images/checkout_location.png";
import payment from "../utils/images/payment.png";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="min-h-full bg-[#e9ecee] flex-grow-1">
      <div className="min-w-[1200px] max-w-[1200px] relative mx-auto my-0 flex mt-[31px] mb-[150px]">
        <div className="flex-1 mr-[30px] relative">
          <div>
            <div className="relative ml-[25px] bg-white mb-5 px-10 pt-[35px] pb-[39px]">
              <div className="text-[1.3rem] font-semibold text-[#282c3f] mb-8 flex items-center">
                <div className="mr-[25px]">Account</div>
              </div>
              <div className="mt-[-30px] ">
                <div className="text-[#7e808c] font-normal text-base">
                  To place your order now, log in to your existing account or
                  sign up.
                </div>
                <img
                  className="absolute right-10 top-[35px] border-none h-[140px] w-[147px]"
                  src={LOGIN_CHECKOUT_URL}
                  alt=""
                />
                <div className="flex mt-9">
                  <div className="border-[1px] border-[#60b246] text-[#60b246] mx-5 text-center px-[35px] pt-2 pb-[9px] leading-5 cursor-pointer">
                    <div className="text-[13px]">Have an account?</div>
                    <div className="font-semibold text-sm">LOG IN</div>
                  </div>
                  <div className="bg-[#60b246] text-[#fff] text-center px-[35px] pt-2 pb-[9px] leading-5 cursor-pointer">
                    <div className="text-[13px]">New to Swiggy?</div>
                    <div className="font-semibold text-sm">SIGN UP</div>
                  </div>
                </div>
                <div className="border-[#bebfc5] absolute border-l-[1px] border-l-[#282c3f] top-[35px] left-[-10px] bottom-[-57px]" />
              </div>
            <div className="absolute w-10 h-10 bg-[#282c3f] top-[34px] left-[-30px] shadow-md">
              <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                <img
                  className="overlay-blend"
                  src={account}
                  alt="account_img"
                />
              </span>
            </div>
            </div>
            <div className="relative ml-[25px] bg-white mb-5 px-10 pt-[35px] pb-[39px]">
              <div className="text-[#93959f] leading-[-0.3px] mb-[-3px] ml-[-2px] text-[1.3rem] font-semibold flex items-center">
                <div className="mr-[25px]">Delivery address</div>
              </div>
              <div className="border-[#bebfc5] absolute border-l-[1px] border-l-[#282c3f] top-[35px] left-[-10px] bottom-[-57px]" />
              <div className="bg-white w-[40px] h-[40px] shadow-md absolute top-[34px] left-[-30px]">
                <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    className="overlay-blend w-[19px] h-[20px]"
                    src={checkout_location}
                    alt="location_img"
                  />
                </span>
              </div>
            </div>
            <div>
              <div className="mb-0 relative ml-[25px] bg-white px-10 pt-[35px] pb-[39px]">
                <div className="text-[#93959f] leading-[-0.3px] mb-[-3px] ml-[-2px] text-[1.3rem] font-semibold flex items-center">
                  <div className="mr-[25px]">Payment</div>
                </div>
                <div className="bg-white w-[40px] h-[40px] shadow-md absolute top-[34px] left-[-30px]">
                  <span className="absolute top-[50%] left-[50%] bg-[#fff] text-xl transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      className="overlay-blend w-[19px] h-[20px]"
                      src={payment}
                      alt="payment_img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[366px]">
          <div className="relative flex flex-col overflow-hidden h-full">
            <button className="cursor-pointer px-[30px] py-5 flex bg-white text-left outline-none">
              <span className="w-[50px] h-[50px] relative">
                <img className="w-[50px] h-[50px]" src="" alt="item_img"/>
              </span>
              <span className="ml-[14px] flex-1 relative overflow-hidden min-h-[50px]">
                <div className="text-[17px] text-[#282c3f] font-medium text-ellipsis overflow-hidden whitespace-nowrap">{"MCD"}</div>
                <div className="text-[13px] text-[#686b78]">Andheri</div>
              </span>
            </button>
            <div className="max-h-[calc(100vh-270px)] flex">
              <div className="flex relative overflow-y-hidden">
                <div className="flex flex-grow-1 relative flex-col overflow-y-auto overflow-x-hidden px-[30px] w-[366px] bg-white pb-0 outline-none">
                  <div className="font-default">
                    {/* Items */}
                    <div className="-mx-4 py-0 px-4 relative">
                      <div className="relative py-[10px] flex items-center">
                        <div className="flex-grow-1 items-start ">
                          <img className="text-[#0f8a65] text-sm top-1 relative leading-[1px]" src="" alt=""/>
                          <div className="flex-grow-1 text-sm font-normal ml-[10px] mr-[14px]">Item Name</div>
                        </div>
                        <div className="w-[120px]">
                          <div className="float-right flex items-center">
                            {/* button */}
                            <div className="h-[30px] border-[1px] border-[#d4d5d9] text-[#60b246] font-semibold leading-[30px] relative items-center bg-white w-[70px] text-xs block">
                              {/* <div className="w-full h-full cursor-pointer text-[60b246]">ADD</div> */}
                              <div className="absolute top-0 right-0 w-[33.33%] inline-block cursor-pointer transform translate-z-0 text-[150%] font-semibold">+</div>
                              <div className="absolute left-0 right-0 w-[33.33%] opacity-1 inline-block cursor-pointer transform translate-z-0 text-[1.5rem] font-semibold">-</div>
                              <div className="absolute top-0 left-[33.33%] w-[33.33%] opacity-1 inline-block cursor-pointer transform translate-z-0">c</div>
                            </div>
                            {/* price */}
                            <div className="text-[13px] text-[#535665] text-right w-[60px]">
                              <span className="font-default">₹244</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Items End */}
                    {/*  */}
                    <div className="h-[51px] relative text-[#686b78] text-[13px]">
                      <textarea className="border-0 outline-0 w-full h-full py-4 pl-10 text-[#3d4152] font-normal text-sm bg-[#f9f9f9] overflow-auto m-0"/>
                      <div className="absolute text-[13px] top-[17px] left-[40px] w-full text-[#93959f]">Any suggestions? We will pass it on...</div>
                      <img className="absolute top-5 left-5 w-[15px] h-[10px] text-[#282c3f]" src="" alt=""/>
                    </div>
                    <div className="items-center mt-[15px] bg-white py-[5px] px-[15px] flex relative overflow-hidden border-[1px] border-[#a9abb2] cursor-pointer">
                      <div className="flex items-start ">
                        <div className="mt-1 mr-[15px]">
                          <label className="relative cursor-pointer inline-block w-4 h-4 border-[1px] border-[#7e808c] bg-transparent rounded-sm transition duration-300 hover:border-blue-500">
                            <input className="absolute left-[-9999px] opacity-0 box-border"/>
                            <img src="" className="overflow-hidden absolute left-[-3px] top-[-3px] opacity-1 fill-[#60b246]" alt=""/>
                          </label>
                        </div>
                        <div>
                          <div className="font-medium text-[#3e4152]">Opt in for No-contact Delivery</div>
                          <div className="opacity-[0.6] text-[#282c3f]">
                          Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[17px] pb-[21px] border-b-[2px] border-b-[#282c3f]">
                      <div className="font-medium text-[13px] mb-[10px] text-[#282c3f]">Bill Details</div>
                      <div className="text-[13px] text-[#686b78] flex items-center">
                        <div className="flex-1"><span>Item Total</span></div>
                        <div className="text-right self-start">
                          <span className="text-right text-[13px] text-[#686b78]">
                          <span className="text-right text-[13px] text-[#686b78]">
                            245
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-[10px] text-[13px] text-[#686b78] flex items-center">
                        <div className="flex-1">
                          <div>
                          Delivery Fee | 1.4 kms
                          <div className="text-[#686b78] font-normal ml-[7px] text-xs relative top-[1px] inline cursor-pointer">
                            <span></span>
                          </div>
                          </div>
                        </div>
                        {/* no */}
                        <div className="text-right self-start"></div>
                        {/* no */}
                        <div className="border-b-[1px] border-b-[#ebebeb] mt-[17px] mb-[15px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="text-center m-4 p-4">
    //   <h1 className="text-2xl font-bold">Cart</h1>
    //   <div className="w-6/12 text-left">
    //     <button onClick={handleClearCart}>Clear</button>
    //     <ItemList items={cartItems} handleAddItem={handleRemoveItem} btnText={"REMOVE"} />
    //   </div>
    // </div>
  );
};

export default Checkout;
