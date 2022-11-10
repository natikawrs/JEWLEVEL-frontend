import React from "react";

function AddressPage() {
  return (
    <div className="pr-16 pl-[300px] mt-[-450px] w-[850px]">
      {/* <div className="flex w-[850px]">
        <div className="text-[#A7C7D7] font-normal text-base mt-10">
          FIRST NAME *
        </div>
        <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
          LAST NAME *
        </div>
      </div> */}
      {/* <div className=" flex w-[850px]">
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
          name="firstname"
          type="text"
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="lastname"
          type="text"
        />
      </div> */}
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        ADDRESS DETAILS *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="addressDetails"
        type="text"
      />
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        STREET DETAILS *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="streetDetails"
        type="text"
      />
      <div className="flex w-[850px]">
        <div className="text-[#A7C7D7] font-normal text-base mt-10">
          SUB - DISTRICT *
        </div>
        <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
          DISTRICT *
        </div>
      </div>
      <div className=" flex w-[850px]">
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
          name="subDistrict"
          type="text"
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="district"
          type="text"
        />
      </div>
      <div className="flex w-[850px]">
        <div className="text-[#A7C7D7] font-normal text-base mt-10">CITY *</div>
        <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
          ZIPCODE *
        </div>
      </div>
      <div className=" flex w-[850px]">
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
          name="zipcode"
          type="text"
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="city"
          type="text"
        />
      </div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        COUNTRY *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="country"
        type="text"
      />
      <button className="mt-10 mb-20 bg-[#5699F5] text-white w-[830px] h-12 text-lg">
        SAVE ADDRESS
      </button>
    </div>
  );
}

export default AddressPage;
