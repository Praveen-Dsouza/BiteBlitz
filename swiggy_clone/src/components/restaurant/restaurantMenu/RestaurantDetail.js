import time from "../../../utils/images/time.png";
import rupee from "../../../utils/images/rupee.png";
import star from "../../../utils/images/star.png";
import { RAINY_URL } from "../../../utils/constants";

const RestaurantDetail = ({
  name,
  cuisines,
  areaName,
  distance,
  avgRating,
  maxDeliveryTime,
  costForTwoMessage,
  notifier,
  totalRatingsString,
}) => {
  return (
    <div className="px-4">
      <div className="pt-4 mb-[18px] ">
        <div className="inline-block mr-4 w-[calc(100%-120px)]">
          <div>
            <p className="text-[1.43rem] font-semibold text-[#282c3f] mb-2 capitalize">
              {name}
            </p>
            <p className="text-[0.93rem] h-[calc(0.93rem+2px)] text-[#7e808c] mb-[4px] overflow-ellipsis overflow-hidden whitespace-nowrap ">
              {cuisines.join(", ")}
            </p>
          </div>
          <div className="flex items-center h-4">
            <p className="text-[0.93rem] text-[#7e808c]">{areaName}</p>
            &nbsp;
            <p className="text-[0.93rem] text-[#7e808c]">
              {distance} km
            </p>
            <div className="block">
              <button
                aria-label="Selected outlet is Santacruz East, 1.5 km away. Double tap to change outlet."
                className="px-1 text-[#fc8019] cursor-pointer bg-transparent outline-none text-left border-none "
              ></button>
              <span className="text-sm text-[#7e808c]"> ▾ </span>
            </div>
          </div>
        </div>
        <div className="text-center p-2 float-right max-w-[100px] rounded-[6px] border-[1px] border-[#e9e9eb] menu-shadow text-inherit font-inherit">
          <span className="flex text-[#3d9b6d] px-3 pb-[10px] border-b-[1px] border-[#e9e9eb] font-bold mb-2">
            <span className="font-icomoon font-bold non-italic leading-[1px] antialiased normal-case">
              <img className="h-[15px] w-[15px]" src={star} alt="star_rating" />
            </span>
            &nbsp;
            <span>{avgRating}</span>
          </span>
          <span className="text-[#8b8d97] font-semibold text-[11px] font-rating">
            {totalRatingsString}
          </span>
        </div>
      </div>
      {notifier && (
        <ul>
          <li className="mb-[18px] text-[#7e808c] flex items-start">
            <img
              className="mr-2 h-[18px] w-[18px]"
              src={RAINY_URL}
              alt="raing_img"
            />
            <span className="flex-grow-1">{notifier}</span>
          </li>
        </ul>
      )}
      <hr className="border-b-[1px] border-[#d3d3d3] border-dashed mb-[18px] h-0 overflow-visible box-content" />
      <div className="mb-[18px]">
        <ul className="text-[#3e4152] text-[15px] font-bold m-0 p-0 font-default lending-0 flex">
          <li className="flex mr-6 ">
            <img
              className="overflow-hidden mr-[10px] align-bottom h-[18px] w-[18px]"
              src={time}
              alt="time_img"
            />
            <span className="my-1">{maxDeliveryTime} MINS</span>
          </li>
          <li className="flex text-[#3e4152] text-[15px] font-bold">
            <img
              className="overflow-hidden mr-[10px] align-bottom h-[19px] w-[19px]"
              src={rupee}
              alt="time_img"
            />
            <span className="my-1">{costForTwoMessage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
