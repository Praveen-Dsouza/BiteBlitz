import { useContext } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "../../Shimmer";
import SearchContext from "../../../utils/SearchContext";
import { Link } from "react-router-dom";
import useRestaurantList from "../../../utils/hooks/useRestaurantList";

const Home = () => {
  const { searchRestaurant } = useContext(SearchContext);
  const restaurantList = useRestaurantList();
  const RestaurantCardDicounted = withDiscountLabel(RestaurantCard);

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="my-8 mx-4">
      <div className="grid flex-wrap p-0 item-center grid-cols-4 gap-8">
        {restaurantList
          ?.filter((res) => {
            if (searchRestaurant === "") {
              return res;
            } else {
              return res?.info?.name.toLowerCase().includes(searchRestaurant);
            }
          })
          ?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
            >
              {restaurant?.info?.promoted ? (
                <RestaurantCardDicounted
                  resData={restaurant?.info}
                />
              ) : (
                <RestaurantCard
                  resData={restaurant?.info}
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
