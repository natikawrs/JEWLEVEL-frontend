import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function PaymentMethodPage() {
  return (
    <div className="pr-16 pl-[300px] mt-[-400px] w-[850px]">
      <div className="flex">
        <img
          src="https://deardiaryco.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          className="w-10 h-10"
        />
        <img
          src="https://deardiaryco.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          className="w-10 h-10"
        />
        <img
          src="https://deardiaryco.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          className="w-10 h-10"
        />
      </div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        CARD NUMBER *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto absolute"
        name="cardNumber"
        type="text"
        placeholder="1234 1234 1234 1234"
      />
      <FontAwesomeIcon
        icon={faCreditCard}
        className=" text-[#A7C7D7] scale-150 ml-[770px] mt-7"
      />
      <div className="text-[#A7C7D7] font-normal text-base mt-14 mx-auto">
        EXPIRY DATE *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="expiryDate"
        type="text"
        placeholder="MM / YY"
      />
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        CARD CODE (CVC) *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="cvc"
        type="text"
        placeholder="CVC"
      />
      <button className="mt-10 mb-20 bg-[#5699F5] text-white w-[830px] h-12 text-lg">
        ADD PAYMENT METHOD
      </button>
    </div>
  );
}

export default PaymentMethodPage;
