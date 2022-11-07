import ProductPics from "../components/ProductPics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";

function ProductPage() {
  return (
    <div className="px-16">
      <div className="flex mt-20  ">
        <ProductPics />

        <div className="w-[700px]">
          <p className="text-[#A7C7D7] text-2xl">ASPIDA MOISSANITE RING</p>
          <p className="text-[#A7C7D7] text-xl mt-3 border-b-2 pb-3">
            6500 THB
          </p>
          <p className="text-[#A7C7D7] text-base mt-7">
            Named by our Sparkler (Sparkle member), Aspida means shield reflects
            your light; your heart will never turn dark. This 1 carat moissanite
            adjustable ring is a great alternative to diamond.
          </p>
          <p className="text-[#A7C7D7] text-xl mt-7">DESCRIPTION</p>
          <p className="text-[#A7C7D7] text-base mt-3">
            Materials: S925 Silver, Moissanite, Diamond Simulant
          </p>
          <div className="flex mt-10">
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] border-l-[3px] w-10 h-10">
              -
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] w-10 h-10">
              7
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] border-r-[3px] w-10 h-10">
              +
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] text-xs border-[3px] w-36 h-10 ml-3">
              ADD TO CART
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-[3px] w-10 h-10 ml-3">
              <FontAwesomeIcon
                icon={faHeart}
                className=" text-[#A7C7D7] scale-100"
              />
            </button>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}

export default ProductPage;
