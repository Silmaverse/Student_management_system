import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FooterToppart from "./FooterToppart";
import Footerbottompart from "./Footerbottompart";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="container">
          <div className="pt-25 pb-6">
            <FooterToppart/>
          </div>
          <div className="bottompart border-b border-b[#9b9da3] pt-20 pb-23">
            <Footerbottompart/>
          </div>
          {/* footer last section copyright */}
          <div className="lastpart flex justify-between px-50 py-6 items-center  ">
            <div className="flex gap-2 items-center text-[14px] copyrighttext text-ternary font-brand font-normal">
              <FaRegCopyright />
              <p>
                2026 - Eduflex. Designed by Templatecookie. All rights reserve
              </p>
            </div>
            <div className="flex gap-4 items-center border border-ternary py-2 px-4">
              <span className="text-[16px] font-normal font-brand flex gap-8 items-center text-fournary">
                English
              </span>
              <MdOutlineKeyboardArrowDown size={25} className="text-ternary" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
