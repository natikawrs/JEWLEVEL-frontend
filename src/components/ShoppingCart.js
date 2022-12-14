import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function ShoppingCart() {
  const {
    cartItems,
    deleteCartItem,
    totalPrice,
    openShoppingCart,
    closeShoppingCart,
    isOpenShoppingCart
  } = useCart();
  const navigate = useNavigate();

  // onClick={() => navigate(`/product/${item.id}`)}
  // const handleClickLink = () => {
  //   navigate(`/product/${cartItems?.Product?.id}`);
  //   closeShoppingCart();
  // };
  // console.log(cartItems);
  return (
    <>
      <>
        <div
          onClick={closeShoppingCart}
          className={`flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-end 
          ${isOpenShoppingCart ? "opacity-100 visible" : "opacity-0 invisible"}
          transition-all duration-700`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative w-auto   max-w-3xl"
          >
            <div
              className={` min-w-[400px] min-h-[750px] shadow-sm relative ${
                isOpenShoppingCart ? "left-0" : "left-[700px]"
              } flex flex-col bg-white outline-none focus:outline-none px-10 transition-all duration-500`}
            >
              <div className="flex mt-5">
                <p className="text-start text-[#A7C7D7] font-medium text-2xl w-96 ">
                  SHOPPING CART ( {cartItems.length || 0} )
                </p>
                <button className="text-[30px] text-gray-400 hover:opacity-50 hover:transition-all hover:duration-500">
                  <FontAwesomeIcon icon={faXmark} onClick={closeShoppingCart} />
                </button>
              </div>

              {cartItems.map((item, index) => (
                <div
                  className="flex mt-5 border-t-2 pt-5 justify-evenly"
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className=" text-[#A7C7D7] scale-125 my-auto cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
                    onClick={() => deleteCartItem(item.id)}
                  />
                  <img
                    src={item.Product.image1}
                    className="w-24 h-24 cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
                    onClick={() => {
                      navigate(`/product/${item.Product.id}`);
                      closeShoppingCart();
                    }}
                  />
                  <div className="text-sm text-[#A7C7D7] w-48">
                    <p>
                      <span
                        className="cursor-pointer hover:opacity-50 hover:transition-all hover:duration-500"
                        onClick={() => {
                          navigate(`/product/${item.Product.id}`);
                          closeShoppingCart();
                        }}
                      >
                        {item?.Product.name}
                      </span>
                    </p>
                    <div className="flex mt-1">
                      <p className="w-40">
                        {item?.quantity} x {item.Product?.price}
                      </p>

                      <p className="">
                        {item?.quantity * item.Product?.price}&nbsp;THB
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between  border-b-2 py-5 mt-5">
                <p className=" text-[#A7C7D7] font-medium text-lg ">
                  SUBTOTAL :
                </p>
                <p className=" text-[#A7C7D7] font-medium text-lg  ">
                  {totalPrice}&nbsp;THB
                </p>
              </div>

              <Link
                className=" bg-[#5699F5] text-white w-96 h-12 text-lg mt-10 mx-auto text-center pt-2"
                to="/checkout"
                onClick={closeShoppingCart}
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`    ${
            isOpenShoppingCart ? "visible" : "invisible"
          } fixed inset-0 z-40 bg-black opacity-50
          `}
        ></div>
      </>
    </>
  );
}

export default ShoppingCart;
