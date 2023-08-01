const Toggle = ({ toggle, handleToggle }) => {
  return (
    <div>
      <div className="mt-6 mx-4 flex items-center justify-between font-default">
        <div className="flex items-center h-[14px] tranform translate-z-0 backface-hidden">
          <div className="text-[#3d4152] font-semibold text-[16px] font-default">
            Veg Only
          </div>
          <button className="ml-3 text-0 p-0 cursor-pointer text-left outline-none">
            <span
              onClick={handleToggle}
              className={`h-[18px] backface-hidden w-[36px] relative inline-block transition-all duration-250 ease-linear rounded-[4px] [contain:layout] ${
                toggle ? "bg-[#008000]" : "bg-[#d4d5d9]"
              }`}
            >
              <span
                className={`absolute w-[18px] h-[18px] bg-white rounded-[4px] backface-hidden border-[2px]  ${
                  toggle
                    ? "border-[#008000] toggleVeg"
                    : "border-[#d4d5d9]"
                }`}
              >
                {toggle && <span className="opactity-0"></span>}
                {toggle && (
                  <span className="opactity-1">
                    <span className="bg-[#0f8a65] w-2 h-2 rounded-[50%] block absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 "></span>
                  </span>
                )}
              </span>
            </span>
          </button>
          {/* <button className="" onClick={handleItemFilter}>click</button> */}
        </div>
        <div className="h-[0.5px] my-6 mx-auto w-[calc(100% - 32px)] border-b-[0.5px] border-[#d3d3d3]"></div>
      </div>
    </div>
  );
};

export default Toggle;
