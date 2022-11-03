import { useRef } from "react";
import { toast } from "react-toastify";
import { useLoading } from "../../contexts/LoadingContext";
import { useModal } from "../../contexts/ModalContext";

function RejectConfirm({ request, onReject }) {
  const { closeModal } = useModal();
  const { startLoading, stopLoading } = useLoading();

  const detail = useRef();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await onReject(request.id, detail);
      closeModal();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
        ยืนยันการปฏิเสธ
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2" />

      <textarea
        className="w-full mt-6 border-vivid-orange rounded-lg focus:ring-vivid-orange focus:border-vivid-orange"
        ref={detail}
      />
      <button
        type="submit"
        className="w-full px-2 py-2 border-2 border-vivid-orange text-vivid-orange hover:text-white rounded-lg hover:bg-red-600 mt-4"
      >
        ยืนยัน
      </button>
      <button
        type="button"
        className="w-full bg-vivid-orange px-2 py-2 border border-vivid-orange text-white rounded-lg hover:bg-tin-color hover:border-mermaid-net mt-4"
        onClick={() => closeModal()}
      >
        close
      </button>
    </form>
  );
}

export default RejectConfirm;
