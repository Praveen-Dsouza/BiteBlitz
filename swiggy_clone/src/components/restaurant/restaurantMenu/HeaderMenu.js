import { Link } from "react-router-dom";
import { SEARCH_URL } from "../../../utils/constants";

const HeaderMenu = ({ resInfo, resId }) => {
  const { name, city, sla } = resInfo?.cards[0]?.card?.card?.info;

    return (
       <>
       <div className="max-w-[700px] min-w-[700px] ml-0 z-[7] h-[30px] text-[9px] items-center relative mx-auto my-0 font-default">
            <span className="text-[10px] text-[#93959f]">
              <Link
                to="/"
                className="mx-[5px] my-0 text-inherit bg-transparent"
              >
                <span className="text-inherit font-light">Home</span>
                <meta itemProp="position" content="1"></meta>
              </Link>
            </span>
            <span>/</span>
            <span className="text-[10px] text-[#93959f]">
              <Link className="mx-[5px] my-0 text-inherit bg-transparent">
                <span className="text-inherit font-light">{city}</span>
                <meta itemProp="position" content="1"></meta>
              </Link>
            </span>
            <span>/</span>
            <span className="text-[#535665] font-normal mx-[5px] my-0 text-inherit">
              {name}
            </span>
          </div>
          {/*  */}
          <div className="-mt-[40px] h-[52px] text-[#3d4152] sticky w-full z-[6] overflow-hidden contain flex items-center pr-[4px] border-b-[1px] border-transparent">
            <div className="opacity-0 flex-1">
              <div className="overflow-ellipsis whitespace-nowrap text-[0.93rem] text-[#3d4152] font-semibold">
                {name}
              </div>
              <div className="overflow-ellipsis whitespace-nowrap text-[0.78rem] text-[#7e808c] lowercase mt-[2px]">
                {sla?.deliveryTime} MINS
              </div>
            </div>
            <div className="h-full">
              <Link to={`/restaurants/${resId}/search`}>
                <button className="text-[18px] min-w-[42px] overflow-hidden relative float-right flex items-center justify-center h-full px-3 bg-transparent border-none cursor-pointer outline-none text-left text-inherit font-family-inherit font-size-inherit font-weight-inherit appearance-none text-normal">
                  <span className="font-icomoon speak-none font-normal normal-nums-ordinal text-normal leading-[1px] antialiased h-[19px] w-[19px]">
                    <img src={SEARCH_URL} alt="search_img" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
       </>
    );
}

export default HeaderMenu;