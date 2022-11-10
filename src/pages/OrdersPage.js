import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

function OrdersPage() {
  return (
    <div className="pr-16 pl-[300px] mt-[-450px] w-[850px] min-h-[500px]">
      <div className="flex mb-10 justify-evenly border-b-2 pb-5 w-[700px]">
        <div className="flex gap-14">
          <img
            src="https://i1.wp.com/deardiaryco.com/wp-content/uploads/2021/08/IMG_6958.2.jpg?resize=1024%2C1024&ssl=1"
            className="w-24 h-24"
          />
        </div>
        <p className="my-auto text-[#A7C7D7] font-normal">Ocean Heart Ring</p>
        <div className="my-auto text-[#A7C7D7] font-normal">
          <p className="text-right mt-6"> x 2</p>
          <p>3000 THB</p>
        </div>
      </div>

      <div className="flex mb-10 justify-evenly border-b-2 pb-5 w-[700px]">
        <div className="flex gap-14">
          <img
            src="https://i1.wp.com/deardiaryco.com/wp-content/uploads/2021/08/IMG_6958.2.jpg?resize=1024%2C1024&ssl=1"
            className="w-24 h-24"
          />
        </div>
        <p className="my-auto text-[#A7C7D7] font-normal">Ocean Heart Ring</p>
        <div className="my-auto text-[#A7C7D7] font-normal">
          <p className="text-right mt-6"> x 2</p>
          <p>3000 THB</p>
        </div>
      </div>

      <p className="text-[#A7C7D7] text-lg text-right w-[700px] border-b-2 pb-3">
        Order Total : 6000 THB
      </p>
      <p className="text-[#5699F5] text-xl font-semibold w-[700px]  border-b-2 pb-3 py-3">
        STATUS : TO RECEIVE
        <FontAwesomeIcon
          icon={faTruckFast}
          className="  text-[#A7C7D7] scale-150 my-auto ml-5"
        />
      </p>
    </div>
  );
}

export default OrdersPage;
