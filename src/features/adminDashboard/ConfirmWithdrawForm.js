import { useState } from "react";
import { toast } from "react-toastify";
import { useLoading } from "../../contexts/LoadingContext";
import { useModal } from "../../contexts/ModalContext";
import { COMPLETED } from "../../utils/constaint";
import RejectConfirm from "./RejectConfirm";

function ConfirmWithdrawForm({ request, onConfirm, onReject }) {
  const { openFormModal, closeModal } = useModal();
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const formData = new FormData();
      formData.append("proofImage", file);
      formData.append("status", COMPLETED);
      await onConfirm(request.id, formData);
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
        อัพโหลดหลักฐาน
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2" />
      {file ? (
        <div className="w-full bg-tin-color">
          <img
            className="max-w-full max-h-96 block mx-auto"
            src={URL.createObjectURL(file)}
            alt="proofImage"
          />
        </div>
      ) : (
        ""
      )}
      <input
        type="file"
        className="mt-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        disabled={!file}
        className={`w-full bg-${
          file ? "vivid-orange" : "tin-color"
        } px-2 py-2 border  text-white rounded-lg ${
          file
            ? "border-vivid-orange hover:bg-mermaid-net hover:border-mermaid-net"
            : ""
        } mt-4`}
      >
        ยืนยัน
      </button>
      <button
        type="button"
        className="w-full px-2 py-2 border-2 border-vivid-orange text-vivid-orange hover:text-white rounded-lg hover:bg-red-600 mt-4"
        onClick={() =>
          openFormModal(<RejectConfirm request={request} onReject={onReject} />)
        }
      >
        ปฏิเสธการถอน
      </button>
    </form>
  );
}

export default ConfirmWithdrawForm;
