import { useEffect } from "react";
import { useModal } from "../../contexts/ModalContext";
function Modal() {
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <>
      {openModal && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/80"
          tabIndex={-1}
          onClick={closeModal}
        >
          <div
            className="relative p-10 w-full max-w-xl h-full md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-whisper rounded-xl shadow pt-1 pb-16 px-12">
              {openModal}
              <button
                type="button"
                className="absolute right-8 top-10 translate-middle mt-1 mr-1"
                onClick={closeModal}
              >
                <i className="fa-solid fa-xmark text-tin-color hover:text-vivid-orange/80 text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
