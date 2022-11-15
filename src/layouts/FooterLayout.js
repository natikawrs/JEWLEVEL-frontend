import { Link } from "react-router-dom";
import jewlevel from "../images/jewlevel.png";

function FooterLayout() {
  return (
    <>
      <hr className="px-60 mt-20" />
      <div className="flex px-16 pb-5">
        <img src={jewlevel} alt="full logo" width="400" height="150 " />
        <div className="flex flex-col my-auto ml-24">
          <p className="text-[#A7C7D7] text-2xl w-[600px]">
            Beauty sparks all the time. You deserve it. Remember, you are always
            beautiful!
          </p>
          <div className="flex gap-10 mt-10">
            <Link
              className="text-[#A7C7D7] font-normal border-b-2 hover:opacity-50 hover:transition-all hover:duration-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[#A7C7D7] font-normal border-b-2 hover:opacity-50 hover:transition-all hover:duration-500"
              to="/contact"
            >
              Contact us
            </Link>
            <Link className="text-[#A7C7D7] font-normal border-b-2 hover:opacity-50 hover:transition-all hover:duration-500">
              FAQ
            </Link>
            <Link className="text-[#A7C7D7] font-normal border-b-2 hover:opacity-50 hover:transition-all hover:duration-500">
              Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterLayout;
