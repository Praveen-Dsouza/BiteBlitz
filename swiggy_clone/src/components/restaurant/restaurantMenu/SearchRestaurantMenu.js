import { Link, useNavigate } from "react-router-dom";
import back from "../../../utils/images/back.png";
import { SEARCH_URL } from "../../../utils/constants";

const SearchRestaurantMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow-1">
      <div>
        <div className="pb-12 min-h-screen w-[800px] mt-5 mx-auto ">
          <div className="text- center top-0 border-b-[1px] border-[#e9e9eb] sticky h-[52px] bg-white z-[2]">
            <div className="bg-white p-0 overflow-hidden border-b-[1px] border-[#282c3f33] flex">
              <button
                onClick={() => navigate(-1)}
                className="p-4 font-semibold relative overflow-hidden block bg-transparent cursor-pointer text-left border-none"
              >
                <img
                  className="overflow-hidden h-[24px] w-[24px] fill-[#3d4152] "
                  src={back}
                  alt="back_img"
                />
              </button>
              <div className="flex-1 p-1">
                <label>
                  <input
                    className="text-[1.1rem] leading-5 w-full h-full border-none overflow-hidden font-default color-inherit"
                    type="text"
                    placeholder={`Search in`}
                  />
                </label>
              </div>
              <div className="h-[18px] text-[18px] p-5 text-[#686b78]">
                <img
                  className="h-[18px] w-[18px]"
                  src={SEARCH_URL}
                  alt="search_img"
                />
              </div>
            </div>
          </div>
          <div className="p-4">{/* itemCard */}</div>
          <div className="p-4">
            <div className="mx-auto w-[800px] fixed bottom-0 left-0 right-0 z-10">
              {/* Footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurantMenu;
