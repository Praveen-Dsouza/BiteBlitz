import { useState } from "react";
import Shimmer from "../../Shimmer";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantLicense from "./RestaurantLicense";
import Toggle from "./Toggle";
import RestaurantCarousel from "./restaurantCarousel/RestaurantCarousel";
import HeaderMenu from "./HeaderMenu";
import { useParams } from "react-router-dom";
import RestaurantOffer from "./restaurantOffer/RestaurantOffer";
import RestaurantAccordian from "./restaurantAccordian/RestaurantAccordian";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [toggleVeg, setToggleVeg] = useState(false);

  const handleItemFilter = () => {
    setToggleVeg(!toggleVeg);
  };

  if (resInfo === null) return <Shimmer />;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex-grow-1 m-0 p-0">
      <div className="m-0 p-0">
        <div className="max-w-[800px] min-h-[800px] mx-auto mt-[20px] mb-0">
          {/* Home, Add, Shop */}
          <HeaderMenu resInfo={resInfo} resId={resId} />

          {/* Resturant Name Address */}
          <RestaurantDetail resInfo={resInfo} />

          {/* Restaurant Offer */}
          <RestaurantOffer resInfo={resInfo} />
          {/* Restaurant Offer Ends */}

          {/* Veg/Non-Veg option toggle */}
          <Toggle handleToggle={handleItemFilter} toggle={toggleVeg} resInfo={resInfo} />
          {/* Veg/Non-Veg option toggle Ends */}

          {/* Menu */}
          <RestaurantCarousel resInfo={resInfo} toggleVeg={toggleVeg} />
          {/* Menu Ends */}

          {/* Accordian */}
          <RestaurantAccordian resInfo={resInfo} toggleVeg={toggleVeg}/>
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
