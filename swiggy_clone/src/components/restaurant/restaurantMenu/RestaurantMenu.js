import Shimmer from "../../Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // console.log('resInfo', resInfo.cards[0].card.card.info)

  const { name, cuisines, costForTwoMessage, city } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="flex-grow-1 m-0 p-0">
      <div className="m-0 p-0">
        <div className="max-w-[800px] min-h-[800px] mx-auto mt-20 mb-0">
          <div className="max-w-[700px] min-h-[700px] ml-0 z-[7] h-[30px] text-[10px] items-center relative mx-auto my-0 font-default">
            <span className="text-[10px] text-[#93959f]">
              <Link to="/" className="mx-[5px] my-0 text-inherit bg-transparent">
                <span className="text-inherit font-light">Home</span>
                <meta itemProp="position" content="1"></meta>
              </Link>
            </span>
            <span>/</span>
            <span className="text-[10px] text-[#93959f]">
              <Link className="mx-[5px] my-0 text-inherit bg-transparent">
                <span className="text-inherit font-light">{name}</span>
                <meta itemProp="position" content="1"></meta>
              </Link>
            </span>
            <span>/</span>
            <span className="text-[#535665] font-normal mx-[5px] my-0 text-inherit">
              {city}
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div className="text-center">
    //   <h1 className="font-bold my-6 text-2xl">{name}</h1>
    //   <p className="font-bold text-lg">
    //     {cuisines.join(", ")} - {costForTwoMessage}
    //   </p>
    //   <h2 className="font-bold">Menu</h2>
    //   {/* categories accordian */}
    //   {categories.map((category) => <RestaurantCategory data={category?.card?.card} />)}
    // </div>
  );
};

export default RestaurantMenu;
