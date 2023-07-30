import Shimmer from "../../Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {
  OFFER_ICON_CART,
  RAINY_URL,
  SEARCH_URL,
  STAR_URL,
} from "../../../utils/constants";
import time from "../../../utils/images/time.png";
import rupee from "../../../utils/images/rupee.png";
import RestaurantOffer from "./RestaurantOffer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // console.log('resInfo', resInfo.cards[0].card.card.info)

  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    sla,
    avgRating,
    areaName,
    totalRatingsString,
    expectationNotifiers,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { offers } = resInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const { title } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title)

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
              <button className="text-[18px] min-w-[42px] overflow-hidden relative float-right flex items-center justify-center h-full px-3 bg-transparent border-none cursor-pointer outline-none text-left text-inherit font-family-inherit font-size-inherit font-weight-inherit appearance-none text-normal">
                <span className="font-icomoon speak-none font-normal normal-nums-ordinal text-normal leading-[1px] antialiased h-[19px] w-[19px]">
                  <img src={SEARCH_URL} alt="search_img" />
                </span>
              </button>
            </div>
          </div>
          {/* Not required */}
          <Link
            className="absolute block text-[1px] leading-[1px] overflow-hidden whitespace-nowrap h-[1px] w-[1px]"
            to="/"
          >
            Double click to skip to Browse Menu button
          </Link>
          <p className="absolute block text-[1px] leading-[1px] overflow-hidden whitespace-nowrap h-[1px] w-[1px]">
            Restaurant name: {name}, Cuisines: {cuisines.join(", ")}
            Rating: {avgRating}, Delivers in: {sla?.deliveryTime} MINS, Cost is:{" "}
            {costForTwoMessage},
          </p>
          {/* Not required Ends*/}
          {/* Resturant Name Address */}
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
                    {sla?.lastMileTravel}
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
              <button className="text-center p-2 float-right max-w-[100px] rounded-[6px] border-[1px] border-[#e9e9eb] menu-shadow text-inherit font-inherit">
                <span className="text-[#3d9b6d] pb-[10px] border-[1px] border-[#e9e9eb] font-bold mb-2 block">
                  <span className="font-icomoon font-normal non-italic leading-[1px] antialiased normal-case">
                    <img
                      className="h-[17px] w-[17px]"
                      src={STAR_URL}
                      alt="star_rating"
                    />
                  </span>
                  <span>{avgRating}</span>
                </span>
                <span className="text-[#8b8d97] font-semibold text-[11px] font-rating">
                  {totalRatingsString}
                </span>
              </button>
            </div>
            {expectationNotifiers && (
              <ul>
                <li className="mb-[18px] text-[#7e808c] flex items-start">
                  <img
                    className="mr-2 h-[18px] w-[18px]"
                    src={RAINY_URL}
                    alt="raing_img"
                  />
                  <span className="flex-grow-1">
                    {expectationNotifiers[0]?.text}
                  </span>
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
                  <span className="my-1">{sla?.maxDeliveryTime} MINS</span>
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
          {/* Coupon = Card 1 */}
          <div>
            <div className="px-[10px] pb-4 font-light font-default">
              <div className="overflow-x-scroll overflow-y-hidden flex-col w-full">
                <div className="flex mb-[10px]">
                  {offers.map((offer) => {
                    return (
                      <RestaurantOffer
                        key={offer?.info?.offerIds[0]}
                        offerTag={offer?.info?.offerTag}
                        imgUrl={OFFER_ICON_CART}
                        header={offer?.info?.header}
                        couponCode={offer?.info?.couponCode}
                        description={offer?.info?.description}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Coupon ends */}
          {/* Veg/Non-Veg option toggle */}
          <div>
             <div className="mt-6 mx-4 flex items-center justify-between font-default">
                  <div className="flex items-center h-[14px] tranform translate-z-0 backface-hidden">
                    <div className="text-[#3d4152] font-semibold text-[16px] font-default">Veg Only</div>
                    <button className="ml-3 text-0 p-0 cursor-pointer text-left outline-none">
                      <span className="h-[18px] backface-hidden bg-[#d4d5d9] w-9 relative tranform translate-z-0 inline-block rounded-[4px] [contain:layout] [transition:background-color 0.25s linear]">
                        <span className="border-[#00800000] absolute w-[18px] bg-white border-b-[2px] border-[#d4d5d9] rounded-[4px] backface-hidden "></span>
                      </span>
                    </button>
                  </div>
                  <div className="h-[0.5px] my-6 mx-auto w-[calc(100% - 32px)] border-b-[0.5px] border-[#d3d3d3]"></div>
             </div>
          </div>
          {/* Veg/Non-Veg option toggle Ends */}
          {/* Menu */}
          <div className="w-full bg-white">
            <h2 className="px-4 mb-6 font-default font-bold text-[18px]">{title}</h2>
          </div>
          {/* Menu Ends */}
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
