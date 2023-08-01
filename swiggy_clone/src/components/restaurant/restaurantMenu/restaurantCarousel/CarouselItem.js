import { BANNER_URL } from "../../../../utils/constants";

const CarouselItem = ({ imgId, price, description, title }) => {
  return (
    <div className="ml-[16px] min-w-[60%] min-h-full relative">
      <div className="w-[calc(30vw-54px)] h-[calc(33.6vw-60.48px)] rounded-[20px] relative whitespace-normal inline-block">
        <img
          className="w-full block rounded-[20px] overflow-clip"
          src={BANNER_URL + imgId}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 px-[15px] pb-[25px] text-[#FFFFFF] whitespace-normal">
          <div className="mt-[20px] flex flex-row items-center justify-between">
            <span className="text-[#FFFFFF] text-base font-normal font-default antialiased">
              <span className="text-[#FFFFFF] text-base">₹{price / 100}</span>
            </span>
            <div className="relative right-[50px] self-end -bottom-[16px]">
              <div className="absolute bottom-[8px] w-[96px] min-h-[36px] rounded-[4px] transform -translate-x-[50%] inline-block h-[30px] bg-white text-[0.9rem] text-[#60b246] font-semibold leading-[30px] border-[1px] border-[#d4d5d9] text-center">
                <div className="text-[#60b246] w-full h-full cursor-pointer font-inherit text-center">
                  ADD
                </div>
                <div className="absolute right-[2px] -top-[28%] cursor-pointer transform origin-x-[-6px] origin-y-[6px] rotate-0">
                  +
                </div>
                <div className="text-white text-[10px] font-medium w-full leading-[12px]">
                  Customisable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
