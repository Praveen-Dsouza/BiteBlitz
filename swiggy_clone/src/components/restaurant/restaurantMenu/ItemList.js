import { CDN_URL } from "../../../utils/constants";
import veg from "../../../utils/images/veg.png";
import non_veg from "../../../utils/images/non_veg.png";

const ItemList = ({ items, toggleVeg }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="pb-[14px]">
          <div className="flex justify-between items-start">
            <p className="block m-0 b-0 text-[1px] sr-only"></p>
            <div className="w-[calc(100%-144px)]">
              <div className="">
                <img
                  className="h-[17px] w-[19px] leading-[1.2px] inline-block "
                  src={toggleVeg ? veg : non_veg}
                  alt="veg_img"
                />
              </div>
              <div className="mt-1">
                <h3 className="mr-1 text-[1.2rem] font-semibold break-words block">
                  {item?.card?.info?.name}
                </h3>
              </div>
              <div className="mt-1 align-center">
                <span className="text[1rem] mr-2 font-normal text-[3e4152]">
                  ₹ &nbsp;
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice}
                </span>
              </div>
              <div className="w-full mt-[14px] text-[1rem] text-[#282c3f73] -tracking-[0.3px]">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="relative ml-4 min-w-[118px] h-[120px]">
              <div className="h-[96px] w-[118px] rounded-[6px] object-cover bg-blend-overlay bg-[#e5f1d3]">
                <img
                  className="h-[96px] w-[118px] rounded-[6px] object-cover bg-blend-overlay bg-[#282c3f0d]"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="item_img"
                />
              </div>
              <div className="absolute left-[50%] bottom-2 z-1 transform -translate-x-[50%]">
                <div className="w-[96px] h-[36px] relative min-h-[36px] bottom-2 left-[50%]  transform -translate-x-[50%] rounded-[4px] leading-[32px] shadow-md border-[1px] border-[#d4d5d9] text-[#60b246] text-[0.9rem] font-semibold bg-white">
                  <div className="font-default text-[#60b246] w-full h-full cursor-pointer text-center">
                    ADD
                  </div>
                  {item?.card?.info?.addons && (
                    <div>
                      <div className="absolute right-[2px] -top-[35%] cursor-pointer transform origin-x-[-6px] origin-y-[6px] rotate-0">
                        +
                      </div>
                      <div className="font-default text-[#7e808c] text-[10px] font-medium w-full leading-[12px] top-[35px] text-center cursor-pointer">
                        Customisable
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
