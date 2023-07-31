import ItemList from "./ItemList";
import up_arrow from "../../../utils/images/up_arrow.png";

const RestaurantCategory = ({ data }) => {
  console.log("category", data);
  return (
    <div>
      {/* Header */}
      <div className="relative">
        <div className="relative mt-6 mr-2 mb-4 ml-4 border-b-[16px] border-[#f1f1f6]">
          <div className="mb-6 w-full flex justify-between pr-4 text-2xl bg-transparent cursor-pointer text-left">
            <h3 className="text-[#3e4152] font-extrabold text-[1.3rem] inline-block leading-[1.2px] ">
              <span className="font-inherit w-8/12">
                {data?.title} ({data?.itemCards?.length})
              </span>
            </h3>
            <span className="w-[19px] h-[19px]">
              <img src={up_arrow} alt="down_arrow" />
            </span>
          </div>
          {/* Accordian Body */}
          <div>
            <ItemList items={data?.itemCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
