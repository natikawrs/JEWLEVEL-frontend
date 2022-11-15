import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

function ShopPage() {
  const { products, wishList, toggleWishList } = useAuth();
  const navigate = useNavigate();
  const favAction = async (id) => {
    await toggleWishList(id);
  };

  // console.log(products);
  const wishListed = wishList?.map((product) => product?.productId);

  const [searchCategory, setSearchCategory] = useState("");
  console.log(searchCategory);
  return (
    <div className="px-16">
      <p className="text-[#5699F5] font-medium text-4xl mt-20">Shop</p>
      <div className="flex justify-evenly">
        <div>
          <div className="mt-10">
            <input
              className="w-[750px] h-[50px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] my-3 text-sm mx-auto absolute"
              name="cardNumber"
              type="text"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-[#A7C7D7] scale-150 ml-[700px] mt-7"
            />
          </div>

          <div className="flex flex-wrap gap-5 w-[910px]">
            {products
              ?.filter((item) => {
                if (searchCategory) {
                  return (
                    item.type.toLowerCase() ===
                    (searchCategory.toLowerCase() || searchCategory)
                  );
                }
                return item;
              })
              .map((item, index) => (
                <div className="mt-10 text-center" key={index}>
                  <div className="">
                    <img
                      src={item.image1}
                      className="w-72 h-72  hover:opacity-50 hover:transition-all hover:duration-700 cursor-pointer absolute "
                      onClick={() => navigate(`/product/${item.id}`)}
                    />
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={` ${
                        wishListed?.includes(item.id)
                          ? "text-[#A7C7D7]"
                          : "text-white"
                      } scale-150 relative ml-60 mt-5 cursor-pointer`}
                      onClick={() => favAction(item.id)}
                    />
                  </div>
                  <div className="mt-64 mx-auto w-72">
                    <div
                      className="text-[#A7C7D7] font-light text-sm cursor-pointer mx-auto hover:opacity-50 hover:transition-all hover:duration-500"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      {item.name}
                    </div>
                    <p className="text-[#A7C7D7] font-light text-sm mx-auto">
                      {item.price} THB
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="">
          <p className="text-[#A7C7D7] text-2xl">CATEGORIES</p>
          <button
            className="flex mt-5 gap-3 cursor-pointer"
            onClick={(event) => {
              setSearchCategory(event.target.value);
            }}
            value="bestseller"
          >
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              BEST SELLER
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </button>
          <div className="flex mt-5 gap-3 cursor-pointer">
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              NEW ARRIVAL
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3 cursor-pointer">
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              GIFT IDEAS
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <button
            className="flex mt-5 gap-3 cursor-pointer"
            onClick={() => {
              setSearchCategory("earring");
            }}
          >
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              EARRINGS
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </button>
          <button
            className="flex mt-5 gap-3 cursor-pointer"
            onClick={() => {
              setSearchCategory("nacklace");
            }}
          >
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              NECKLACE
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </button>
          <button
            className="flex mt-5 gap-3 cursor-pointer"
            onClick={() => {
              setSearchCategory("ring");
            }}
          >
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              RING
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </button>
          <button
            className="flex mt-5 gap-3 cursor-pointer"
            onClick={() => {
              setSearchCategory("bracelet");
            }}
          >
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              BRACELET
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </button>
          <div className="flex mt-5 gap-3 cursor-pointer">
            <p className="text-[#A7C7D7] font-light text-sm hover:opacity-50 hover:transition-all hover:duration-500">
              OTHERS
            </p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
