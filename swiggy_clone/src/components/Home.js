import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import SearchContext from "../utils/SearchContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const { searchRestaurant } = useContext(SearchContext);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    const restaurantList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurantList);
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="my-8 mx-4">
      <div className="grid flex-wrap p-0 item-center grid-cols-4 gap-8">
        {restaurantList
          ?.filter((res) => {
            if (searchRestaurant === "") {
              return res;
            } 
            else {
              return res?.info?.name.toLowerCase().includes(searchRestaurant);
            }
          })
          ?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
