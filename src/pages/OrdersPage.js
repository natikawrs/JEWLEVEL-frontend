import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faBoxesPacking,
  faHandHoldingHeart,
  faRectangleXmark
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import * as orderService from "../api/orderApi";

function OrdersPage() {
  const [order, setOrder] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await orderService.getUserOrder();
      setOrder(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  console.log(order);
  return (
    <div className="pr-16 pl-[300px] mt-[-400px] w-[850px] min-h-[500px]">
      {order?.map((item, index) => (
        <>
          {item.OrderItems?.map((item, index) => (
            <div
              className="flex mb-10 justify-evenly border-b-2 pb-5 w-[800px]"
              key={index}
            >
              <div className="flex gap-14">
                <img src={item.Product.image1} className="w-24 h-24" />
              </div>
              <p className="my-auto text-[#A7C7D7] font-normal w-60">
                {item.Product.name}
              </p>
              <div className="my-auto text-[#A7C7D7] font-normal">
                <p className="text-right mt-6"> x {item.quantity} </p>
                <p> {item.totalPrice} THB</p>
              </div>
            </div>
          ))}

          <div className="flex text-[#A7C7D7]  w-[800px] border-b-2 pb-3">
            <div className="w-[600px] text-sm text-left">
              <p className=" ">
                Name:&nbsp;
                {item.firstName}&nbsp;
                {item.lastName}
              </p>
              <p className=" mt-1">
                Address:&nbsp;
                {item.address}&nbsp; {item.street}&nbsp; {item.subDistrict}
                &nbsp;
                {item.district}&nbsp;
                {item.zipcode}&nbsp;
                {item.country}&nbsp;
              </p>
              <p className="mt-1">
                Order date:&nbsp;{item.updatedAt.slice(0, 10)}&nbsp; Time:&nbsp;
                {item.updatedAt.slice(11, 16)}
              </p>
              <p className="mt-1">Tracking No :&nbsp;{item.trackingNo}</p>
            </div>
            <p className="text-lg text-right pt-16">
              Order Total : {item.subTotal} THB
            </p>
          </div>
          <p className="text-[#5699F5] text-xl font-semibold w-[800px]  border-b-2 pb-3 py-3 mb-20 text-end">
            STATUS : {item.status}
            {item.status === "TO SHIP" && (
              <FontAwesomeIcon
                icon={faBoxesPacking}
                className="  text-[#A7C7D7] scale-150 my-auto ml-5"
              />
            )}
            {item.status === "TO RECEIVE" && (
              <FontAwesomeIcon
                icon={faTruckFast}
                className="  text-[#A7C7D7] scale-150 my-auto ml-5"
              />
            )}
            {item.status === "COMPLETED" && (
              <FontAwesomeIcon
                icon={faHandHoldingHeart}
                className="  text-[#A7C7D7] scale-150 my-auto ml-5"
              />
            )}
            {item.status === "CANCELLED" && (
              <FontAwesomeIcon
                icon={faRectangleXmark}
                className="  text-[#A7C7D7] scale-150 my-auto ml-5"
              />
            )}
          </p>
        </>
      ))}
    </div>
  );
}

export default OrdersPage;
