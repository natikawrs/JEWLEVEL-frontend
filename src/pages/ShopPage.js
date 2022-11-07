import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShopPage() {
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

          <div className="flex gap-5">
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <Link to="/product" className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </Link>
              <p className="text-[#A7C7D7] font-light text-sm ">3500 THB</p>
            </div>
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <p className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </p>
              <p className="text-[#A7C7D7] font-light text-sm">3500 THB</p>
            </div>
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <p className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </p>
              <p className="text-[#A7C7D7] font-light text-sm">3500 THB</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <p className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </p>
              <p className="text-[#A7C7D7] font-light text-sm">3500 THB</p>
            </div>
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <p className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </p>
              <p className="text-[#A7C7D7] font-light text-sm">3500 THB</p>
            </div>
            <div className="mt-10 text-center">
              <img
                src="https://i0.wp.com/deardiaryco.com/wp-content/uploads/2022/08/IMG_2245.2-Resized.png?resize=1024%2C1024&ssl=1"
                className="w-72 h-72"
              />
              <p className="text-[#A7C7D7] font-light text-sm">
                Floral Twine Adjustable Ring
              </p>
              <p className="text-[#A7C7D7] font-light text-sm">3500 THB</p>
            </div>
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
