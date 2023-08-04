import { OFFER_ICON_URL } from "../../../../utils/constants";
import RestaurantOfferCard from "./RestaurantOfferCard";

const RestaurantOffer = ({ resInfo }) => {
    const { offers } = resInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle;

    return (
        <div>
        <div className="px-[10px] pb-4 font-light font-default scrollbar">
          <div className="overflow-x-scroll overflow-y-hidden flex-col w-full cursor-pointer">
            <div className="flex mb-[10px]">
              {offers.map((offer) => {
                return (
                  <RestaurantOfferCard
                    key={offer?.info?.offerIds[0]}
                    offerTag={offer?.info?.offerTag}
                    imgUrl={OFFER_ICON_URL + offer?.info?.offerLogo}
                    header={offer?.info?.header}
                    couponCode={offer?.info?.couponCode}
                    description={offer?.info?.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default RestaurantOffer;