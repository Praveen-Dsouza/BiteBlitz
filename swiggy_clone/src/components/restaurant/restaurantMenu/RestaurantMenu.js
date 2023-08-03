import { useState } from "react";
import Shimmer from "../../Shimmer";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { OFFER_ICON_URL } from "../../../utils/constants";
import RestaurantOfferCard from "./RestaurantOfferCard";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantLicense from "./RestaurantLicense";
import Toggle from "./Toggle";
import RestaurantCarousel from "./restaurantCarousel/RestaurantCarousel";
import HeaderMenu from "./HeaderMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);
  const [toggleVeg, setToggleVeg] = useState(false);

  const handleItemFilter = () => {
    setToggleVeg(!toggleVeg);
  };

  if (resInfo === null) return <Shimmer />;

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

  const { title, carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(carousel);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const license =
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

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex-grow-1 m-0 p-0">
      <div className="m-0 p-0">
        {/* Home, Add, Shop */}
        <div className="max-w-[800px] min-h-[800px] mx-auto mt-[20px] mb-0">
          <HeaderMenu name={name} deliveryTime={sla?.deliveryTime} city={city} resId={resId}/>

          {/* Resturant Name Address */}
          <RestaurantDetail
            name={name}
            cuisines={cuisines}
            areaName={areaName}
            avgRating={avgRating}
            maxDeliveryTime={sla?.maxDeliveryTime}
            notifier={expectationNotifiers[0]?.text}
            distance={sla?.lastMileTravel}
            costForTwoMessage={costForTwoMessage}
            totalRatingsString={totalRatingsString}
          />
          {/* Coupon = Card 1 */}
          <div>
            <div className="px-[10px] pb-4 font-light font-default scrollbar">
              <div className="overflow-x-scroll overflow-y-hidden flex-col w-full cursor-pointer">
                <div className="flex mb-[10px]">
                  {offers.map((offer) => {
                    return (
                      <RestaurantOfferCard
                        key={offer?.info?.offerIds[0]}
                        offerTag={offer?.info?.offerTag}
                        imgUrl={OFFER_ICON_URL + offer?.info?.offerLogo}
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
          <Toggle handleToggle={handleItemFilter} toggle={toggleVeg} />
          {/* Veg/Non-Veg option toggle Ends */}

          {/* Menu */}
          <RestaurantCarousel
            carousel={carousel}
            title={title}
            toggleVeg={toggleVeg}
          />
          {/* Menu Ends */}

          {/* Accordian */}
          <div>
            {categories.map((category, index) => (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showItems && true}
                setShowItems={() =>
                  index === showItems
                    ? setShowItems(!index)
                    : setShowItems(index)
                }
                toggleVeg={toggleVeg}
              />
            ))}
          </div>

          {/* Accordian Ends */}
          {/* Restuarnt License */}
          <RestaurantLicense
            license={license[0]?.card?.card?.text}
            resName={resAddress[0]?.card?.card?.name}
            area={resAddress[0]?.card?.card?.area}
            address={resAddress[0]?.card?.card?.completeAddress}
          />
          {/* License ends */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
