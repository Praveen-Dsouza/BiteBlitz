const ResturantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="p-4 m-2 w-[250px] cursor-pointer border-white hover:bg-white-500 hover:scale-110 transform transition duration-500  hover:subpixel-antialiased font-default">
      <img
        className="rounded-xl"
        alt={name + " _image"}
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="p-2">
        <h3 className="font-bold font-cuisine text-lg text-[#02060cbf]">{name.length > 20 ? name.slice(0, 18) + "...": name}</h3>
        <h4 className="flex text-center">
          <img
            className="w-7 h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr51LTOl1FrHsHH-dynl-B7kaj-l4wkl_LEA&usqp=CAU"
            alt="rating_img"
          />
          <span className="text-base font-semibold font-cuisine text-[#02060cbf] my-1">{avgRating}</span>
        </h4>
        <p>{cuisines.length}</p>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99]">{cuisines.join("").length > 20? cuisines.slice(0, 2).join(", ") + "...": cuisines.join(", ")}</h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99]">₹{costForTwo / 100}</h4>
        <h4 className="font-extralight font-cuisine text-base text-[#02060c99]">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
