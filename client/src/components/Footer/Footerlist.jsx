import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import apple from "../../assets/appleplaystore.png";
import android from "../../assets/androidplaystore.png";

const Footerlist = () => {
  return (
    <>
      <div className="second">
        <h3 className="text-[14px] font-brand font-medium text-white pb-5">
          Top 4 Category
        </h3>
        <ul className="space-y-6">
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Development
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Finance & Accounting
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Design
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Business
          </li>
        </ul>
      </div>
      <div className="third">
        <h3 className="text-[14px] font-brand font-medium text-white pb-5">
          Quick Links
        </h3>
        <ul className="space-y-4 flex flex-col">
          <li className="text-[14px] w-fit inline-flex gap-1 font-brand font-normal text-fivenary group relative">
            <span>About</span>
            <IoIosArrowRoundForward className="scale-x-0 origin-left size-6  text-white group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer" />
            <div className="w-full h-0.5 absolute bottom-0 left-0 scale-x-0 bg-brand origin-left group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
          </li>
          <li className="text-[14px] w-fit inline-flex gap-1 font-brand font-normal text-fivenary group relative">
            <span>Become Instructor</span>
            <IoIosArrowRoundForward className="scale-x-0 origin-left size-6  text-white group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer" />
            <div className="w-full h-0.5 absolute bottom-0 left-0 scale-x-0 bg-brand origin-left group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
          </li>
          <li className="text-[14px] w-fit inline-flex gap-1 font-brand font-normal text-fivenary group relative">
            <span>Contact</span>
            <IoIosArrowRoundForward className="scale-x-0 origin-left size-6  text-white group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer" />
            <div className="w-full h-0.5 absolute bottom-0 left-0 scale-x-0 bg-brand origin-left group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
          </li>
          <li className="text-[14px] w-fit inline-flex gap-1 font-brand font-normal text-fivenary group relative">
            <span>Career</span>
            <IoIosArrowRoundForward className="scale-x-0 origin-left size-6  text-white group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer" />
            <div className="w-full h-0.5 absolute bottom-0 left-0 scale-x-0 bg-brand origin-left group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
          </li>
        </ul>
      </div>
      <div className="fourth">
        <h3 className="text-[14px] font-brand font-medium text-white pb-5">
          Support
        </h3>
        <ul className="space-y-6">
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Help Center
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            FAQs
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Terms & Condition
          </li>
          <li className="text-[14px] font-brand fomt-normal text-fivenary">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="fivth">
        <h3 className="text-[14px] font-brand font-medium text-white pb-5">
          Downlaod our app
        </h3>
        <div className="playstore flex flex-col gap-3">
          <div className="apple">
            <img src={apple} />
          </div>
          <div className="android">
            <img src={android} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerlist;
