import CarouselItem from "./CarouselItem";

const RestaurantCarousel = ({ title, carousel }) => {
    return (
        <div className="flw-full bg-white">
            <h2 className="px-4 mb-6 font-default font-extrabold text-[18px] antialiased leading-[1.2]">
              {title}
            </h2>
            <div className="mb-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-pl-[25px] scroll-x-mandatory w-full">
              <div className="inline-flex">
                {carousel.map((item) => {
                  return (
                    <CarouselItem
                      key={item?.bannerId}
                      imgId={item.creativeId}
                      title={item?.title}
                      description={item?.dish?.info?.description}
                      price={item?.dish?.info?.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>

    );

}

export default RestaurantCarousel