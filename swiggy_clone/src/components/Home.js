import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import SearchContext from "../utils/SearchContext";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const { searchRestaurant } = useContext(SearchContext);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(restaurantList);
  };

  return restaurantList?.length === 0 ? <Shimmer/> : (
    <div className="my-8 mx-4">
      <div className="grid flex-wrap p-0 item-center grid-cols-4 gap-8">
        {restaurantList?.filter((res) => {
          if (searchRestaurant === "") {
            return res
          } else {
            console.log('home', searchRestaurant)
            return res?.data?.name?.toLowerCase().includes(searchRestaurant)
          }
        })?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
