import { EMPTY_CART_ITEMS_URL } from "../../utils/constants";

const EmptyCartItems = () => {
  return (
    <div className="h-full">
      <div className="px-[30px] w-[366px] overflow-x-hidden overflow-y-auto bg-transparent relative">
        <div className="text-[#7e808c] text-[32px] tracking-[-0.3px] font-semibold">
          Cart Empty
        </div>
        <img
          className="mt-[47px] opacity-[0.5] w-full h-[212px]"
          src={EMPTY_CART_ITEMS_URL}
          alt=""
        />
        <div className="text-[#93959f] mt-[15px] text-base font-light font-default max-w-[218px]">
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </div>
      </div>
    </div>
  );
};

export default EmptyCartItems;
