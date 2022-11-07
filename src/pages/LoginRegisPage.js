import React from "react";

function LoginRegisPage() {
  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">My Account</p>
      <div className="flex mt-20">
        <div className=" text-[#A7C7D7] font-medium text-2xl">
          Login
          <div className="flex flex-col">
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EMAIL ADDRESS *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="email"
              type="text"
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              PASSWORD *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="password"
              type="password"
            />
            <div className="flex gap-2 mt-5">
              <input type="checkbox" name="remember" />

              <label className="text-xs " htmlFor="remember">
                Remember me
              </label>
            </div>
            <div className="flex">
              <button className="mt-5 bg-[#5699F5] text-white w-52 h-12 text-lg">
                LOGIN
              </button>
              <p className="my-auto text-xs mx-40 border-b-2">
                Lost your password?
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto  text-[#A7C7D7] font-medium text-2xl">
          Register
          <div className="flex flex-col">
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EMAIL ADDRESS *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="email"
              type="text"
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              PASSWORD *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="password"
              type="password"
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              FIRST NAME *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="firstname"
              type="text"
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              LAST NAME *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="lastname"
              type="text"
            />
            <div className="flex gap-2 my-5">
              <input type="checkbox" name="remember" />

              <label className="text-xs " htmlFor="remember">
                I HAVE READ AND AGREE TO THE WEBSITE TERMS AND CONDITIONS *
              </label>
            </div>
            <p className=" text-xs w-[500px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="mt-5 mb-20 bg-[#5699F5] text-white w-52 h-12 text-lg">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisPage;
