import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as productService from "../api/productApi";
import { useState } from "react";

function WishlistPage() {
  const [wishList, setWishList] = useState(null);
  const fetchWishList = async () => {
    try {
      const res = await productService.getUserWishList();
      setWishList(res.data.findWishListByUser);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(wishList);
  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl my-20">My Wishlist </p>
      <div className="flex mb-10 justify-evenly border-b-2 pb-5">
        <div className="flex gap-14">
          <FontAwesomeIcon
            icon={faXmark}
            className=" text-[#A7C7D7] scale-125 my-auto"
          />
          <img
            src="https://i1.wp.com/deardiaryco.com/wp-content/uploads/2021/08/IMG_6958.2.jpg?resize=1024%2C1024&ssl=1"
            className="w-24 h-24"
          />
        </div>
        <p className="my-auto text-[#A7C7D7] font-normal">Ocean Heart Ring</p>
        <p className="my-auto text-[#A7C7D7] font-normal">3000 THB</p>
      </div>
      <p className="text-[#A7C7D7] text-lg mb-20">
        Make sure you get me in your order as soon as possible.
      </p>
    </div>
  );
}

export default WishlistPage;
