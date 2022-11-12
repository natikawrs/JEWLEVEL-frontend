import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { validateRegister } from "../validations/userValidate";

function LoginRegisPage() {
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      await register(input);
      toast.success("success register");
      navigate("/my-account/orders");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const [inputLogin, setInputLogin] = useState({
    emailLogin: "",
    passwordLogin: ""
  });

  const handleChangeInputLogin = (e) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitFormLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputLogin);
      toast.success("success login");
      navigate("/my-account/orders");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">My Account</p>
      <div className="flex mt-20">
        <div className=" text-[#A7C7D7] font-medium text-2xl">
          Login
          <form className="flex flex-col" onSubmit={handleSubmitFormLogin}>
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EMAIL ADDRESS *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="emailLogin"
              type="text"
              value={inputLogin.emailLogin}
              onChange={handleChangeInputLogin}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              PASSWORD *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="passwordLogin"
              type="password"
              value={inputLogin.passwordLogin}
              onChange={handleChangeInputLogin}
            />
            <div className="flex gap-2 mt-5">
              <input type="checkbox" name="remember" />

              <label className="text-xs " htmlFor="remember">
                Remember me
              </label>
            </div>
            <div className="flex">
              <button
                className="mt-5 bg-[#5699F5] text-white w-52 h-12 text-lg"
                onSubmit={handleSubmitFormLogin}
              >
                LOGIN
              </button>
              <p className="my-auto text-xs mx-40 border-b-2">
                Lost your password?
              </p>
            </div>
          </form>
        </div>
        <div className="mx-auto  text-[#A7C7D7] font-medium text-2xl">
          Register
          <form className="flex flex-col" onSubmit={handleSubmitForm}>
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              EMAIL ADDRESS *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="email"
              type="text"
              value={input.email}
              onChange={handleChangeInput}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              PASSWORD *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChangeInput}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              FIRST NAME *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="firstName"
              type="text"
              value={input.firstName}
              onChange={handleChangeInput}
            />
            <p className="text-[#A7C7D7] font-normal text-base mt-10">
              LAST NAME *
            </p>
            <input
              className="w-[500px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-3 text-sm"
              name="lastName"
              type="text"
              value={input.lastName}
              onChange={handleChangeInput}
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
            <button
              className="mt-5 mb-20 bg-[#5699F5] text-white w-52 h-12 text-lg"
              onSubmit={handleSubmitForm}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisPage;
