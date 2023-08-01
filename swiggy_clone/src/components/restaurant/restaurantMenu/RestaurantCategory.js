import ItemList from "./ItemList";
import up_arrow from "../../../utils/images/up_arrow.png";
import down_arrow from "../../../utils/images/down_arrow.png";
import { useEffect, useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowItems, toggleVeg }) => {
  console.log(toggleVeg);
  const handleClick = () => {
    setShowItems(!showItems);
  };

  const nonVegData = data.itemCards.filter(
    (veg) => veg.card.info.itemAttribute.vegClassifier === "NONVEG"
  );

  const vegData = data.itemCards.filter(
    (veg) => veg.card.info.itemAttribute.vegClassifier === "VEG"
  );

  const [filterVeg, setFilterVeg] = useState(nonVegData);

  useEffect(() => {
    if (toggleVeg === false) {
      setFilterVeg(vegData);
    } else if (toggleVeg === true) {
      setFilterVeg(nonVegData);
    }
  }, [toggleVeg]);

  return (
    filterVeg?.length > 0 && (
      <div>
        {/* Header */}
        <div className="relative">
          <div className="relative mt-6 mr-2 mb-4 ml-4 border-b-[16px] border-[#f1f1f6]">
            <div
              onClick={handleClick}
              className="mb-6 w-full flex justify-between pr-4 text-2xl bg-transparent cursor-pointer text-left"
            >
              <h3 className="text-[#3e4152] font-extrabold text-[1.1rem] inline-block leading-[1.2px] ">
                <span className="font-inherit w-8/12">
                  {data?.title} ({filterVeg?.length})
                </span>
              </h3>
              <span className="w-[19px] h-[19px]">
                <img src={showItems ? up_arrow : down_arrow} alt="down_arrow" />
              </span>
            </div>
            {/* Accordian Body */}
            <div>{showItems && <ItemList items={filterVeg} />}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantCategory;
