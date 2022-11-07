import ribbon from "../images/ribbon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactUsPage() {
  return (
    <div className="px-16 mt-20">
      <p className="text-[#A7C7D7] text-3xl text-center">GET IN TOUCH</p>
      <img className="mx-auto mt-10" src={ribbon} />
      <div className="flex justify-around mt-20">
        <div className="w-[400px]">
          <p className="text-[#A7C7D7] text-3xl text-center">CONTACT INFO</p>
          <p className="text-[#A7C7D7] text-base mt-7 text-center">
            NATIKA WATCHARASAKSIL
          </p>
          <p className="text-[#A7C7D7] text-base mt-5 text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className=" text-[#A7C7D7] scale-125"
            />
            &nbsp;&nbsp;&nbsp;091 - 0408422
          </p>
          <p className="text-[#A7C7D7] text-base mt-5 text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className=" text-[#A7C7D7] scale-125"
            />
            &nbsp;&nbsp;&nbsp;natika.wrs@gmail.com
          </p>
        </div>
        <div className="w-[400px]">
          <p className="text-[#A7C7D7] text-3xl text-center">CAREER</p>
          <p className="text-[#A7C7D7] text-base mt-7">
            Named by our Sparkler (Sparkle member), Aspida means shield reflects
            your light; your heart will never turn dark. This 1 carat moissanite
            adjustable ring is a great alternative to diamond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
