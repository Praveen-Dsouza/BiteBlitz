import { BANNER_URL } from "../../../utils/constants";

const CarouselItem = ({imgId, price, description, title}) => {
    return (
        <div className="ml-[16px] min-w-[60px] min-h-full">
        <div className="w-[calc(30vw-54px)] h-[calc(33.6vw-60.48px)] rounded-[20px] relative whitespace-normal inline-block">
          <img
            className="w-full block rounded-[4px] overflow-clip"
            src={BANNER_URL + imgId}
            alt={title}
          />
          <div className="absolute px-[15px] pb-[25px] text-[#FFFFFF]">
            <p className="block leading-[1px] sr-only">
              {description}
            </p>
            <div className="mt-5 flex flex-row items-center justify-between">
              <span className="text-[#FFFFFF] text-base font-normal font-default">
                <span className="text-[#FFFFFF]">
                  ₹{price / 100}
                </span>
              </span>
              <div className="relative right-[50px] -bottom-4 self-end">
                <div className="absolute bottom-2 w-24 min-h-[36px] left-[50%] rounded-[4px] transform translate-x-[-50%] inline-block h-[30px] bg-white text-[0.9rem] text-[#60b246] font-semibold leading-[30px] border-[1px] border-[#d4d5d9] text-center">
                  <div className="text-[#60b246] w-full h-full cursor-pointer font-inherit">
                    ADD
                  </div>
                  <div className="absolute right-[2px] -top-[35%] cursor-pointer transform origin-x-[-6px] origin-y-[6px] rotate-0">
                    +
                  </div>
                  <div className="absolute w-[33.33%] cursor-pointer text-[150%] font-semibold hidden opacity-0 transform translate-z-0">
                    +
                  </div>
                  <div className="text-white text-[10px] font-medium w-full leading-[1px] top-[35px]">
                    Customisable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CarouselItem;