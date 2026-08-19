import React from "react";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import Footerlist from "./Footerlist";

const Footerbottompart = () => {
  return (
    <>
      <div className="bottompart flex gap-6 items-center justify-center">
        <div className="first">
          <div className="navlogo flex gap-2 ">
            <div className="navimg w-10 h-10">
              <img src={brandImage} alt="error" />
            </div>
            <h1 className="text-[32px] font-semibold font-brand text-white">
              E-tutor
            </h1>
          </div>
          <div className="textpart py-5">
            <p className="text-[14px] w-100 font-brand font-normal text-fivenary">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
          </div>
          <div className="socialicon flex gap-4 items-center">
            <div className="w-11.5 h-11.5 bg-[#363B47] flex justify-center items-center">
              <FiFacebook className="size-6.5 text-white" />
            </div>
            <div className="w-11.5 h-11.5 bg-[#363B47] flex justify-center items-center">
              <BsInstagram className="size-6.5 text-white" />
            </div>
            <div className="w-11.5 h-11.5 bg-[#363B47] flex justify-center items-center">
              <SlSocialLinkedin className="size-6.5 text-white" />
            </div>
            <div className="w-11.5 h-11.5 bg-[#363B47] flex justify-center items-center">
              <SlSocialTwitter className="size-6.5 text-white" />
            </div>
            <div className="w-11.5 h-11.5 bg-[#363B47] flex justify-center items-center">
              <PiYoutubeLogoLight className="size-6.5 text-white" />
            </div>
          </div>
        </div>
        <Footerlist />
      </div>
    </>
  );
};

export default Footerbottompart;
