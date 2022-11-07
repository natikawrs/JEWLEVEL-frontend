import React from "react";

function CheckoutPage() {
  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">Check out</p>
      <div className="flex mt-20">
        <div className=" text-[#A7C7D7] font-medium text-2xl">
          Shipping Address
          <div className="flex  w-[500px] ">
            <div className="text-[#A7C7D7] font-normal text-base mt-10">
              FIRST NAME *
            </div>
            <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
              LAST NAME *
            </div>
          </div>
          <div className=" flex w-[500px] gap-5">
            <input
              className="w-[247px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="firstname"
              type="text"
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="lastname"
              type="text"
            />
          </div>
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            ADDRESS DETAILS *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="addressDetails"
            type="text"
          />
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            STREET DETAILS *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="streetDetails"
            type="text"
          />
          <div className="flex w-[500px]">
            <div className="text-[#A7C7D7] font-normal text-base mt-10">
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
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="district"
              type="text"
            />
          </div>
          <div className="flex w-[500px]">
            <div className="text-[#A7C7D7] font-normal text-base mt-10">
              CITY *
            </div>
            <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
              ZIPCODE *
            </div>
          </div>
          <div className=" flex w-[500px] gap-5">
            <input
              className="w-[247px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="zipcode"
              type="text"
            />
            <input
              className="w-[248px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
              name="city"
              type="text"
            />
          </div>
          <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
            COUNTRY *
          </div>
          <input
            className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
            name="country"
            type="text"
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
            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm  my-auto">
              <span className="my-auto font-medium text-base">
                Astri Ear Studs × 1
              </span>
              <span className="mx-auto my-auto font-medium text-base">
                6000 THB
              </span>
            </div>
            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm  my-auto">
              <span className="my-auto font-medium text-base"> SUBTOTAL</span>
              <span className="ml-48 my-auto font-medium text-base">
                6000 THB
              </span>
            </div>
            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm  my-auto">
              <span className="my-auto font-medium text-base">SHIPPING</span>
              <span className="ml-48 my-auto font-medium text-base">
                FREE SHIPPING
              </span>
            </div>
            <div className=" flex w-[500px] h-[60px] pl-[20px]  text-white border-solid bg-[#A7C7D7] border-[1px] text-sm my-auto">
              <span className="my-auto font-medium text-base">TOTAL</span>
              <span className="ml-56 my-auto font-medium text-base ">
                6000 THB
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
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EXPIRY DATE *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="expiryDate"
              type="text"
              placeholder="MM / YY"
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              CARD CODE (CVC) *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="cvc"
              type="text"
              placeholder="CVC"
            />
            <div className="flex gap-2 my-5">
              <input type="checkbox" name="remember" />

              <label className="text-xs " htmlFor="remember">
                I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS *
              </label>
            </div>

            <button className="mt-5 mb-20 bg-[#5699F5] text-white w-[500px] h-12 text-lg">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
