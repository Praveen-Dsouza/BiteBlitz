import location from "../../../utils/images/location.png";
import { FSSAI_LOGO } from "../../../utils/constants";

const RestaurantLicense = ({license, resName, area, address}) => {
  return (
    <>
      <div className="px-4 pb-4 bg-[#f1f1f6] text-[#93959f] text-[0.93] font-default">
        <div className="flex items-center">
          <img
            className="h-[30px] w-[60px] mr-4 border-none"
            src={FSSAI_LOGO}
            alt="fssai_img"
          />
          <p className="pt-[6px]">{license}</p>
        </div>
      </div>
      <div className="text-[1rem] bg-[#f1f1f6] text-[#93959f] font-default px-4 pb-[120px]">
        <p className="font-semibold border-t-[1px] border-[#a9abb2] capitalize pt-4">
          {resName}
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
          <p>{address}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantLicense;
