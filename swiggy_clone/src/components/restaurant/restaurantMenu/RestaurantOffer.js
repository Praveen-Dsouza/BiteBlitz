const RestaurantOffer = ({
  key,
  offerTag,
  imgUrl,
  header,
  couponCode,
  description,
}) => {
  return (
    <div className="mr-3" key={key}>
      <button className="flex border-[1px] border-[#e9e9eb] border-box rounded-lg p-2 h-full min-w-[200px] items-center bg-transparent cursor-pointer outline-none text-left m-0 color-inherit font-inherit overflow-visible offers-shadow">
        <div className="flex">
          {offerTag && (
            <p className="text-[#E46D47] font-semibold text-[0.7rem] transform rotate-180 text-center pl-1 border-l-[1px] border-[#e9e9eb]">
              <span className="whitespace-nowrap [writing-mode:vertical-lr]">
                {offerTag}
              </span>
            </p>
          )}
          <div className="ml-2 my-1 flex flex-col self-stretch justify-center">
            <div className="flex items-center">
              <img
                src={imgUrl}
                className="w-5 h-5 mr-2 border-none overflow-clip marg "
                alt="offer_img"
              />
              <p className="font-semibold whitespace-nowrap text-[#686b78] font-offers">
                {header}
              </p>
            </div>
            <div className="text-[0.86rem] text-[#93959f] mt-1 text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] font-bold font-rating">
              <span className="font-inherit color-inherit">{couponCode}</span>
              <span className="text-[0.86rem] text-[#93959f] mt-1 text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] font-bold font-rating">
                {" | " + description}
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default RestaurantOffer;
