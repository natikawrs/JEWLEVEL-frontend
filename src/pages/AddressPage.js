import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function AddressPage() {
  const { user, updateUser } = useAuth();
  const [input, setInput] = useState({
    address: user?.address || "",
    street: user?.street || "",
    subDistrict: user?.subDistrict || "",
    district: user?.district || "",
    city: user?.city || "",
    zipcode: user?.zipcode || "",
    country: user?.country || ""
  });

  useEffect(() => {
    setInput({
      ...input,
      address: user?.address,
      street: user?.street,
      subDistrict: user?.subDistrict,
      district: user?.district,
      city: user?.city,
      zipcode: user?.zipcode,
      country: user?.country
    });
  }, [user]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await updateUser(input);
      toast.success("success updated address");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <form
      className="pr-16 pl-[300px] mt-[-450px] w-[850px]"
      onSubmit={handleUpdateUser}
    >
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        ADDRESS DETAILS *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="address"
        type="text"
        value={input.address}
        onChange={handleChangeInput}
      />
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        STREET DETAILS *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="street"
        type="text"
        value={input.street}
        onChange={handleChangeInput}
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
          value={input.subDistrict}
          onChange={handleChangeInput}
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="district"
          type="text"
          value={input.district}
          onChange={handleChangeInput}
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
          value={input.zipcode}
          onChange={handleChangeInput}
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="city"
          type="text"
          value={input.city}
          onChange={handleChangeInput}
        />
      </div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        COUNTRY *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="country"
        type="text"
        value={input.country}
        onChange={handleChangeInput}
      />
      <button className="mt-10 mb-20 bg-[#5699F5] text-white w-[830px] h-12 text-lg">
        SAVE ADDRESS
      </button>
    </form>
  );
}

export default AddressPage;
