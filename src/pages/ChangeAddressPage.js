import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useLoading } from "../contexts/LoadingContext";
import { useModal } from "../contexts/ModalContext";

function ChangeAddressPage() {
  const { user, updateAddress } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const [address, setAddress] = useState(user?.address);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!address) {
        return toast.error("กรุณากรอกข้อมูล");
      }
      startLoading();
      await updateAddress({ address: address });
      toast.success("update success");
      closeModal();
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-20 flex justify-center">
        <div className="flex flex-col gap-6 w-full ">
          <span className="text-vivid-orange pl-4">ที่อยู่ในการจัดส่ง</span>

          <textarea
            type="text"
            className="block p-4 pl-10 w-full h-28 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-3xl  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              className={`text-white flex items-center justify-center bg-vivid-orange h-10 w-36 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white 
          }`}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ChangeAddressPage;
