import logocircle from "../images/logocircle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ScrollToBottom from "react-scroll-to-bottom";
import { Link } from "react-router-dom";

function Chatbox({ showChat, closeChat }) {
  return (
    <>
      <>
        <div
          onClick={closeChat}
          className={`flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-end   ${
            showChat ? "opacity-100 visible" : "opacity-0 invisible"
          }
            transition-all duration-700`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-auto   max-w-3xl self-end"
          >
            <div
              className={`min-w-[70px] min-h-[500px] shadow-sm relative ${
                showChat ? "left-0" : "left-[700px]"
              } flex flex-col bg-white outline-none focus:outline-none roundedt-t-xl transition-all duration-500 shadow-2xl`}
            >
              <div className="flex bg-[#A7C7D7] px-10 rounded-t-xl h-24">
                <img
                  className="rounded-full w-20 h-20 my-auto"
                  src={logocircle}
                />
                <div className="px-10 my-auto ">
                  <p className=" text-white font-medium text-lg">
                    Chat with ...
                  </p>
                  <p className=" text-white font-medium text-xl ">JEWLEVEL</p>
                </div>
                <button className="text-[30px] text-gray-400 ">
                  <FontAwesomeIcon icon={faXmark} onClick={closeChat} />
                </button>
              </div>

              <div className="flex  border-t-2 pt-5 px-10 ">
                <div className="text-sm text-[#A7C7D7]">
                  <p className="">ASTRI EAR STUDS</p>
                  <p className="mt-1">2 x 6000 THB</p>
                  <p className="mt-1">2 x 6000 THB</p>
                  <p className="mt-1">2 x 6000 THB</p>
                  <p className="mt-1">2 x 6000 THB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        // className={`    ${
        //   showChat ? "visible" : "invisible"
        // } fixed inset-0 z-40 bg-black opacity-50
        // `}
        ></div>
      </>
    </>
  );
}

export default Chatbox;
