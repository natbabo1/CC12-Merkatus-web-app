import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import * as paymentService from "../../api/paymentApi";
import * as orderService from "../../api/orderApi";

function CreditCard({ totalAmount }) {
  const { user } = useAuth();
  const { checkoutItems } = useCart();

  let OmiseCard;

  OmiseCard = window.OmiseCard;
  OmiseCard.configure({
    publicKey: "pkey_test_5thvpb77vjhfss7q110",
    currency: "THB",
    frameLabel: "MERKATUS",
    image:
      "https://res.cloudinary.com/dkbiwdyij/image/upload/v1665943585/Merkatus_njoknv.png",
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

  const omiseCardHandler = (payInId, verifiedCheckoutItems) => {
    OmiseCard.open({
      amount: totalAmount,
      onCreateTokenSuccess: async (token) => {
        const res = await paymentService.payment({
          email: user.email,
          name: user.firstName,
          amount: totalAmount,
          token: token,
          payInId,
          verifiedCheckoutItems
        });

        console.log(res.data);
      },

      onFormClosed: () => {}
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { payInId, verifiedCheckoutItems }
      } = await orderService.makingPurchase({
        totalAmount,
        checkoutItems
      });
      creditCardConfigure();
      omiseCardHandler(payInId, verifiedCheckoutItems);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div>
      <button
        className="bg-vivid-orange text-white py-2 px-14 rounded-xl"
        id="credit-card"
        type="button"
        onClick={handleClick}
      >
        ชำระเงิน
      </button>
    </div>
  );
}

export default CreditCard;
