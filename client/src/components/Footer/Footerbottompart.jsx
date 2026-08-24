import React from "react";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import Footerlist from "./Footerlist";
import Info from "../../utils/Info";

const Footerbottompart = () => {
  return (
    <>
      <div className="bottompart flex gap-6 items-center justify-center">
        <div className="first">
          <div className="navlogo flex gap-2 ">
            <div className="navimg w-10 h-10">
              <img src={brandImage} alt="error" />
            </div>
            <Info
              item={"h1"}
              children1={"E-tutor"}
              style={{ fontSize: "32px", fontWeight: "600", color: "#fff" }}
            />
          </div>
          <div className="textpart py-5">
            <Info
              item={"p"}
              style={{
                fontSize: "14px",
                width: "400px",
                fontWeight: "400",
                color: "var(--color-fivenary)",
              }}
              children1={
                "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Done mattis odio at."
              }
            />
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
