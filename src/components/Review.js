import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import proPic from "../images/profileImg.png";

function Review({ product }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  // const [review, setReview] = useState(0);
  const stars = [0, 0, 0, 0, 0];

  const handleMouseClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseHover = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };
  return (
    <>
      <p className="border-b-2 mt-20 pb-5 text-[#A7C7D7] text-2xl">
        REVIEW FOR {product.name}
      </p>
      <p className="mt-5 text-[#A7C7D7] text-xl">REVIEWS (2)</p>

      <div className="flex w-[800px]  border-solid border-t-[2px] mt-5 pt-5 ">
        <img src={proPic} className="w-16 h-16 mr-5" />
        <div className="text-sm text-[#A7C7D7] w-[600px]">
          <p>
            <span className="text-[#5699F5]">natikawatcharasaksil</span> –
            November 6, 2022
          </p>
          <p className="mt-1">Nice and quality jew I ever had!! LOVE IT</p>
        </div>
        <div className="flex ">
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
        </div>
      </div>
      <div className="flex w-[800px]  border-solid border-t-[2px] mt-5 pt-5 ">
        <img src={proPic} className="w-16 h-16 mr-5" />
        <div className="text-sm text-[#A7C7D7] w-[600px]">
          <p>
            <span className="text-[#5699F5]">natikawatcharasaksil</span> –
            November 6, 2022
          </p>
          <p className="mt-1">The shipping is so FAST :)</p>
        </div>
        <div className="flex ">
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-[#A7C7D7] scale-100"
          />
        </div>
      </div>

      <p className="mt-10 text-[#A7C7D7] text-xl">ADD REVIEW</p>
      <textarea
        className="w-[800px] h-[200px] rounded-[5px] pl-[20px] text-[#A7C7D7] border-solid border-[#A7C7D7] border-[1px] mt-5 text-sm"
        name="review"
        type="text"
      />

      <div className="flex flex-row  gap-[5px] mt-10 w-[800px] justify-center">
        {stars.map((item, index) => (
          <FontAwesomeIcon
            onClick={() => {
              const score = index + 1;
              // setReview(score);
              handleMouseClick(index + 1);
            }}
            onMouseOver={() => handleMouseHover(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`cursor-pointer text-[30px] text-${
              (hoverValue || currentValue) > index ? "[#A7C7D7]" : "[#E2E3E4]"
            }   
            `}
            icon={faStar}
            key={index}
          />
        ))}
      </div>

      <button className="mt-10 bg-[#5699F5] text-white w-[800px] h-12 text-lg">
        SUBMIT
      </button>
    </>
  );
}

export default Review;
