import Shimmer from "../../Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { SEARCH_URL } from "../../../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // console.log('resInfo', resInfo.cards[0].card.card.info)

  const { name, cuisines, costForTwoMessage, city, sla, avgRating, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex-grow-1 m-0 p-0">
      <div className="m-0 p-0">
        {/* Home, Add, Shop */}
        <div className="max-w-[800px] min-h-[800px] mx-auto mt-[20px] mb-0">
          <div className="max-w-[700px] min-h-[700px] ml-0 z-[7] h-[30px] text-[9px] items-center relative mx-auto my-0 font-default">
            <span className="text-[10px] text-[#93959f]">
              <Link to="/" className="mx-[5px] my-0 text-inherit bg-transparent">
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
              <div className="overflow-ellipsis whitespace-nowrap text-[0.93rem] text-[#3d4152] font-semibold">{name}</div>
              <div className="overflow-ellipsis whitespace-nowrap text-[0.78rem] text-[#7e808c] lowercase mt-[2px]">{sla?.deliveryTime} MINS</div>
            </div>
            <div className="h-full">
              <button className="text-[18px] min-w-[42px] overflow-hidden relative float-right flex items-center justify-center h-full px-3 bg-transparent border-none cursor-pointer outline-none text-left text-inherit font-family-inherit font-size-inherit font-weight-inherit appearance-none text-normal">
                <span className="font-icomoon speak-none font-normal normal-nums-ordinal text-normal leading-[1px] antialiased h-[19px] w-[19px]"><img src={SEARCH_URL} alt="search_img"/></span>
              </button>
            </div>
          </div>
            {/* Not required */}
            <Link className="absolute block text-[1px] leading-[1px] overflow-hidden whitespace-nowrap h-[1px] w-[1px]" to="/">Double click to skip to Browse Menu button</Link>
            <p className="absolute block text-[1px] leading-[1px] overflow-hidden whitespace-nowrap h-[1px] w-[1px]">
              Restaurant name: {name}, 
              Cuisines: {cuisines.join(", ")}
              Rating: {avgRating}, 
              Delivers in: {sla?.deliveryTime} MINS, 
              Cost is: {costForTwoMessage},
            </p>
            {/* Not required Ends*/}
            {/* Resturant Name Address */}
            <div className="px-4">
              <div className="pt-4 mb-[18px] ">
                <div className="inline-block mr-4 w-[calc(100%-120px)]">
                  <div>
                    <p className="text-[1.43rem] font-semibold text-[#282c3f] mb-2 capitalize">{name}</p>
                    <p className="text-[0.93rem] h-[calc(0.93rem+2px)] text-[#7e808c] mb-[4px] overflow-ellipsis overflow-hidden whitespace-nowrap ">{cuisines.join(", ")}</p>
                  </div>
                  <div className="flex items-center h-4">
                    <p className="text-[0.93rem] text-[#7e808c]">{areaName}</p>&nbsp;
                    <p className="text-[0.93rem] text-[#7e808c]">{sla?.lastMileTravel}</p>
                    <div className="block">
                      <button 
                        aria-label="Selected outlet is Santacruz East, 1.5 km away. Double tap to change outlet."
                        className="px-1 text-[#fc8019] cursor-pointer bg-transparent outline-none text-left border-none "></button>
                      <span className="text-sm text-[#7e808c]"> ▾ </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    // <div className="text-center">
    //   <h1 className="font-bold my-6 text-2xl">{name}</h1>
    //   <p className="font-bold text-lg">
    //     {cuisines.join(", ")} - {costForTwoMessage}
    //   </p>
    //   <h2 className="font-bold">Menu</h2>
    //   {/* categories accordian */}
    //   {categories.map((category) => <RestaurantCategory data={category?.card?.card} />)}
    // </div>
  );
};

export default RestaurantMenu;
