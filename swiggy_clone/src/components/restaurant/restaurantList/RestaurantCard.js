import { CDN_URL, RATING_URL } from "../../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData)
  const { name, cuisines, avgRating, areaName, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="cursor-pointer border-white ease-in-out hover:scale-110 transform transition duration-500  hover:subpixel-antialiased font-default">
      <img
        // w-full h-full
        className="rounded-xl h-auto w-full mb-3 overflow-hidden shadow-xs md:shadow-sm lg:shadow-md xl:shadow-lg 2xl:shadow-xl"
        alt={name + " _image"}
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="ml-3">
        <h3 className="font-bold font-cuisine text-lg text-[#02060cbf]">
          {name.length > 20 ? name.slice(0, 18) + "..." : name}
        </h3>
        <h4 className="flex text-center">
          <img className="w-7 h-8" src={RATING_URL} alt="rating_img" />
          <span className="text-base font-semibold font-cuisine text-[#02060cbf] my-1">
            {avgRating}
          </span>
        </h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99]">
          {cuisines.join("").length > 20
            ? cuisines.slice(0, 2).join(", ") + "..."
            : cuisines.join(", ")}
        </h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99]">
          {areaName}
        </h4>
      </div>
    </div>
  );
};

export default ResturantCard;
