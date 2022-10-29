import * as paymentService from "../../api/paymentApi";
import { useAuth } from "../../contexts/AuthContext";

function CreditCard({ totalAmount }) {
  const { user } = useAuth();
  let OmiseCard;

  OmiseCard = window.OmiseCard;
  OmiseCard.configure({
    publicKey: "pkey_test_5thvpb77vjhfss7q110",
    currency: "THB",
    frameLabel: "Maketus",
    submitLabel: "Pay NOW",
    buttonLabel: "Pay with Omise"
  });

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: []
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: totalAmount,
      onCreateTokenSuccess: async (token) => {
        await paymentService.payment({
          email: user.email,
          name: user.firstName,
          amount: totalAmount,
          token: token,
          headers: {
            "Content-Type": "application/json"
          }
        });
      },

      onFormClosed: () => {}
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  return (
    <div>
      <form>
        <button
          className="bg-vivid-orange text-white py-2 px-14 rounded-xl"
          id="credit-card"
          type="button"
          onClick={handleClick}
        >
          ชำระเงิน
        </button>
      </form>
    </div>
  );
}

export default CreditCard;
