import CarouselItem from "./CarouselItem";
import { useState, useEffect } from "react";

const RestaurantCarousel = ({ title, carousel, toggleVeg }) => {
  const nonVegData = carousel?.filter(
    (item) => item?.dish?.info?.itemAttribute?.vegClassifier === "NONVEG"
  );

  const vegData = carousel?.filter(
    (item) => item?.dish?.info?.itemAttribute?.vegClassifier === "VEG"
  );

  const [filterCarousel, setFilterCarousel] = useState(nonVegData);

  useEffect(() => {
    if (toggleVeg === true) {
      setFilterCarousel(vegData);
    } else if (toggleVeg === false) {
      setFilterCarousel(nonVegData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleVeg]);

  return (
    <div className="flw-full bg-white">
      <h2 className="px-4 mb-6 font-default font-extrabold text-[18px] antialiased leading-[1.2]">
        {title}
      </h2>
      <div className="mb-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-pl-[25px] scroll-x-mandatory w-full scrollbar">
        <div className="inline-flex">
          {filterCarousel?.map((item) => {
            return (
              <CarouselItem
                key={item?.bannerId}
                imgId={item?.creativeId}
                title={item?.title}
                price={item?.dish?.info?.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCarousel;
