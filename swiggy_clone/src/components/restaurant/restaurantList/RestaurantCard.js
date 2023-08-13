import { CDN_URL, RATING_URL } from "../../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData;

  return (
    <div className="cursor-pointer border-white ease-in-out hover:scale-110 transform transition duration-500  hover:subpixel-antialiased font-default">
      <div className="relative w-full h-full leading-5 -tracking-[0.5px] text-[14px] antialiased drop-shadow-md">
        <img
          className="rounded-xl h-full w-full tap-transparent object-cover mb-3 overflow-hidden shadow-xs md:shadow-sm lg:shadow-md xl:shadow-lg 2xl:shadow-xl"
          alt={name + " _image"}
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute rounded-b-xl grid px-3 pb-2 text-left bg-transparent bottom-0 w-full bg-gradient-to-b from-transparent via-transparent to-rgb(27, 30, 36) bg-gradient h-[81px]">
          <div className="font-discount antialiased overflow-ellipsis whitespace-nowrap font-extrabold -tracking-[0.5px] w-full text-[19px] leading-[19px] text-left mt-auto line-clamp-1 box-orient-vertical break-word overflow-hidden uppercase text-[#ffffffeb]">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </div>
        </div>
      </div>
      <div className="ml-3">
        <h3 className="font-bold font-cuisine text-lg text-[#02060cbf] overflow-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h4 className="flex text-center">
          <img className="w-7 h-8" src={RATING_URL} alt="rating_img" />
          <span className="text-base font-semibold font-cuisine text-[#02060cbf] my-1">
            {avgRating}
          </span>
        </h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99] overflow-ellipsis whitespace-nowrap overflow-hidden">
          {cuisines.join(", ")}
        </h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99] overflow-ellipsis whitespace-nowrap overflow-hidden">
          {areaName}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } = props?.resData?.aggregatedDiscountInfoV3;
    return (
      <div className="group">
        <p className="grid bottom-0  px-3 pb-2 text-left h-auto inset-0 font-discount antialiased font-extrabold w-full text-[22px] leading-[22px] break-words md:inline-flex overflow-hidden uppercase bg-black text-white">
          {header} {subHeader}
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
