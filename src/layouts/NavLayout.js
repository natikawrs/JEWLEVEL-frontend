import { Outlet } from "react-router-dom";
import Container from "./container/Container";
import { Link } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import logofont from "../images/logofont.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBagShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import Chatbox from "../components/Chatbox";
import { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

function NavLayout() {
  const [showChat, setShowChat] = useState(false);
  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  const openShoppingCart = () => {
    setIsOpenShoppingCart(true);
  };

  const closeShoppingCart = () => {
    setIsOpenShoppingCart(false);
  };

  return (
    <>
      <div className="mt-3 ">
        <div className="flex gap-10 px-16">
          {/* <Link to="/"> */}
          <img src={logofont} className="w-60 h-14" />
          {/* </Link> */}

          <Link to="/" className="text-[#A7C7D7] font-normal  my-auto">
            HOME
          </Link>
          <Link className="text-[#A7C7D7] font-normal my-auto" to="/shop">
            SHOP ALL
          </Link>
          <Link
            className="text-[#A7C7D7] font-normal my-auto"
            to="/authentication"
          >
            LOGIN / REGISTER
          </Link>
          <Link className="text-[#A7C7D7] font-normal my-auto" to="/contact">
            CONTACT US
          </Link>
          <div className="flex gap-10 mx-[270px]  my-auto ">
            <Link to="/my-account">
              <FontAwesomeIcon
                icon={faUser}
                className=" text-[#A7C7D7] scale-125"
              />
            </Link>
            <Link to="/wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                className=" text-[#A7C7D7] scale-125"
              />
            </Link>
            <Link to="#">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="  text-[#A7C7D7] scale-125"
                onClick={openShoppingCart}
              />
            </Link>
            <Link onClick={openChat}>
              <FontAwesomeIcon
                icon={faComment}
                className="  text-[#A7C7D7] scale-125"
              />
            </Link>
          </div>
        </div>

        <hr className="mt-5" />
      </div>
      <Chatbox showChat={showChat} closeChat={closeChat} />
      <ShoppingCart
        isOpenShoppingCart={isOpenShoppingCart}
        closeShoppingCart={closeShoppingCart}
      />
      <Container>
        <Outlet />
      </Container>
      <FooterLayout />
    </>
  );
}

export default NavLayout;
