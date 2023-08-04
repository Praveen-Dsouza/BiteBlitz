import location from "../../../utils/images/location.png";
import { FSSAI_LOGO } from "../../../utils/constants";

const RestaurantLicense = ({ resInfo }) => {
  const licenseInfo =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (license) =>
      license?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
  );

  const resAddress =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (add) =>
      add?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
  );

  const { name, area, completeAddress } = resAddress[0]?.card?.card

  return (
    <>
      <div className="px-4 pb-4 bg-[#f1f1f6] text-[#93959f] text-[0.93] font-default">
        <div className="flex items-center">
          <img
            className="h-[30px] w-[60px] mr-4 border-none"
            src={FSSAI_LOGO}
            alt="fssai_img"
          />
          <p className="pt-[6px]">{licenseInfo[0]?.card?.card?.text}</p>
        </div>
      </div>
      <div className="text-[1rem] bg-[#f1f1f6] text-[#93959f] font-default px-4 pb-[120px]">
        <p className="font-semibold border-t-[1px] border-[#a9abb2] capitalize pt-4">
          {name}
        </p>
        <p>({"Outlet:" + area})</p>
        <div className="flex text-[0.86rem] mt-3 text-[#a9abb2]">
          <div className="mr-2">
            <img
              className="w-[17px] h-[19px]"
              src={location}
              alt="location_img"
            />
          </div>
          <p>{completeAddress}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantLicense;
