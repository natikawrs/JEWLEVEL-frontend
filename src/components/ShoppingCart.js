import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShoppingCart({ isOpenShoppingCart, closeShoppingCart }) {
  return (
    <>
      {/* {isOpenShoppingCart ? ( */}
      <>
        <div
        // onClick={closeShoppingCart}
        // className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-end  "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative w-auto   max-w-3xl"
          >
            <div
              className={`cart min-w-[400px] min-h-[730px] shadow-sm relative flex flex-col bg-white outline-none focus:outline-none px-10 ${
                isOpenShoppingCart ? "visible" : "invisible"
              }`}
            >
              <div className="flex mt-5">
                <p className="text-start text-[#A7C7D7] font-medium text-2xl w-96 ">
                  SHOPPING CART ( 1 )
                </p>
                <button className="text-[30px] text-gray-400 ">
                  <FontAwesomeIcon icon={faXmark} onClick={closeShoppingCart} />
                </button>
              </div>

              <div className="flex mt-5 border-t-2 pt-5">
                <img
                  src="https://i2.wp.com/deardiaryco.com/wp-content/uploads/2022/06/Astri-Studs.png?resize=1022%2C1024&ssl=1"
                  className="w-24 h-24 mr-5"
                />
                <div className="text-sm text-[#A7C7D7]">
                  <p>
                    <span className="">ASTRI EAR STUDS</span>
                  </p>
                  <p className="mt-1">2 x 6000 THB</p>
                </div>
              </div>
              <div className="flex mt-5 border-t-2 pt-5">
                <img
                  src="https://i2.wp.com/deardiaryco.com/wp-content/uploads/2022/06/Astri-Studs.png?resize=1022%2C1024&ssl=1"
                  className="w-24 h-24 mr-5"
                />
                <div className="text-sm text-[#A7C7D7]">
                  <p>
                    <span className="">ASTRI EAR STUDS</span>
                  </p>
                  <p className="mt-1">2 x 6000 THB</p>
                </div>
              </div>
              <div className="flex mt-5 border-t-2 pt-5">
                <img
                  src="https://i2.wp.com/deardiaryco.com/wp-content/uploads/2022/06/Astri-Studs.png?resize=1022%2C1024&ssl=1"
                  className="w-24 h-24 mr-5"
                />
                <div className="text-sm text-[#A7C7D7]">
                  <p>
                    <span className="">ASTRI EAR STUDS</span>
                  </p>
                  <p className="mt-1">2 x 6000 THB</p>
                </div>
              </div>
              <div className="flex justify-between  border-b-2 py-5 mt-5">
                <p className=" text-[#A7C7D7] font-medium text-lg ">
                  SUBTOTAL :
                </p>
                <p className=" text-[#A7C7D7] font-medium text-lg  ">
                  50000 THB
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
        {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
      </>
      {/* ) : null} */}
    </>
  );
}

export default ShoppingCart;
