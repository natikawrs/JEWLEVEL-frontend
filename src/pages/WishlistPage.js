import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

function WishlistPage() {
  const { wishList, toggleWishList } = useAuth();

  const favAction = async (id) => {
    await toggleWishList(id);
  };
  const navigate = useNavigate();

  const { addItemToCart, openShoppingCart } = useCart();

  // const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  // const openShoppingCart = () => {
  //   setIsOpenShoppingCart(true);
  // };

  // const closeShoppingCart = () => {
  //   setIsOpenShoppingCart(false);
  // };

  const handleAddTocart = async (id) => {
    await addItemToCart(id);
    toggleWishList(id);
    openShoppingCart();
  };
  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl my-20">My Wishlist </p>

      {wishList?.map((item) => (
        <div className="flex mb-10 justify-evenly border-b-2 pb-5 ">
          <div className="flex gap-14">
            <FontAwesomeIcon
              icon={faXmark}
              className=" text-[#A7C7D7] scale-125 my-auto cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
              onClick={() => favAction(item.Product.id)}
            />
            <img
              src={item.Product.image1}
              className="w-24 h-24 cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
              onClick={() => navigate(`/product/${item.Product.id}`)}
            />
          </div>
          <p
            className="my-auto text-[#A7C7D7] font-normal w-64 cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
            onClick={() => navigate(`/product/${item.Product.id}`)}
          >
            {item.Product.name}
          </p>
          <p className="my-auto text-[#A7C7D7] font-normal w-24">
            {item.Product.price} THB
          </p>
          <button
            className="border-solid border-[#A7C7D7] text-[#A7C7D7] text-xs border-[3px] w-36 h-10 ml-3 my-auto hover:opacity-50 hover:transition-all hover:duration-500"
            onClick={() => handleAddTocart(item.Product.id)}
          >
            ADD TO CART
          </button>
        </div>
      ))}

      <p className="text-[#A7C7D7] text-lg mb-20">
        Make sure you get me in your order as soon as possible.
      </p>
    </div>
  );
}

export default WishlistPage;
