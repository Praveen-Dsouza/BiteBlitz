import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../constants";

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
  
    useEffect(() => {
      fetchRestaurantList();
    }, []);
  
    const fetchRestaurantList = async () => {
      const data = await fetch(RESTAURANT_LIST_URL);
      const json = await data.json();
      const restaurantList = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(restaurantList);
    };

    return restaurantList
}

export default useRestaurantList;