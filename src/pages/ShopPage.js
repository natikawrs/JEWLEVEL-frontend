import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ShopPage() {
  const { products, wishList, toggleWishList } = useAuth();
  const navigate = useNavigate();

  const favAction = async (id) => {
    await toggleWishList(id);
  };

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
            {products.map((item) => (
              <div className="mt-10 text-center">
                <div className="">
                  <img
                    src={item.image1}
                    className="w-72 h-72  hover:opacity-50 hover:transition-all hover:duration-1000 cursor-pointer absolute"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={` ${
                      wishList ? "text-[#A7C7D7]" : "text-white"
                    } scale-150 relative ml-60 mt-5 cursor-pointer`}
                    onClick={() => favAction(products.id)}
                  />
                </div>
                <div className="mt-64 mx-auto w-72">
                  <div
                    className="text-[#A7C7D7] font-light text-sm cursor-pointer mx-auto"
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
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">BEST SELLER</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">NEW ARRIVAL</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">GIFT IDEAS</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">EARRINGS</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">NECKLACE</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">RINGS</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">WRISTWEAR</p>
            <div className="rounded-full bg-[#A7C7D7] text-white w-5 h-5 text-xs text-center">
              11
            </div>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[#A7C7D7] font-light text-sm">OTHERS</p>
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
