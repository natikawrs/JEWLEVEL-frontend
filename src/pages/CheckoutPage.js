import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import * as orderService from "../api/orderApi";
import * as cartService from "../api/cartApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CheckoutPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  // const { cartItems, totalPrice } = useCart();
  useEffect(() => {
    setInput({
      ...input,
      firstName: user?.firstName,
      lastName: user?.lastName,
      address: user?.address,
      street: user?.street,
      subDistrict: user?.subDistrict,
      district: user?.district,
      city: user?.city,
      zipcode: user?.zipcode,
      country: user?.country,
      cardNumber: user?.cardNumber,
      expiredDate: user?.expiredDate,
      cvc: user?.cvc,
      subTotal: totalPrice
    });
  }, [user]);

  const [input, setInput] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    address: user?.address || "",
    street: user?.street || "",
    subDistrict: user?.subDistrict || "",
    district: user?.district || "",
    city: user?.city || "",
    zipcode: user?.zipcode || "",
    country: user?.country || "",
    cardNumber: user?.cardNumber || "",
    expiredDate: user?.expiredDate || "",
    cvc: user?.cvc || "",
    subTotal: 0
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { cartItems, totalPrice } = useCart();
  useEffect(() => {
    setArriteminfo(
      cartItems.map((item) => ({
        ...item,
        totalPrice: item?.quantity * item?.Product.price
      }))
    );
  }, [cartItems]);

  const [arriteminfo, setArriteminfo] = useState([
    {
      quantity: cartItems?.quantity,
      totalPrice: totalPrice,
      productId: cartItems?.productId
    }
  ]);

  const handleCreateOrder = async () => {
    try {
      await orderService.createOrder(input, arriteminfo);
      cartService.clearCartApi();
      toast.success("Your Order has been placed");
      navigate("/my-account/orders");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">Check out</p>
      <div className="flex mt-20">
        <div className=" text-[#A7C7D7] font-medium text-2xl">
          Shipping Address
          <div className="flex  w-[500px] ">
            <div className="text-[#A7C7D7] font-normal text-base mt-10 w-36">
              FIRST NAME *
            </div>
            <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
              LAST NAME *
            </div>
          </div>
          <div className=" flex w-[500px] gap-5">
            <input
              className="w-[247px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="firstName"
              type="text"
              value={input.firstName}
              onChange={handleChangeInput}
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="lastName"
              type="text"
              value={input.lastName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            ADDRESS DETAILS *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="address"
            type="text"
            value={input.address}
            onChange={handleChangeInput}
          />
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            STREET DETAILS *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="street"
            type="text"
            value={input.street}
            onChange={handleChangeInput}
          />
          <div className="flex w-[500px]">
            <div className="text-[#A7C7D7] font-normal text-base mt-10 w-36">
              SUB - DISTRICT *
            </div>
            <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
              DISTRICT *
            </div>
          </div>
          <div className=" flex w-[500px] gap-5">
            <input
              className="w-[247px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="subDistrict"
              type="text"
              value={input.subDistrict}
              onChange={handleChangeInput}
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="district"
              type="text"
              value={input.district}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex w-[500px]">
            <div className="text-[#A7C7D7] font-normal text-base mt-10 w-36">
              CITY *
            </div>
            <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
              ZIPCODE *
            </div>
          </div>
          <div className=" flex w-[500px] gap-5">
            <input
              className="w-[247px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="city"
              type="text"
              value={input.city}
              onChange={handleChangeInput}
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="zipcode"
              type="text"
              value={input.zipcode}
              onChange={handleChangeInput}
            />
          </div>
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            COUNTRY *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="country"
            type="text"
            value={input.country}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mx-auto  text-[#A7C7D7] font-medium text-2xl">
          Your Order
          <div className="flex flex-col">
            <div className=" flex w-[500px] h-[60px] pl-[20px] text-white border-solid bg-[#A7C7D7] border-[1px] text-sm mt-10 my-auto">
              <span className="my-auto font-medium text-base">PRODUCT</span>
              <span className="ml-48 my-auto font-medium text-base">
                SUBTOTAL
              </span>
            </div>

            {cartItems.map((item) => (
              <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-white border-[1px] text-sm  my-auto">
                <span className="my-auto font-medium text-base text-[#A7C7D7] flex">
                  <div className="w-60">{item.Product.name} </div>×&nbsp;
                  <div>{item.quantity}</div>
                </span>
                <span className="mx-auto my-auto font-medium text-base text-[#A7C7D7]">
                  {item?.quantity * item.Product?.price}&nbsp;THB
                </span>
              </div>
            ))}

            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm  my-auto">
              <span className="my-auto font-medium text-base">SHIPPING</span>
              <span className="ml-48 my-auto font-medium text-base">
                FREE SHIPPING
              </span>
            </div>
            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm my-auto">
              <span className="my-auto font-medium text-base">TOTAL</span>
              <span className="ml-56 my-auto font-medium text-base ">
                {totalPrice}&nbsp;THB
              </span>
            </div>

            <div className="flex mt-10">
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

            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              CARD NUMBER *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="cardNumber"
              type="text"
              placeholder="1234 1234 1234 1234"
              value={input.cardNumber}
              onChange={handleChangeInput}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EXPIRY DATE *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="expiredDate"
              type="text"
              placeholder="MM / YY"
              value={input.expiredDate}
              onChange={handleChangeInput}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              CARD CODE (CVC) *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="cvc"
              type="text"
              placeholder="CVC"
              value={input.cvc}
              onChange={handleChangeInput}
            />
            <div className="flex gap-2 my-5">
              <input type="checkbox" name="remember" />

              <label className="text-xs " htmlFor="remember">
                I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS *
              </label>
            </div>

            <button
              className="mt-5 mb-20 bg-[#5699F5] text-white w-[500px] h-12 text-lg"
              onClick={handleCreateOrder}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
