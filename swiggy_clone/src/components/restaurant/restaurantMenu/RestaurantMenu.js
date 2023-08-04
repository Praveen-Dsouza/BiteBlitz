import { useState } from "react";
import Shimmer from "../../Shimmer";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantLicense from "./RestaurantLicense";
import Toggle from "./Toggle";
import RestaurantCarousel from "./restaurantCarousel/RestaurantCarousel";
import HeaderMenu from "./HeaderMenu";
import { useParams } from "react-router-dom";
import RestaurantOffer from "./restaurantOffer/RestaurantOffer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(null);
  const [toggleVeg, setToggleVeg] = useState(false);

  const handleItemFilter = () => {
    setToggleVeg(!toggleVeg);
  };

  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
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
          <HeaderMenu resInfo={resInfo} resId={resId}/>

          {/* Resturant Name Address */}
          <RestaurantDetail resInfo={resInfo} />

          {/* Restaurant Offer */}
          <RestaurantOffer resInfo={resInfo}/>
          {/* Restaurant Offer Ends */}

          {/* Veg/Non-Veg option toggle */}
          <Toggle handleToggle={handleItemFilter} toggle={toggleVeg} resInfo={resInfo} />
          {/* Veg/Non-Veg option toggle Ends */}

          {/* Menu */}
          <RestaurantCarousel resInfo={resInfo} toggleVeg={toggleVeg} />
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
          <RestaurantLicense resInfo={resInfo} />
          {/* License ends */}

        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
