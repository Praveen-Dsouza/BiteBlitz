const Navbar = () => {
  return (
    <div className="flex justify-between font-default shadow-md px-5 h-20 font-medium text-[#3d4152] text-base">
      <div className="col-6/12">
        <img
          className="w-[34px] h-[49px] m-4"
          src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
          alt="logo"
        />
      </div>
      <div className="col-6/12 py-6">
        <ul className="flex">
          <li className="flex mr-[60px]">
            <img
              className="w-[19px] h-[19px] mr-4 my-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAArGac15ndUS6eFN3Awb6LW5-PxltsBgTyw&usqp=CAU"
              alt="search-icon"
            />
            <span className="my-1">Search</span>
          </li>
          <li className="flex mr-[60px]">
            <img
              className="w-[19px] h-[19px] mr-2 my-1"
              src="https://static.thenounproject.com/png/958296-200.png"
              alt="offers-icon"
            />
            <span className="my-1">Offers</span>
          </li>
          <li className="flex mr-[60px]">
            <img
              className="w-[22px] h-[22px] mr-2 my-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRN8wjxRqe_d3qNo8sI5TVR97qba1eM3bSR-l14LS2TznUGTz30XNNI09it4luodnsrL4&usqp=CAU"
              alt="help-icon"
            />
            <span className="my-1">Help</span>
          </li>
          <li className="flex mr-[60px]">
            <img
              className="w-[17px] h-[17px] mr-2 my-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgYhvbGPzxttV2oAFg_c1F_cqDmVrBMCdcGa7U60TFv88baInul8FP2fznPFcghM-YiY&usqp=CAU"
              alt="signin-icon"
            />
            <span className="my-1">Sign In</span>
          </li>
          <li className="flex mr-[60px] ">
            <img
              className="w-[17px] h-[17px] mr-2 my-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcuWyt_D_oeMI6dqqlxx9oL1_rPwWeqDwlA&usqp=CAU"
              alt="cart-icon"
            />
            <span className="my-1">Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
