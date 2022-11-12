import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
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
      {order?.map((item) => (
        <>
          {item.OrderItems?.map((item) => (
            <div className="flex mb-10 justify-evenly border-b-2 pb-5 w-[800px]">
              <div className="flex gap-14">
                <img
                  src="https://i1.wp.com/deardiaryco.com/wp-content/uploads/2021/08/IMG_6958.2.jpg?resize=1024%2C1024&ssl=1"
                  className="w-24 h-24"
                />
              </div>
              <p className="my-auto text-[#A7C7D7] font-normal">
                Ocean Heart Ring
              </p>
              <div className="my-auto text-[#A7C7D7] font-normal">
                <p className="text-right mt-6"> x 2</p>
                <p>3000 THB</p>
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
                Date:&nbsp;{item.updatedAt.slice(0, 10)}&nbsp; Time:&nbsp;
                {item.updatedAt.slice(11, 16)}
              </p>
            </div>
            <p className="text-lg text-right">
              Order Total : {item.subTotal} THB
            </p>
          </div>
          <p className="text-[#5699F5] text-xl font-semibold w-[800px]  border-b-2 pb-3 py-3 mb-20">
            STATUS : {item.status}
            <FontAwesomeIcon
              icon={faTruckFast}
              className="  text-[#A7C7D7] scale-150 my-auto ml-5"
            />
          </p>
        </>
      ))}
    </div>
  );
}

export default OrdersPage;
