import { CDN_URL } from "../../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border border-grap-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}
              </span>
            </div>
            <p className="text-xs text-left">{item?.card?.info?.description}</p>
          </div>
          <div>
            <button className="p-2 bg-white mx-16 absolute shadow-lg">Add +</button>
            <img
              className="w-3/12 p-4"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
