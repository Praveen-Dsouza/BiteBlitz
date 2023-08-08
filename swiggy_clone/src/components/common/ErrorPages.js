import { Link } from "react-router-dom";

const ErrorPages = ({ imagesUrl, errText, errDescription, btnText }) => {
  return (
    <div className="font-default flex items-center justify-center leading-5 min-h-[calc(100vh-229px)]">
      <div className="text-center w-[430px] py-[120px]">
        <div className="bg-contain bg-no-repeat bg-[50%]">
          <img
            className="h-[260px] inline-block"
            src={imagesUrl}
            alt="error_img"
          />
        </div>
        <div className="text-[#282c3f] text-[32px] mt-[30px] mb-[10px] font-semibold">
          {errText}
        </div>
        <div className="text-base text-[#93959f]">
          {errDescription} 
        </div>
        <Link to="/">
          <button className="cursor-pointer text-center bg-[#fc8019] mt-[25px] text-[15px] uppercase text-white px-5 h-10 font-semibold leading-10 w-auto inline-block ">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPages;
