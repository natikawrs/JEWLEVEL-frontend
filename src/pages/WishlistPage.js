import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function WishlistPage() {
  const { wishList, toggleWishList } = useAuth();
  const favAction = async (id) => {
    await toggleWishList(id);
  };
  const navigate = useNavigate();

  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl my-20">My Wishlist </p>

      {wishList?.map((item) => (
        <div className="flex mb-10 justify-evenly border-b-2 pb-5">
          <div className="flex gap-14">
            <FontAwesomeIcon
              icon={faXmark}
              className=" text-[#A7C7D7] scale-125 my-auto cursor-pointer"
              onClick={() => favAction(item.Product.id)}
            />
            <img src={item.Product.image1} className="w-24 h-24" />
          </div>
          <p
            className="my-auto text-[#A7C7D7] font-normal w-72 cursor-pointer"
            onClick={() => navigate(`/product/${item.Product.id}`)}
          >
            {item.Product.name}
          </p>
          <p className="my-auto text-[#A7C7D7] font-normal">
            {item.Product.price} THB
          </p>
        </div>
      ))}
      {/* <h1>Test</h1> */}

      <p className="text-[#A7C7D7] text-lg mb-20">
        Make sure you get me in your order as soon as possible.
      </p>
    </div>
  );
}

export default WishlistPage;
