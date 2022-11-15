import ProductPics from "../components/ProductPics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";
import { useAuth } from "../contexts/AuthContext";
import * as productService from "../api/productApi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

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

  const { wishList, toggleWishList } = useAuth();

  const favAction = async () => {
    await toggleWishList(product?.id);
  };

  const wishListed = wishList?.map((product) => product?.productId);

  const { addItemToCart, openShoppingCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleAddTocart = () => {
    addItemToCart(productId, quantity);
    openShoppingCart();
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
            <button
              className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] border-l-[3px] w-10 h-10 hover:opacity-50 hover:transition-all hover:duration-500"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] w-10 h-10">
              {quantity}
            </button>
            <button
              className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-y-[3px] border-r-[3px] w-10 h-10 hover:opacity-50 hover:transition-all hover:duration-500"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <button
              className="border-solid border-[#A7C7D7] text-[#A7C7D7] text-xs border-[3px] w-36 h-10 ml-3 hover:opacity-50 hover:transition-all hover:duration-500"
              onClick={handleAddTocart}
            >
              ADD TO CART
            </button>
            <button className="border-solid border-[#A7C7D7] text-[#A7C7D7] border-[3px] w-10 h-10 ml-3 hover:opacity-50 hover:transition-all hover:duration-500">
              <FontAwesomeIcon
                icon={faHeart}
                className={` ${
                  wishListed.includes(product.id)
                    ? "text-[#A7C7D7]"
                    : "text-[#E2E3E4]"
                } scale-125`}
                onClick={favAction}
              />
            </button>
          </div>
        </div>
      </div>
      <Review product={product} />
    </div>
  );
}

export default ProductPage;
