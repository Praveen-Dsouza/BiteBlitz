import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantList = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(restaurantList);
  };

  return (
    <div className="my-8 mx-4">
      <div className="grid flex-wrap p-0 item-center grid-cols-4 gap-8">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
