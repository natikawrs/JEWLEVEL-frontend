import { Link, Outlet } from "react-router-dom";
import Container from "./container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faLocationDot,
  faCreditCard,
  faUser,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

function ProfileLayout() {
  return (
    <div className="px-16 w-80">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">My Account</p>

      <Link className="flex flex-row mt-20 gap-5 my-auto border-b-2 pb-5">
        <FontAwesomeIcon
          icon={faListCheck}
          className="  text-[#A7C7D7] scale-150 my-auto"
        />
        <p className="text-[#A7C7D7] font-normal text-base">Orders</p>
      </Link>
      <Link
        className="flex flex-row mt-10 gap-5 my-auto border-b-2 pb-5"
        to="/my-account/edit-address"
      >
        <FontAwesomeIcon
          icon={faLocationDot}
          className="  text-[#A7C7D7] scale-150 my-auto"
        />
        <p className="text-[#A7C7D7] font-normal text-base">Address</p>
      </Link>
      <Link
        className="flex flex-row mt-10 gap-5 my-auto border-b-2 pb-5"
        to="/my-account/add-payment-method"
      >
        <FontAwesomeIcon
          icon={faCreditCard}
          className="  text-[#A7C7D7] scale-150 my-auto"
        />
        <p className="text-[#A7C7D7] font-normal text-base">Payment method</p>
      </Link>
      <Link
        className="flex flex-row mt-10 gap-5 my-auto border-b-2 pb-5"
        to="/my-account"
      >
        <FontAwesomeIcon
          icon={faUser}
          className="  text-[#A7C7D7] scale-150 my-auto"
        />
        <p className="text-[#A7C7D7] font-normal text-base">Account details</p>
      </Link>
      <Link className="flex flex-row mt-10 gap-5 my-auto border-b-2 pb-5">
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="  text-[#A7C7D7] scale-150 my-auto"
        />
        <p className="text-[#A7C7D7] font-normal text-base">Logout</p>
      </Link>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default ProfileLayout;
