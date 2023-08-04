import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantAccordian = ({ resInfo, toggleVeg }) => {
  const [showItems, setShowItems] = useState(null);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems && true}
          setShowItems={() =>
            index === showItems ? setShowItems(!index) : setShowItems(index)
          }
          toggleVeg={toggleVeg}
        />
      ))}
    </div>
  );
};

export default RestaurantAccordian;
