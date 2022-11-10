import ProductPics from "../components/ProductPics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";
import { useAuth } from "../contexts/AuthContext";
import * as productService from "../api/productApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productService.getProduct(productId);
        setProduct(res.data.product);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      }
    };
    fetchProduct();
  }, [productId]);

  const { wishList, toggleWishList } = useAuth(null);

  const favAction = async () => {
    await toggleWishList(product?.id);
  };

  return (
    <div className="px-16">
      <div className="flex mt-20 gap-20 ">
        <div className="flex flex-col">
          <ProductPics product={product} />
        </div>

        <div className="w-[700px]">
          <p className="text-[#A7C7D7] text-2xl">{product.name}</p>
          <p className="text-[#A7C7D7] text-xl mt-3 border-b-2 pb-3">
            {product.price} THB
          </p>
          <p className="text-[#A7C7D7] text-base mt-7">{product.story}</p>
          <p className="text-[#A7C7D7] text-xl mt-7">DESCRIPTION</p>
          <p className="text-[#A7C7D7] text-base mt-3">{product.description}</p>
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
                className={` ${
                  wishList ? "text-[#5699F5]" : "text-[#A7C7D7]"
                } scale-100"`}
                onClick={favAction}
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
