import non_veg from "../../utils/images/non_veg.png";
import veg from "../../utils/images/veg.png";
import customize_cart_item from "../../utils/images/customize_cart_item.png";

const CartItems = ({ cartItemsList }) => {
  return cartItemsList.map((item) => {
    return (
      <div key={item?.card?.info?.id} className="-mx-4 py-0 px-4 relative">
        <div className="relative py-[10px] flex items-center">
          <div className="flex flex-grow-1 items-start ">
            <img
              className="text-[#0f8a65] text-sm top-1 relative leading-[1px] w-4 h-4"
              src={
                item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                  ? non_veg
                  : veg
              }
              alt=""
            />
            <div className="flex-grow-1 text-sm font-normal ml-[10px] mr-[14px]">
              {item?.card?.info?.name}
              <button className="text-[11px] text-[#686b78] font-medium mt-[2px] relative block p-0">
                Customize <img className="absolute text-[17px] left-[54px] top-[-5px] w-3 h-3 my-2" src={customize_cart_item} alt=""/>
              </button>
            </div>
          </div>
          <div className="w-[120px]">
            <div className="float-right flex items-center">
              {/* button */}
              <div className="h-[30px] border-[1px] border-[#d4d5d9] text-[#60b246] font-semibold leading-[30px] relative items-center bg-white w-[70px] text-xs block">
                {/* <div className="w-full h-full cursor-pointer text-[60b246]">ADD</div> */}
                <div className="absolute top-0 right-0 w-[33.33%] inline-block cursor-pointer transform translate-z-0 text-[150%] font-semibold px-2">
                  +
                </div>
                <div className="absolute left-0 top-0 w-[33.33%] opacity-1 inline-block cursor-pointer transform translate-z-0 text-[1.5rem] font-semibold px-2 pb-1">
                  -
                </div>
                <div className="absolute top-0 left-[33.33%] w-[33.33%] opacity-1 inline-block cursor-pointer transform translate-z-0 px-2">
                  1
                </div>
              </div>
              {/* price */}
              <div className="text-[13px] text-[#535665] text-right w-[60px]">
                <span className="font-default">
                  ₹{item?.card?.info?.price / 100}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CartItems;
