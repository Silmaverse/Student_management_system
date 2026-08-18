import React from "react";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import apple from "../../assets/appleplaystore.png";
import android from "../../assets/androidplaystore.png";
import { FaRegCopyright } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="container">
          <div className="pt-25 pb-6">
            <div className="toppart border-b border-b-[#9b9da3 ] flex gap-34 justify-center items-center">
              <div className="left">
                <h1 className="w-134 text-[40px] font-semibold font-brand text-white">
                  Start learning with 67.1k students around the world.
                </h1>
                <div className="btn pt-7.5 pb-[100px] flex gap-4 items-center">
                  <button className="text-[16px] font-semibold font-brand w-42 h-12 bg-brand text-white">
                    Join the Family
                  </button>

                  <button className="text-[16px] font-semibold font-brand w-42 h-12 bg-footericon text-white">
                    Browse all courses
                  </button>
                </div>
              </div>
              <div className="right flex gap-6 items-center">
                <div className="txt1">
                  <h2 className="text-[40px] font-semibold font-brand text-white">
                    6.3k
                  </h2>
                  <p className="text-[16px] font-medium  font-brand text-ternary">
                    Online courses
                  </p>
                </div>
                <div className="txt2">
                  <h2 className="text-[40px] font-semibold font-brand text-white">
                    26k
                  </h2>
                  <p className="text-[16px] font-medium  font-brand text-ternary">
                    Certified Instructor
                  </p>
                </div>
                <div className="txt3">
                  <h2 className="text-[40px] font-semibold font-brand text-white">
                    99.9%
                  </h2>
                  <p className="text-[16px] font-medium  font-brand text-ternary">
                    Sucess Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottompart border-b border-b[#9b9da3] pt-20 pb-23">
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
                    Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                    Donec mattis odio at.
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
            </div>
          </div>
          <div className="lastpart flex justify-between px-8 py-6 items-center  ">
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
