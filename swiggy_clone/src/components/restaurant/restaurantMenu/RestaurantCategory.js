import ItemList from "./ItemList";
import up_arrow from "../../../utils/images/up_arrow.png";
import down_arrow from "../../../utils/images/down_arrow.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../utils/storeSlices/cart";

const RestaurantCategory = ({ data, showItems, setShowItems, toggleVeg }) => {
  const handleClick = () => {
    setShowItems(!showItems);
  };

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItem(item));
  }

  const nonVegData = data.itemCards.filter(
    (veg) => veg.card.info.itemAttribute.vegClassifier === "NONVEG"
  );

  const vegData = data.itemCards.filter(
    (veg) => veg.card.info.itemAttribute.vegClassifier === "VEG"
  );

  const [filterVeg, setFilterVeg] = useState(nonVegData);
    console.log('filter veg cat', filterVeg)
  useEffect(() => {
    if (toggleVeg === true) {
      setFilterVeg(vegData);
    } else if (toggleVeg === false) {
      setFilterVeg(nonVegData);
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div>{showItems && <ItemList items={filterVeg} toggleVeg={toggleVeg} handleAddItem={handleAddItem} btnText={"ADD"} />}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantCategory;
