import { useRef } from "react";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/ModalContext";
import * as orderService from "../../api/orderApi";
import { TRANSFER } from "../../utils/constaint";
import { useLoading } from "../../contexts/LoadingContext";

function AddTrackingFrom({ order, updateOrder }) {
  const { startLoading, stopLoading } = useLoading();
  const { closeModal } = useModal();

  const trackNo = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const {
        data: { order: newOrder }
      } = await orderService.addTrackingNo(order.id, {
        status: TRANSFER,
        trackingNo: trackNo.current.value
      });
      updateOrder(newOrder);
      closeModal();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="w-full" onSubmit={handleOnSubmit}>
      <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
        Tracking No.
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2" />
      <div className="relative">
        <input
          type="text"
          className="block px-2.5 pb-2.5 pt-4 w-full mt-10 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
          id="trackNo"
          placeholder=" "
          ref={trackNo}
        />
        <label
          htmlFor="trackNo"
          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Enter Tracking Number
        </label>
      </div>
      <div className="flex items-center mt-4">
        <button
          type="submit"
          className="w-full focus:outline-none text-white bg-vivid-orange hover:bg-mermaid-net focus:ring-2 focus:ring-vivid-orange font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
        >
          Confirm
        </button>
        <button
          type="button"
          className="w-full focus:outline-none text-vivid-orange  border border-vivid-orange bg-white hover:text-white hover:bg-mermaid-net focus:ring-2 focus:ring-vivid-orange font-medium rounded-lg text-sm px-5 py-2.5 mr-2 h-fit"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddTrackingFrom;
