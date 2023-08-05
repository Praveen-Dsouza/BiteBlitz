import { CANCEL_NOTICE_URL } from "../../utils/constants";

const OrderCancellationNotice = () => {
  return (
    <div className="px-[30px] mt-4 bg-white">
      <div>
        <div className="bg-white my-4 px-4 pt-4 pb-0 border-[1px] border-[#e9e9eb] rounded-[5px]">
          <div className="flex items-start ">
            {/* Not in use img */}
            <img
              className="w-6 h-6 mr-2 flex-shrink-0 hidden"
              src={CANCEL_NOTICE_URL}
              alt="cancel_notice"
            />
            <p className="text-[#3e4152] font-semibold leading-5">
              Review your order and address details to avoid cancellations
            </p>
          </div>
          <div className="pt-4 text-[13px] leading-5 tracking-[-0.3px]">
            <p className="m-0">
              <span className="text-[#ff0000] ">Note: </span>
              If you cancel within 60 seconds of placing your order, a 100%
              refund will be issued. No refund for cancellations made after 60
              seconds.
              <br />
              <br />
              <span className="text-[#808080]">
                Avoid cancellation as it leads to food wastage.
              </span>
            </p>
          </div>
          <div className="flex pt-4 pr-4 ml-0 mb-5 tracking-[-0.3px] outline-none">
            <span className="text-[#ec6148] border-b-[1px] border-[#ec6148] border-dotted	mr-6 font-medium pb-[3px] text-[1rem]">
              Read cancellation policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancellationNotice;
