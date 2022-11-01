import { useState } from "react";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/ModalContext";
import Star from "../../components/ui/Star";

function RatingForm({ order, rateOrder }) {
  const { closeModal } = useModal();

  const [score, setScore] = useState(0);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await rateOrder(order.id, score);
      closeModal();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };

  const handleHoverStar = (value) => {
    setScore(value);
  };

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
        ให้คะแนนสินค้าชิ้นนี้
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2 text-yell" />
      <div
        className="mx-auto mt-6 flex w-fit cursor-pointer"
        onClick={handleSubmitForm}
      >
        <div onMouseOver={() => handleHoverStar(1)}>
          <Star fill={score} size="3xl" color="yellow-400" />
        </div>
        <div onMouseOver={() => handleHoverStar(2)}>
          <Star fill={score - 1} size="3xl" color="yellow-400" />
        </div>
        <div onMouseOver={() => handleHoverStar(3)}>
          <Star fill={score - 2} size="3xl" color="yellow-400" />
        </div>
        <div onMouseOver={() => handleHoverStar(4)}>
          <Star fill={score - 3} size="3xl" color="yellow-400" />
        </div>
        <div onMouseOver={() => handleHoverStar(5)}>
          <Star fill={score - 4} size="3xl" color="yellow-400" />
        </div>
      </div>
      <div className="text-4xl text-vivid-orange mx-auto text-center mt-3">
        {score}
      </div>
    </form>
  );
}

export default RatingForm;
