import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

function Account() {
  const { user, updateUser } = useAuth();
  console.log(user);
  const [input, setInput] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    displayName: user?.displayName || "",
    email: user?.email
  });

  useEffect(() => {
    setInput({
      ...input,
      firstName: user?.firstName,
      lastName: user?.lastName,
      displayName: user?.displayName,
      email: user?.email
    });
  }, [user]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await updateUser(input);
      toast.success("success updated account info");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <form
      className="pr-16 pl-[300px] mt-[-450px] w-[850px]"
      onSubmit={handleUpdateUser}
    >
      <div className="flex w-[850px]">
        <div className="text-[#A7C7D7] font-normal text-base mt-10">
          FIRST NAME *
        </div>
        <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
          LAST NAME *
        </div>
      </div>
      <div className=" flex w-[850px]">
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
          name="firstName"
          type="text"
          value={input.firstName}
          onChange={handleChangeInput}
        />
        <input
          className="w-[400px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
          name="lastName"
          type="text"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        DISPLAY NAME *
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="displayName"
        type="text"
        value={input.displayName}
        onChange={handleChangeInput}
      />
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        EMAIL ADDRESS *
      </div>
      <div
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto pt-3"
        name="email"
        type="text"
      >
        {input.email}
      </div>
      {/* <div className="text-[#5699F5] font-normal text-xl mt-20 mx-auto">
        Password change
      </div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        CURRENT PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
      </div>
      <div
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="password"
        type="password"
      ></div>
      <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        NEW PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        name="newPassword"
        type="password"
      /> */}
      {/* <div className="text-[#A7C7D7] font-normal text-base mt-10 mx-auto">
        CONFIRM NEW PASSWORD
      </div>
      <input
        className="w-[830px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm mx-auto"
        type="password"
      /> */}

      <button className="mt-10 mb-20 bg-[#5699F5] text-white w-[830px] h-12 text-lg">
        SAVE CHANGES
      </button>
    </form>
  );
}

export default Account;
